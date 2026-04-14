import type { TranslationObject } from '../core/types';
import { useGlobalizeContext } from './GlobalizeProvider';
import { getConfig } from '../core/store';

export const useLocale = <TLocale extends TranslationObject = TranslationObject>() => {
    const { language, changeLanguage } = useGlobalizeContext();
    const config = getConfig();

    if (!config) {
        throw new Error('Globalize is not initialized');
    }

    const locale =
        config.translations[language] ||
        config.translations[config.fallbackLanguage || config.defaultLanguage];

    return {
        locale: locale as TLocale,
        language,
        changeLanguage,
    };
};
