---
id: configuration
title: Configuration / Customization
---

_UNDER DEVELOPMENT! It is unstable, not use it!_

Configuration / Customization of mailgo installation is available after version `0.9.0`.

Here the definition of the `MailgoConfig` object in TypeScript

## MailgoConfig type

_UNDER DEVELOPMENT! It is unstable, not use it!_

```ts
type MailgoConfig = {
  initEvent?: string;
  dark?: boolean;
  lang?: string;
  forceLang?: boolean;
};
```

### initEvent

TYPE: string

The event used to trigger mailgo. If you pass a value then a listener will be attached to the event.

#### Example

```js
mailgoConfig = {
  initEvent: "example-event",
};
```

then the code executed is this

```js
document.addEventListener("example-event", function () {
  // mailgo here is started...
});
```

In `dist` version of mailgo the event is `DOMContentLoaded`

### lang

TYPE: string

The language of mailgo. Default is `en`.

Possible values can be found in `i18n.json` file in the repository, under `translations` attribute.

The lang specified here is used only in website where is not specified `lang` attribute in `<html>` tag.

You can force the use of the `lang` specified using the paramter `forceLang`.

### forceLang

type: boolean

If specified and equal to `true`, then the language specified in `lang` is the only language that mailgo will use.

If the parameter specified in `lang` is not valid or there are no translations for that language or `lang` attribute in `<html>` is not available, the language `en` will be used.

### dark

TYPE: boolean

// UNDER CONSTRUCTION...

If specified and equal to `true` the mailgo dark mode is enabled.
