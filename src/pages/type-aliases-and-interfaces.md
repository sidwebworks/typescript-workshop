---
title: Type aliases and Interfaces
layout: ../layouts/MainLayout.astro
---

Type aliases and Interfaces are a way to organise our code, so far we have been writing inline type annotations which works fine but is not really re-usable and also makes our code hard to read.

That's where`Type aliases` and `Interfaces` come into play

## Type aliases

A type alias allows us to

- define a more meaningful name for this type
- declare the particulars of the type in a single place
- import and export this type from modules, the same as if it were an exported value

A type alias can hold any type, as it’s literally an alias (name) for a type of some sort.

**Keep in mind just like most of the typescript features `Type aliases` are also removed after the compliation step**

The syntax looks very close to how we declare regular variables, the difference being instead of `const` or `let` we use the `type` keyword to declare a type alias.

```ts
type Item = {
  id: number;
  name: string;
};

type List = Item[];

const items: List = [
  { id: 1, name: 'Ball' },
  { id: 2, name: 'Stick' },
];
```

## Aliasing function declarations

If you're using arrow functions, its possible to alias a full function declaration into a type alias

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

In the above code we create a type alias for `Todo` type and `GetTodo` which is a function type. it takes in a `id` parameter.

The return type of the function is `Promise<Todo | null>`, because our function is `async` it means that it will return a Promise that can either resolve with `null` or a `Todo`

Remember this code snippet from the `introduction` section? Haha congratulations, you've learnt enough typescript to understand such code in the wild.

## Interfaces

An interface is a way of defining an object type. They can do everything that a regular type alias can do but there is one extra feature interfaces have, **Interfaces are open** as in **open to change**

Interfaces can be understood better using the `Duck Typing` system, If something `walks` like a Duck and `quacks` like a Duck then it is a `Duck`.

```ts
interface User {
  id: number;
  name: string;
}
```

So if an object has an `id` of type number and a `name` of type string, it can be said that the object is a `User` or satisfies the `User` interface.

Unlike type aliases which can only be declared once, its possible to re-declare an inteface multiple times.

Typescript will automatically merge them together

```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: 'Sidharth',
  age: 99,
  email: 'sid@example.com',
};

interface User {
  age: number;
  email: string;
}
// No type errors :)
```

### Inheritance in Interfaces

Just as in in JavaScript, a subclass extends from a base class.
Additionally a “sub-interface” extends from a base interface

You can think of `extends` as copying all the properties of `User` interfaces onto the `Admin` interface,
any duplicate keys will be over written by the `Admin` interface.

```ts
interface Admin extends User {
  role: 'admin';
  secret: string;
}
```

### When to use which

In many situations, either a type alias or an interface would be perfectly fine, however…

- If you need to define something other than an object type (e.g. a union type), you must use a type alias
- If you need to define a type to use with the implements heritage term, it’s best to use an interface
- If you need to allow consumers of your types to augment them, you must use an interface.

## Interfaces in practice

Let's design a `Store` type, something like the `window.localStorage` api it should have 2 methods `getItem` and `setItem`.

```ts
interface Store {
  getItem(key: string): any | null;
  setItem(key: string, value: any): void;
}
```

We will also make a `saveUser` function, which will accept an object implementing the `Store` interface

```ts
type User = {
  name: string;
  email: string;
  id: number;
  roles: ('admin' | 'user')[];
};

function saveUser(user: User, storage: Store) {
  storage.setItem(String(user.id), user);
}
```
