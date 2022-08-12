---
title: Type aliases and Interfaces
layout: ../layouts/MainLayout.astro
---

Type aliases and Interfaces are a way to organise our code, so far we have been writing inline type annotations which works fine but is not really re-usable and also makes our code hard to read.

That's where`Type aliases` and `Interfaces` come into play

## Type aliases

A type alias is just another name for a type declaration they can be re-used, exported and imported like a regular JS module.

**Keep in mind just like most of the typescript features `Type aliases` are also removed after the compliation step**

The syntax looks very close to how we declare regular variables, the difference being instead of `const/let` we use the `type` keyword to declare a type alias.

```ts
type Name = string;

const name: Name = 'Sid';
```
