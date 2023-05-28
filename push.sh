#! /bin/bash
#push to github

git add -A 
git commit -m "maj"
git push origin main

if [ -n "$1" ]
then
    if [ $1 = "archive" ]
    then
        npm run build
    fi
fi