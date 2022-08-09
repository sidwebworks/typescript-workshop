---
title: Setting up typescript
layout: ../layouts/MainLayout.astro
---

In this workshop I will be primiarily using Typescript in [Node JS](https://nodejs.org/en/) which requires a bit of installed softwares and tooling to work properly.

However as a student you don't have to worry about all this, you will still see me setting it up from scratch just for learning purposes but all the hands on excersises and examples that you will do will be done using an online [typescript playground](https://www.typescriptlang.org/play)

## Local installation

### Software requirements

- Node JS
- NPM
- Editor

Check if Node JS and npm is installed on your machine using these commands

```bash
node -v
```

```bash
npm -v
```

_(both of them should print a version number)_

To install typescript globally on our machine we can run

```sh
npm install -g typescript
```

### Running typescript file

You can run the code using:
```bash
# Transpiles the file to javascript.
$ tsc file.ts
# Run the file using node.
$ node file.js
```
