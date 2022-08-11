---
title: Setting up typescript
layout: ../layouts/MainLayout.astro
---

In this workshop I will be primiarily using Typescript locally which requires Node JS installed on your machine to work.

However as a student you don't have to worry about all this, you will still learn how to set it up from scratch but all the hands on excersises and examples that you will do will be done using an online [typescript playground](https://www.typescriptlang.org/play)

## Local installation

### Installing Node JS

You Download Node JS from [Here](https://nodejs.org/en/download/)

To check if Node JS and npm is installed on your machine using these commands

```bash
node -v
```

```bash
npm -v
```

_(both of them should print a version number)_

### Installing Typescript

We can install typescript globally on our machine using npm

```sh
npm install -g typescript
```

> If you are on mac or linux you might have to add `sudo` when doing a global npm install

To check if Typescript is installed run

```bash
tsc -v
```

## Creating a `tsconfig.json` file

**TSC** stands for [Typescript compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

Inside a Typescript project the compiler will look for a `tsconfig.json` file
which contains the settings for the project.

To quickly create a `tsconfig.json` file we can run

```bash
tsc --init
```

## Configuring TSC

We can adjust the compiler's settings like `strictness`, `target`, `input` and much more from the `tsconfig.json` file

There are A LOT of options which will take forever to cover but this is a good starter point, generally its a good idea to keep it as strict as possible.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "exclude": ["node_modules"],
  "include": ["./src/**/*.ts"]
}
```

[_Documentation_](https://www.typescriptlang.org/tsconfig) for the `tsconfig.json` file with explainations on what each option does

## Running typescript files

You can run a typescript (.ts) file using the `tsc` command:

**Transpiles the file to javascript**

```bash
tsc file.ts
```

**Runs the file using node**

```
node file.js
```

### Combining both steps into one

There are different tools, like `ts-node`, `ts-node-dev`, `tsx`, etc which take care of transpiling Typescript to javascript and executing it in one go.

My favourite tool is [TSX](https://github.com/esbuild-kit/tsx)

So that's what I will suggest you use, we can install and run it like so

```bash
npm install -g tsx
```

```bash
tsx ./script.ts
```
