---
id: examples
title: Examples with mailto links
sidebar_label: Examples with mailto links
---

You can see examples in this <a href="https://codepen.io/manzinello/pen/RmeQEr">CodePen</a> or on [mailgo examples](https://github.com/manzinello/mailgo-examples).

## A mailto link with mailgo

```html
<a href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

<a href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>

### Dark mode

```html
<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

<a class="dark" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>

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

<https://codepen.io/manzinello/pen/RmeQEr>

<https://github.com/manzinello/mailgo/tree/master/examples>
