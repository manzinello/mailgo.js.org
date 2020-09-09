---
id: no-style
title: No style
---

If you want to develop you own style for mailgo you can refer to a no-style file shipped with all the other dist files.

The file you can import is `/dist/mailgo.nocss.min.js` instead of `/dist/mailgo.min.js`.

## With configuration

You can also specify not to import CSS through the `MailgoConfig` type, simply specifying:

```js
loadCSS: false;
```

See more about loadCSS in [Configuration](/docs/configuration#loadcss) section.

## Examples

You can see an example of using `mailgo.nocss.min.js` and CSS file loaded separately in `index.nocss.html` and `index.cssloadedseparately.html` in `examples` folder in mailgo repository.
