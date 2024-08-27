import useTheme from '../hooks/useTheme';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import LinkyButton from '@/components/linkybutton';

export default function Reception() {
    const { theme, toggleTheme, themeClass } = useTheme();

    if (!theme) return null;

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />

            <motion.section 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-6xl font-bold mb-12 pagetitle">Hey, c'est Loïc SERRE</h1>

                <p className="text-lg mb-4">
                    Étudiant en ingénierie informatique au <a href="https://www.cesi.fr/ecole/presentation/" target="_blank" rel="noopener noreferrer" style={{color: '#fbe216'}} className="underline">CESI</a> et actuellement en alternance chez <a href="https://www.soprasteria.com/fr/nous-connaitre" target="_blank" rel="noopener noreferrer" className="text-red-500 underline">Sopra Steria</a>. Je suis passionné de technologie et de musique, curieux et toujours en quête de nouvelles connaissances.
                </p>

                <div className="flex justify-center mb-4">
                    <a href="https://www.cesi.fr/ecole/presentation/" target="_blank" rel="noopener noreferrer">
                        <img src="/img/cesi.png" alt="CESI Logo" className="w-20 h-20 mr-4" style={{ borderRadius: '50%' }} />
                    </a>
                    <a href="https://www.soprasteria.com/fr/nous-connaitre" target="_blank" rel="noopener noreferrer">
                        <img src="/img/soprasterialogo.jpg" alt="Sopra Steria Logo" className="w-20 h-20" style={{ borderRadius: '50%' }} />
                    </a>
                </div>

                <p className="text-lg mb-4">
                    Ceci est mon portfolio réalisé en Next.js et React. Le code est disponible sur le repository GitHub ci-dessous.
                </p>

                <div className='text-blue-500 flex items-center mb-4 justify-center'>
                    <LinkyButton href={"https://github.com/LoicSERRE/portfolio-v2"} label={"Voir le code"} icon={"github"} theme={theme} />
                </div>

                <p className="text-lg mb-4">
                    Dans ce portfolio, vous trouverez différentes sections présentant mes compétences, mon parcours, mes projets, et plus encore. Vous pouvez d'ores et déjà aller sur la section suivante "Parcours" en passant par le menu de navigation.
                </p>
            </motion.section>

            <Footer />
        </main>
    );
}