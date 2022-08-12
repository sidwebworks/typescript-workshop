---
title: Type annotations and Inference
layout: ../layouts/MainLayout.astro
---

The two core pillars of the Typescript's type system are its **Type annotations** and **Type inference**

## Type annotations

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables)

We can use **Type annotations** to restrict the type of a value that we can assign to a variable.

_Below is the syntax breakdown of a Type annotation_

![Diagram](/static/annotation-breakdown.svg)

The point of using type annotations is to prevent referencing properties that **DON'T EXIST**.

A type annotation can be added for any **variable declaration**, **function argument** or **function return** type.

## Primitive Types

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

| Type      | Example values                        |
| --------- | ------------------------------------- |
| string    | "Sid", "Hello", "What's up"           |
| number    | .00023, -20, 400000                   |
| boolean   | true, false                           |
| any       | true, -20, "Sid", null, undefined     |
| null      | null                                  |
| undefined | undefined                             |
| void      | this function doesn't return anything |
| symbol    | Symbol("unique")                      |

> There are also `never` and `unknown` types which we will learn about in future sections.

## Literal Types

In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

Eg. a type can only accept a particular value like `"Hello"`, `123`, `true` etc.

These are known as `literal types`

```ts
let name: 'Sidharth'; // Declared it, but DID NOT ASSIGN A VALUE YET

name = 'Sid'; // Error: Type '"Sid"' is not assignable to type '"Sidharth"'
```

## typeof operator

Its very common at times that you might want to create a type annotation from an existing variable

In Javascript if we do `typeof user` it will say something like `object` but won't give any more information
about the structure of the `user` object.

However in typescript, when we do `typeof user` we can extract all the properties and types that user object has

Here is how it looks like in code,

```ts
const user = {
  name: 'Sid',
  id: 123,
};

function getName(user: typeof user): string {
  return user.name; // Works
}
```

## Type inference

[_Documentation_](https://www.typescriptlang.org/docs/handbook/type-inference.html#handbook-content)

Till now we have have been _explicitly_ defining types for variable declarations, but there is a better way.

If we declare and assign a value to a variable on the same line, we don't need to annotate the type for it.

This is because Typescript makes use of **type inference**, its a technique using which the compiler can automatically try to guess the correct type for a variable. If it fails to do so, it will fallback to the `any` type.

> This behaviour can be changed using `noImplicitAny` property in `tsconfig.json`
