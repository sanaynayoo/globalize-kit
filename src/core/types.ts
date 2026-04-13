export interface TranslationObject { [key: string]: string | TranslationObject }

export type Translations = Record<string, TranslationObject>;

export interface GlobalizeConfig {
    defaultLanguage: string;
    fallbackLanguage?: string;
    translations: Translations;
}