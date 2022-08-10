export const SITE = {
  title: 'Understanding Typescript',
  description: 'Companion website for the typescript workshop.',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: '`https://github.com/sidwebworks/typescript-workshop/',
    alt: 'Understanding Typescript',
  },
  twitter: 'sidwebworks',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
export const GITHUB_EDIT_URL = `https://github.com/sidwebworks/typescript-workshop/blob/master/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
export const COMMUNITY_INVITE_URL = `https://discord.gg/596bVyXJcQ`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: 'Welcome to the workshop', link: 'welcome' },
    { text: 'Workshop content - Day 1', header: true },
    { text: 'Introduction', link: 'introduction' },
    { text: 'Setting up Typescript', link: 'setting-up-typescript' },
    {
      text: 'Type annotations and inference',
      link: 'type-annotations-and-inference',
    },
    {
      text: 'Functions, Arrays and objects',
      link: 'functions-arrays-objects',
    },
    { text: 'Tuples and Enums', link: 'tuples-and-enums' },
    { text: 'Unions and Intersections', link: 'unions-and-intersections' },
    { text: 'Any, unknown and never', link: 'any-unknown-never-types' },
    {
      text: 'Type aliases and Interfaces',
      link: 'type-aliases-and-interfaces',
    },
    {
      text: 'Read only Types and const',
      link: 'read-only-types-and-generic-constrains',
    },
    {
      text: 'Understanding type narrowing',
      link: 'understanding-type-narrowing',
    },
    { text: 'Workshop content - Day 2', header: true },
    { text: 'OOP and Access modifiers', link: 'oop-and-access-modifiers' },
    {
      text: 'Generics, constrains and Utility types',
      link: 'generics-and-utility-types',
    },

    {
      text: 'Mapped and Conditional Types',
      link: 'mapped-and-conditional-types',
    },
    { text: 'Template literal types', link: 'template-literal-types' },
    {
      text: 'Custom Type guards and assertions',
      link: 'custom-type-guards-and-assertions',
    },
    { text: 'Type challenges', link: 'type-challenges' },
  ],
};
