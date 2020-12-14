---
id: window-functions
title: Mailgo Window functions
sidebar_label: Window functions
---

From mailgo `0.10.*` the functions exported by the library are also accessible in the `window` object.

Here the functions available:

```js
window.getMailgoTypeByElement = getMailgoTypeByElement;
window.mailgoClickListener = mailgoClickListener;
window.mailgoCheckRender = mailgoClickListener; // DEPRECATED, for compatibility with old version of mailgo
window.mailgoPreRender = mailgoPreRender;
window.mailgoDirectRender = mailgoDirectRender;
window.mailgoRender = mailgoRender;
window.mailgo = mailgo;
```

The functions that are available in `window` are the same that are exported by the library, you can find the documentations about them here: [Mailgo export(s)](/docs/mailgo-exports)

## Example

```html
<button onclick="mailgoDirectRender('mailto:info@mailgo.dev')">
  Open a mailgo directly (mail) with window function
</button>
```

<button onclick="mailgoDirectRender('mailto:info@mailgo.dev')">
  Open a mailgo directly (mail) with window function
</button>
