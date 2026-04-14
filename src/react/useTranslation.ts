import { useGlobalizeContext } from "./GlobalizeProvider";
import { getConfig } from "../core/store";
import { getNestedValue } from "../utils/getNestedValue";

export const useTranslation = () => {
    const { language, changeLanguage } = useGlobalizeContext();
    const config = getConfig();

    if (!config) {
        throw new Error("Globalize is not initialized");
    }

    const locale =
        config.translations[language] ||
        config.translations[config.fallbackLanguage || config.defaultLanguage];

    const fallbackLocale =
        config.translations[config.fallbackLanguage || config.defaultLanguage];

    const t = (key: string): string => {
        const value = getNestedValue(locale, key);
        if (typeof value === "string") {
            return value;
        }

        const fallbackValue = getNestedValue(fallbackLocale, key);
        if (typeof fallbackValue === "string") {
            return fallbackValue;
        }

        return key;
    };

    return {
        t,
        language,
        changeLanguage,
    };
};