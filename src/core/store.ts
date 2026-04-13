import type { GlobalizeConfig } from './types';

let config: GlobalizeConfig | null = null;
let currentLanguage = 'en';

export const setConfig = (newConfig: GlobalizeConfig) => {
    config = newConfig;
    currentLanguage = newConfig.defaultLanguage;
};

export const getConfig = () => config;

export const setCurrentLanguage = (language: string) => {
    currentLanguage = language;
};

export const getCurrentLanguage = () => currentLanguage;