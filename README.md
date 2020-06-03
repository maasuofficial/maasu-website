# MAASU

The website for the Midwest Asian Pacific Islander Desi American Students Union

**Production** 

[![Netlify Production Status](https://api.netlify.com/api/v1/badges/97f4cbd7-bf40-4abc-af37-6ffd64a9d99f/deploy-status)](https://app.netlify.com/sites/maasu-production/deploys)

**Staging** 

[![Netlify Staging Status](https://api.netlify.com/api/v1/badges/04501a98-4092-4e51-8024-6181df043a0b/deploy-status)](https://app.netlify.com/sites/maasu-master-staging/deploys)

## Table of Contents <a name="table-of-contents"></a>

+ [Overview](#overview)
+ [Installation](#installation)
+ [Workflow](#workflow)
+ [React Framework](#react-framework)
+ [Typescript](#typescript)
+ [Linting](#linting)
+ [Project Structure](#project-structure)
+ [Styling and CSS](#styling-and-css)
+ [Testing](#testing)
+ [Notes](#notes)

## Overview <a name="overview"></a>

This document summarizes a design process of the MAASU website, what softwares and tools were used, 
and any executive descisions made in regards to project structure.
The [Table of Contents](#table-of-contents) provides a summary of all relevant categories.

## Installation <a name="installation"></a>

To install all dependencies, use the [Yarn Package Manager](https://yarnpkg.com/):
```
yarn

- or -

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

### Why Yarn?

Yarn is faster to install dependencies than most its primary competitor `npm` because 
it concurrently downloads packages. Yarn's dependency lock versions are placed in a
`yarn.lock` rather than a confusing `package-lock.json`. In terms of security, `npm`
allows installed dependencies to execute code, a large security vulnerability in any
project.

On the user-friendly front, `yarn` has simpler and more intuitive commands than `npm`. Below is a
comparison of commonly used commands where `yarn` makes things easier.

| command | `yarn` | `npm` |
| --- | --- | --- |
| install | `yarn` | `npm install`/`npm i` |
| testing | `yarn test` | `npm run test` |
| build | `yarn build` | `npm run build` |
| custom {script} | `yarn script` | `npm run script` |

## Workflow <a name="workflow"></a>

In this repository, there are two main branches: `staging` and `master`, corresponding to the `staging` and `production` environments, respectively. With the integration of [Netlify](https://www.netlify.com/) as a hosting service, any pushed commits to these branches will immediately trigger builds in production. For this reason, I have made the `master` branch to not allow unsigned commits to be pushed for safety and security measures.

All other branches are `feature` branches, where each branch will contain some type of feature or bugfix. These changes are then merged into `staging. To put these changes into production, create a pull request to merge the staging branch into `master`. While there are many ways to merge branches, this is the safest way because creating a Github pull request makes an explicit statement regarding the changes to be made on the public website. These can also be detailed and labeled for future reference. After the changes have been merged into `master`, they will automatically be deployed into production.

Pull requests should be labeled with the labels provided and a list of significant changes should be detailed in the request body. Once approved, the requested commits will be squash merged into `master` to reduce the amount of commits.

Utilizing `git` and `github`:

1. Check out the staging branch, and verify it is up to date with the latest changes in production. 
```
g checkout staging
g pull origin master
```
2. Make your changes to the `staging` branch, whether through a feature branch or manually.
3. Commit those changes.
```
git commit -m "commit title"
```
4. Pull the latest updates from `master`, fixing any conflicts, then push to Github.
```
git pull origin master
git push
```
5. Create a PR to merge into `master`.
6. Merge changes into `master`.
7. Delete any feature branches created.
```
git push origin --delete my-feature-name
```

For a basic idea of workflow:

`feature branch`/`staging` &rightarrow; `pull request` &rightarrow; `master`

## React Framework <a name="react-framework"></a>

This website is built using [React.js](https://reactjs.org/), a Javascript component-based web devleopment
framework. React was chosen as a framework for this website as opposed to any other framework because
of its component-based philosophy. Breaking down any software into smaller reusable components, or 
modules, allows for [greater flexibility](https://softwareengineering.stackexchange.com/questions/154228/why-is-it-good-to-split-a-program-into-multiple-classes).
It allows developers to focus on a specific piece of a project rather than understanding all pieces at once.

### Create React App

This app in particular was created using [Create React App](https://github.com/facebook/create-react-app)
because of its ease of use. With Create React App, it's easy to quicky create a simple project with
Javascript or Typescript support without having to worry about building, public folders, and other extensions
such as CSS modules. I've built projects using only raw Javascript, React, and Webpack, and it is much easier
to begin with a lightweight boilerplate including everything you will ever need rather than beginning from
scratch.

The reason most web developers are moving from older systems such as `Django` and `Rails` is that with tools
such as `Create React App` and `Webpack` is for its static-site generation capabilities. Instead of running
an interpreter or a Python cgi-bin script on some web server, tools like `Create React App` make it possible
to build sites in Typescript and compile all sources files into pure HTML, CSS, and Javascript. This makes
the final production code [lightweight, minified, and fast](https://github.com/facebook/create-react-app#npm-run-build-or-yarn-build).

## Typescript <a name="typescript"></a>

This project uses [Typescript](https://www.typescriptlang.org/) as its primary language for development.
Typescript is essentially a strongly-typed javscript language which transpiles into Javascript on
compile.

### Motivation
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
  components/       - all functional, or pure, components concerned with UI
  constants/        - all constants, strings, etc
  containers/       - components dealing with data or store
  css/              - any and all styling
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

### Motivation

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

## Testing <a name="testing"></a>

Testing is one of the most important aspects of software development. It ensures confidence that the software you run
will not produce any issues or errors in production. This project focuses on a few different types of testing strategies:

### Unit/Integration Tests: [Jest](https://jestjs.io/en/)

Jest is a fantastic Javascript/Typescript/Babel testing library that can be extended to perform a number of different
tasks such as test watching, coverage, and DOM environment testing. It is easy to write tests and mocks, and even simpler
to structure tests or run certain subsets of tests.

These tests become especially important with the introduction of components in React's framework, and it becomes extremely
important to test each component used in coordination with other components.

### End-to-End (e2e) Tests: [Cypress](https://www.cypress.io/)

Cypress is an end-to-end testing framework which comes built with assertion libraries, mocks, stubs, and more. It is very
user-friendly and can be used to test browser-specific features. The syntax is very clean and easy to use and get started.

### Static Tests: Typescript/Eslint

Typescript automatically tests data and variables types at compile time, preventing bugs. Eslint also contributes by 
checking styling and formatting to catch any overlooked errors introduced through poor code styling.

### A/B Tests: Board Members

This project is built and pushed to a staging server before the code is finally put into production, allowing current MAASU
ECC board members to monitor and test any new additions or features.

## Notes <a name="notes"></a>

- [Absolute Imports](#absolute-imports)

### Absolute Imports <a name="absolute-imports"></a>

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

