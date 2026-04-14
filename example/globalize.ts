import { createGlobalize } from '@theo-i18n/globalize-kit';
import { en, fr, my } from "./helpers/translations";

export const globalize = createGlobalize({
    defaultLanguage: "en",
    fallbackLanguage: "en",
    translations: {
        en,
        my,
        fr
    },
});
