---
title: Unions and Intersection Types
layout: ../layouts/MainLayout.astro
---

Till now we have been working with only single type annotations, but code in the real world can be much more complex as in
we can accept variables which can have more than just one type.

That's where **Union types** come into the picture.

## Union types

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

### Discriminated Unions

Let's say we got a `user` paramater which is an object type, if the user's `role` NOT `admin`
then we will throw an error saying "User is not allowed to access this resource"

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
