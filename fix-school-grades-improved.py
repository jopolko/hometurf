#!/usr/bin/env python3
"""
Improved version: Fix school grade ranges with better fuzzy matching.
"""

import pandas as pd
import json
import re
from difflib import SequenceMatcher

def normalize_name(name):
    """Normalize school name for better matching"""
    # Convert to lowercase
    name = name.lower()

    # Remove common suffixes
    suffixes = [
        ' public school', ' ps',
        ' elementary school', ' es',
        ' secondary school', ' ss',
        ' catholic school', ' cs',
        ' middle school', ' ms',
        ' junior school', ' js',
        ' senior school',
        ' collegiate institute', ' ci',
        ' junior public school', ' jps',
        ' senior public school', ' sps',
        ' junior middle school',
        ' junior and senior public school',
        ' alternative school',
    ]

    for suffix in suffixes:
        name = name.replace(suffix, '')

    # Remove extra whitespace
    name = ' '.join(name.split())

    return name

def similarity(a, b):
    """Calculate similarity ratio between two strings"""
    return SequenceMatcher(None, a, b).ratio()

# Read the Excel file
print("Reading schools-contact.xlsx...")
df = pd.read_excel('schools-contact.xlsx')

# Filter for Toronto schools
toronto_boards = ['Toronto DSB', 'Toronto Catholic DSB']
toronto_schools = df[df['Board Name'].isin(toronto_boards)]

print(f"Found {len(toronto_schools)} Toronto schools")

# Create a mapping of school names to grade ranges
grade_mapping = {}
for idx, row in toronto_schools.iterrows():
    school_name = row['School Name']
    grade_range = row['Grade Range']
    school_level = row['School Level']

    if pd.notna(grade_range) and grade_range != 'No Grades Applicable':
        grade_mapping[school_name] = {
            'grade_range': str(grade_range),
            'school_level': str(school_level),
            'normalized': normalize_name(school_name)
        }

print(f"Created mapping for {len(grade_mapping)} schools with grade data")

# Read the current schools file
print("\nReading data-schools.js...")
with open('data-schools.js', 'r') as f:
    content = f.read()

start = content.find('[')
end = content.rfind(']') + 1
schools_data = json.loads(content[start:end])

print(f"Found {len(schools_data)} schools in data-schools.js")

# Update the grades field
exact_matches = 0
fuzzy_matches = 0
no_match = 0
updated_schools = []

for school in schools_data:
    school_name = school['name']
    matched = False

    # Try exact match first
    if school_name in grade_mapping:
        old_grades = school.get('grades', 'K-8')
        new_grades = grade_mapping[school_name]['grade_range']
        school['grades'] = new_grades
        if old_grades != new_grades:
            exact_matches += 1
        matched = True
    else:
        # Try fuzzy matching
        normalized_target = normalize_name(school_name)

        best_match = None
        best_score = 0

        for source_name, data in grade_mapping.items():
            score = similarity(normalized_target, data['normalized'])

            if score > best_score and score > 0.85:  # 85% similarity threshold
                best_score = score
                best_match = (source_name, data)

        if best_match:
            old_grades = school.get('grades', 'K-8')
            new_grades = best_match[1]['grade_range']
            school['grades'] = new_grades
            if old_grades != new_grades:
                fuzzy_matches += 1
                print(f"  Fuzzy match ({best_score:.2f}): {school_name} -> {best_match[0]}")
            matched = True

    if not matched:
        no_match += 1
        print(f"  No match found for: {school_name}")

    updated_schools.append(school)

print(f"\nExact matches: {exact_matches}")
print(f"Fuzzy matches: {fuzzy_matches}")
print(f"No match: {no_match}")
print(f"Total updated: {exact_matches + fuzzy_matches}")

# Write the updated data
print("\nWriting updated data-schools.js...")
with open('data-schools.js', 'w') as f:
    f.write('const schools = ')
    f.write(json.dumps(updated_schools, indent=4))
    f.write(';')

print("Done!")

# Show summary
print("\nGrade range distribution after update:")
grade_counts = {}
for school in updated_schools:
    grade = school.get('grades', 'Unknown')
    grade_counts[grade] = grade_counts.get(grade, 0) + 1

for grade in sorted(grade_counts.keys()):
    print(f"  {grade:20} : {grade_counts[grade]:3}")
