#!/bin/bash

# usage:
#  create types.txt, which is a list of pokemon types, one per line
# ./get-bulbapedia-colors.sh | tee bulbapedia-colors.txt

get_color() {
    curl -s "$1" | grep -oE '<b>.*<\/b>' | grep -oE '[A-Z0-9]{6}'
}

cat types.txt | while read type
do
    base_url="https://bulbapedia.bulbagarden.net/wiki/Template:${type}_color"
    color=$(get_color $base_url)
    echo "$type: $color"
    color=$(get_color ${base_url}_dark)
    echo "${type}_dark: $color"
    color=$(get_color ${base_url}_light)
    echo "${type}_light: $color"
done
