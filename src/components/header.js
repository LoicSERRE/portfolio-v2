import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faPalette } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import '../app/globals.css';

export default function Header({ toggleTheme, theme }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        setIsHomePage(window.location.pathname === '/');
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <a href="/" className="text-2xl font-bold homepage-name">Loïc SERRE</a>
            
            <div className="buttons_header">
                {/* Bouton de changement de thème */}
                <button onClick={toggleTheme} className="theme-toggle-button">
                    <FontAwesomeIcon icon={theme === 'dark' ? faMoon : theme === 'gradient' ? faPalette : faSun} />
                </button>

                {/* Bouton du menu burger */}
                {!isHomePage && (
                    <button 
                        className={`menu ${isMenuOpen ? 'opened' : ''} ${theme === 'dark' || theme === 'gradient' ? 'white-theme' : 'black-theme'}`} 
                        onClick={toggleMenu} 
                        aria-label="Main Menu"
                    >
                        <svg width="50" height="50" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Menu déroulant */}
            {!isHomePage && (
                <nav id="sidebarMenu" className={isMenuOpen ? 'open' : ''}>
                    <ul className="sidebarMenuInner">
                        <li><Link legacyBehavior href="/"><a>Menu principal</a></Link></li>
                        <li><Link legacyBehavior href="/reception"><a>Accueil</a></Link></li>
                        <li><Link legacyBehavior href="/career"><a>Parcours</a></Link></li>
                        <li><Link legacyBehavior href="/skills"><a>Compétences</a></Link></li>
                        <li><Link legacyBehavior href="/projects"><a>Projets</a></Link></li>
                        <li><Link legacyBehavior href="/cv"><a>CV</a></Link></li>
                        <li><Link legacyBehavior href="/contact"><a>Contact</a></Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}