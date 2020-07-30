---
id: dark-mode
title: Dark mode
---

To enable mailgo dark mode globally see the [Configuration / Customization](/docs/customization) parameter `dark`, go [here](/docs/customization#dark).

You can also use **mailgo dark mode** with CDN or script using the file `/dist/mailgo.dark.min.js` instead of `/dist/mailgo.min.js`.

<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>

### Dark mode only for some modal (mailgo >= 0.9.8)

If you use the configuration method (or `mailgo.dark.min.js`) the dark mode is enabled for all the modals. However, you can specify which modals you want to have in dark mode also with a `class`. From mailgo `0.9.8` you can add to the mailgo element

```
class="dark"
```

to enable dark mode only for the element specified. For example:

```html
<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
