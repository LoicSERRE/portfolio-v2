'use client'

import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeButton from '@/components/homebutton';

export default function Home() {
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

            <ul className="space-y-5">
                <HomeButton href="/reception" label="Accueil" />
                <HomeButton href="/skills" label="Compétences" />
                <HomeButton href="/career" label="Parcours" />
                <HomeButton href="/projects" label="Projets" />
                <HomeButton href="/cv" label="CV" />
                <HomeButton href="/contact" label="Contact" />
                <br></br>
            </ul>

            <Footer />
            
        </main>
    );
}
