
export default function Footer(){
    return (
        <footer className="border-t-2 text-center">
                <p className="mt-2">©{new Date().getFullYear()} Loïc SERRE</p>
                <div className="flex justify-center mt-4">
                    <a className="btn btn-icon btn-linkedin" href="https://www.linkedin.com/in/lo%C3%AFc-serre-a923b7260/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i><span>LinkedIn</span></a>
                    <a className="btn btn-icon btn-github" href="https://github.com/LoicSERRE" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i><span>GitHub</span></a>
                </div>
            </footer>
    );
}