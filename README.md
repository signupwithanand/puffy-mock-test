# Puffy Mock Test — Run Locally

This project is a Vite + React application. The instructions below explain how to run the app on your local machine.

**Prerequisites**
- Node.js (recommended v18+)
- npm (bundled with Node)

**Quick checks (optional)**
Check Node and npm versions:
```powershell
node -v
npm -v
```

1) Install dependencies
Open PowerShell in the project root (where `package.json` is) and run:
```powershell
npm install
```

2) Environment variables (optional)
If the app needs environment variables (for example `GEMINI_API_KEY`), create a file named `.env.local` in the project root and add values like:
```text
GEMINI_API_KEY=your_api_key_here
```
Make sure `.env.local` is listed in `.gitignore` so you don't accidentally commit secrets.

3) Start the development server (hot reload)
```powershell
npm run dev
```
Vite will print a local URL (commonly `http://localhost:5173`). Open that address in your browser to view the app.

4) Build and preview production output
To create an optimized production bundle:
```powershell
npm run build
```
To preview the built output locally:
```powershell
npm run preview
```
`build` writes files to `dist/`; `preview` serves those files so you can verify production behavior.

5) Common troubleshooting
- If `npm run dev` fails with a port-in-use error, either stop the other process or run Vite on a different port:
```powershell
npm run dev -- --port 5174
```
- If you see syntax or TypeScript errors, check the terminal output and open the file referenced to fix the issue.
- If Node is too old, upgrade to a recent LTS (v18+).

6) Helpful commands
- Install only production deps (CI): `npm ci`
- Clean and reinstall: `rm -r node_modules; npm install` (or on PowerShell: `Remove-Item -Recurse node_modules; npm install`)
- Check for vulnerabilities: `npm audit`