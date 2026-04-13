export type Locale = string;

export type TranslationDictionary = {
    [locale: string]: {
        [key: string]: string | TranslationDictionary;
    };
};

export interface GlobalizeConfig {
    defaultLocale: Locale;
    fallbackLocale?: Locale;
    translations: TranslationDictionary;
}