---
title: Type annotations and Aliases
layout: ../layouts/MainLayout.astro
---

The two core pillars of the Typescript type system are **Type annotations** and **Type inference**

## Type annotations

We can use **Type annotations** to restrict the type of a value that we can assign to a variable.

_Below is the syntax breakdown of a Type annotation_

![Diagram](/static/annotation-breakdown.svg)

The point of using type annotations is to prevent referencing properties that **DON'T EXIST**.

A type annotation can be added for any **variable declaration**, **function argument** or **function return**

[_Docs Reference_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)

## Primitives Types

| Type      | Example values                        |
| --------- | ------------------------------------- |
| string    | "Sid", "Hello", "What's up"           |
| number    | .00023, -20, 400000                   |
| boolean   | true, false                           |
| any       | true, -20, "Sid", null, undefined     |
| null      | null                                  |
| undefined | undefined                             |
| void      | this function doesn't return anything |

[_Docs Reference_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Type inference

Till now we have have been _explicitly_ defining types for variable declarations, but there is a better way.

If we declare and assign a value to a variable on the same line, we don't need to annotate the type for it.

The is because Typescript makes use of **type inference**, its a technique using which the compiler can automatically try to guess the correct type for a variable. If it fails to do so, it will fallback to `any` type.

> This behaviour can be changed using `noImplicitAny` property in `tsconfig.json`
