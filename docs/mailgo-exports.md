---
id: mailgo-exports
title: Mailgo export(s)
sidebar_label: Library export(s)
---

Here the functions exported by the library `mailgo`

```js
export {
  getMailgoTypeByElement,
  mailgoClickListener,
  mailgoCheckRender, // DEPRECATED, is now mailgoClickListener
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
  mailgo,
  start, // same as mailgo
};

export default mailgo;
```

## Definitions

### getMailgoTypeByElement

```ts
export function getMailgoTypeByElement(
  element: HTMLElement
): MailgoModalType | null;
```

// TODO: more documentation here will arrive soon!

### mailgoClickListener (or DEPRECATED mailgoCheckRender)

```ts
export function mailgoClickListener(event: Event): boolean;
```

// TODO: more documentation here will arrive soon!

### mailgoPreRender

```ts
export function mailgoPreRender(
  type: string,
  mailgoElementOrUrl: HTMLLinkElement | string
): boolean;
```

// TODO: more documentation here will arrive soon!

### mailgoDirectRender

```ts
export function mailgoDirectRender(directUrl: string): boolean;
```

// TODO: more documentation here will arrive soon!

### mailgoRender

```ts
export function mailgoRender(type: string): boolean;
```

// TODO: more documentation here will arrive soon!

### mailgo

```ts
export default function mailgo(mailgoConfig?: MailgoConfig): boolean;
```

// TODO: more documentation here will arrive soon!
