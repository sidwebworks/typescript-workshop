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

In this code we are making many assumptions, we expect `name` and `greeting` to be a string so it can be combined together and forms a full greeting. Hence we can also say that the above code **IS NOT TYPE SAFE**

But what if I passed an object instead? like this `greet({ name: "Sid" }, "Hello")`

it won't work, but Typescript can help us to catch such problems ahead of time during development.

The whole point of Typescript is to provide type safety to our code, we can think of **Type safety** as a safety net when writing code which forces us to know the type and structure of the data we are working with.

We can add type annotations to restrict what type a parameter/variable can take.

```ts
function greet(name: string, greeting: string) {
  return `${greeting}, ${name}!`;
}
```

Now if someone tries doing `greet({ name: "Sid" }, "Hello")`

Typescript will produce an type error like so

> Argument of type '{ name: string; }' is not assignable to parameter of type 'string'.

This process of analyzing our code and producing type errors is known as [**Type checking**](https://www.typescriptlang.org/docs/handbook/2/basic-types.html#static-type-checking)

#### Static vs dynamic

Sorting type systems as either static or dynamic has to do with whether type-checking is performed at compile time or runtime.

TypeScript???s type system is static.

Java, C#, C++ all fit into this category. Keep in mind that inferrence can still occur in static type systems ??? TypeScript, Scala, and Haskell all have some form of static type checking.

Dynamic type systems perform their ???type equivalence??? evaluation at runtime. JavaScript, Python, Ruby, Perl and PHP fall into this category.

**That's it, this is what the Typescript type system does.**

- Helps us to catch bugs and errors during **development**
- Uses **Type annotations** to analyze our code
- All the type information is only present during development (gets removed after build step)
- Does NOT provide any performance improvements or optimizations

![Diagram](/static/ts-compiler.svg)

## Javascript vs Typescript

Typescript is not meant to replace Javascript, infact you cannot run Typescript directly as it requires an extra build step to convert it down to regular javascript so that it can be ran into existing environments like Browsers, Node, Deno etc.

![Diagram](/static/ts-env.svg)

Here is some bit more intermediate Typescript code

**Don't sweat it**, we will understand every bit of this syntax and what it means.

```ts
type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type GetTodo = (id: number) => Promise<Todo | null>;

const getTodo: GetTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  const data = await res.json();

  if (res.ok) {
    return data;
  }

  return null;
};
```

After the TSC (Typescript compiler) will convert this code to Javascript this is what we will get,

```js
const getTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  if (res.ok) {
    return data;
  }
  return null;
};
```

Notice that all of the "Type annotation" stuff is removed because its not valid Javascript which can be ran.
