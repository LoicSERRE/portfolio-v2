import useTheme from '@/hooks/useTheme';
import useTranslations from '@/hooks/useTranslations';
import '../../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectDetail from '@/components/ProjectDetail';

export default function Projet() {
    const { theme, toggleTheme, themeClass } = useTheme();
    const { t, isReady } = useTranslations();

    if (!theme || !isReady) return null;

    const projectData = {
        title: t('projectPages.imageprocessing.title'),
        date: t('projectPages.imageprocessing.date'),
        image: "/img/perr.jpg",
        description: t('projectPages.imageprocessing.description'),
        technologies: [
            { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", doc: "https://docs.python.org/3/" },
            { name: "Jupyter", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg", doc: "https://jupyter.org/documentation" },
        ],
        isOnline: true,
        github: "https://github.com/LoicSERRE/Segmentation-et-classification",
        preview: "https://portfolio.loicserre.fr/traitementimages.html"
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            
            <ProjectDetail project={projectData} />
            
            <Footer />
        </main>
    );
}
