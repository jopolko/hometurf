#!/usr/bin/env python3
"""
Final version: Fix school grade ranges with automated + manual matching.
"""

import pandas as pd
import json
from difflib import SequenceMatcher

def normalize_name(name):
    """Normalize school name for better matching"""
    name = name.lower()
    suffixes = [
        ' public school', ' ps', ' elementary school', ' es',
        ' secondary school', ' ss', ' catholic school', ' cs',
        ' middle school', ' ms', ' junior school', ' js',
        ' senior school', ' collegiate institute', ' ci',
        ' junior public school', ' jps', ' senior public school', ' sps',
        ' junior middle school', ' junior and senior public school',
        ' alternative school',
    ]
    for suffix in suffixes:
        name = name.replace(suffix, '')
    return ' '.join(name.split())

def similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()

# Read manual mapping
print("Loading manual mapping...")
with open('school-grade-manual-mapping.json', 'r') as f:
    manual_mapping = json.load(f)

# Read the Excel file
print("Reading schools-contact.xlsx...")
df = pd.read_excel('schools-contact.xlsx')
toronto_boards = ['Toronto DSB', 'Toronto Catholic DSB']
toronto_schools = df[df['Board Name'].isin(toronto_boards)]

# Create automated mapping
grade_mapping = {}
for idx, row in toronto_schools.iterrows():
    school_name = row['School Name']
    grade_range = row['Grade Range']

    if pd.notna(grade_range) and grade_range != 'No Grades Applicable':
        grade_mapping[school_name] = {
            'grade_range': str(grade_range),
            'normalized': normalize_name(school_name)
        }

# Read current schools file
print("Reading data-schools.js...")
with open('data-schools.js', 'r') as f:
    content = f.read()
start = content.find('[')
end = content.rfind(']') + 1
schools_data = json.loads(content[start:end])

# Update grades
exact_matches = 0
fuzzy_matches = 0
manual_matches = 0
no_match = 0

for school in schools_data:
    school_name = school['name']
    old_grades = school.get('grades', 'K-8')
    new_grades = None

    # 1. Check manual mapping first
    if school_name in manual_mapping:
        new_grades = manual_mapping[school_name]
        if old_grades != new_grades:
            manual_matches += 1

    # 2. Try exact match
    elif school_name in grade_mapping:
        new_grades = grade_mapping[school_name]['grade_range']
        if old_grades != new_grades:
            exact_matches += 1

    # 3. Try fuzzy match
    else:
        normalized_target = normalize_name(school_name)
        best_match = None
        best_score = 0

        for source_name, data in grade_mapping.items():
            score = similarity(normalized_target, data['normalized'])
            if score > best_score and score > 0.85:
                best_score = score
                best_match = (source_name, data)

        if best_match:
            new_grades = best_match[1]['grade_range']
            if old_grades != new_grades:
                fuzzy_matches += 1

    if new_grades:
        school['grades'] = new_grades
    else:
        no_match += 1
        print(f"  Still no match: {school_name} (keeping {old_grades})")

print(f"\nMatching statistics:")
print(f"  Exact matches:  {exact_matches}")
print(f"  Fuzzy matches:  {fuzzy_matches}")
print(f"  Manual matches: {manual_matches}")
print(f"  No match:       {no_match}")
print(f"  Total updated:  {exact_matches + fuzzy_matches + manual_matches}")

# Write updated data
print("\nWriting updated data-schools.js...")
with open('data-schools.js', 'w') as f:
    f.write('const schools = ')
    f.write(json.dumps(schools_data, indent=4))
    f.write(';')

# Show grade distribution
print("\nGrade range distribution:")
grade_counts = {}
for school in schools_data:
    grade = school.get('grades', 'Unknown')
    grade_counts[grade] = grade_counts.get(grade, 0) + 1

for grade in sorted(grade_counts.keys()):
    print(f"  {grade:20} : {grade_counts[grade]:3}")

print("\nDone!")
