import { getConfig, getCurrentLanguage } from './store';

export const getLocaleObject = () => {
    const config = getConfig();

    if (!config) {
        throw new Error('Globalize is not initialized');
    }

    const language = getCurrentLanguage();

    return (
        config.translations[language] ||
        config.translations[config.fallbackLanguage || config.defaultLanguage]
    );
};

export const t = (key: string): string => {
    const locale = getLocaleObject();
    return locale?.[key] as string ?? key;
};