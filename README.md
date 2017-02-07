#spacename

Namespace your type constants.

[![license](http://img.shields.io/npm/l/spacename.svg?style=flat)](https://www.npmjs.com/package/spacename)
[![version](http://img.shields.io/npm/v/spacename.svg?style=flat)](https://www.npmjs.com/package/spacename)
[![downloads](http://img.shields.io/npm/dm/spacename.svg?style=flat)](https://www.npmjs.com/package/spacename)

## Usage

Install:
```sh
npm install --save spacename
```

Define:

```js
import define from `spacename`;

const ns = define('auth');

export const LOGGED_IN = ns('LOGGED_IN'); // auth/LOGGED_IN
export const LOGGED_OUT = ns('LOGGED_OUT'); // auth/LOGGED_OUT

```

Works great with [babel-plugin-filenamespace](https://www.npmjs.com/package/babel-plugin-filenamespace):

```js
// .babelrc
{
  "plugins": [
    [
      "filenamespace",
      {
        "root": "src",
      }
    ]
  ]
}

```

```js
// src/action/auth.js
import define from `spacename`;

const ns = define(__filenamespace);

export const LOGGED_IN = ns('LOGGED_IN'); // action/auth/LOGGED_IN
export const LOGGED_OUT = ns('LOGGED_OUT'); // action/auth/LOGGED_OUT

```
