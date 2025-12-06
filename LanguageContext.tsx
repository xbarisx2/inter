
import React, { createContext, useContext, ReactNode } from 'react';
import * as trData from './constants';

type Language = 'tr';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    data: typeof trData;
    t: (key: keyof typeof trData.UI_LABELS.TR) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Force language to 'tr'
    const language: Language = 'tr';

    // No-op for setLanguage as we only support TR
    const setLanguage = () => {};

    // Always use Turkish data
    const data = trData;

    // Helper for UI labels - Always fetch TR
    const t = (key: keyof typeof trData.UI_LABELS.TR) => {
        const labels = trData.UI_LABELS.TR;
        return labels[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, data, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
