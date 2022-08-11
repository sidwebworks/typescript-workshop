---
title: Introduction to Typescript
layout: ../layouts/MainLayout.astro
---

Let's start by breaking the ice and discuss some basic things around typescript and how it helps us. This section will also help to prepare a good mental model for understanding typescript and how to use it.

## What the hell is Typescript?

![Diagram](/static/ts-js-pie.svg)

Many resources define Typescript as _a super-set of Javascript, which adds on a type system on top of existing Javascript language which helps to catch errors and bugs during development._

**But this definition might not the easiest to understand, let's break it down**

You can think of Typescript as just writing plain old Javascript, like this

```js
function greet(name, greeting) {
  return `${greeting}, ${name}!`;
}
```

In this code we are making many assumptions, we expect `name` and `greeting` to be a string so it can be combined together and forms a full greeting.

But what if I passed an object instead? like this `greeting({ name: "Sid" }, "Hello")`

it won't work, but Typescript can help us to catch such problems ahead of time during development.

We can add type annotations based on what argument can accept what type

```ts
function greet(name: string, greeting: string) {
  return `${greeting}, ${name}!`;
}
```

Now if someone tries doing `greeting({ name: "Sid" }, "Hello")`

Typescript will produce an type error like so

> Argument of type '{ name: string; }' is not assignable to parameter of type 'string'.

This process of analyzing our code and producing type errors is known as **Type checking**

**That's it, this is what the Typescript Type system does.**

- Helps us to catch bugs and errors during **development**
- Uses **Type annotations** to analyze our code
- Only works during development (Gets removed in production code)
- Does NOT provide any performance improvements or optimizations

## Javascript vs Typescript

![Diagram](/static/ts-env.svg)

Typescript is not meant to replace Javascript, infact you cannot run Typescript directly as it requires an extra build step to convert it down to regular javascript so that it can be ran into existing environments like Browsers, Node, Deno etc.

Here is some bit more intermediate Typescript code

**Don't sweat it**, we will understand every bit of this syntax and what it means.

```ts
type Token = {
  id: string;
  expiry: number;
  type: 'authorization' | 'authentication';
  provider: 'google' | 'facebook' | 'discord';
};

type GetTokens = (id: string) => Promise<Record<string, Token>>;

const getTokens: GetTokens = async (userId) => {
  const res = await fetch(`https://my-app/users/${userId}/tokens`);

  const tokens = await res.json();

  return tokens;
};
```

![Diagram](/static/ts-compiler.svg)

After the TSC (Typescript compiler) will convert this code to Javascript this is what we will get,

```js
'use strict';
const getTokens = async (userId) => {
  const res = await fetch(`https://my-app/users/${userId}/tokens`);
  const tokens = await res.json();
  return tokens;
};
```

Notice that all of the "Type annotation" stuff is removed because its not valid Javascript which can be ran.