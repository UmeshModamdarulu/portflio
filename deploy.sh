#!/usr/bin/env sh

# abort on errors
set -e

# Make directory for build files
mkdir -p dist

# Ensure resume is in public directory
cp attached_assets/UmeshmResume.pdf client/public/

# Backup original files
cp client/src/App.tsx client/src/App.original.tsx
cp client/src/main.tsx client/src/main.original.tsx
cp client/src/components/ContactSection.tsx client/src/components/ContactSection.original.tsx

# Replace with static versions
cp client/src/App.static.tsx client/src/App.tsx
cp client/src/main.static.tsx client/src/main.tsx
cp client/src/components/ContactSection.static.tsx client/src/components/ContactSection.tsx

# Set base path for GitHub Pages in a temporary file
echo "{ \"base\": \"./\" }" > vite.config.json

# Build
npm run build

# Restore original files
cp client/src/App.original.tsx client/src/App.tsx
cp client/src/main.original.tsx client/src/main.tsx
cp client/src/components/ContactSection.original.tsx client/src/components/ContactSection.tsx
rm client/src/App.original.tsx
rm client/src/main.original.tsx
rm client/src/components/ContactSection.original.tsx
rm vite.config.json

# Navigate into the build output directory
cd dist

# If you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# If you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# If you are deploying to https://<USERNAME>.github.io/<REPO>
# Replace <USERNAME> and <REPO> with your GitHub username and repository name
git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -