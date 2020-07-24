---
id: i18n-contribute
title: Contribute in mailgo i18n
---

You can help in mailgo translations submitting PR directly changing `i18n.json` file here: https://github.com/manzinello/mailgo/tree/master/i18n.

Add strings in `translations` and the corrisponding language in `languages` attribute.

## Mailgo translation type

```ts
type MailgoTranslation = {
  open_in_?: string;
  cc_?: string;
  bcc_?: string;
  subject_?: string;
  body_?: string;
  gmail?: string;
  outlook?: string;
  telegram?: string;
  whatsapp?: string;
  skype?: string;
  call?: string;
  open?: string;
  _default?: string;
  _as_default?: string;
  copy?: string;
};
```

Thank you if you want to help!
