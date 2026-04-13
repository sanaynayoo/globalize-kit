import React, { createContext, useContext, useMemo, useState } from 'react';
import { getConfig, setCurrentLanguage } from '../core/store';

type GlobalizeContextType = {
    language: string;
    changeLanguage: (language: string) => void;
};

const GlobalizeContext = createContext<GlobalizeContextType | null>(null);

export const GlobalizeProvider = ({ children }: {
    children: React.ReactNode;
}) => {
    const config = getConfig();

    if (!config) {
        throw new Error('Globalize is not initialized. Call createGlobalize() first.');
    }
    
    const [language, setLanguage] = useState(config.defaultLanguage);

    const value = useMemo(
        () => ({
            language,
            changeLanguage: (lang: string) => {
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