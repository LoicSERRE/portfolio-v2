import Link from 'next/link';

// Fonction pour retourner le SVG approprié
const getIconSvg = (icon, color) => {
    switch (icon) {
        case 'github':
            return (
                <svg viewBox="0 0 16 16" className="bi bi-github" fill={color} height="30" width="30" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1 }}>
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            );
        case 'linkedin':
            return (
                <svg viewBox="0 0 24 24" fill={color} height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.15 1.45-2.15 2.95v5.71h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.21z"></path>
                </svg>
            );
        case 'twitter':
            return (
                <svg viewBox="0 0 24 24" fill={color} height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.17-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
            );
        default:
            return null;
    }
};

// Bouton permettant d'ouvrir des pages web de réseaux sociaux
const LinkyButton = ({ href, label, icon, theme }) => {
    let themeClass = theme;
    let iconColor = '';

    /* si on recoit gradient theme on met le texte ainsi que l'icone en blanc */
    if (themeClass === 'gradient') {
        themeClass = 'text-white';
        iconColor = 'white';
    }
    /* si on recoit dark theme on met le texte en blanc et l'icone en couleur */
    else if (themeClass === 'white') {
        themeClass = 'text-black';
        iconColor = 'black';
    }
    /* si on recoit white theme on met le texte en noir et l'icone en couleur */
    else {
        themeClass = 'white';
        iconColor = 'white';
    }

    return (
        <Link href={href} legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
                <button className="linky-button">
                    {getIconSvg(icon, iconColor)}
                    <p className={themeClass} style={{ zIndex: 1 }}>{label}</p>
                </button>
            </a>
        </Link>
    );
};

export default LinkyButton;