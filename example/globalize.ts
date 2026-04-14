import { createGlobalize } from '@theo/globalize-kit';
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
