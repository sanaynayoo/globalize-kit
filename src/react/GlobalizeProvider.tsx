import React, { createContext, useContext, useMemo, useState } from 'react';
import { getConfig, getLanguageByKey, setCurrentLanguage } from '../core/store';
import type { LanguageType } from '../core/types';

type GlobalizeContextType = {
    language: LanguageType;
    changeLanguage: (language: LanguageType) => void;
};

const GlobalizeContext = createContext<GlobalizeContextType | null>(null);

export const GlobalizeProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const config = getConfig();

    if (!config) {
        throw new Error('Globalize is not initialized. Call createGlobalize() first.');
    }
    
    const [language, setLanguage] = useState<LanguageType>(
        getLanguageByKey(config.defaultLanguage)
    );

    const value = useMemo(
        () => ({
            language,
            changeLanguage: (lang: LanguageType) => {
                setCurrentLanguage(lang);
                setLanguage(lang);
            },
        }),
        [language]
    );

    return (
        <GlobalizeContext.Provider value={value}>
            {children}
        </GlobalizeContext.Provider>
    );
};

export const useGlobalizeContext = () => {
    const context = useContext(GlobalizeContext);

    if (!context) {
        throw new Error('useGlobalizeContext must be used inside GlobalizeProvider');
    }

    return context;
};
