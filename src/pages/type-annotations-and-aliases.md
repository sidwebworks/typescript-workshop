---
title: Type annotations and Aliases
layout: ../layouts/MainLayout.astro
---

In typescript, we can specify the type of variables, function parameters, and Object properties, we can even
create our own as we will see later in this workshop.

The point of adding types is to have type safety, and helps to make the code be more readable.

_Note: You can use [typescript playground](https://www.typescriptlang.org/play) to write typescript_

## Type Annotations

We have primitive types in typescript, like number, boolean, string, object and array.

### Variables

This is how to create a variable using primitive types:

```typescript
const id: number = 0100100101;
const username: string = 'user';
const isUser: boolean = true;
```

Of course if you want to you can create a variable and assign to it a value at a later time:

```typescript
let Name: string;

// Later
Name = 'bob';
```

And as we said typescript will not build if there is an error due to type mismatch.

```typescript
let Name: string;
Name = 1; // Error, as type 'number' is not assignable to type 'string'
```

Of course, you don't always have to supply a type, as typescript can infer the type from assigned value.

```typescript
const Name = 'Bob';
console.log(typeof Name) // outputs string
let num = 23;
console.log(typeof num) // outputs number, num = 23
num = 1; // Works, num = 1
num = 'string'; // Error
```

### Functions

In typescript, you can annotate the function parameters and its return type, like so:

```typescript
function functionName(param: type): returnType { // Logic }

// Example:
function sum(x: number, y: number): number {
    return x + y;
}

const num: number = sum(5, 6);
const num: number = sum("string", 6); // Error
const str: string = sum(5, 6); // Error

function numberToString(num: number): string {
  return num; // Error as number is not string!
  // correct way of doing it
  return num.toString();
}
```

This is an example for more readable code using typescript and JS.

##### JavaScript

```javascript
function getLastLetter(param) {
  return param.charAt(param.length - 1);
}
let num = 23;
num = getLastLetter('Bob'); // Works
```

##### Typescript

```typescript
function getLastLetter(param: string): string {
  return param.charAt(param.length - 1);
}
let num = 23; // num type here is number
num = getLastLetter('Bob'); // Error
```

### Aliases

You can create your own types, using `type`

```typescript
type mine = string;
let val: mine; // Val is of type mine, which is string 
val = 'Str'; 
val = 23; // Error
```

This helps us create complex types, as we will see in the upcoming workshops,
it also helps our code be more readable.

```typescript
type ID = number;
const userId: ID = 01000100;
```
