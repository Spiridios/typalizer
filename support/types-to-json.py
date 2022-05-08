#!/usr/bin/env python3

import csv
import json
from functools import cmp_to_key

#file_name = 'Gen VI.txt'
#file_name = 'Gen II-V.txt'
file_name = 'Gen I.txt'

type_order = {}
type_idx = 0
for poke_type in "Normal	Fire	Water	Electric	Grass	Ice	Fighting	Poison	Ground	Flying	Psychic	Bug	Rock	Ghost	Dragon	Dark	Steel	Fairy".split():
    type_order[poke_type] = type_idx
    type_idx += 1

#print(type_order)
type_data = []

with open(file_name) as csvfile:
    reader = csv.reader(csvfile, delimiter='\t')

    csv_itr = reader.__iter__()
    first_row = csv_itr.__next__()
    for row in csv_itr:
        row_data = {"name": row[0].strip(), "immunes":[], "weaknesses":[], "strengths":[]}
        for i in range(1, len(first_row)):
            strength = row[i][0:1]
            if strength == '0':
                row_data["immunes"].append(first_row[i].strip())
            elif strength == '2':
                row_data["strengths"].append(first_row[i].strip())
            elif strength == '½':
                row_data["weaknesses"].append(first_row[i].strip())

        type_data.append(row_data)

type_data.sort(key=lambda x: type_order[x["name"]])
type_json = json.dumps(type_data)
type_json = type_json.replace('}, {"name"', '},\n{"name"')
print(type_json)
