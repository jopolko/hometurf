#!/usr/bin/env python3
"""
Fix school grade ranges by reading from the original Excel source data.
This script updates the data-schools.js file with accurate grade ranges.
"""

import pandas as pd
import json
import re

# Read the Excel file with school contact information
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

    # Clean up the grade range
    if pd.notna(grade_range) and grade_range != 'No Grades Applicable':
        grade_mapping[school_name] = {
            'grade_range': str(grade_range),
            'school_level': str(school_level)
        }

print(f"Created mapping for {len(grade_mapping)} schools with grade data")

# Read the current schools data file
print("\nReading data-schools.js...")
with open('data-schools.js', 'r') as f:
    content = f.read()

# Extract the JSON array
start = content.find('[')
end = content.rfind(']') + 1
schools_data = json.loads(content[start:end])

print(f"Found {len(schools_data)} schools in data-schools.js")

# Update the grades field
matches = 0
no_match = 0
updated_schools = []

for school in schools_data:
    school_name = school['name']

    # Try to find exact match
    if school_name in grade_mapping:
        old_grades = school.get('grades', 'K-8')
        new_grades = grade_mapping[school_name]['grade_range']
        school['grades'] = new_grades
        if old_grades != new_grades:
            matches += 1
        updated_schools.append(school)
    else:
        # Try fuzzy matching - remove common suffixes and variations
        found = False
        # Remove common school type suffixes
        clean_name = school_name
        for suffix in [' Public School', ' PS', ' Elementary School', ' ES',
                      ' Secondary School', ' SS', ' Catholic School', ' CS',
                      ' Middle School', ' MS', ' Junior School', ' JS',
                      ' Senior School', ' Collegiate Institute', ' CI',
                      ' Junior Public School', ' JPS']:
            clean_name = clean_name.replace(suffix, '')

        # Try to find in mapping
        for source_name, data in grade_mapping.items():
            source_clean = source_name
            for suffix in [' Public School', ' PS', ' Elementary School', ' ES',
                          ' Secondary School', ' SS', ' Catholic School', ' CS',
                          ' Middle School', ' MS', ' Junior School', ' JS',
                          ' Senior School', ' Collegiate Institute', ' CI',
                          ' Junior Public School', ' JPS']:
                source_clean = source_clean.replace(suffix, '')

            if clean_name.lower() == source_clean.lower():
                old_grades = school.get('grades', 'K-8')
                new_grades = data['grade_range']
                school['grades'] = new_grades
                if old_grades != new_grades:
                    matches += 1
                found = True
                break

        if not found:
            no_match += 1
            print(f"  No match found for: {school_name}")

        updated_schools.append(school)

print(f"\nUpdated {matches} schools with new grade ranges")
print(f"No match found for {no_match} schools")

# Write the updated data
print("\nWriting updated data-schools.js...")
with open('data-schools.js', 'w') as f:
    f.write('const schools = ')
    f.write(json.dumps(updated_schools, indent=4))
    f.write(';')

print("Done!")

# Show summary of grade ranges after update
print("\nGrade range distribution after update:")
grade_counts = {}
for school in updated_schools:
    grade = school.get('grades', 'Unknown')
    grade_counts[grade] = grade_counts.get(grade, 0) + 1

for grade in sorted(grade_counts.keys()):
    print(f"  {grade:20} : {grade_counts[grade]:3}")
