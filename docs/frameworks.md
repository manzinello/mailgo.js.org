---
id: frameworks
title: Mailgo in React / Angular / Vue / Hugo
sidebar_label: React / Angular / Vue / Hugo
---

## React

### First way (recommended)

Install mailgo through

```bash
npm install mailgo
```

or

```bash
yarn add mailgo
```

and then

```js
import mailgo from "mailgo";
```

and then you can call

```js
mailgo();
```

to initialize mailgo.

You can customize mailgo installation with an optional config parameter. See <a href="/docs/configuration">Configuration</a> section to use config object. Just pass it as a parameter of `mailgo` function.

**BREAKING CHANGES from version 0.10.\***: you can also use

```js
const Mailgo = require("mailgo");
```

but then you have to call

```js
Mailgo.start();
```

### Second way

Install mailgo through

```bash
npm install mailgo
```

or

```bash
yarn add mailgo
```

and then just

```js
import "mailgo/dist/mailgo.min.js";
```

or

```js
require("mailgo/dist/mailgo.min.js");
```

in `App.js`, `index.js` or any other root component.

No configurations are allowed directly, except for [Configuration in window](/docs/configuration#mailgo-configuration-in-window).

### React examples

You can see a React complete example of using mailgo (in particular using `create-react-app`) in this repository: https://github.com/manzinello/create-react-mailgo-app, and here a `create-react-app` example deployed called `create-react-mailgo-app`: https://create-react-mailgo-app.mailgo.dev.

## Next.js

See the detail in [Next.js section](/docs/nextjs)

## Angular

Install mailgo through

```
npm install mailgo
```

or

```
yarn add mailgo
```

then add mailgo to your `.angular-cli.json` in this way

```json
"styles": [
    "..."
],
"scripts": [
    "..."
    "../node_modules/mailgo/dist/mailgo.min.js"
    "..."
]
```

## Vue

Install mailgo

```bash
npm install mailgo
```

or

```bash
yarn add mailgo
```

and then import mailgo

```js
import mailgo from "mailgo";
```

into main.js, and then you can call

```js
mailgo();
```

to initialize mailgo.

### Vue examples

Here a repository of a project created through `vue-cli` using mailgo: https://github.com/manzinello/vue-mailgo

Here the same example deployed: https://vue-mailgo.mailgo.dev

## Hugo

[Standard installation methods](/docs/installation) are supported. The simplest solution is to install mailgo into one of your content files (a post or page) using the CDN method since anything added in the content markdown file is included in the content page body on site generation.

```
---
# page front matter
---

<!-- content -->

<!-- usage -->
<a href="#mailgo" data-address="matteo" data-domain="manzinello.dev">write me!</a>

<!-- install -->
<script src="https://unpkg.com/mailgo@0.11.2/dist/mailgo.min.js"></script>
```

### Hugo 0.60.0 and higher

Hugo changed its default markdown library to Goldmark in its 0.60.0 release. The use of inline HTML is no longer supported by default. You must update your site config for mailgo to function as an inline HTML element.

`config.toml` sample - more info on the [Hugo blog](https://gohugo.io/news/0.60.0-relnotes/)

```
[markup.goldmark.renderer]
      unsafe = true
```

### Partial templates and shortcodes

In Hugo, you can create a [partial template](https://gohugo.io/templates/partials/) for mailgo to include it in the head of every page, or you can write a custom [shortcode](https://gohugo.io/templates/shortcode-templates/) for insertion into individual content pages.

Here is a sample use of a custom shortcode that includes the mailgo icon - [original gist](https://gist.github.com/aormsby/4a416da862e61893cf262be759fe2701)

layouts/shortcodes/mailgo.html

```handlebars
{{ if .Get 1 }}
  <a href="#mailgo" data-address="{{ .Get 0 }}" data-domain="{{ .Get 1 }}">
    <img src="/icon/mailgo.png" {{ with .Get 2 }} height="{{ . }}" {{ end }}/>
  </a>

  <!-- script automatically included wherever shortcode is used -->
  <script src="https://unpkg.com/mailgo@0.11.2/dist/mailgo.min.js"></script>
{{ end }}
```

content/posts/mypost.md

```handlebars
<!-- using mailgo shortcode..
  arg 0 - data-address
  arg 1 - data-domain
  arg 2 (optional) - icon height
-->

{{< mailgo ormsbyadam gmail.com 100 >}}
```

Adding mailgo in a partial or shortcode avoids using inline HTML in your markdown files. With this method, you are not required to update your site config file as shown in the section above.
