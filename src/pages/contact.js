import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../app/globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SendButton from '@/components/sendbutton';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export default function Contact() {
    const [theme, setTheme] = useState('gradient');
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [messageStatus, setMessageStatus] = useState('');
    const [isSuccess, setIsSuccess] = useState(true); // Changez à false pour tester le message d'erreur

    useEffect(() => {
        emailjs.init('B9ziUBpltoN1oSGzJ');
    }, []);

    useEffect(() => {
        if (messageStatus) {
            const timer = setTimeout(() => {
                setMessageStatus("");
            }, 2000); // Ferme la modale après 2 secondes

            return () => clearTimeout(timer); // Nettoie le timer si le composant est démonté ou si messageStatus change
        }
    }, [messageStatus]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send("service_uxkl9w3", "template_dxyxam6", form)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setMessageStatus("Message envoyé avec succès !\nJe vous répondrai dans les plus brefs délais.");
                setIsSuccess(true);
                setForm({ name: '', email: '', message: '' });
            }, (error) => {
                console.log("FAILED...", error);
                setMessageStatus("Échec de l'envoi du message. Veuillez m'excuser pour la gêne occasionnée, contactez-moi directement via mes réseaux sociaux.");
                setIsSuccess(false);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const toggleTheme = () => {
        const themes = ['default', 'dark', 'gradient'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    const themeClass = theme === 'dark' ? 'bg-black text-white' : theme === 'gradient' ? 'gradient-theme' : 'bg-white text-black';

    const closeModal = () => {
        setMessageStatus("");
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 transition-colors ${themeClass}`}>
            <Header toggleTheme={toggleTheme} theme={theme} />

            <section className={`cvSection flex flex-col items-center justify-center`}>
                <h1 className="text-5xl font-bold mb-4 text-responsive-title">Contact</h1>
                <hr className="w-16 h-1 bg-gray-300 my-8" />
                <p className="text-lg mb-8 text-responsive-paragraph">N'hésitez pas à me contacter en remplissant le formulaire ci-dessous et je vous répondrai dès que possible.</p>
                <form className="contact__form" onSubmit={sendEmail}>
                    <input type="text" id="name" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required className="form-input" />
                    <input type="email" id="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} required className="form-input" />
                    <textarea id="message" name="message" placeholder="Votre message" value={form.message} onChange={handleChange} required className="form-textarea"></textarea>
                    <SendButton />
                </form>
            </section>

            {messageStatus && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        {isSuccess ? (
                            <div className="modal-message_success">
                                <FaCheckCircle className="icon_modal success-icon" />
                                <p>{messageStatus}</p>
                            </div>
                        ) : (
                            <div className="modal-message_error">
                                <FaTimesCircle className="icon_modal error-icon" />
                                <p>{messageStatus}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}