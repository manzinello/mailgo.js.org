---
id: nextjs
title: Mailgo in Next.js (and SSR in general)
sidebar_label: Next.js
---

Mailgo is available also for Next.js and SSR.

Install `mailgo` and then

```js
import mailgo from "mailgo";
```

then you have to call `mailgo()` (IMPORTANT: do this when the object `window` is defined).

Here an example with React hooks:

```js
useEffect(() => {
  mailgo();
}, []);
```

in this way you are sure that `window` is defined and mailgo will work correctly.

Another way (no hooks) is this:

```js
componentDidMount() {
  mailgo();
}
```

You can pass to the function `mailgo()` also the configuration object.

Mailgo can be installed in Gatsby through an official plugin: https://www.gatsbyjs.org/packages/gatsby-plugin-mailgo/

**BREAKING CHANGES from version 0.10.\***: you can also use

```js
const Mailgo = require("mailgo");
```

but then you have to call

```js
Mailgo.start();
```

to start mailgo, here a complete example with Hooks:

```js
const Mailgo = require("mailgo");

useEffect(() => {
  Mailgo.start();
}, []);
```
