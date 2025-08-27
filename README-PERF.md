Quick perf tips and commands

1) Fast dev with Turbopack (Next 14 supports it on many setups):

On Windows PowerShell:

```powershell
# Use turbopack-powered dev server (faster HMR)
npm run dev:turbo
```

2) If Turbopack causes problems, run dev with increased Node memory:

```powershell
npm run dev:local
```

3) Other recommendations (non-invasive):
- Enable SWC minification only for production builds (default).
- Keep `tailwind.config.mjs` globs narrow (done).
- Use VS Code to disable TypeScript/ESLint file watchers on node_modules and .next to reduce file-watch overhead.

4) If you want a bigger speed-up (build time, cold start):
- Add a small custom Webpack cache dir outside of Dropbox (or move project out of Dropbox),
- Use a local SSD if possible,
- Avoid heavy runtime code in page-level components.

