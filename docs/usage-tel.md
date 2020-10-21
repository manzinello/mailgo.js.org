---
id: usage-tel
title: Usage for tel
---

mailgo will substitute automatically all the `tel` and `callto` links.

The default options enabled here are the opening in WhatsApp, Skype, default call and copy the phone number. To enable Telegram you have to provide the username to mailgo element, <a href="/docs/telegram">read here</a>. Skype is enabled by default with the phone number, if you want to use the Skype username you can specify it: <a href="/docs/skype">read this</a>.

## Default

**By default all the `tel:` and `callto:` links will be enabled with mailgo automatically**.

### tel

```html
<a href="tel:123456789">+39 123456789</a>
```

<a href="tel:123456789">+39 123456789</a>

### callto

```html
<a href="callto:123456789">+39 123456789</a>
```

<a href="callto:123456789">+39 123456789</a>

### sms

By default, at the moment, sms is disabled on mailgo, you can enable it through the [Configuration](/docs/configuration), at the moment the render of the modal is the same of the `tel`, but we are working on a better solution also for text messages.

## href=#mailgo and data-tel

You can enable mailgo also on elements with `href=#mailgo` and `data-tel` attribute specified.

```html
<a href="#mailgo" data-tel="123456789">+39 123456789</a>
```

<a href="#mailgo" data-tel="123456789">+39 123456789</a>

or

```html
<a href="callto:123456789">+39 123456789</a>
```

<a href="callto:123456789">+39 123456789</a>

## class=mailgo and data-tel

You can enable mailgo also on elements with `class="mailgo"` and `data-tel` attribute specified.

```html
<a class="mailgo" data-tel="123456789">+39 123456789</a>
```

<a href="" class="mailgo" data-tel="123456789">+39 123456789</a>

or

```html
<a href="callto:123456789">+39 123456789</a>
```

<a href="callto:123456789">+39 123456789</a>

## SMS body parameter

In `sms:` mailgo you can also specify a body parameter, that will be present as the body of the message in WhatsApp and Telegram.

```html
<a href="sms:+39 123-456-78?body=text">Send an SMS</a>
```

<a href="sms:+39 123-456-78?body=text">Send an SMS</a>

## Exclude a single tel/callto

To exclude a single tel/callto link add to the `<a>` element the class `no-mailgo`

```html
<a class="no-mailgo" href="tel:123456789">+39 123456789</a>
```

<a class="no-mailgo" href="tel:123456789">+39 123456789</a>

## data-sms

// TODO
