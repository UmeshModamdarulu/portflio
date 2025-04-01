# Deploying Your Portfolio to GitHub Pages

I've prepared all the necessary files for deploying your portfolio to GitHub Pages. Here's how to do it:

## Step 1: Download your code
- Go to the Files tab in Replit
- Click on the three dots (...) at the top of the file tree
- Select "Download as zip"
- Extract the zip file on your computer

## Step 2: Create a GitHub repository
- Go to [GitHub](https://github.com) and sign in
- Click on the "+" button in the top right corner and select "New repository"
- Name your repository (e.g., "portfolio")
- Choose "Public" visibility
- Click "Create repository"

## Step 3: Push your code to GitHub
- Open a terminal/command prompt in your extracted project folder
- Initialize git and push to your new repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/portfolio.git
git push -u origin main
```

Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username.

## Step 4: Deploy using GitHub Actions (Automated)

I've already created a GitHub Actions workflow file (`.github/workflows/deploy.yml`) that will automatically build and deploy your site whenever you push to the main branch.

1. Go to your repository on GitHub
2. Click on the "Actions" tab
3. You should see the "Deploy to GitHub Pages" workflow running
4. Wait for it to complete (this might take a few minutes)

## Step 5: Configure GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings"
3. In the left sidebar, click on "Pages"
4. Under "Source", select "Deploy from a branch"
5. Select the "gh-pages" branch and the "/ (root)" folder
6. Click "Save"

Your portfolio will be available at: `https://<YOUR_GITHUB_USERNAME>.github.io/portfolio/`

## What's included for GitHub Pages compatibility

I've created several special files to make your portfolio work on GitHub Pages without a backend:

1. **Static API implementation**: `client/src/lib/staticApi.ts`
   - Uses local storage to save contact form submissions
   - Provides a static URL for downloading your resume

2. **Static component versions**:
   - `client/src/App.static.tsx` - The main app component with routing
   - `client/src/main.static.tsx` - The entry point file
   - `client/src/components/ContactSection.static.tsx` - The static contact form that stores submissions in localStorage

3. **Deployment scripts**:
   - `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment
   - `deploy.sh` - Manual deployment script if you prefer to deploy yourself

4. **Resume in public folder**:
   - I've copied your resume to `client/public/UmeshmResume.pdf` so it can be directly accessed in the static build

### Explanation of the Static Implementation

In the static version of your portfolio:

1. The contact form saves submissions to the browser's localStorage instead of sending them to a backend server.
2. The resume download button links directly to the PDF file instead of making an API request.
3. The GitHub Actions workflow automatically sets up these changes during the build process.

These modifications allow your portfolio to work perfectly on GitHub Pages, which only supports static hosting (no server-side code).

## Manual Deployment Option

If you prefer to deploy manually:

1. Make the deploy script executable:
   ```bash
   chmod +x deploy.sh
   ```

2. Edit the `deploy.sh` file and replace `<USERNAME>` and `<REPO>` with your GitHub username and repository name

3. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

This script automatically:
- Substitutes the static versions of your components
- Builds the project
- Initializes a git repository in the build folder
- Pushes the build to the gh-pages branch
- Restores your original files

## Updating Your Portfolio

To update your portfolio after making changes:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```

2. The GitHub Actions workflow will automatically rebuild and redeploy your site

## Using a Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your DNS provider and add a CNAME record pointing to `<YOUR_GITHUB_USERNAME>.github.io`
2. In your GitHub repository, go to Settings > Pages
3. Under "Custom domain", enter your domain name
4. Click "Save"
5. Check "Enforce HTTPS" once your certificate is issued