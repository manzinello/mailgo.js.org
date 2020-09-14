---
id: dom-structure
title: DOM structure
---

## Mailgo modal DOM structure

```html
<div
  id="mailgo"
  class="m-modal"
  role="dialog"
  tabindex="0"
  aria-labelledby="m-title"
  aria-hidden="false"
>
  <div class="m-modal-back"></div>
  <div class="m-modal-content">
    <strong id="m-title" class="m-title">matteo@manzinello.dev</strong>
    <div id="m-details" class="m-details">
      <p id="m-cc" style="display: none;">
        <span class="w-500">cc </span><span id="m-cc-value"></span>
      </p>
      <p id="m-bcc" style="display: none;">
        <span class="w-500">bcc </span><span id="m-bcc-value"></span>
      </p>
      <p id="m-subject" style="display: none;">
        <span class="w-500">subject </span><span id="m-subject-value"></span>
      </p>
      <p id="m-body" style="display: none;">
        <span class="w-500">body </span><span id="m-body-value"></span>
      </p>
    </div>
    <a id="m-gmail" href="#mailgo-gmail" class="m-open m-gmail"
      >open in <span class="w-500">Gmail</span></a
    ><a id="m-outlook" href="#mailgo-outlook" class="m-open m-outlook"
      >open in <span class="w-500">Outlook</span></a
    ><a id="m-outlook" href="#mailgo-yahoo" class="m-open m-yahoo"
      >open in <span class="w-500">Yahoo Mail</span></a
    ><a id="m-open" href="#mailgo-open" class="m-open m-default"
      ><span class="w-500">open</span> default</a
    ><a id="m-copy" href="#mailgo-copy" class="m-copy w-500">copy</a
    ><a
      href="https://mailgo.dev?ref=mailgo-modal"
      class="m-by"
      target="_blank"
      rel="noopener noreferrer"
      >mailgo.dev</a
    >
  </div>
</div>
```

## Mailgo modal (tel) DOM structure

```html
<div
  id="mailgo-tel"
  class="m-modal"
  role="dialog"
  tabindex="0"
  aria-labelledby="m-tel-title"
  style="display: flex;"
  aria-hidden="false"
>
  <div class="m-modal-back"></div>
  <div class="m-modal-content">
    <strong id="m-tel-title" class="m-title">123456568</strong
    ><a
      id="m-tg"
      href="#mailgo-telegram"
      class="m-open m-tg"
      style="display: block;"
      >open in <span class="w-500">Telegram</span></a
    ><a id="m-wa" href="#mailgo-whatsapp" class="m-open m-wa"
      >open in <span class="w-500">WhatsApp</span></a
    ><a id="m-skype" href="#mailgo-skype" class="m-open m-skype"
      >open in <span class="w-500">Skype</span></a
    ><a id="m-call" href="#mailgo-open" class="m-open m-default"
      ><span class="w-500">call</span> as default</a
    ><a id="m-tel-copy" href="#mailgo-copy" class="m-copy w-500">copy</a
    ><a
      href="https://mailgo.dev?ref=mailgo-modal"
      class="m-by"
      target="_blank"
      rel="noopener noreferrer"
      >mailgo.dev</a
    >
  </div>
</div>
```
