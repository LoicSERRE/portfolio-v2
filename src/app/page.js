'use client'

import useTheme from '@/hooks/useTheme';
import useTranslations from '@/hooks/useTranslations';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeButton from '@/components/homebutton';

export default function Home() {
    const { theme, toggleTheme, themeClass } = useTheme();
    const { t, isReady } = useTranslations();

    if(!theme || !isReady) {
        return null;
    }

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>

            <Header toggleTheme={toggleTheme} theme={theme} />

            <ul className="space-y-5">
                <HomeButton href="/reception" label={t('home.welcome')} />
                <HomeButton href="/career" label={t('home.career')} />
                <HomeButton href="/skills" label={t('home.skills')} />
                <HomeButton href="/projects" label={t('home.projects')} />
                <HomeButton href="/cv" label={t('home.cv')} />
                <HomeButton href="/contact" label={t('home.contact')} />
                <br></br>
            </ul>

            <Footer />
            
        </main>
    );
}
