---
id: nextjs
title: Mailgo in Next.js (and other SSR)
sidebar_label: Next.js
---

Mailgo is available also for Next.js and SSR

## Next.js

Mailgo can be easily added to any Next.js project just modifying `_app.js`. You can check directly a repository of mailgo with Next.js (https://github.com/manzinello/next-mailgo) here the website deployed (thanks to Vercel): <https://nextjs.mailgo.dev>

```js
import mailgo from "mailgo";
```

and simply add

```js
useEffect(() => {
  mailgo();
}, []);
```

Here a complete example of a `_app.js` with a configuration (dark mode):

```js
import { useEffect } from "react";

import "../styles/globals.css";

import mailgo from "mailgo";

const mailgoConfig = {
  dark: true,
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mailgo(mailgoConfig);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
```

Now mailgo is enabled in the entire web app!

Another running example (Next.js and also TypeScript) is my personal website: <https://matteomanzinello.com>

## Other SSR

Install `mailgo` and then

```js
import mailgo from "mailgo";
```

then you have to call `mailgo()`, **IMPORTANT: do this when the object `window` is defined**.

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

---

Mailgo can be installed in Gatsby through an official plugin: <https://www.gatsbyjs.com/plugins/gatsby-plugin-mailgo/>
