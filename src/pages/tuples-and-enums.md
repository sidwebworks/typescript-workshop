---
title: Tuples and Enums Types
layout: ../layouts/MainLayout.astro
---

## Tuple Types

[_Documentation_](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

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

```ts
const values = ['One', 2, false, 'Two'] as const;
```

> Note that this will convert all the elements in the tuple as `readonly` so you can't modify it

## Enums

[_Documentation_](https://www.typescriptlang.org/docs/handbook/enums.html)

Enums in typescript are very close to regular objects, so much so after compliation they're converted into a regular object with the same keys and values as the original enum.

The main goal of using enums is to group similiar key value pairs together to signal other developers that they're closely related values.

Here is how an `enum` looks like

```ts
enum KeyCodes {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}
```

After compilation this enum will get converted into something like this

```js
var KeyCodes;
(function (KeyCodes) {
  KeyCodes['Up'] = 'up';
  KeyCodes['Down'] = 'down';
  KeyCodes['Left'] = 'left';
  KeyCodes['Right'] = 'right';
})(KeyCodes || (KeyCodes = {}));
```

Enums can used as type annotations inside other functions and types like so

```ts
function move(key: KeyCodes) {
  switch (key) {
    case KeyCodes.Up:
      console.log('Moving Up');
    case KeyCodes.Down:
      console.log('Moving Down');
    case KeyCodes.Left:
      console.log('Moving Left');
    case KeyCodes.Right:
      console.log('Moving Right');
  }
}

move(KeyCodes.Up); // Works
```

If we try passing the values of the enum directly like `move("up")`

Typescript will raise a type error saying

> Argument of type '"up"' is not assignable to parameter of type 'KeyCodes'.

If we create an Enum without any values, something like this

```ts
enum KeyCodes {
  Up,
  Down,
  Left,
  Right,
}
```

They will be treated as regular number values instead, same as doing

```ts
enum KeyCodes {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}
```
