import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loïc SERRE | Développeur Junior",
  description: "Développeur Junior et Étudiant en Ingénierie Informatique à la CESI, passionné par la technologie et l'innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Loïc SERRE, développeur web, développeur mobile, technologie, innovation, étudiant ingénieur, CESI, alternance, alternant, étudiant" />
        <meta name="author" content="Loïc SERRE" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:site_name" content="Loïc SERRE Portfolio" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="portfolio" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/114934993?v=4" />

        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="icon" href="/logo.png" type="image/x-icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Anton+SC&display=swap" rel="stylesheet" />
        
        <meta httpEquiv="origin-trial" content="AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjaVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D8GT2908RN"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-D8GT2908RN');
          `,
        }} />

        {/* Google ReCaptcha */}
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LducCwqAAAAAA76XPqW2RJtV9MeFzH_Enj9rHlz"></script>
  
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}