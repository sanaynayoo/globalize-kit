import type { GlobalizeConfig, LanguageType } from './types';

let config: GlobalizeConfig | null = null;
let currentLanguage: LanguageType = { language: 'English', key: 'en' };

const resolveLanguage = (languageKey: string, currentConfig: GlobalizeConfig): LanguageType => {
    const matchedLanguage = currentConfig.languages?.find(
        (language) => language.key === languageKey
    );

    return matchedLanguage || { language: languageKey, key: languageKey };
};

export const setConfig = (newConfig: GlobalizeConfig) => {
    config = newConfig;
    currentLanguage = resolveLanguage(newConfig.defaultLanguage, newConfig);
};

export const getConfig = () => config;

export const setCurrentLanguage = (language: LanguageType) => {
    currentLanguage = language;
};

export const getCurrentLanguage = () => currentLanguage;

export const getLanguageByKey = (languageKey: string) => {
    if (!config) {
        throw new Error('Globalize is not initialized');
    }

    return resolveLanguage(languageKey, config);
};
