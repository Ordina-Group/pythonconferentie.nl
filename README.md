# PythonConferentie.nl

Here's the code of the website [pythonconferentie.nl](https://pythonconferentie.nl/).

## Tech stack

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/) (SSR, overkill I know 😅)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/) (There's not much script though)
- [TailwindCSS](https://tailwindcss.com/)
- Hosted on [Azure Web Apps](https://azure.microsoft.com/en-us/services/app-service/web/)
- [Yarn](https://yarnpkg.com/) zero installs
- [Prettier](https://prettier.io/) for code formatting

## Running

This should do it all:

```bash
npm i
npm run dev
```

## Azure notes

Make sure startup script is the following in azure:

```bash
pm2 start ecosystem.config.cjs --no-daemon
```

### Releasing

Releasing is as simple as pushing to main and merging the PR created by release-please after.
