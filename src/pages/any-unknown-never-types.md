---
title: Any, unknown and never types
layout: ../layouts/MainLayout.astro
---

Typescript's has 3 types called `any`, `unknown` and `never`, each of them have their own usecases which we will learn in
this section.

## any

By default if you don't annotate a variable type and Typescript can't automatically infer it then typescript implicitly falls back to the `any` type.

We can think of `any` as telling the compiler that hey `Accept any type for this value, I don't really care`.

Even though it really defeats the purpose of using Typescript, it can be sometimes handy when you are migrating an exsting
javascript codebase to Typescript.

```ts
let thing: any = 'This is a string';

thing = 1234567;

thing = {
  name: 'Haha this also works',
};

thing = [123, '123'];

// I hope you got the point
```

## unknown

`unknown` is a more typesafe version of the `any` type, both are useful when you don't know the type for the data.

Think of `unknown` as telling the compiler,

**Just let this varible pass without checking its type, I promise I won't interact with it directly without checking it**

Let's add see code to elaborate this further

```ts
function countElements(items: unknown[]): number {
  let count = 0;

  items.forEach(() => {
    count++;
  });

  return count;
}

const count = countElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(count); // 10
```

As you can see, the `countElements` function never interacts with the elements of the array which are `unknown`
thus explaining the line _"I promise I won't interact with it directly without checking it"_

However if we try to read something from the `item`

```ts
items.forEach((item) => {
  console.log(item.something);
  // Type error Object is of type 'unknown'.
  count++;
});
```

`unknown` is generally used when you don't really care about the type of something but also don't interact with it directly (without any type guard or extra check).

## never

`never` is one of the most confusing types to understand when starting out, I like to think of `never` as something that can _never_ happen.

I know that sounds weird, let's look at a few examples

### A function that never returns

TypeScript will infer never as return type if the function never returns / throws error.

```ts
function work() {
  throw new Error('Ahh shit');
}

function infinity() {
  while (true) {} // Don't do this lol!
}
```

### A type that is impossible to exist

TypeScript will use a never type to represent a type that is impossible to exist.

```ts
const thing: string & number = 123; // This is not possible
```

> Type error: Type 'number' is not assignable to type 'never'.

The never type is assignable to every type but, no type is assignable to never (except never itself).

### never in unions

If a `never` type is present inside a union, typescript will automatically omit it

```ts
const thing: string | number | never = 123;

// `thing` will become string | number
```
