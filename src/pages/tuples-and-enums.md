---
title: Tuples and Enums Types
layout: ../layouts/MainLayout.astro
---

## Tuple Types
[*Documentation*](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

A tuple type is another sort of Array type that has a fixed length and types of the elements.

Here is what a tuple might look like

```ts
const row: [number, string, boolean] = [1, 'Sid', true];
```

As you can see a tuple explicitly defines the type of every element at any index.

If you're familiar with React's `useState` hook, then you have already been using tuples

```ts
const [name, setName] = useState(); // it returns a tuple
```


### Convert an array type to a tuple

If you have an existing array you can make use of the `const` type to convert it into a tuple

> Note that this will convert all the elements in the tuple as `readonly` so you can't modify it


