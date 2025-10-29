import useTheme from '../hooks/useTheme';
import useTranslations from '../hooks/useTranslations';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SkillScene from '@/components/skillscene';

export default function Skills() {
    const { theme, toggleTheme, themeClass } = useTheme();
    const { t, isReady } = useTranslations();

    if (!theme || !isReady) return null;

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold">{t('skills.title')}</h1>
                <p className="text-lg text-center">{t('skills.description')}</p>
                
                <SkillScene />
            </div>
            <Footer />
        </main>
    );
}