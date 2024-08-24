import { useState } from 'react';
import '../../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectDetail from '@/components/ProjectDetail';

const projectData = {
    title: "PoC Cartographie Portuaire",
    date: "2023-2024",
    image: "/img/projet-annuel.png",
    description: "Ce projet constitue le travail annuel de la troisième année du BUT Informatique. Il s'agit de développer une API REST, suivie d'une application web qui communiquent avec cette API. Le projet est réalisé en rapport avec l'entreprise qui m'accueille en alternance, MGPS. Dans mon cas, il s'agit d'un proof of concept (POC) permettant à un utilisateur de gérer une cartographie de port commercial. L'utilisateur peut ainsi modifier les emplacements des conteneurs, les déplacer, les supprimer, les ajouter, etc... Ceci permet d'éviter à l'entreprise de changer manuellement les emplacements des conteneurs sur les ports.",
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
    preview: "http://loicserre.freeboxos.fr:3000/CommingSoon"
};

export default function Projet() {
    const [theme, setTheme] = useState('gradient');

    const toggleTheme = () => {
        const themes = ['default', 'dark', 'gradient'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    const themeClass = theme === 'dark' ? 'bg-black text-white' : theme === 'gradient' ? 'gradient-theme' : 'bg-white text-black';

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
                        
            <ProjectDetail project={projectData} />
            
            <Footer />
        </main>
    );
}