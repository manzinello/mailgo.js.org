---
id: direct-render
title: Mailgo direct render
sidebar_label: Direct render
---

From mailgo `0.10` the modal (mail or tel) can be shown also without an `<a>` element, but just with a `mailto:` or `tel:` / `callto:` / `sms:` URI as a parameter in a new function called `mailgoDirectRender`.

## mailgoDirectRender()

Here the definition of the function:

```ts
function mailgoDirectRender(directUrl: string): boolean;
```

this function fires the render of mailgo modal with the link passed as a parameter.

You can use it in this way.

```js
import mailgo, { mailgoDirectRender } from "mailgo";

document.getElementById("direct-button").addEventListener("click", function () {
  mailgoDirectRender("mailto:matteo@manzinello.dev");
});
```

This code fires the mailgo modal on click on a button with `id='direct-button'`.

You can see more examples of this new features in the `examples` folder of the mailgo repository or on <https://mailgo-examples.vercel.app>.
