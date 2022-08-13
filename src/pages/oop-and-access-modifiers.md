---
title: OOP and Access modifiers
layout: ../layouts/MainLayout.astro
---

## Classes

Even though Javascript doesn't really have a concept of REAL classes like `Java` or `C#`, its nothing but some extra syntax sugar over JS `constructor` functions

However TypeScript classes add some powerful and important features on top of traditional JavaScript classes. Things like `access modifiers`, `class fields` and more.

Let's create a simple `Car` class in JS first,and assign some properties in the `constructor` like `brand`, `model` and `year`. Then create a new instance of `Car`

```ts
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}
```

```ts
const car = new Car('audi', 'r8', 2007);

car.toggleHeadlights();
```

If we try doing something like, `car.toggleHeadlights()` this will cause an error because `toggleHeadlights` doesn't exist on the `Car` class

Now let's re-write it in Typescript,

```ts
class Car {
  brand: string;
  model: string;
  year: number;
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const car = new Car('audi', 'r8', 2007);

car.toggleHeadlights();
// Type error, Property 'toggleHeadlights' does not exist on type 'Car'.
```

Much better but the syntax is very verbose and we are repeating ourselves alot, luckily typescript has something to fix this called `access modifiers`

First let's use them and then understand what they are

```ts
class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}
}

const car = new Car('audi', 'r8', 2007);

car.toggleHeadlights();
// Type error, Property 'toggleHeadlights' does not exist on type 'Car'.
```

Much cleaner now, let's understand what this `public` keyword does

## Access modifiers

TypeScript provides three access modifier keywords, which can be used with class fields and methods, to describe who should be able to see and use them.

#### Keyword who can access

- **public** everyone (this is the default)
- **protected** the instance itself, and subclasses
- **private** only the instance itself

> Access modifiers are only a typescript feature, *THEY DO NOT PROVIDE ANY SECURITY improvements*.
