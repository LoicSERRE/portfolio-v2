import useTheme from '../hooks/useTheme';
import useTranslations from '../hooks/useTranslations';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import LinkyButton from '@/components/linkybutton';
import Image from 'next/image';
import Link from 'next/link';

export default function Reception() {
    const { theme, toggleTheme, themeClass } = useTheme();
    const { t, isReady } = useTranslations();

    if (!theme || !isReady) return null;

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />

            <motion.section 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-6xl font-bold mb-12 pagetitle">{t('reception.title')}</h1>

                <p className="text-lg mb-4">
                    {t('reception.description1')
                        .split('{cesi}')[0]}
                    <a href="https://www.cesi.fr/ecole/presentation/" target="_blank" rel="noopener noreferrer" style={{color: '#fbe216'}} className="underline">CESI</a>
                    {t('reception.description1')
                        .split('{cesi}')[1]
                        .split('{sopra}')[0]}
                    <a href="https://www.soprasteria.com/fr/nous-connaitre" target="_blank" rel="noopener noreferrer" className="text-red-500 underline">Sopra Steria</a>
                    {t('reception.description1')
                        .split('{sopra}')[1]}
                </p>

                <div className="flex justify-center mb-4">
                    <a href="https://www.cesi.fr/ecole/presentation/" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/cesi.png" alt="CESI Logo" className="w-20 h-20 mr-4" style={{ borderRadius: '50%' }} width={2000} height={2000} />
                    </a>
                    <a href="https://www.soprasteria.com/fr/nous-connaitre" target="_blank" rel="noopener noreferrer">
                        <Image src="/img/soprasterialogo.jpg" alt="Sopra Steria Logo" className="w-20 h-20" style={{ borderRadius: '50%' }} width={2000} height={2000} />
                    </a>
                </div>

                <p className="text-lg mb-4">
                    {t('reception.description2')}
                </p>

                <div className='text-blue-500 flex items-center mb-4 justify-center'>
                    <LinkyButton href={"https://github.com/LoicSERRE/portfolio-v2"} label={t('reception.viewCode')} icon={"github"} theme={theme} />
                </div>

                <p className="text-lg mb-4">
                    {t('reception.description3')
                        .split('{link}')[0]}
                    <Link href="/career" className="text-red-500 underline">{t('reception.careerLink')}</Link>
                    {t('reception.description3')
                        .split('{link}')[1]}
                </p>
            </motion.section>

            <Footer />
        </main>
    );
}