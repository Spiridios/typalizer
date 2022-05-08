#!/bin/sh

grep_cmd_dark="grep 'dark'"
grep_cmd_light="grep 'light'"
grep_cmd_normal="grep -vE '(dark|light)'"

grep_cmd="$grep_cmd_dark"

eval $grep_cmd bulbapedia_colors.txt | while read type_code color
do
    type=$(echo $type_code | cut -d':' -f1 | cut -d'_' -f1)
    #echo $type
    #echo $color

    echo ".${type}-Header {"
    echo "    background-color: #${color};"
    echo "}"
    echo
done