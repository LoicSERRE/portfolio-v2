import useTheme from '@/hooks/useTheme';
import '../../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProjectDetail from '@/components/ProjectDetail';

const projectData = {
    title: "Traitement d'images",
    date: "2023-2024",
    image: "/img/perr.jpg",
    description: "Ce projet a été réalisé dans le cadre du cours de modélisation mathématique. L'objectif était de créer un notebook en Python pour développer l'algorithme d'Otsu, permettant un seuillage automatique d'image. Par la suite, nous avons mis en place un algorithme de segmentation d'image utilisant l'algorithme de K-means.",
    technologies: [
        { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", doc: "https://docs.python.org/3/" },
        { name: "Jupyter", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg", doc: "https://jupyter.org/documentation" },
    ],
    isOnline: true,
    github: "https://github.com/LoicSERRE/Segmentation-et-classification",
    preview: "https://loicserre.freeboxos.fr/traitementimages.html"
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