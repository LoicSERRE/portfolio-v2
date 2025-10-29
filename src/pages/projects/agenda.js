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
        title: t('projectPages.agenda.title'),
        date: t('projectPages.agenda.date'),
        image: "/img/projet-agenda.png",
        description: t('projectPages.agenda.description'),
        technologies: [
            { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", doc: "https://reactjs.org/docs/getting-started.html" },
            { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", doc: "https://nodejs.org/en/docs/" },
            { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg", doc: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        ],
        isOnline: false,
        github: "https://github.com/LoicSERRE/Projet-REACT-BUT-2",
        preview: "https://portfolio.loicserre.fr/CommingSoon"
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            
            <ProjectDetail project={projectData} />
            
            <Footer />
        </main>
    );
}
