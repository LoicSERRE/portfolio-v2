import { useState } from 'react';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Reception() {
    const [theme, setTheme] = useState('gradient');

    const toggleTheme = () => {
        const themes = ['default', 'dark', 'gradient'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    const themeClass = theme === 'dark' ? 'bg-black text-white' : theme === 'gradient' ? 'gradient-theme' : 'bg-white text-black';

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>

            <Header toggleTheme={toggleTheme} theme={theme} />

            <section className={`cvSection flex flex-col items-center justify-center`}>
                <h1 className="text-4xl font-bold mb-4">Mon CV</h1>
                <p className="mb-8">Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.</p>
                <a href="/img/CV.pdf" download="CV_SERRE_Loïc.pdf" className={`downloadButton px-6 py-3 rounded-lg font-bold text-white shadow-lg`}>Télécharger CV</a>
            </section>

            <Footer />
            
        </main>
    );
}