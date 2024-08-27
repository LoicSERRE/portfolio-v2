import '../app/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function ComingSoon() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors`}>
            <div className="flex flex-col items-center justify-center flex-1">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-600 text-8xl mb-4" />
                <h1 className="text-4xl font-bold mb-4">Fonctionnalité à venir</h1>
                <p className="text-lg mb-8">Je travaille pour vous apporter cette fonctionnalité. Restez à l'écoute !</p>
                <div className="text-gray-500">Cette fonctionnalité n'est pas encore disponible.</div>
            </div>
        </main>
    );
}