import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.resolve(__dirname);
const destDir = path.resolve(srcDir, "dist-prod");

console.log("Building project...");
execSync("npm run build", { stdio: "inherit", cwd: srcDir });

console.log("Creating standalone production folder...");
if (fs.existsSync(destDir)) {
  fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir, { recursive: true });

// Copy dist folder
console.log("Copying dist folder...");
fs.cpSync(path.resolve(srcDir, "dist"), path.resolve(destDir, "dist"), { recursive: true });

// Copy server-runner.js
console.log("Copying server-runner.js...");
fs.copyFileSync(
  path.resolve(srcDir, "server-runner.js"),
  path.resolve(destDir, "server-runner.js"),
);

// Read original package.json
console.log("Generating production package.json...");
const pkgJsonPath = path.resolve(srcDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));

// Prepare production package.json
const prodPkg = {
  name: pkg.name + "-prod",
  version: pkg.version || "1.0.0",
  private: true,
  type: "module",
  scripts: {
    start: "node server-runner.js",
  },
  dependencies: {},
};

// Filter out devDependencies and keep only build-essential dependencies
const excludedDeps = [
  "@tailwindcss/vite",
  "@capacitor/android",
  "@capacitor/core",
  "@tanstack/router-plugin",
  "tailwindcss",
];

for (const [dep, version] of Object.entries(pkg.dependencies || {})) {
  if (!excludedDeps.includes(dep)) {
    prodPkg.dependencies[dep] = version;
  }
}

fs.writeFileSync(path.resolve(destDir, "package.json"), JSON.stringify(prodPkg, null, 2), "utf8");

console.log("Installing production dependencies...");
execSync("npm install --omit=dev", { stdio: "inherit", cwd: destDir });

// Create a production README
const readmeContent = `# ${pkg.name || "App"} (Production Standalone)

This folder contains the compiled production build of the application.

## How to run

\`\`\`bash
npm start
\`\`\`

The package command installs the production dependencies into this folder, so the
entire \`dist-prod\` directory can be copied to a Node.js web server.

The server runs on http://localhost:3000 by default. Configure it with the PORT
environment variable.
`;

fs.writeFileSync(path.resolve(destDir, "README.md"), readmeContent, "utf8");

console.log(`\nSuccess! Standalone production folder created at:\n  ${destDir}\n`);
