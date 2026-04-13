import { useGlobalizeContext } from './GlobalizeProvider';
import { getConfig } from '../core/store';

export const useTranslation = () => {
    const { language, changeLanguage } = useGlobalizeContext();
    const config = getConfig();

    if (!config) {
        throw new Error('Globalize is not initialized');
    }

    const locale =
        config.translations[language] ||
        config.translations[config.fallbackLanguage || config.defaultLanguage];

    const t = (key: string): string => {
        return locale?.[key] as string ?? key;
    };

    return {
        t,
        language,
        changeLanguage,
    };
};