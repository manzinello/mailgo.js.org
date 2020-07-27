---
id: frameworks-before-0.9
title: Mailgo in React / Angular / Vue / Hugo (before 0.9.0)
sidebar_label: (BEFORE 0.9.0) React / Angular / Vue / Hugo
---

Installation of mailgo < `0.9.0`

## React

Install mailgo through

```
npm install mailgo
```

or

```
yarn add mailgo
```

and then just

```js
import "mailgo";
```

in `App.js`, `index.js` or any other root component.

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
    ...
],
"scripts": [
    ...
    "../node_modules/mailgo/dist/mailgo.min.js"
]
```

// WIP

## Vue

// TODO

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
<script src="https://cdn.jsdelivr.net/npm/mailgo@0.9.12/dist/mailgo.min.js"></script>
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
  <script src="https://cdn.jsdelivr.net/npm/mailgo@0.9.12/dist/mailgo.min.js"></script>
{{ end }}
```

content/posts/mypost.md

```
<!-- using mailgo shortcode..
  arg 0 - data-address
  arg 1 - data-domain
  arg 2 (optional) - icon height
-->

{{< mailgo ormsbyadam gmail.com 100 >}}
```

Adding mailgo in a partial or shortcode avoids using inline HTML in your markdown files. With this method, you are not required to update your site config file as shown in the section above.
