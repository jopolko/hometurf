#!/usr/bin/env python3
import pandas as pd
import json

# Read 2016 data
df_2016 = pd.read_csv('toronto-2016.csv')

# Read 2021 data
df_2021 = pd.read_excel('toronto-2021.xlsx')

# Extract population row from 2016 data (row index 2, which is "Population, 2016")
pop_2016_row = df_2016.iloc[2]

# Extract population row from 2021 data (row index 2, which is total population)
pop_2021_row = df_2021.iloc[2]

# Get neighborhood names from 2016 (skip first 5 columns which are metadata)
neighborhoods_2016 = {}
for col in df_2016.columns[5:]:
    try:
        pop = int(str(pop_2016_row[col]).replace(',', ''))
        neighborhoods_2016[col] = pop
    except:
        pass

# Get neighborhood names from 2021
neighborhoods_2021 = {}
for col in df_2021.columns[1:]:  # Skip first column which is the characteristic name
    try:
        pop = int(pop_2021_row[col])
        neighborhoods_2021[col] = pop
    except:
        pass

# Calculate growth percentages
growth_data = {}

# Match neighborhoods and calculate growth
for name_2021, pop_2021 in neighborhoods_2021.items():
    # Try to find matching name in 2016 data
    if name_2021 in neighborhoods_2016:
        pop_2016 = neighborhoods_2016[name_2021]
        growth_pct = ((pop_2021 - pop_2016) / pop_2016) * 100
        growth_data[name_2021] = {
            'population2016': pop_2016,
            'population2021': pop_2021,
            'growth5yr': round(growth_pct, 1)
        }

# Load existing neighborhood data
with open('data-neighborhoods.js', 'r') as f:
    # Skip the first line "const neighborhoodProfiles = ["
    content = f.read()
    # Extract the JSON array
    start = content.find('[')
    end = content.rfind(']') + 1
    neighborhoods = json.loads(content[start:end])

# Add growth data to neighborhoods
for neighborhood in neighborhoods:
    name = neighborhood['name']
    if name in growth_data:
        neighborhood['population2016'] = growth_data[name]['population2016']
        neighborhood['population2021'] = growth_data[name]['population2021']
        neighborhood['growth5yr'] = growth_data[name]['growth5yr']
    else:
        # Try some name variations
        # Check for close matches
        for census_name in growth_data.keys():
            if name.lower() == census_name.lower():
                neighborhood['population2016'] = growth_data[census_name]['population2016']
                neighborhood['population2021'] = growth_data[census_name]['population2021']
                neighborhood['growth5yr'] = growth_data[census_name]['growth5yr']
                break

# Write updated data
with open('data-neighborhoods-updated.js', 'w') as f:
    f.write('const neighborhoodProfiles = ')
    f.write(json.dumps(neighborhoods, indent=4))
    f.write(';')

# Print summary
print(f"Processed {len(growth_data)} neighborhoods with growth data")
print(f"Updated {sum(1 for n in neighborhoods if 'growth5yr' in n)} neighborhoods")
print("\nSample with growth data:")
for n in neighborhoods[:3]:
    if 'growth5yr' in n:
        print(f"{n['name']}: {n['growth5yr']}% growth")
