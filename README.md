# Team Profile Generator

![GitHub repo size](https://img.shields.io/github/repo-size/brentocracy/team-profile-generator?style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/brentocracy/team-profile-generator?color=red&style=flat-square) 

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-00B2FF?style=for-the-badge&logo=bootstrap&logoColor=white)

## TABLE OF CONTENTS
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Technologies](#contribution)
  5. [General Info](#general)
  6. [Testing](#testing)
  7. [License](#license)
  8. [About](#about)

## Description

Fill out some command prompts over a few minutes and be given a beautiful-looking team profile page! A perfect application for someone who needs to spin up an organized employee list with necessary information. A CSS stylesheet is included for aesthetics, but the stylesheet is also fully customizable if the user so desires to style the page him or herself.

### This project can be found:

- [GitHub Repository](https://github.com/brentocracy/team-profile-generator)

---

## Installation

Go to the [repository](https://github.com/brentocracy/team-profile-generator) and ``` git clone ``` it (forking is up to you). In order to run the application to generate your page, make sure you install the following dependencies.

#### *Inquirer*
`npm install inquirer` for all prompts.

#### *Chalk*
`npm install chalk` for console styling.

#### *Email Validator*
`npm install email-validator` for email validation prompt.

#### *Jest*
`npm install jest`, then go to your `package.json` file and change the test attribute to jest. Then add the capacity for coverage when testing. It should look like this:
```c
    "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage"
  },
```

Imports are included in the code as such:

```c
    const inquirer = require('inquirer');
    const validator = require('node-email-validation');
    const chalk = require('chalk');
    const fs = require('fs');
```
---

## Usage

---

## Technologies

> The following were used in this project:

- `HTML`
- `CSS`
- `Bootstrap`
- `JavaScript`
- `Node.js`
- `Git`
- Coded in `VS Code`

---

## General

### User Prompting

### Team Profile Page Generation

## Contribution

Anyone is welcome to `clone` or `fork` and submit `pull` requests from the repository. Collaboration is fun.

---

## Testing

---

## About

Brent is a Full-Stack Web Developer committed to building fun and efficient projects.

I'm always available for collaboration, constructive criticism, and pleasantries.

Kindly reach out at <worldsbestbrent@gmail.com>!


