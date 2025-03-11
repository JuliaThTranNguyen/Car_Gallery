# Car Gallery

### Next.js 15 + Tailwind CSS 3 + TypeScript. Author: Hien Thuy, Tran Nguyen -TH.Julia

#### Warning: 
Next.js 15 is still in beta. Please use it with caution. Moreover, tailwindcss 4 is not compatible with Next.js 15. So, we use tailwindcss 3 in this project.

#### How did i create this project
![image](https://github.com/user-attachments/assets/2d24f9e5-8f80-407d-b31a-ae885fb3b8bb)

By default, Next 15 will automatically installed Tailwindcss 4 as the latest version. So in this case, do as this next following step:
![image](https://github.com/user-attachments/assets/9b6fad4c-ed1a-495d-ab52-c2e0cf2b2ac9)

As long as your Tailwindcss version is 3.x.x . Then everything is good to go.

#### Modify the global.css file to use tailwindcss 3

```
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

```

#### Generate the tailwindcss 3 config file

```
npx tailwindcss init -p

```

The output is as follows:
```
Created Tailwind CSS config file: tailwind.config.js
Created PostCSS config file: postcss.config.js

```

##### A/ In tailwindcss.config.js, change the content to the following:

```
// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Make sure this is included for the app directory if using Next.js 13+
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

##### B/ In postcss.config.js, change the content to the following:

```
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

##### C/ In package.json, change the content to the following:

```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/node": "18.15.11",
    "@types/react": "18.0.33",
    "@types/react-dom": "18.0.11",
    "autoprefixer": "^10.4.14",
    "eslint": "8.38.0",
    "eslint-config-next": "13.3.0",
    "next": "13.3.0",
    "postcss": "^8.4.21",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "^3.3.1",
    "typescript": "5.0.4"
  }
```

Make sure your in installed version of tailwindcss is 3.x.x

-------------------------------------------------------------------------- 


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---------------------------------------------------------------------------


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Other documentations:
[Next.js 15 documentations](https://nextjs.org/blog/next-15)
[Tailwindcss 3 documentations](https://tailwindcss.com/blog/tailwindcss-v3)
[Vercel documentations](https://vercel.com/docs)
[Rapid API I used as BE for this project](https://rapidapi.com/search/Other?sortBy=ByRelevance)
