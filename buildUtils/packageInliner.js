#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Read package.json
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const dependencies = packageJson.dependencies || {};

// Root directory
const rootDir = process.cwd();

// Process each dependency
Object.keys(dependencies).forEach(packageName => {
  const packageDir = path.join(rootDir, 'node_modules', packageName);
  const targetDir = path.join(rootDir, packageName);

  // Check if package directory exists in node_modules
  if (!fs.existsSync(packageDir)) {
    console.warn(`Package directory not found: ${packageDir}`);
    return;
  }

  // Create target folder if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Recursively copy .js and .ts files
  copyFiles(packageDir, targetDir, packageName);
});

console.log('Package inlining complete!');

/**
 * Recursively copy .js and .ts files from source to target,
 * rewriting bare import specifiers to relative paths.
 */
function copyFiles(sourceDir, targetDir, packageName) {
  const files = fs.readdirSync(sourceDir);

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    const stat = fs.statSync(sourcePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      if (!fs.existsSync(targetPath)) {
        fs.mkdirSync(targetPath, { recursive: true });
      }
      copyFiles(sourcePath, targetPath, packageName);
    } else if (file.endsWith('.js') || file.endsWith('.ts')) {
      // Read the file content
      let content = fs.readFileSync(sourcePath, 'utf8');

      // Rewrite bare import specifiers
      content = rewriteImports(content, targetPath, rootDir);

      // Write to target
      fs.writeFileSync(targetPath, content, 'utf8');
    }
  });
}

/**
 * Rewrite bare import specifiers to relative paths.
 * Handles both import statements and dynamic imports.
 */
function rewriteImports(content, filePath, rootDir) {
  const fileDir = path.dirname(filePath);
  const relativeDepth = fileDir
    .slice(rootDir.length)
    .split(path.sep)
    .filter(p => p.length > 0)
    .length - 1; // -1 because we're already in a package folder

  // Calculate how many ../ we need
  const prefix = relativeDepth > 0 ? '../'.repeat(relativeDepth) : '../';

  // Match import statements and dynamic imports
  // Pattern: import ... from 'bare-specifier' or await import('bare-specifier')
  const importRegex = /(['"`])((?:import|from|import\s*\()\s*['"`])([a-zA-Z][a-zA-Z0-9_.-]*(?:\/[^'"`]+)?)\1/g;

  // More precise regex for different import types
  // 1. import { ... } from 'specifier'
  // 2. import 'specifier'
  // 3. import('specifier')
  // 4. export ... from 'specifier'

  content = content.replace(
    /(?:from|import\s*\()\s*['"`]([a-zA-Z][a-zA-Z0-9_.-]*(?:\/[^'"`]+)?)["`']/g,
    (match, specifier) => {
      // Check if it's a bare specifier (starts with alphanumeric)
      if (/^[a-zA-Z]/.test(specifier)) {
        // Replace with relative path
        return match.replace(specifier, prefix + specifier);
      }
      return match;
    }
  );

  return content;
}
