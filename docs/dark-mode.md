---
id: dark-mode
title: Dark mode
---

To enable mailgo dark mode globally see the [Configuration](/docs/configuration) parameter `dark`, go [here](/docs/configuration#dark).

You can also use **mailgo dark mode** with CDN or script using the file `/dist/mailgo.dark.min.js` instead of `/dist/mailgo.min.js`.

<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>

### Dark mode only for some modal

If you use the configuration method (or `mailgo.dark.min.js`) the dark mode is enabled for all the modals. However, you can specify which modals you want to have in dark mode also with a `class`. You can add to the mailgo element

```
class="dark"
```

to enable dark mode only for the element specified. For example:

```html
<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
