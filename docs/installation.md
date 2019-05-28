---
id: installation
title: Installation
sidebar_label: Installation
---

**mailgo** is on <a href="https://www.npmjs.com/package/mailgo">npm</a>, you can add it to any webpage with a CDN like unpkg or jsDelivr, downloading the script or through npm.

## cdn

### body

Add at the end of the `<body>`

```
<body>
...
<script src="https://unpkg.com/mailgo@0.6.1/dist/mailgo.min.js"></script>
</body>
```

or

```
<body>
...
<script src="https://cdn.jsdelivr.net/npm/mailgo@0.6.1/dist/mailgo.min.js"></script>
</body>
```

### head

Alternatively, you can import mailgo in `<head>` using `defer`

```
<head>
...
<script src="https://unpkg.com/mailgo@0.6.1/dist/mailgo.min.js" defer></script>
</head>
```

or

```
<head>
...
<script src="https://cdn.jsdelivr.net/npm/mailgo@0.6.1/dist/mailgo.min.js" defer></script>
</head>
```

## npm / yarn

Install mailgo with

```
npm install mailgo
```

or

```
yarn add mailgo
```

and then

```
import 'mailgo';
```

or

```
require('mailgo');
```

## standalone

Download the script <a href="https://unpkg.com/mailgo@0.6.1/dist/mailgo.min.js">here</a> and add it your page in body or head

### body

```
<body>
...
<script src="./path/to/mailgo.min.js"></script>
</body>
```

or

### head

```
<head>
...
<script src="./path/to/mailgo.min.js" defer></script>
</head>
```

## Pika (wip)

mailgo is available also on <a href="https://www.pikapkg.com/packages/?q=mailgo" target="_blank">pikapkg</a>
