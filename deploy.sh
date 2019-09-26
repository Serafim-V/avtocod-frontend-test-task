#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "init"

git push -f https://github.com/Serafim-V/serafim-v.github.io.git master

cd -
