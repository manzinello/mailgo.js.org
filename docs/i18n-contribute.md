---
id: i18n-contribute
title: Contribute in mailgo i18n
---

You can help in mailgo translations submitting PR directly changing `translations.json` file here: https://github.com/manzinello/mailgo/tree/master/i18n/translations.json.

## Translations

You can add or edit a translation directly referring to `translations.json` file. The `key` of the `MailgoTranslation` element is the language code (languages codes are _ISO 639-1 Code_ https://www.loc.gov/standards/iso639-2/php/code_list.php), the strings follow the MailgoTranslation type.

### Mailgo translation type

```ts
type MailgoTranslation = {
  open_in_?: string;
  cc_?: string;
  bcc_?: string;
  subject_?: string;
  body_?: string;
  gmail?: string;
  outlook?: string;
  yahoo?: string;
  telegram?: string;
  whatsapp?: string;
  skype?: string;
  call?: string;
  open?: string;
  _default?: string;
  _as_default?: string;
  copy?: string;
  copied?: string;
};
```

All the strings are not mandatory, if they are not specified the default (`en`) string will be used.

#### Example

```json
"it": {
  "open_in_": "apri con ",
  "bcc_": "ccn ",
  "subject_": "oggetto ",
  "body_": "testo ",
  "call": "chiama",
  "open": "apri",
  "_default": " ",
  "_as_default": " ",
  "copy": "copia",
  "copied": "copiato"
},
```

The key `it` is the ISO code of Italian, not all the string of MailgoTranslation type are translated because they are the same of the `en` language.

## Languages

If the translation is complete you can add the ISO code to the languages file: https://github.com/manzinello/mailgo/tree/master/i18n/translations.json. The languages present in this file are considered as official available for mailgo.

**Thank you if you want to help!**
