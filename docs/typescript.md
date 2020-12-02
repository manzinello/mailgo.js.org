---
id: typescript
title: TypeScript
sidebar_label: TypeScript
---

**mailgo** is fully compatible with TypeScript.

In file `mailgo-types.d.ts` are defined all the types of the library.

## Types

All the mailgo types are defined in `mailgo-types.d.ts`, already referenced in `types` attribute in `package.json`.

You can use the types directly importing them from `mailgo`, no `@types/mailgo` is necessary because all the types are defined directly in the same package and exported.

The latest version of the types is here: <https://github.com/manzinello/mailgo/blob/master/mailgo-types.d.ts>

```ts
import { MailgoConfig } from "mailgo";

const mailgoConfig: MailgoConfig = {
  dark: true,
};
```
