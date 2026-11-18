#!/bin/sh
# Build the site and publish dist/ to the gh-pages branch, which GitHub Pages serves.
set -e
npm run build
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -f "$(git -C .. remote get-url origin)" gh-pages
rm -rf .git
