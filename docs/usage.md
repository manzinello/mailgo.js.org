---
id: usage
title: Usage for mailto
---

## Default

**After any type of installation, by default all the `mailto:` links will be enabled with mailgo automatically** and will appear also cc, bcc, subject and body parameter, if provided.

```html
<a href="mailto:info@mailgo.dev">info@mailgo.dev</a>
```

Here an example of **dark mode**, you can read the default about it [here](/docs/dark-mode).

<a href="mailto:info@mailgo.dev">info@mailgo.dev</a>

```html
<a class="dark" href="mailto:info@mailgo.dev"
  >info@mailgo.dev (dark mode)</a
>
```

<a class="dark" href="mailto:info@mailgo.dev">info@mailgo.dev (dark mode)</a>

**Do you want to prevent the spam? Use a _less-spam usage_ instead the default usage!**

## A less spam usage (#1, recommended)

```html
<a href="#mailgo" data-address="matteo" data-domain="mailgo.dev"
  >write me!</a
>
```

<a href="#mailgo" data-address="matteo" data-domain="mailgo.dev">write me!</a>

- add `href="#mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

## Another less spam usage (#2)

```html
<a class="mailgo" data-address="matteo" data-domain="mailgo.dev" href=""
  >write me!</a
>
```

<a class="mailgo" data-address="matteo" data-domain="mailgo.dev" href="">write me!</a>

- add `class="mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

## Exclude a single mailto

To exclude a single mailto link add to the `<a>` element the class `no-mailgo`

```html
<a class="no-mailgo" href="mailto:info@mailgo.dev"
  >info@mailgo.dev</a
>
```

<a class="no-mailgo" href="mailto:info@mailgo.dev">info@mailgo.dev</a>
