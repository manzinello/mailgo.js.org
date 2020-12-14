---
id: examples
title: Examples with mailto links
sidebar_label: Examples with mailto links
---

You can see examples in this <a href="/demo">CodePen (mailgo demo)</a>, in `examples` folder in the repository or on [mailgo examples](https://github.com/manzinello/mailgo-examples).

## A mailto link with mailgo

```html
<a href="mailto:info@mailgo.dev">info@mailgo.dev</a>
```

<a href="mailto:info@mailgo.dev">info@mailgo.dev</a>

### Dark mode

```html
<a class="dark" href="mailto:info@mailgo.dev">info@mailgo.dev</a>
```

<a class="dark" href="mailto:info@mailgo.dev">info@mailgo.dev</a>

## A less-spam mailgo example

This is a more simple example (also with less-spam #1 usage):

```html
<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev"
  >write me!</a
>
```

<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>

## Complete less-spam mailgo example

This is a complete **mailgo** example with the less-spam usage #1 (and cc, bcc, subject and body):

```html
<a
  href="#mailgo"
  data-address="matteo"
  data-domain="manzinello.dev"
  data-cc-address="matteomanzinello"
  data-cc-domain="gmail.com"
  data-bcc-address="hello"
  data-bcc-domain="matteomanzinello.com"
  data-subject="A strange email"
  data-body="This email is for me with me also in cc and in bcc"
  >write me!</a
>
```

<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev" data-cc-address="matteomanzinello" data-cc-domain="gmail.com" data-bcc-address="hello" data-bcc-domain="matteomanzinello.com" data-subject="A strange email" data-body="This email is for me with me also in cc and in bcc">write me!</a>

<hr/>

## Other examples

<https://mailgo.dev/demo>

<https://github.com/manzinello/mailgo/tree/master/examples>

<https://github.com/manzinello/mailgo-examples>
