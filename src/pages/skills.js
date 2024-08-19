import { useState } from 'react';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SkillScene from '@/components/skillscene';

export default function Skills() {
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
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold">Skills</h1>
                <p className="text-lg text-center">Cliquez sur un logo pour en savoir plus</p>
                
                <SkillScene />
            </div>
            <Footer />
        </main>
    );
}