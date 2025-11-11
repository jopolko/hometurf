#!/usr/bin/env python3
"""
Fetch Google Place IDs for all childcare centers and schools.
Uses the existing geocode-proxy.php to get Place IDs from Google Places API.
Respects rate limiting and saves progress incrementally.
"""

import json
import re
import time
import sys
import os
from urllib.parse import urlencode
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError

# Configuration
PROXY_URL = "http://localhost/hometurf/geocode-proxy.php"
RATE_LIMIT_DELAY = 36  # seconds (100 requests/hour = 1 request per 36 seconds)
BATCH_SAVE_INTERVAL = 10  # Save progress every N venues

def parse_js_data_file(filepath):
    """Parse a JavaScript data file and extract the JSON array."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the JSON array in the JavaScript file
    # Pattern: const varName = [...];
    match = re.search(r'=\s*(\[.*\])\s*;', content, re.DOTALL)
    if not match:
        raise ValueError(f"Could not find JSON array in {filepath}")

    json_str = match.group(1)
    return json.loads(json_str)

def get_place_id(name, address, retry_count=3):
    """
    Query geocode-proxy.php to get Place ID for a venue.
    Returns the Place ID or None if not found.
    """
    # Create search query with name and address
    query = f"{name} {address}"

    for attempt in range(retry_count):
        try:
            params = urlencode({'input': query})
            url = f"{PROXY_URL}?{params}"

            req = Request(url)
            req.add_header('User-Agent', 'HomeTurf Place ID Fetcher/1.0')

            with urlopen(req, timeout=10) as response:
                data = json.loads(response.read().decode('utf-8'))

            # Check for successful response
            if data.get('success') and data.get('suggestions'):
                suggestions = data['suggestions']
                if suggestions and len(suggestions) > 0:
                    # Return the first suggestion's place_id
                    place_id = suggestions[0].get('place_id')
                    if place_id:
                        return place_id

            print(f"  ⚠️  No Place ID found for: {name}")
            return None

        except HTTPError as e:
            if e.code == 429:  # Rate limit exceeded
                print(f"  ⏳ Rate limit hit, waiting 60 seconds...")
                time.sleep(60)
            else:
                print(f"  ❌ HTTP Error {e.code} for {name}: {e.reason}")
                if attempt < retry_count - 1:
                    time.sleep(5)
                else:
                    return None
        except URLError as e:
            print(f"  ❌ URL Error for {name}: {e.reason}")
            if attempt < retry_count - 1:
                time.sleep(5)
            else:
                return None
        except Exception as e:
            print(f"  ❌ Unexpected error for {name}: {str(e)}")
            if attempt < retry_count - 1:
                time.sleep(5)
            else:
                return None

    return None

def save_js_data_file(filepath, data, var_name):
    """Save data back to JavaScript file format."""
    json_str = json.dumps(data, indent=4, ensure_ascii=False)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(f"const {var_name} = {json_str};\n")

def process_venues(filepath, var_name, venue_type):
    """Process all venues in a data file and fetch Place IDs."""
    print(f"\n{'='*60}")
    print(f"Processing {venue_type}")
    print(f"{'='*60}\n")

    # Load data
    print(f"Loading {filepath}...")
    data = parse_js_data_file(filepath)
    print(f"Found {len(data)} {venue_type.lower()}\n")

    # Count how many already have Place IDs
    existing_count = sum(1 for venue in data if venue.get('placeId'))
    if existing_count > 0:
        print(f"✓ {existing_count} venues already have Place IDs\n")

    # Process each venue
    updated_count = 0
    skipped_count = 0
    failed_count = 0

    for i, venue in enumerate(data, 1):
        name = venue.get('name', 'Unknown')
        address = venue.get('address', 'Unknown')

        # Skip if already has Place ID
        if venue.get('placeId'):
            print(f"[{i}/{len(data)}] ⏭️  Skipping {name} (already has Place ID)")
            skipped_count += 1
            continue

        print(f"[{i}/{len(data)}] 🔍 Fetching Place ID for: {name}")
        print(f"           Address: {address}")

        place_id = get_place_id(name, address)

        if place_id:
            venue['placeId'] = place_id
            updated_count += 1
            print(f"           ✓ Found: {place_id}\n")
        else:
            failed_count += 1
            print(f"           ✗ Failed to find Place ID\n")

        # Save progress periodically
        if updated_count > 0 and updated_count % BATCH_SAVE_INTERVAL == 0:
            print(f"💾 Saving progress ({updated_count} new Place IDs)...")
            save_js_data_file(filepath, data, var_name)
            print(f"✓ Progress saved\n")

        # Rate limiting delay (except for last item)
        if i < len(data):
            print(f"⏳ Waiting {RATE_LIMIT_DELAY}s (rate limiting)...\n")
            time.sleep(RATE_LIMIT_DELAY)

    # Final save
    print(f"💾 Saving final results...")
    save_js_data_file(filepath, data, var_name)

    print(f"\n{'='*60}")
    print(f"{venue_type} Summary:")
    print(f"  Total venues: {len(data)}")
    print(f"  Already had Place IDs: {skipped_count}")
    print(f"  Newly added Place IDs: {updated_count}")
    print(f"  Failed: {failed_count}")
    print(f"  Final total with Place IDs: {skipped_count + updated_count}")
    print(f"{'='*60}\n")

    return updated_count + skipped_count

def main():
    """Main entry point."""
    base_dir = "/var/www/html/hometurf"

    print("\n" + "="*60)
    print("Google Place ID Fetcher for HomeTurf")
    print("="*60)
    print(f"Proxy URL: {PROXY_URL}")
    print(f"Rate limit: {RATE_LIMIT_DELAY}s between requests")
    print(f"Progress saved every {BATCH_SAVE_INTERVAL} venues")
    print("="*60)

    # Ask user which dataset to process
    print("\nWhich dataset would you like to process?")
    print("  1. Childcare centers only")
    print("  2. Schools only")
    print("  3. Both (childcare first, then schools)")

    choice = input("\nEnter choice (1-3): ").strip()

    if choice not in ['1', '2', '3']:
        print("Invalid choice. Exiting.")
        sys.exit(1)

    total_processed = 0

    try:
        if choice in ['1', '3']:
            # Process childcare centers
            childcare_file = os.path.join(base_dir, 'data-childcare.js')
            count = process_venues(childcare_file, 'childcareData', 'Childcare Centers')
            total_processed += count

        if choice in ['2', '3']:
            # Process schools
            schools_file = os.path.join(base_dir, 'data-schools.js')
            count = process_venues(schools_file, 'schoolsData', 'Schools')
            total_processed += count

        print("\n" + "="*60)
        print("✓ ALL DONE!")
        print(f"Total venues with Place IDs: {total_processed}")
        print("="*60 + "\n")

    except KeyboardInterrupt:
        print("\n\n⚠️  Interrupted by user. Progress has been saved.")
        sys.exit(0)
    except Exception as e:
        print(f"\n\n❌ Error: {str(e)}")
        sys.exit(1)

if __name__ == '__main__':
    main()
