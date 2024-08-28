import { useState, useEffect } from 'react';

export default function useTheme() {
    const [theme, setTheme] = useState(null); // Initialiser le thème à null

    useEffect(() => {
        // Récupérer le thème depuis le localStorage au chargement de la page
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('gradient'); // Appliquer le thème par défaut si aucun thème n'est trouvé
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.body.classList.remove('default-theme', 'dark-theme', 'gradient-theme');
            document.body.classList.add(`${theme}-theme`);
        }
    }, [theme]);

    const toggleTheme = () => {
        const themes = ['default', 'dark', 'gradient'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndex];
        setTheme(newTheme);
        // Sauvegarder le thème dans le localStorage
        localStorage.setItem('theme', newTheme);
    };

    const themeClass = theme === 'dark' ? 'dark-theme' : theme === 'gradient' ? 'gradient-theme' : 'default-theme';

    return { theme, toggleTheme, themeClass };
}