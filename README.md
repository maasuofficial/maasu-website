# MAASU

The website for the Midwest Asian Pacific Islander Desi American Students Union

# Table of Contents <a name="table-of-contents"></a>

+ [Overview](#overview)
+ [Linting](#linting)
+ [React Framework](#react-framework)
+ [Project Structure](#project-structure)

# Overview <a name="overview"></a>

This document summarizes a design process of the MAASU website, what softwares and tools were used, 
and any executive descisions made in regards to project structure.
The [Table of Contents](#table-of-contents) provides a summary of all relevant categories.


# Linting <a name="linting"></a>

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

# React Framework <a name="react-framework"></a>

This website is built using [React.js](https://reactjs.org/), a Javascript component-based web devleopment
framework. React was chosen as a framework for this website as opposed to any other framework because
of its component-based philosophy. Breaking down any software into smaller reusable components, or 
modules, allows for [greater flexibility](https://softwareengineering.stackexchange.com/questions/154228/why-is-it-good-to-split-a-program-into-multiple-classes).
It allows developers to focus on a specific piece of a project rather than understanding all pieces at once.

# Project Structure <a name="project-structure"></a>

The `src` file is organized as follows:
```
src/
  api/ - any and all api calls
  components/ - all functional, or pure, components
  containers/ - components dealing with data or store
  routes/
    routes.tsx - manages all routes
  utils/ - any and all utility functions
  index.tsx - main source file which initializes store and renders DOM
```

