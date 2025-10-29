import { useState, useEffect } from 'react';

export default function useTranslations() {
    const [messages, setMessages] = useState(null);
    const [locale, setLocale] = useState('fr');

    useEffect(() => {
        // Récupérer la langue depuis les cookies
        const savedLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('NEXT_LOCALE='))
            ?.split('=')[1] || 'fr';
        
        console.log('Loading locale:', savedLocale);
        setLocale(savedLocale);

        // Charger les traductions
        import(`../../messages/${savedLocale}.json`)
            .then(module => {
                console.log('Translations loaded successfully for:', savedLocale);
                setMessages(module.default);
            })
            .catch(err => {
                console.error('Error loading translations:', err);
                // Fallback to French
                import(`../../messages/fr.json`)
                    .then(module => {
                        console.log('Fallback to French translations');
                        setMessages(module.default);
                    })
                    .catch(fallbackErr => {
                        console.error('Error loading fallback translations:', fallbackErr);
                    });
            });
    }, []);

    const t = (key, replacements = {}) => {
        if (!messages) return key;

        const keys = key.split('.');
        let value = messages;

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }

        // Remplacer les variables dans le texte
        if (typeof value === 'string' && Object.keys(replacements).length > 0) {
            for (const replaceKey of Object.keys(replacements)) {
                value = value.replace(`{${replaceKey}}`, replacements[replaceKey]);
            }
        }

        return value;
    };

    const changeLanguage = (newLocale) => {
        // Sauvegarder dans les cookies
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
        // Recharger la page pour appliquer la nouvelle langue
        globalThis.location.reload();
    };

    return { t, locale, changeLanguage, isReady: messages !== null };
}
