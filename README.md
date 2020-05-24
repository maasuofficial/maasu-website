## MAASU

The website for the Midwest Asian Pacific Islander Desi American Students Union

## Table of Contents <a name="table-of-contents"></a>

+ [Overview](#overview)
+ [Installation](#installation)
+ [React Framework](#react-framework)
+ [Typescript](#typescript)
+ [Linting](#linting)
+ [Project Structure](#project-structure)
+ [Styling and CSS](#styling-and-css)
+ [Notes](#notes)

## Overview <a name="overview"></a>

This document summarizes a design process of the MAASU website, what softwares and tools were used, 
and any executive descisions made in regards to project structure.
The [Table of Contents](#table-of-contents) provides a summary of all relevant categories.

## Installation <a name="installation"></a>

To install all dependencies, use the [Yarn Package Manager](https://yarnpkg.com/):
```
yarn install
```
To start a development server:
```
yarn start
```
To build for production:
```
yarn build
```
The production build will be generated in a `build/` folder in the root directory.

## React Framework <a name="react-framework"></a>

This website is built using [React.js](https://reactjs.org/), a Javascript component-based web devleopment
framework. React was chosen as a framework for this website as opposed to any other framework because
of its component-based philosophy. Breaking down any software into smaller reusable components, or 
modules, allows for [greater flexibility](https://softwareengineering.stackexchange.com/questions/154228/why-is-it-good-to-split-a-program-into-multiple-classes).
It allows developers to focus on a specific piece of a project rather than understanding all pieces at once.

#### Create React App

This app in particular was created using [Create React App](https://github.com/facebook/create-react-app)
because of its ease of use. With Create React App, it's easy to quicky create a simple project with
Javascript or Typescript support without having to worry about building, public folders, and other extensions
such as CSS modules. I've built projects using only raw Javascript, React, and Webpack, and it is much easier
to begin with a lightweight boilerplate including everything you will ever need rather than beginning from
scratch.

## Typescript <a name="typescript"></a>

This project uses [Typescript](https://www.typescriptlang.org/) as its primary language for development.
Typescript is essentially a strongly-typed javscript language which transpiles into Javascript on
compile.

##### Motivation
When I first tried to learn Typescript over a year ago, I gave it up and decided it was not for me.
After all, Typescript seemed to take away the very thing that made Javascript so powerful - the ability
to change types. Why would we regress in functionality? So here's the reasoning.

Typescript catches bugs _before_ they occur. One of the greatest strengths of a compiled language like
`C` or `Java` is that they can catch type errors before runtime. An interpreted language such as Javascript
doesn't have the luxury of catch compile-time errors. So why does that matter?

Catching bugs before they occur is the whole point of software. It's the whole reason software developers
are given technical interviews and coding tests. To see how proficient you are at building a piece of
software without bugs. With a strongly typed language, you can verify that arrays don't change types
in the middle of code. Javascript allows more room for error, with arrays being able to be rewritten as
strings, and functions turning into numbers. _Typescript reduces the possibility or type errors_ by 
introducing strict typing to the wonderful syntax of Javascript.

And don't worry. If you're a long time Javascript user like me, all it takes is motivation to learn.
When I first tried to learn Typescript, I hated it and went immediately back to Javascript. But after
learning why Typescript is so powerful and taking the time to relearn it, I realized Typescript is
so much better for development than Javascript, and it's now my programming language of choice in web
development.

## Linting <a name="linting"></a>

[Eslint](https://eslint.org/docs/user-guide/getting-started) is a tool used to detect bugs before 
they have the possibility to occur in production. It does so by adhering the codebase to a specific 
set of styles. If the codebase does not follow the guidelines, it will provide warnings and errors, 
as well as instructions on how to fix such errors. It is an indirect form of static testing, and 
helps prevent code bugs before they happen.

[Prettier](https://prettier.io/) Is also a tool used for code formatting. Prettier changes code 
formatting to match a set of styling guidelines, usually on buffer save. These changes will 
usually be spacing issues and indentation.

Although these tools may seem similar in nature, they both have different purposes and are used in 
coordination to maintain a proper codebase. In essence, Prettier helps maintain formatting and code 
readability, while Eslint enforces a strict adherance to code quality and syntax decisions. 
[This summary](https://prettier.io/docs/en/comparison.html) provides a condensed description of how 
the two tools are different, and how they can be used in conjunction to improve productivity and
prevent bugs before they happen.

## Project Structure <a name="project-structure"></a>

The `src` file is organized as follows:
```
src/
  api/              - any and all api calls
  components/       - all functional, or pure, components
  containers/       - components dealing with data or store
  routes/
    routes.tsx      - manages all routes
  utils/            - any and all utility functions
  styles.scss       - all functional CSS classes, as well as theme variables
  index.tsx         - main source file which initializes store and renders DOM
```

## Styling and CSS <a name="styling-and-css"></a>

All styles are created using the core concepts of functional CSS, with only one styling file written
in [SCSS/SASS](https://sass-lang.com/). SCSS is used to be able to utilize useful tools such as better
variables, mathematical calculations, and loops. 
I simply chose [SCSS over SASS](https://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass)
because I prefer its style.

#### Motivation

With the arrival of React and other modular frontend frameworks, the concept of CSS styling is becoming 
obsolete. Now, there is no longer a need for massive CSS files containing convoluted class names and
confusing styles which conflict with each other. Instead, a new form of CSS called _Functional CSS_
is emerging. This form of styling breaks down classes into single-style classes with priority importance.
```css
.border-red {
  border-color: red !important;
}
.border-dashed {
  border-style: dashed !important;
}
.border-width-3 {
  border-width: 3px !important;
}
```
```html
<div class='border-red border-dashed border-width-3'>
  Functional CSS is a game changer!
</div>
```
If, like me, you are a long time CSS user, you may be wondering the point of it all. _"That's ridiculous!
Why would you even think of such a thing?!"_ I found myself asking the same questions. And here's the kicker.

**Functional CSS removes the CSS from the codebase.**

What do I mean by that? Imagine working on a large project. You start styling each element by theming, and then
you realize you need to refactor some code. Oh, and your boss just told you to replace this component with this
one. Where were those styles for that component... let's look in our large css file... what were the class names
again?...

I think this situation has happened to everyone, where throughout the duration of a project, your stylesheets become
more and more convoluted with random styles and strange class naming conventions to the point where it becomes nearly
impossible to effectively change styles. And then there's inheritance. You want a `div` to be `display: block` but it
just happens to be `display: inline` from its parent styles, then you need `display: block !important`, but then that
breaks the display of its children, etc, etc...

Functional CSS solves all these issues. By providing single-style classes, each style is on its own and has no direct
consequences on its parent or its children. It is _fully modular_ in that these classes and meant to be applied to 
lower level HTML components, which then are used and reused throughout the project. You'll never need to worry about
convoluted class names or large css files because **once you code a css class, you never have to change it ever again.**

[Goodbye, old CSS. Hello, functional CSS.](https://www.youtube.com/watch?reload=9&v=uHVqbCPnOwU)

## Notes <a name="notes"></a>

- [Absolute Imports](#absolute-imports)

#### Absolute Imports <a name="absolute-imports"></a>

One of the most frustrating aspects of component importing is trying to determine the correct relative
path. By using Typescript, import becomes much easier by altering the `tsconfig.json` to read directly
from the `src/` folder.
```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": [
    "src"
  ]
}
```
This makes import much easier, from:
```ts
import Header from '../../../components/header'
```
To:
```ts
import Header from 'components/header'
```
