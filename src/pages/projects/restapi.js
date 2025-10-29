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
        title: t('projectPages.restapi.title'),
        date: t('projectPages.restapi.date'),
        image: "/img/Rest-API.png",
        description: t('projectPages.restapi.description'),
        technologies: [
            { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", doc: "https://nodejs.org/en/docs/" },
            { name: "Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", doc: "https://expressjs.com/en/starter/installing.html" },
            { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { name: "JwT", logo: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg", doc: "https://jwt.io/" },
            { name: "chai", logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/chaijs_logo_icon_168435.png", doc: "https://www.chaijs.com/" },
            { name: "Mocha", logo: "https://mochajs.org/images/mocha-logo.svg", doc: "https://mochajs.org/" },
            { name: "Postman", logo: "https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp", doc: "https://learning.postman.com/docs/getting-started/introduction/" }
        ],
        isOnline: false,
        github: "https://github.com/LoicSERRE/API-REST",
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
