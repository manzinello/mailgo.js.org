---
id: no-style
title: No style
---

If you want to develop you own style for mailgo you can refer to a no-style file shipped with all the other files.

The file you can import is `/dist/mailgo.nocss.min.js` instead of `/dist/mailgo.min.js`.

### With configuration

You can also specify not to import CSS through the `MailgoConfig` type, simply specifying:

```js
noCSS: true;
```
