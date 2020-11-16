---
id: responsive
title: Responsive settings
sidebar_label: Responsive
---

**mailgo** settings for responsive (visibility on desktop or mobile) can be changed in `MailgoConfig` through `desktop` and `mobile` attributes. See [Configuration](/docs/configuration) for details.

Here you can see more about mailgo on Skypack: <https://www.skypack.dev/view/mailgo>

## Example

An example of a mailgo configuration to hide the modal on mobile

```ts
let config: MailgoConfig = {
  desktop: true,
  mobile: false,
};
```
