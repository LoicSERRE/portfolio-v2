import { useEffect, useRef } from 'react';
import useTheme from '../hooks/useTheme';
import useTranslations from '../hooks/useTranslations';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import 'intersection-observer';
import Image from 'next/image';

export default function Career() {
    const timelineBlocks = useRef([]);
    const { theme, toggleTheme, themeClass } = useTheme();
    const { t, isReady } = useTranslations();

    useEffect(() => {
        if (!isReady) return;

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
    
        const blocks = timelineBlocks.current.slice(1);
        blocks.forEach(block => {
            observer.observe(block);
        });
    
        return () => {
            blocks.forEach(block => {
                if (block) {
                    observer.unobserve(block);
                }
            });
        };
    }, [isReady]);

    if (!theme || !isReady) return null;

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`} style={{ marginTop: '4em' }}>
            <Header toggleTheme={toggleTheme} theme={theme} />

            <h1 className="text-5xl font-bold mb-4 text-responsive-title">{t('career.title')}</h1>
            <hr className="w-16 h-1 bg-gray-300 my-4" />
            <p className="text-lg mb-8 text-responsive-paragraph">{t('career.description')}</p>
            <section id="cd-timeline" className="cd-container">

                <div className="cd-timeline-block is-hidden left" ref={el => timelineBlocks.current[0] = el}>
                    <div className="cd-timeline-img cd-sopra">
                        <Image src="/img/soprasterialogo.jpg" alt="Logo Sopra Steria" className='sopra-img' width={2000} height={2000} />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>{t('career.sopra.title')}</h2>
                        <ul className="text-black">
                            {t('career.sopra.description').split('|').map((item, idx) => (
                                <li key={`sopra-${idx}`}>- {item}</li>
                            ))}
                        </ul>
                        <a href="https://www.soprasteria.com/fr" target="_blank" rel="noopener noreferrer" className="cd-read-more">
                            {t('career.sopra.link')}
                        </a>
                        <span className="cd-date">{t('career.sopra.date')}</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden right" ref={el => timelineBlocks.current[1] = el}>
                    <div className="cd-timeline-img cd-cesi">
                        <Image src="/img/cesi.png" alt="Logo CESI" className='cesi-img' width={2000} height={2000} />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>{t('career.cesi.title')}</h2>
                        <p className='text-black'>{t('career.cesi.description')}</p>
                        <a href="https://www.cesi.fr/formation/ingenieur-e-informatique-cursus-en-3-ans-par-lapprentissage-2513617/" target="_blank" rel="noopener noreferrer" className="cd-read-more">
                            {t('career.cesi.link')}
                        </a>
                        <span className="cd-date">{t('career.cesi.date')}</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden left" ref={el => timelineBlocks.current[2] = el}>
                    <div className="cd-timeline-img cd-mgps">
                        <Image src="/img/MGPS-logo-mini.png" alt="Logo de MGPS" className='mgps-img' width={2000} height={2000} />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>{t('career.mgps3.title')}</h2>
                        <p className='text-black'>{t('career.mgps3.description')}</p>
                        <a href="https://www.mgps.info/" target="_blank" rel="noopener noreferrer" className="cd-read-more">{t('career.mgps3.link')}</a>
                        <span className="cd-date">{t('career.mgps3.date')}</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden right" ref={el => timelineBlocks.current[3] = el}>
                    <div className="cd-timeline-img cd-mgps">
                        <Image src="/img/MGPS-logo-mini.png" alt="Logo de MGPS" className='mgps-img' width={2000} height={2000} />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>{t('career.mgps2.title')}</h2>
                        <p className='text-black'>{t('career.mgps2.description')}</p>
                        <a href="https://www.mgps.info/" target="_blank" rel="noopener noreferrer" className="cd-read-more">{t('career.mgps2.link')}</a>
                        <span className="cd-date">{t('career.mgps2.date')}</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden left" ref={el => timelineBlocks.current[4] = el}>
                    <div className="cd-timeline-img cd-iut">
                        <Image src="/img/université.png" alt="Logo d'AMU" className='iut-img' width={2000} height={2000} />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>{t('career.iut.title')}</h2>
                        <p className='text-black'>{t('career.iut.description')}</p>
                        <a href="https://iut.univ-amu.fr/fr/formations/bachelor-universitaire-de-technologie/but-informatique/but-info-arles" target="_blank" rel="noopener noreferrer" className="cd-read-more">{t('career.iut.link')}</a>
                        <span className="cd-date">{t('career.iut.date')}</span>
                    </div>
                </div>

                <div className="cd-timeline-block is-hidden right" ref={el => timelineBlocks.current[5] = el}>
                    <div className="cd-timeline-img cd-pasquet">
                        <Image src="/img/lycée.jpg" alt="Logo Lycée Pasquet" className='pasquet-img' width={2000} height={2000} />
                    </div>
                    <div className="cd-timeline-content">
                        <h2>{t('career.bac.title')}</h2>
                        <p className='text-black'>{t('career.bac.description')}</p>
                        <a href="https://www.onisep.fr/ressources/univers-formation/formations/lycees/bac-techno-sti2d-sciences-et-technologies-de-l-industrie-et-du-developpement-durable-enseignement-specifique-systemes-d-information-et-numerique" target="_blank" rel="noopener noreferrer" className="cd-read-more">{t('career.bac.link')}</a>
                        <span className="cd-date">{t('career.bac.date')}</span>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
