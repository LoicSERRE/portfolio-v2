import useTheme from '../hooks/useTheme';
import useTranslations from '../hooks/useTranslations';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function CV() {
    const { theme, toggleTheme, themeClass } = useTheme();
    const { t, isReady } = useTranslations();

    if (!theme || !isReady) return null;

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />

            <section className={`cvSection flex flex-col items-center justify-center`}>
                <h1 className="text-5xl font-bold mb-4 text-responsive-title">{t('cv.title')}</h1>
                <hr className="w-16 h-1 bg-gray-300 my-8" />
                <p className="text-lg mb-8 text-responsive-paragraph">{t('cv.description')}</p>
                <a href="/img/CV.pdf" download="CV_SERRE_Loïc.pdf" className="downloadbutton">{t('cv.download')}</a>
            </section>

            <Footer />
        </main>
    );
}