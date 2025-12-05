
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import * as trData from './constants';
import * as enData from './data_en';

type Language = 'tr' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    data: typeof trData;
    t: (key: keyof typeof trData.UI_LABELS.TR) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Try to get language from localStorage, default to 'tr'
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('app-language');
        return (saved === 'en' || saved === 'tr') ? saved : 'tr';
    });

    useEffect(() => {
        localStorage.setItem('app-language', language);
        document.documentElement.lang = language;
    }, [language]);

    // Ensure enData has the same shape, or fallback to trData for missing keys if necessary
    const data = language === 'tr' ? trData : (enData as unknown as typeof trData);

    // Helper for UI labels
    const t = (key: keyof typeof trData.UI_LABELS.TR) => {
        const labels = trData.UI_LABELS[language.toUpperCase() as 'TR' | 'EN'];
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
