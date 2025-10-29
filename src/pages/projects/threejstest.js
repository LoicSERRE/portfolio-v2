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
        title: t('projectPages.threejstest.title'),
        date: t('projectPages.threejstest.date'),
        image: "/img/threejstest.png",
        description: t('projectPages.threejstest.description'),
        technologies: [
            { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "ThreeJS", logo: "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png", doc: "https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" }
        ],
        isOnline: false,
        github: "https://github.com/LoicSERRE/ThreeJS-Test",
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
