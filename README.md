# Supabase Edge Function Typescript

Supabase Edge Function Typescript
<br/>
To check the code required for the exam: go to > supabase > functions > profile >students
 
## Best Practices Applied
1. Project Structure
2. Code Style (ESLint & Prettier)
3. Testing (E2E Testing and Unit Testing)

## ⚒ How to Install

Clone the repo:

```bash
$ git clone --depth 1 git@github.com:ratribiana/supabase-typescript.git
$ cd supabase-typescript
```

Install dependencies:
```bash
$ npm install
```

Make sure to have `.env` and fill in the values using the values I sent through email/indeed.

go to > supabase > functions > profile > students > .env
```sh
SUPABASE_URL=
SUPABASE_KEY=
```

go to > .env
```sh
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests and E2E Test with [Jest](https://jestjs.io/)

```sh
npm run test:unit
```

### Run Linting

```sh
npm run lint
```

### Run Type Check

```sh
npm run type-check
```

### Run Prettier formatter

```sh
npm run format
```

### Run Supabase 

```sh
npm run supabase -- <options>
```