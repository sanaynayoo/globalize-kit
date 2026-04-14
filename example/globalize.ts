import { createGlobalize } from '@theo/globalize-kit';
import { en, mm } from "./helpers/translations";

export const globalize = createGlobalize({
    defaultLanguage: "en",
    fallbackLanguage: "en",
    translations: {
        en,
        mm,
    },
});
