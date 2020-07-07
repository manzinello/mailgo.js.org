---
id: nextjs
title: Mailgo in Next.js (and SSR)
sidebar_label: Next.js
---

_UNDER DEVELOPMENT! It is unstable, not use it!_

From version `0.9.0` mailgo is available also for Next.js and SSR.

Install `mailgo` and then

```js
import mailgo from "mailgo";
```

or

```js
const mailgo = require("mailgo");
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
