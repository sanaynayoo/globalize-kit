export type LanguageType = {
    language: string;
    key: string;
};

export interface TranslationObject { [key: string]: string | TranslationObject }

export type Translations = Record<string, TranslationObject>;

export interface GlobalizeConfig {
    defaultLanguage: string;
    fallbackLanguage?: string;
    languages?: LanguageType[];
    translations: Translations;
}
