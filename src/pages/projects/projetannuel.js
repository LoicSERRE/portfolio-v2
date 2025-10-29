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
        title: t('projectPages.projetannuel.title'),
        date: t('projectPages.projetannuel.date'),
        image: "/img/projet-annuel.png",
        description: t('projectPages.projetannuel.description'),
        technologies: [
            { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", doc: "https://reactjs.org/docs/getting-started.html" },
            { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", doc: "https://nodejs.org/en/docs/" },
            { name: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", doc: "https://expressjs.com/en/starter/installing.html" },
            { name: "Docker", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg", doc: "https://docs.docker.com/get-started/" },
            { name: "GitLab", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg", doc: "https://docs.gitlab.com/" }
        ],
        isOnline: true,
        github: "https://github.com/LoicSERRE/Projet-annuel-BUT3",
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
