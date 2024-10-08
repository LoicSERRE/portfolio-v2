import useTheme from '../hooks/useTheme';
import { useState, useEffect } from 'react';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import dotenv from 'dotenv';
import Image from 'next/image';

dotenv.config();

// Fonction pour récupérer les nombres d'étoiles sur plusieurs projets GitHub
async function fetchGithubStars(repos) {
    const response = await fetch(`/api/githubStars?repos=${repos.join(',')}`);
    const data = await response.json();
    return data; // On s'attend à ce que `data` soit un objet de la forme { repoName1: stars1, repoName2: stars2, ... }
}

export default function Projects() {
    const { theme, toggleTheme, themeClass } = useTheme();

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "PoC Cartographie Portuaire",
            description: "Développement d'un PoC dans le cadre de ma dernière année de BUT Informatique, ce projet permet de gérer une cartographie de port commercial.",
            technologies: ["JavaScript", "Node.js", "Express", "React", "Docker", "GitLab"],
            isOnline: false,
            link: "/projects/projetannuel",
            image: "/img/MGPS-logo-mini.png",
            githubRepo: "Projet-annuel-BUT3",
            githubStars: 0
        },
        {
            id: 2,
            title: "Traitement d'images",
            description: "Création d'un notebook en Python pour développer différents algorithmes de segmentation et de classification d'images.",
            technologies: ["Python", "Jupyter Notebook"],
            isOnline: true,
            link: "/projects/imageprocessing",
            image: "/img/perr.jpg",
            githubRepo: "Segmentation-et-classification",
            githubStars: 0
        },
        {
            id: 3,
            title: "API REST",
            description: "Exercice de création d'une API en JavaScript avec le respect des principes REST.",
            technologies: ["JavaScript", "Node.js", "Express", "JwT", "Postman", "Mocha", "Chai"],
            isOnline: false,
            link: "/projects/restapi",
            image: "/img/Rest-API.png",
            githubRepo: "API-REST",
            githubStars: 0
        },
        {
            id: 4,
            title: "Contrôle de ThreeJS",
            description: "Scène 3D dans le cadre d'une évaluation en Three.js.",
            technologies: ["JavaScript", "Three.js"],
            isOnline: false,
            link: "/projects/threejstest",
            image: "/img/threejstest.png",
            githubRepo: "ThreeJS-Test",
            githubStars: 0
        },
        {
            id: 5,
            title: "Agenda",
            description: "Développement d'un agenda en React sans utiliser de bibliothèques pour la création de l'agenda.",
            technologies: ["JavaScript", "React", "CSS", "Node.js"],
            isOnline: false,
            link: "/projects/agenda",
            image: "/img/logoagenda.png",
            githubRepo: "Projet-REACT-BUT-2",
            githubStars: 0
        }
    ]);

    useEffect(() => {
        async function updateGithubStars() {
            const repoNames = projects.map(project => project.githubRepo);
            const starsData = await fetchGithubStars(repoNames);

            const updatedProjects = projects.map(project => ({
                ...project,
                githubStars: starsData[project.githubRepo] || 0
            }));

            setProjects(updatedProjects);
        }
        updateGithubStars();
    }, []);

    const textColorClass = theme === 'dark' ? 'text-white' : theme === 'gradient' ? 'text-gray-100' : 'text-black';
    const linkHoverClass = 'hover:text-teal-300 focus-visible:text-teal-300';

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between px-4 py-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />

            <h1 className="text-5xl font-bold mb-4 text-responsive-title">Projets</h1>
            <hr className="w-32 h-1 bg-gray-300 my-4" />

            <div className="w-full mx-auto space-y-8 project-card">
                {projects.map((project) => (
                    <div key={project.id} className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-30">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 rounded-md transition lg:-inset-x-6 group-hover:bg-slate-800/50 group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                            <h3>
                                <Link href={project.link} target="_blank" rel="noreferrer noopener" legacyBehavior>
                                    <a
                                        className={`inline-flex items-baseline font-medium leading-tight ${textColorClass} ${linkHoverClass} group/link text-base ml-4`}
                                        aria-label={`${project.title} (opens in a new tab)`}
                                    >
                                        <span className="relative mt-2">
                                            <span>
                                                {project.title}
                                                <span className="inline-block">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                </Link>
                            </h3>

                            {/* Bloc pour indiquer la disponibilité en ligne */}
                            {project.isOnline && (
                                <div className="mt-1 text-xs text-green-500 font-semibold flex items-center ml-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="inline-block h-4 w-4 mr-1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-2.293-6.707a1 1 0 011.414 0L10 12.586l2.879-2.88a1 1 0 111.414 1.414l-3.586 3.586a1 1 0 01-1.414 0l-2.586-2.586a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Disponible en ligne
                                </div>
                            )}

                            <h4 className="mt-2 text-sm text-white ml-4 mr-2">{project.description}</h4>

                            {project.githubStars !== 0 && (
                                <Link href={project.link} target="_blank" rel="noreferrer noopener" legacyBehavior>
                                    <a
                                        className={`relative ml-4 mt-2 inline-flex items-center text-sm font-medium ${textColorClass} ${linkHoverClass}`}
                                        aria-label={`${project.githubStars} stars on GitHub (opens in a new tab)`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="yellow"
                                            className={`mr-1 h-3 w-3 ${textColorClass}`}
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className='text-white'>{project.githubStars}</span>
                                    </a>
                                </Link>
                            )}

                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                {project.technologies.map((tech, index) => (
                                    <li key={index} className="mr-1.5 mt-2">
                                        <div className={`flex items-center rounded-full bg-teal-400/10 px-3 py-1 ml-2 text-xs font-medium leading-5 text-teal-300`}>
                                            {tech}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Image
                            alt={project.title}
                            width="500"
                            height="500"
                            decoding="async"
                            className="p-2 rounded-[20px] border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 z-10"
                            src={project.image}
                        />
                    </div>
                ))}
            </div>

            <Footer />
        </main>
    );
}
