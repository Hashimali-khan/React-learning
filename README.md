# React Learning Repo

This repository contains multiple small React projects that you are building while learning React.

## Folder structure

- `project0/` – Basic React + Vite starter app.
- `project1/` – Another React + Vite project (cards/components, layout practice, etc.).
- `project2/` – (Add when created) Multi-page style layout with sections/components.
- `useState/` – Practice with React hooks, especially `useState`.
- `firstUI/` – Any early UI experiments or extra small projects.
- `package.json` (root) – Shared dependencies/tools for the whole learning workspace.

## How to run a project

From the repo root:

1. Install dependencies (only once per project, when needed):
   - `cd project0` (or `project1`, `useState`, etc.)
   - `npm install`
2. Start the dev server:
   - `npm run dev`
3. Open the shown URL in your browser (usually `http://localhost:5173`).

## What to push to GitHub

You should commit:

- All `src/` and `public/` folders in each project.
- All `package.json`, `package-lock.json`, `vite.config.js`, `eslint.config.js`, `index.html`, and `README.md` files.

You should NOT commit (already ignored by `.gitignore`):

- `node_modules/`
- `dist/` and `dist-ssr/`
- `.env*` files
- Editor/OS files like `.vscode/`, `.idea/`, `.DS_Store`, etc.

## Notes for future you

- When you create a new learning project, put it in its own folder (like `project3/`) and add a short description for it in this README.
- Use branches or commits to mark learning milestones (e.g. "finished useState lesson").
