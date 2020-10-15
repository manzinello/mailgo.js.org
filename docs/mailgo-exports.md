---
id: mailgo-exports
title: Mailgo export(s)
sidebar_label: Library export(s)
---

Here the functions exported by the library `mailgo`

```js
export {
  getMailgoTypeByElement,
  mailgoCheckRender,
  mailgoPreRender,
  mailgoDirectRender,
  mailgoRender,
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

### mailgoCheckRender

```ts
export function mailgoCheckRender(event: Event): boolean;
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
