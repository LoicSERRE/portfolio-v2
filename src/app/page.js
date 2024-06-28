import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="flex justify-between w-full p-4">
        <nav className="flex items-center space-x-4">
          <a href="/" className="text-xl font-bold">Home</a>
          <a href="/about" className="text-xl font-bold">About</a>
          <a href="/projects" className="text-xl font-bold">Projects</a>
          <a href="/contact" className="text-xl font-bold">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="/login" className="text-xl font-bold">Login</a>
          <a href="/signup" className="text-xl font-bold">Sign Up</a>
        </div>
      </header>
    </main>
  );
}
