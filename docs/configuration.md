---
id: configuration
title: Configuration / Customization
---

Configuration / Customization of mailgo installation is available after version `0.9.0` and only in installation though the `lib` folder, so for example when `mailgo` is added in `package.json` and imported.

Here the definition of the `MailgoConfig` object in TypeScript

## MailgoConfig type

```ts
type MailgoConfig = {
  initEvent?: string;
  listenerOptions?: ListenerOptions | boolean;
  dark?: boolean;
  lang?: string;
  forceLang?: boolean;
  validateEmail?: boolean;
  validateTel?: boolean;
};
```

### initEvent

TYPE: `string`

DEFAULT `DOMContentLoaded`

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

In `dist` version of mailgo the event is `DOMContentLoaded`.

### listenerOptions

TYPE: `ListenerOptions` or `boolean`

DEFAULT `false`

```ts
type ListenerOptions = {
  capture?: boolean;
  once?: boolean;
  passive?: boolean;
};
```

The third parameter of the `addEventListener`, complete reference: https://developer.mozilla.org/it/docs/Web/API/Element/addEventListener.

It is used only if an `initEvent` is specified.

### dark

TYPE `boolean`

DEFAULT `false`

// UNDER CONSTRUCTION...

If specified and equal to `true` the mailgo dark mode is enabled for every mailgo modal in the website/page.

### lang

TYPE: `string`

(DEFAULT `en`)

The language of mailgo. Default is `en`.

Possible values can be found in `i18n.json` file in the repository, under `translations` attribute.

The lang specified here is used only in website where is not specified `lang` attribute in `<html>` tag.

You can force the use of the `lang` specified using the paramter `forceLang`.

### forceLang

TYPE `boolean`

DEFAULT `false`

If specified and equal to `true`, then the language specified in `lang` is the only language that mailgo will use.

If the parameter specified in `lang` is not valid or there are no translations for that language or `lang` attribute in `<html>` is not available, the language `en` will be used.

### validateEmail

TYPE `boolean`

DEFAULT `true`

To validate or not the email address(es), if the value is not valid the modal will not appear.

### validateTel

TYPE `boolean`

DEFAULT `true`

To validate or not the phone number, if the value is not valid the modal will not appear.
