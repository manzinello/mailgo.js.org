---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Configuration of mailgo installation is available after version `0.9.0`.

Here the definition of the `MailgoConfig` object in TypeScript

## MailgoConfig type

```ts
type MailgoConfig = {
  mailto?: boolean;
  tel?: boolean;
  sms?: boolean;
  initEvent?: string;
  listenerOptions?: ListenerOptions | boolean;
  dark?: boolean;
  lang?: string;
  validateEmail?: boolean;
  validateTel?: boolean;
  showFooter?: boolean;
  loadCSS?: boolean;
  actions?: MailgoActions;
};
```

then initialize `mailgo` following this definition

```ts
function mailgo(mailgoConfig?: MailgoConfig): void;
```

## Mailgo config parameters

### mailto

TYPE: `boolean`

DEFAULT `true`

Enable or not `mailto` links in mailgo

### tel

TYPE: `boolean`

DEFAULT `true`

Enable or not `tel` and `callto` links in mailgo

### sms // WIP

TYPE: `boolean`

DEFAULT `true`

Enable or not `sms` links in mailgo

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

### showFooter

TYPE `boolean`

DEFAULT `true`

Show or not the footer in the modal with <mailgo.dev> link.

### loadCSS

TYPE `boolean`

DEFAULT `true`

Load mailgo CSS. `true` recommended.

### actions

For `actions` parameter you can refer to this definition

```ts
type MailgoAction =
  | "gmail"
  | "outlook"
  | "yahoo"
  | "telegram"
  | "whatsapp"
  | "skype"
  | "copy"
  | "default";

type MailgoActions = {
  [action in MailgoAction]: boolean;
};
```

DEFAULT all the values `true`

With this attribute you can enable/disable some actions in mailgo. By default all the values of `actions` are `true` (so enabled), but you can exclude some of them, for example with a config like

```js
let mailgoConfig = {
  actions: {
    yahoo: false,
    skype: false,
  },
};
```

you are excluding Yahoo Mail and Skype. At the moment in mailgo you can exclude every actions except for `copy` and `default`, that are always enabled.

## Mailgo configuration in window

There is the possibility to define configuration for mailgo also adding it to the `window` object. You can simply add (BEFORE adding `mailgo.min.js`) a `mailgoConfig` attribute to the `window` that follows the `MailgoConfig` type.

Here a simple example (in an `html` file)

```html
<script>
  // this object must follow the MailgoConfig type
  window.mailgoConfig = {
    dark: true,
    showFooter: false,
  };
</script>

<script src="../dist/mailgo.min.js"></script>
```

With this type of configuration the attribute `initEvent` and `listenerOptions` are not considered (because `mailgo.min.js` fires by default ad `DOMContentLoaded` with default `ListenerOptions`).

For more examples about this configuration see `index.windowconfig.html` in `examples` folder in mailgo repository.
