import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faPalette } from '@fortawesome/free-solid-svg-icons';

export default function Header({ toggleTheme, theme }) {
    return (
        <header className="w-full flex justify-between items-center">
            <a href="/" className="text-2xl font-bold homepage-name">Loïc SERRE</a>
            
            <button onClick={toggleTheme} className="p-4 theme-toggle-button">
                <FontAwesomeIcon icon={theme === 'dark' ? faMoon : theme === 'gradient' ? faPalette : faSun} />
            </button>
        </header>
    );
}