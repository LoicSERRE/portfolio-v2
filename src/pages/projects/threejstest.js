import useTheme from '@/hooks/useTheme';
import '../../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectDetail from '@/components/ProjectDetail';

const projectData = {
    title: "Contrôle de ThreeJS",
    date: "2023-2024",
    image: "/img/threejstest.png",
    description: "L'une des spécialités de l'IUT Informatique d'Arles est l'imagerie numérique. J'ai eu l'occasion de découvrir la technologie ThreeJS, une bibliothèque de développement JavaScript pour la création de scènes 3D dans un navigateur web. Nous avons réalisé un contrôle TP de 2 heures sur cette technologie, et j'ai ensuite légèrement modifié le projet pour le rendre plus présentable.",
    technologies: [
        { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg", doc: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "ThreeJS", logo: "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png", doc: "https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene" }
    ],
    isOnline: false,
    github: "https://github.com/LoicSERRE/API-RESThttps://github.com/LoicSERRE/ThreeJS-Test",
    preview: "https://loicserre.freeboxos.fr/CommingSoon"
};

export default function Projet() {
    const { theme, toggleTheme, themeClass } = useTheme();

    if (!theme) return null;

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />
            
            <ProjectDetail project={projectData} />
            
            <Footer />
        </main>
    );
}