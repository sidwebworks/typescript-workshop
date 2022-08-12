---
title: Unions and Intersection Types
layout: ../layouts/MainLayout.astro
---

Unions and Intersection types can be thought of as `AND` and `OR` operators in most programming languages,

![Diagram](https://www.typescript-training.com/static/a1f71546ccdea12ccbc62e7643b6aaa1/2bef9/venn.png)

## Union types

Till now we have been working with only single type annotations, but code in the real world can be much more complex as in
we can accept variables which can have more than just one type.

That's where **Union types** come into the picture.

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)

A union type is identical to the Javsacript `OR` operator also known as the pipe `|` sign. Its a way to provide multiple types that can be assigned to a value.

Let's look at a code example,

```ts
function printId(id: string | number) {
  console.log(`ID is: ${id}`);
}

printId(100); // Works

printId('101'); // This also works

printId({ id: 999 }); // Type error
// Argument of type '{ myID: number; }' is
// not assignable to parameter of type 'string | number'
```

We can read this annotation as saying, "parameter `id` can be either a `string` or a `number`".

### Unions with Arrays

If an array has elements of different types, example some are `string` where as some are `number` or `boolean`
we can use a union type to annotate for all 3 of them

```ts
const elements: (string | number | boolean)[] = ['Sid', 123, true];
```

Unlike `tuples` these are WON'T be in strict order,
every individual element will have a type of `string | number | boolean`

### Type Narrowing

Let's say we have a function `requireAccess` that checks if a user is admin, if it is not it throws an
error saying `User is not allowed to access this resource`

But if it is a admin, it prints out the `secret` property on the user which IS ONLY present on admin role

```ts
function requireAccess(
  user:
    | { name: string; role: 'user' }
    | { name: string; role: 'admin'; secret: string }
) {
  if (user.role === 'admin') {
    console.log(`Hi ${user.name}, your role is ${user.role}`);
    console.log(`Access granted using: ${user.secret}`);
    // We can safely access .secret on the user
  }

  throw new Error(`User is not allowed to access this resource`);
}
```

We can add an `if` statement to see if `user.role === 'admin'`, if `role` is `admin` then typescript will narrow down the union like so

```ts
{ name: string; role: 'user' } | { name: string; role: 'admin'; secret: string }

// Narrows it down to

{ name: string; role: 'admin'; secret: string }
```

**I suggest reading this section on [type narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) to explore different ways to narrow down types**

### Discriminated Unions

Suppose we have some code which may or may not return a `user` object, in this case the return type of the
`getUserInfo` is union of 2 tuple types.

```ts
function flipCoin(): 'heads' | 'tails' {
  if (Math.random() > 0.5) return 'heads';
  return 'tails';
}

function getUserInfo():
  | ['error', Error]
  | ['success', { name: string; email: string }] {
  if (flipCoin() === 'heads') {
    return ['success', { name: 'John doe', email: 'john@example.com' }];
  } else {
    return ['error', new Error('The coin landed on TAILS :(')];
  }
}
```

If we run this like so, typescript will automatically understand the relationship between the 2 types in the union

```ts
const result = getUserInfo();

if (result[0] === 'error') {
  console.log(`Error: ${result[1].message}`);
} else {
  // Typescript automatically
  console.log(`Success: ${result.name}, ${resul.email}`);
}
```

## Intersection Types

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)

Intersection types are denoted using the `&` operator and can be understood as the `&&` (AND) operator in Javascript

Its used to combine 2 object types together forming a new one, which will contain the properties from both types.

Here is how it looks in code,

```ts
function createWeek(): Date & { end: Date } {
  const start = new Date();
  const end = new Date();

  end.setDate(start.getDate() + 7);

  return Object.assign(start, { end });
}
```

We are assigning a new property called `end` on the `start` Date object and because we used an intersection return type

We can safely do this,

```ts
const week = createWeek();

week.end.getDate(); // works
```
