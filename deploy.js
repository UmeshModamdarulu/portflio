const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Backup original vite.config.ts
console.log('Backing up original vite.config.ts');
fs.copyFileSync('vite.config.ts', 'vite.config.ts.bak');

// Create a simplified vite.config.ts for GitHub Pages
console.log('Creating deployment vite.config.ts');
const deployConfig = `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/portflio/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@components': path.resolve(__dirname, './client/src/components'),
      '@lib': path.resolve(__dirname, './client/src/lib'),
      '@hooks': path.resolve(__dirname, './client/src/hooks'),
      '@assets': path.resolve(__dirname, './attached_assets'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
});
`;

fs.writeFileSync('vite.config.ts', deployConfig);

// Copy static files
console.log('Copying static files');
try {
  fs.mkdirSync('client/public', { recursive: true });
  fs.copyFileSync('attached_assets/UmeshmResume.pdf', 'client/public/UmeshmResume.pdf');
} catch (e) {
  console.log('Warning: Resume file copy failed, skipping');
}

try {
  fs.copyFileSync('client/src/components/ContactSection.static.tsx', 'client/src/components/ContactSection.tsx');
  fs.copyFileSync('client/src/App.static.tsx', 'client/src/App.tsx');
  fs.copyFileSync('client/src/main.static.tsx', 'client/src/main.tsx');
} catch (e) {
  console.log('Warning: Static component copy failed, skipping');
}

// Build the project
console.log('Building project');
execSync('npm run build', { stdio: 'inherit' });

// Create 404.html for SPA routing
console.log('Creating 404.html for SPA routing');
fs.copyFileSync('dist/index.html', 'dist/404.html');

// Restore original vite.config.ts
console.log('Restoring original vite.config.ts');
fs.copyFileSync('vite.config.ts.bak', 'vite.config.ts');
fs.unlinkSync('vite.config.ts.bak');

console.log('Deployment build completed successfully');
