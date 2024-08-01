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
                <h1 className="text-5xl font-bold mb-4 text-responsive-title">Mon CV</h1>
                <hr className="w-16 h-1 bg-gray-300 my-8" />
                <p className="text-lg mb-8 text-responsive-paragraph">Vous pouvez télécharger mon CV en cliquant sur le bouton ci-dessous.</p>
                <a href="/img/CV.pdf" download="CV_SERRE_Loïc.pdf" className="downloadbutton">Télécharger</a>
            </section>

            <Footer />
        </main>
    );
}