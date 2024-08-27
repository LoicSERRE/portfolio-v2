import { useEffect, useRef } from 'react';
import useTheme from '../hooks/useTheme';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import 'intersection-observer';

export default function Career() {
    const timelineBlocks = useRef([]);
    const { theme, toggleTheme, themeClass } = useTheme();

    useEffect(() => {
        // Afficher le premier élément au chargement de la page
        if (timelineBlocks.current[0]) {
            const firstBlock = timelineBlocks.current[0];
            const animationClass = firstBlock.classList.contains('left') ? 'bounce-in-left' : 'bounce-in-right';
            firstBlock.classList.add(animationClass);
            firstBlock.classList.remove('is-hidden');
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationClass = entry.target.classList.contains('left') ? 'bounce-in-left' : 'bounce-in-right';
                    entry.target.classList.add(animationClass);
                    entry.target.classList.remove('is-hidden');
                }
            });
        }, { threshold: 0.75 });

        timelineBlocks.current.slice(1).forEach(block => {
            observer.observe(block);
        });

        return () => {
            timelineBlocks.current.slice(1).forEach(block => {
                observer.unobserve(block);
            });
        };
    }, []);

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />

            <h1 className="text-5x1 font-bold mb-4 text-responsive-title">Parcours universitaire et professionnel</h1>
            <hr className="w-16 h-1 bg-gray-300 my-4" />
            <p className="text-lg mb-8 text-responsive-paragraph">Voici mon parcours universitaire et professionnel, de mon Baccalauréat STI2D jusqu'à mon alternance actuelle chez Sopra Steria.</p>
            <section id="cd-timeline" className="cd-container">

                <div className="cd-timeline-block is-hidden left" ref={el => timelineBlocks.current[0] = el}>
                    <div className="cd-timeline-img cd-sopra">
                        <img src="./img/soprasterialogo.jpg" alt="Logo Sopra Steria" className='sopra-img' />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Alternance chez Sopra Steria</h2>
                        <p className='text-black'>Je suis actuellement en alternance chez Sopra Steria dans le cadre de mes études d'ingénierie informatique au CESI.</p>
                        <a href="https://www.soprasteria.com/fr" target="_blank" rel="noopener noreferrer" className="cd-read-more">En savoir plus sur Sopra Steria</a>
                        <span className="cd-date">Octobre 2024 - Septembre 2027</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden right" ref={el => timelineBlocks.current[1] = el}>
                    <div className="cd-timeline-img cd-cesi">
                        <img src="./img/cesi.png" alt="Logo CESI" className='cesi-img' />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>École d'ingénieur CESI</h2>
                        <p className='text-black'>Admis à l'école d'ingénieur CESI, je poursuis ma formation en ingénierie informatique en alternance.</p>
                        <a href="https://www.cesi.fr/formation/ingenieur-e-informatique-cursus-en-3-ans-par-lapprentissage-2513617/" target="_blank" rel="noopener noreferrer" className="cd-read-more">
                            Détails sur la formation
                        </a>
                        <span className="cd-date">2024-2027</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden left" ref={el => timelineBlocks.current[2] = el}>
                    <div className="cd-timeline-img cd-mgps">
                        <img src="/img/MGPS-logo-mini.png" alt="Logo de MGPS" className='mgps-img' />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Alternance 3<sup>ème</sup> année BUT Informatique</h2>
                        <p className='text-black'>Durant cette alternance de 10 mois chez MGPS (Manutentions Gérée Par Satellites), la mission était de développer
                            une refonte d’application. Ce logiciel est embarqué pour des engins fonctionnants sur les ports de
                            commerce. J'ai réaliser la génération de cartographies de terminaux commerciaux, gestion des mouvements des engins, gestion des missions des caristes…</p>
                        <a href="#0" className="cd-read-more">Site de MGPS</a>
                        <span className="cd-date">Septembre 2023 - Juin 2024</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden right" ref={el => timelineBlocks.current[3] = el}>
                    <div className="cd-timeline-img cd-mgps">
                        <img src="/img/MGPS-logo-mini.png" alt="Logo de MGPS" className='mgps-img' />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Stage 2<sup>ème</sup> année BUT Informatique</h2>
                        <p className='text-black'>Durant ce stage de douze semaines chez MGPS (Manutentions Gérée Par Satellites), la mission donnée était de développer,
                            depuis zéro, une application permettant de marquer tous les événements se déroulant sur un match de handball et ainsi profiter de statistiques
                            très poussées et d’une application intuitive et facile d’utilisation.
                        </p>
                        <a href="https://www.mgps.info/" target="_blank" rel="noopener noreferrer" className="cd-read-more">Site de MGPS</a>
                        <span className="cd-date">Mars 2023 - Juin 2024</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden left" ref={el => timelineBlocks.current[4] = el}>
                    <div className="cd-timeline-img cd-iut">
                        <img src="/img/université.png" alt="Logo d'AMU" className='iut-img' />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>BUT Informatique à l'Université d'Aix-Marseille</h2>
                        <p className='text-black'>
                            J'ai suivis le parcours réalisation d’applications : conception, développement, validation. L'IUT d'Arles est spécialisé en imagerie numérique, j'ai donc pu acquérir des bases en imagerie 2D et 3D. 
                            Le BUT Informatique m'a permis d'acquérir des compétences solides en programmation, gestion de projet et conception de 
                            logiciels, tout en développant ma capacité à résoudre des problèmes complexes et à travailler en équipe.
                        </p>
                        <a href="https://iut.univ-amu.fr/fr/formations/bachelor-universitaire-de-technologie/but-informatique/but-info-arles" target="_blank" rel="noopener noreferrer" className="cd-read-more">Détails sur la formation</a>
                        <span className="cd-date">2021-2024</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden right" ref={el => timelineBlocks.current[5] = el}>
                    <div className="cd-timeline-img cd-pasquet">
                        <img src="/img/lycée.jpg" alt="Logo Lycée Pasquet" className='pasquet-img' />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>Baccalauréat STI2D</h2>
                        <p className='text-black'>J'ai obtenu mon Baccalauréat STI2D avec une spécialisation en Systèmes d'Information et Numérique (SIN) avec mention bien.</p>
                        <a href="https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-techno-sti2d-sciences-et-technologies-de-l-industrie-et-du-developpement-durable-enseignement-specifique-systemes-d-information-et-numerique" target="_blank" rel="noopener noreferrer" className="cd-read-more">En savoir plus sur le Baccalauréat STI2D</a>
                        <span className="cd-date">2020-2021</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}