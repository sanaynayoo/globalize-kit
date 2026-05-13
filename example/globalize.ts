import { createGlobalize } from '@theo-i18n/globalize-kit';
import { en, fr, my } from "./helpers/translations";

export const globalize = createGlobalize({
    defaultLanguage: "en",
    fallbackLanguage: "en",
    languages: [
        { key: "en", language: "English" },
        { key: "my", language: "Burmese (Myanmar)" },
        { key: "fr", language: "French" },
    ],
    translations: {
        en,
        my,
        fr
    },
});
