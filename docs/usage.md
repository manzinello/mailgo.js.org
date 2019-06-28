---
id: usage
title: Usage
---

## Default

**By default all the `mailto:` links will be enabled with mailgo automatically** and will appear also cc, bcc, subject and body parameter, if provided.

```
<a href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

<a href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>

**Do you want to prevent the spam? Use a _less-spam usage_ instead the default usage!**

## A less spam usage (#1, recommended)

```
<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>
```

<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>

- add `href="#mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

## Another less spam usage (#2)

```
<a class="mailgo" data-address="matteo" data-domain="manzinello.dev" href="">write me!</a>
```

<a class="mailgo" data-address="matteo" data-domain="manzinello.dev" href="">write me!</a>

- add `class="mailgo"` to `<a>`
- add `data-address` and `data-domain` to re-create your email address

## Exclude a single mailto

To exclude a single mailto link add to the `<a>` element the class `no-mailgo`

```
<a class="no-mailgo" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
```

<a class="no-mailgo" href="mailto:matteo@manzinello.dev">matteo@manzinello.dev</a>
