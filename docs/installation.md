---
id: installation
title: Installation
sidebar_label: Installation
---

**mailgo** is on <a href="https://www.npmjs.com/package/mailgo">npm</a> / <a href="https://yarnpkg.com/en/package/mailgo">yarn</a>, you can add it to any webpage with a CDN like unpkg or jsDelivr, downloading the script, through npm/yarn or using pikapkg.

<img class="img-left" alt="mailgo on npm" src="https://img.shields.io/npm/v/mailgo.svg?color=%23bb342f&style=flat-square" />

<img class="img-left" alt="mailgo npm bundle size" src="https://img.shields.io/bundlephobia/minzip/mailgo.svg?color=%23477998&style=flat-square" />

## cdn

### body

Add at the end of the `<body>`

```html
<body>
  ...
  <script src="https://cdn.jsdelivr.net/npm/mailgo@0.9.6/dist/mailgo.min.js"></script>
</body>
```

or

```html
<body>
  ...
  <script src="https://unpkg.com/mailgo@0.9.6/dist/mailgo.min.js"></script>
</body>
```

### head

Alternatively, you can import mailgo in `<head>` using `defer`

```html
<head>
  ...
  <script
    src="https://cdn.jsdelivr.net/npm/mailgo@0.9.6/dist/mailgo.min.js"
    defer
  ></script>
</head>
```

or

```html
<head>
  ...
  <script
    src="https://unpkg.com/mailgo@0.9.6/dist/mailgo.min.js"
    defer
  ></script>
</head>
```

#### CDN

mailgo on jsDelivr

```
https://cdn.jsdelivr.net/npm/mailgo@0.9.6/dist/mailgo.min.js
```

mailgo on unpkg

```
https://unpkg.com/mailgo@0.9.6/dist/mailgo.min.js
```

mailgo on Pika CDN

```
https://cdn.pika.dev/mailgo
```

## npm / yarn (version after 0.9.0)

Install mailgo with

```
npm install mailgo
```

or

```
yarn add mailgo
```

and then

```js
import "mailgo/dist/mailgo.min.js";
```

or

```js
require("mailgo/dist/mailgo.min.js");
```

## npm / yarn (version before 0.9.0)

Install mailgo with

```
npm install mailgo
```

or

```
yarn add mailgo
```

and then

```js
import "mailgo";
```

or

```js
require("mailgo");
```

## standalone

Download the script <a href="https://cdn.jsdelivr.net/npm/mailgo@0.9.6/dist/mailgo.min.js">here</a> and add it your page in body or head

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

## Pika

mailgo is available also on <a href="https://www.pika.dev/packages/mailgo" target="_blank">Pika</a>

```js
import "https://cdn.pika.dev/mailgo";
```

See the <a href="https://github.com/pikapkg/web">docs</a>.

<img class="img-left" src="https://www.pika.dev/static/img/logo5.svg" height="25px">

### Dark mode

_UNDER DEVELOPMENT! It is unstable, not use it!_

The dark mode is available through a configuration parameter (see more [here](/docs/dark-mode)) or substituting `mailgo.min.js` with `mailgo.dark.min.js`
