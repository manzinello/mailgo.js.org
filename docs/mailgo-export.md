---
id: mailgo-export
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

### mailgoCheckRender

```ts
export function mailgoCheckRender(event: Event): boolean;
```

### mailgoPreRender

```ts
export function mailgoPreRender(
  type: string,
  mailgoElementOrUrl: HTMLLinkElement | string
): boolean;
```

### mailgoDirectRender

```ts
export function mailgoDirectRender(directUrl: string): boolean;
```

### mailgoRender

```ts
export function mailgoRender(type: string): boolean;
```

### mailgo

```ts
export default function mailgo(mailgoConfig?: MailgoConfig): boolean;
```
