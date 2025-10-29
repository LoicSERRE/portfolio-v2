import { useEffect } from 'react';
import useTranslations from '../hooks/useTranslations';

export default function Footer() {
    const { t } = useTranslations();

    return (
        <footer className="border-t-2 text-center">
            <p className="mt-2">©{new Date().getFullYear()} {t('footer.copyright')}</p>
            <div className="flex justify-center mt-4">
                <a className="btn btn-icon btn-linkedin" href="https://www.linkedin.com/in/lo%C3%AFc-serre-a923b7260/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i><span>{t('footer.linkedin')}</span>
                </a>
                <a className="btn btn-icon btn-github" href="https://github.com/LoicSERRE" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i><span>{t('footer.github')}</span>
                </a>
            </div>
        </footer>
    );
}