import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState('fr');
    const router = useRouter();

    useEffect(() => {
        // Récupérer la langue depuis les cookies
        const savedLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('NEXT_LOCALE='))
            ?.split('=')[1] || 'fr';
        setLocale(savedLocale);
    }, []);

    const changeLanguage = (newLocale) => {
        setLocale(newLocale);
        // Sauvegarder dans les cookies
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
        // Recharger la page pour appliquer la nouvelle langue
        router.reload();
    };

    return (
        <LanguageContext.Provider value={{ locale, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
