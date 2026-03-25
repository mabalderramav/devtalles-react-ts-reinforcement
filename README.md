![TypeScript reinforcement project icon](./public/favicon.svg)

# TypeScript Reinforcement Before React

Small learning project built with **Vite + TypeScript** to practice the fundamentals of TypeScript before starting with **React**.

This repository is not meant to be a production app. It is a **sandbox for exercises**, examples, and small experiments that help build a stronger foundation before moving to components, props, hooks, and state management in React.

## What this project covers

This practice workspace currently includes examples for:

- variables with `let` and `const`
- template strings
- object literals and interfaces
- arrays and cloning values
- typed functions
- object destructuring
- array destructuring
- imports and exports
- enums
- promises
- `fetch` requests
- `async` / `await`
- typed API responses with interfaces

## Current lesson map

The examples are located in `src/bases/`:

| File | Topic |
| --- | --- |
| `01-const-let.ts` | Basic variables and string composition |
| `02-template-string.ts` | Template literals and interpolation |
| `03-object-literal.ts` | Object literals, nested objects, and interfaces |
| `04-arrays.ts` | Arrays, spread operator, and `structuredClone` |
| `05-functions.ts` | Typed functions and arrow functions |
| `06-obj-destructuring.ts` | Object destructuring and typed function arguments |
| `07-array-destructuring.ts` | Array destructuring and tuple-like returns |
| `08-imp-exp.ts` | Imports, exports, hero helpers, and `Owner` enum usage |
| `09-promises.ts` | Promise creation and error handling |
| `10-fetch-api.ts` | Fetching data from the Giphy API |
| `11-async-await.ts` | Async/await with typed API responses |

## Supporting data files

The project also includes reusable data and types in `src/data/`:

- `heroes.data.ts`: hero dataset and `Hero` interface
- `owner.ts`: `Owner` enum (`Marvel` and `DC`)
- `giphy.response.ts`: interfaces for the Giphy random GIF API response

## How it works

The file `src/main.ts` is the project entry point.

From there, you can import one lesson at a time to run it in the browser. Right now, the active example is:

- `src/bases/11-async-await.ts`

If you want to test another lesson, comment the current import and enable the lesson you want to practice.

## Project structure

```text
src/
├─ bases/
│  ├─ 01-const-let.ts
│  ├─ 02-template-string.ts
│  ├─ 03-object-literal.ts
│  ├─ 04-arrays.ts
│  ├─ 05-functions.ts
│  ├─ 06-obj-destructuring.ts
│  ├─ 07-array-destructuring.ts
│  ├─ 08-imp-exp.ts
│  ├─ 09-promises.ts
│  ├─ 10-fetch-api.ts
│  └─ 11-async-await.ts
├─ data/
│  ├─ giphy.response.ts
│  ├─ heroes.data.ts
│  └─ owner.ts
├─ main.ts
└─ style.css
```

## Available scripts

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Recommended learning flow

1. Start with the files in order from `01` to `11`.
2. Read the example code and run it.
3. Change values, types, and function parameters.
4. Check the browser output and the developer console.
5. Move to the next lesson once the current concept feels clear.

## Notes

- Some lessons print results in the console.
- Other lessons also interact with the DOM, such as the Giphy examples.
- The project uses modern TypeScript with ES modules through Vite.

## Goal before React

The purpose of this repository is simple:

> Learn TypeScript first, then start React with better confidence.

Once these exercises feel comfortable, the next step is to move into React with a much stronger understanding of typed JavaScript, imports/exports, async code, and reusable interfaces.
