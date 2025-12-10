# Puffy Mock Test — Local Run & GitHub Upload

This project is a Vite + React app. The instructions below show how to run it locally, build a production bundle, and upload the repository to your GitHub account.

**Prerequisites**
- Node.js (recommended v18+)
- npm (comes with Node)
- Git
- Optional: GitHub CLI (`gh`) for one-command repo creation

**1) Install dependencies**
Open PowerShell in the project root (where `package.json` lives) and run:
```powershell
npm install
```

**2) Start development server (hot reload)**
```powershell
npm run dev
```
Open the URL printed by Vite (usually `http://localhost:5173`) in your browser.

**3) Build & preview production bundle**
```powershell
npm run build
npm run preview
```
`build` creates a `dist` folder; `preview` serves that folder so you can test production behavior locally.

**4) Environment variables (optional)**
If the app requires env vars (for example `GEMINI_API_KEY`), create a `.env.local` in the project root and add variables like:
```text
GEMINI_API_KEY=your_api_key_here
```
Make sure `.env.local` is listed in `.gitignore` (it will be after the next step).

**5) Prepare the repository for GitHub**
I will initialize a local git repo and create an initial commit. To publish to GitHub you can either use the GitHub CLI or create the remote repo on the website and push manually.

Recommended repo name: `puffy-mock-test` (you can choose another).

Option A — Create & push using GitHub CLI (`gh`):
```powershell
# login (if not already authenticated)
gh auth login
# create repo under your account and push current folder
gh repo create signupwithanand/puffy-mock-test --public --source=. --remote=origin --push
```

Option B — Manual (create repo on GitHub website):
1. Go to `https://github.com/signupwithanand` and click **New repository**.
2. Name it `puffy-mock-test` (or any name you prefer).
3. Follow the instructions GitHub shows — then run these commands in PowerShell:
```powershell
git remote add origin https://github.com/signupwithanand/puffy-mock-test.git
git branch -M main
git push -u origin main
```

Option C — Push with SSH (if you have SSH keys):
```powershell
git remote add origin git@github.com:signupwithanand/puffy-mock-test.git
git branch -M main
git push -u origin main
```

**6) Additional notes**
- If `git commit` fails because `user.name` / `user.email` are not set, set them locally:
```powershell
git config user.name "signupwithanand"
git config user.email "signupwithanand@users.noreply.github.com"
```
- After pushing, your project will be available at `https://github.com/signupwithanand/puffy-mock-test` (if public).
- To update the repo later:
```powershell
git add .
git commit -m "Describe changes"
git push
```

---

If you want, I can now initialize the local git repo here, make the initial commit, and give you the exact commands to run to push to GitHub (or run the `gh` flow if you authorize it). Tell me whether you want me to:

- initialize and commit locally only, or
- initialize, commit, and try to create & push the repo using `gh` (requires your interactive login), or
- just provide step-by-step commands and walk you through the GitHub web UI.
