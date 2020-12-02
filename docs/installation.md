---
id: installation
title: Installation
sidebar_label: Installation
---

**mailgo** is on <a href="https://www.npmjs.com/package/mailgo">npm</a> / <a href="https://yarnpkg.com/en/package/mailgo">yarn</a>, you can add it to any webpage with a CDN like unpkg or jsDelivr, downloading the script or through npm/yarn.

<img class="img-left" alt="mailgo on npm" src="https://img.shields.io/npm/v/mailgo.svg?color=%23bb342f&style=flat-square" />

<img class="img-left" alt="mailgo npm bundle size" src="https://img.shields.io/bundlephobia/minzip/mailgo.svg?color=%23477998&style=flat-square" />

## script in html

### body

Add at the end of the `<body>`

```html
<body>
  ...
  <script src="https://unpkg.com/mailgo@0.11.2/dist/mailgo.min.js"></script>
</body>
```

### head

Alternatively, you can import mailgo in `<head>` using `defer`

```html
<head>
  ...
  <script
    src="https://unpkg.com/mailgo@0.11.2/dist/mailgo.min.js"
    defer
  ></script>
</head>
```

## npm / yarn

Install mailgo with

```bash
npm install mailgo
```

or

```bash
yarn add mailgo
```

then import it

```js
import mailgo from "mailgo";
```

and then you can call directly

```js
mailgo();
```

to initialize mailgo in the page and substitute automatically all the `mailto` and `tel` when a user clicks (`window` object must be defined! If it's not so, please visit the <a href="/docs/nextjs">SSR</a> section).

**BREAKING CHANGES from version 0.10.\***: you can also use

```js
const Mailgo = require("mailgo");
```

but then you have to call

```js
Mailgo.start();
```

---

### Configuration

`mailgo()` function accepts also the configuration object

```ts
function mailgo(mailgoConfig?: MailgoConfig): void;
```

you can find more about it <a href="/docs/configuration">here</a>.

---

Alternatively you can import directly the script that fires on `DOMContentLoaded` event in this way:

```js
import "mailgo/dist/mailgo.min.js";
```

or

```js
require("mailgo/dist/mailgo.min.js");
```

## standalone

Download the script <a href="https://unpkg.com/mailgo@0.11.2/dist/mailgo.min.js">here</a> and add it your page in body or head

### body

```html
<body>
  ...
  <script src="./path/to/mailgo.min.js"></script>
</body>
```

or

### head

```html
<head>
  ...
  <script src="./path/to/mailgo.min.js" defer></script>
</head>
```

## Dark mode

The dark mode is available through a configuration parameter (see more [here](/docs/dark-mode)) or substituting `mailgo.min.js` with `mailgo.dark.min.js`.

You can also specify dark mode only for single modals, to do this see [here](/docs/dark-mode#dark-mode-only-for-some-modal).
