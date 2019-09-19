---
id: usage-tel
title: Usage for tel
---

mailgo will substitute all the `tel` links from version `0.7.0`. The default options enabled here are the opening in WhatsApp, default call and copy the phone number. To enable Telegram you have to provide the username to mailgo element, <a href="/docs/telegram">read here</a>.

## Default

**By default all the `tel:` links will be enabled with mailgo automatically**.

```
<a href="tel:123456789">+39 123456789</a>
```

<a href="tel:123456789">+39 123456789</a>

## Exclude a single tel

To exclude a single tel link add to the `<a>` element the class `no-mailgo`

```
<a class="no-mailgo" href="tel:123456789">+39 123456789</a>
```

<a class="no-mailgo" href="tel:123456789">+39 123456789</a>
