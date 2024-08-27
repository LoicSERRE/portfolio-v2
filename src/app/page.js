'use client'

import useTheme from '@/hooks/useTheme';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeButton from '@/components/homebutton';

export default function Home() {
    const { theme, toggleTheme, themeClass } = useTheme();

    if(!theme) {
        return null;
    }

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>

            <Header toggleTheme={toggleTheme} theme={theme} />

            <ul className="space-y-5">
                <HomeButton href="/reception" label="Accueil" />
                <HomeButton href="/career" label="Parcours" />
                <HomeButton href="/skills" label="Compétences" />
                <HomeButton href="/projects" label="Projets" />
                <HomeButton href="/cv" label="CV" />
                <HomeButton href="/contact" label="Contact" />
                <br></br>
            </ul>

            <Footer />
            
        </main>
    );
}
