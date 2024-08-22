import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        // Charger reCAPTCHA
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LducCwqAAAAAA76XPqW2RJtV9MeFzH_Enj9rHlz';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const onClick = async (e) => {
        e.preventDefault();
        if (typeof window !== 'undefined' && window.grecaptcha) {
            window.grecaptcha.enterprise.ready(async () => {
                const token = await window.grecaptcha.enterprise.execute('6LducCwqAAAAAA76XPqW2RJtV9MeFzH_Enj9rHlz', { action: 'LOGIN' });
                console.log('reCAPTCHA token:', token);
                window.location.href = e.target.href;
            });
        }
    };

    return (
        <footer className="border-t-2 text-center">
            <p className="mt-2">©{new Date().getFullYear()} Loïc SERRE</p>
            <div className="flex justify-center mt-4">
                <a className="btn btn-icon btn-linkedin" href="https://www.linkedin.com/in/lo%C3%AFc-serre-a923b7260/" target="_blank" rel="noopener noreferrer" onClick={onClick}>
                    <i className="fa fa-linkedin"></i><span>LinkedIn</span>
                </a>
                <a className="btn btn-icon btn-github" href="https://github.com/LoicSERRE" target="_blank" rel="noopener noreferrer" onClick={onClick}>
                    <i className="fa fa-github"></i><span>GitHub</span>
                </a>
            </div>
        </footer>
    );
}