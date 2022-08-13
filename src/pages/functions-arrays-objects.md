---
title: Typing functions, arrays and objects
layout: ../layouts/MainLayout.astro
---

## Typing Functions

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions)

### Parameter types

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#parameter-type-annotations)

We can add type annotations to function parameters using the same `name:type` syntax like we do with regular variable declarations.

Here is an example with a regular function

```ts
function sum(a: number, b: number) {
  return a + b;
}
```

Or using an arrow function

```ts
const sum = (a: number, b: number) => {
  return a + b;
};
```

### Return types

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#return-type-annotations)

We can also add an annotation for a function's return type like so

```ts
function multiply(a: number, b: number): number {
  return a * b;
}
```

Or using an arrow function

```ts
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

## Typing Arrays

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays)

An array type in Typescript can be annotated like this `someType[]`, where `someType` is the type for the elements of the array.

Here we are creating an array of strings (names)

```ts
const names: string[] = ['Swaroop', 'Devraj', 'Shridhar', 'Greeshma', 'Raj'];
```

An empty array is also valid for the above type,

```ts
const names: string[] = [];
```

> For now all the array elements are of the same type, in the future sections we will learn how to change this.

## Typing Objects

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types)

Type annotations for objects also known as key-value pairs, looks very similiar to how you might already write it.

```ts
const user: {
  firstName: string;
  lastName: string;
  bio: {
    [key: string]: string;
  };
} = {
  firstName: 'Swaroop',
  lastName: 'Rajwal',
  bio: {
    status: 'feeling happy with 69 others...',
  },
};
```

As you can see, we just replace the values for the actual property's value type.

### Optional properties

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)

An object type can also specify any property as optional by adding a `?` sign after the property name.

```ts
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
```

Because the way missing object properties work in Javascript, if a property is marked as optional then typescript will treat it as `possibly undefined`

```ts
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
}
```

### Readonly properties

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/objects.html#readonly-properties)

It is possible that you might not want to allow anyone to update a property on a object and just make it `Read only`

Its possible to do so by prefixing the property name with `readonly`

```ts
const user: {
  name: string;
  readonly id: number; // This property is read-only
} = {
  name: 'Sid',
  id: 123,
};
```

Now if we try to update the `id` property on the `user`

```ts
user.id = 456;
```

We get a a type error saying

> Cannot assign to 'id' because it is a read-only property.

## Practice

A function to get the wordcount of a sentence

```ts
function getWordCount(input, delimiter = ' ') {
  const words = input.split(delimiter);

  return words.filter((w) => w.trim()).length;
}

const count = getWordCount('Hello world learning typescript is super fun');
```

A function which converts an array into a object where is index and value is the element of the array

```ts
function createMap(elems) {
  let index = 0;
  const result = {};

  for (let elem of elems) {
    result[index] = elem;
    index++;
  }

  return result;
}

const map = createMap(['hello', 'hi', 'hey', 'hola', 'bye']);
```

A function to create a user object

```ts
function createUser({fullName, email, roles}) {
  const [firstname, lastname] = fullName.trim().split(" ")

  const user = {
    firstname,
    lastname,
    email,
    roles
    isAdmin: roles.some(r => r === "admin")
  }

  return user
}

const result = createUser({ fullName: "Sidharth Rathi", email: "sid@example.com", roles:["admin", "user"] })
```
