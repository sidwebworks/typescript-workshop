---
title: Introduction
layout: ../layouts/MainLayout.astro
---

Let's start by breaking the ice and discuss some basic things around typescript and how it helps us. This section will also help to prepare a good mental model for understanding typescript and how to use it.

## What the hell is Typescript?

![Diagram](/static/ts-js-pie.svg)

Typescript is a super-set of Javascript, which adds on a robust type system on top of existing Javascript features and syntax which helps to catch errors and bugs during development and also helps to provide automatic documentation of your code.

## Javascript vs Typescript

Typescript is not meant to replace Javascript, infact you cannot run Typescript directly as it requires an extra build step to transpile it down to regular javascript so that it can be ran into existing environments like Browsers, Node, Deno etc.

Here is some Typescript code, **don't sweat it**.

We will understand every bit of this syntax and what it means.

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
