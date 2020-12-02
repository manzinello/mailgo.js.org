---
id: configuration
title: Configuration
sidebar_label: Configuration
---

Here the definition of the `MailgoConfig` object in TypeScript (available after version `0.9.0`)

## MailgoConfig type

```ts
type MailgoConfig = {
  mailto?: boolean; // enable mailgo for mailto, default is obviously true
  tel?: boolean; // enable mailgo for tel, default is true
  sms?: boolean; // enable mailgo for sms, at the moment default is false

  desktop?: boolean; // enable mailgo for desktop, default true
  mobile?: boolean; // enable mailgo for mobile, default true

  actions?: MailgoActions; // enable/disable actions, default all trues
  details?: MailgoDetails; // show/hide the modal details

  dark?: boolean; // dark mode for mailgo, default false

  lang?: string; // language of the modal, default is english

  validateEmail?: boolean; // validate an email, default is true
  validateTel?: boolean; // validate a phone number, default is true

  office365?: boolean; // the particular case of Outlook link: can be outlook.live.com or outlook.office365.com, by default the first but with this parameter you can change the behaviour

  showFooter?: boolean; // show the footer with a link to mailgo.dev, default true, please!

  initEvent?: string; // the event which is attached the mailgo init, default DOMContentLoaded
  listenerOptions?: ListenerOptions | boolean; // the options of the listener if initEvent is specified

  loadCSS?: boolean; // loadCSS for mailgo, default true
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

DEFAULT `false`

Enable or not `sms` links in mailgo, by default it is disabled because it is WIP feature

### desktop

TYPE: `boolean`

DEFAULT `true`

Enable mailgo for desktop (uses user-agent)

### mobile

TYPE: `boolean`

DEFAULT `true`

Enable mailgo for mobile (uses user-agent)

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

```ts
let mailgoConfig: MailgoConfig = {
  actions: {
    yahoo: false,
    skype: false,
  },
};
```

you are excluding Yahoo Mail and Skype. At the moment in mailgo you can exclude every actions except for `copy` and `default`, that are always enabled.

### details

You can define which elements of the details (cc, bcc, subject...) appears in modal, obviously if they are defined in the link. By default all the details are shown, but you can decide it using this attribute.

```ts
type MailgoDetail = "cc" | "bcc" | "subject" | "body" | "msg";

type MailgoDetails = {
  [detail in MailgoDetail]?: boolean;
};
```

`cc`, `bcc`, `subject` and `body` are the details for mailto, `msg` the detail for tel/sms.

So for example you can pass this configuration

```ts
let mailgoConfig: MailgoConfig = {
  details: {
    subject: false,
    body: false,
  },
};
```

if you want to hide subject and body attributes in the modal.

### dark

TYPE `boolean`

DEFAULT `false`

If specified and equal to `true` the mailgo dark mode is enabled for every mailgo modal in the website/page.

### lang

TYPE: `string`

(DEFAULT `en`)

The language of mailgo. Default is `en`.

Possible values can be found in `i18n.json` file in the repository, under `translations` attribute.

The lang specified here is used only in website where is not specified `lang` attribute in `<html>` tag.

You can force the use of the `lang` specified using the paramter `forceLang`.

### validateEmail

TYPE `boolean`

DEFAULT `true`

To validate or not the email address(es), if the value is not valid the modal will not appear.

### validateTel

TYPE `boolean`

DEFAULT `true`

To validate or not the phone number, if the value is not valid the modal will not appear.

### office365

TYPE: `boolean`

DEFAULT `false`

Enable Office365 instead of classic outlook.live.com link in Outlook action

### showFooter

TYPE `boolean`

DEFAULT `true`

Show or not the footer in the modal with <mailgo.dev> link.

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

### loadCSS

TYPE `boolean`

DEFAULT `true`

Load mailgo CSS. `true` recommended.

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
