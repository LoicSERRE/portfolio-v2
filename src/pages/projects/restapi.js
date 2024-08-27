import { useState } from 'react';
import '../../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectDetail from '@/components/ProjectDetail';

const projectData = {
    title: "API REST",
    date: "2023-2024",
    image: "/img/Rest-API.png",
    description: "Ce projet avait pour objectif de créer une API REST en JavaScript avec NodeJS et Express. Nous avions une liberté quant à la thématique de l'API, j'ai donc choisi de créer une base de données très simple pour l'organisation de tournois de jeux vidéos. Dans cette API, la structure respecte l'architecture REST. J'ai mis en place un token d'authentification pour sécuriser l'API, ainsi que des tests unitaires et une documentation.",
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