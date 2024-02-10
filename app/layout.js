import { Inter } from "next/font/google";
import "./globals.css";
import Nav from '../src/components/navegation/nav';
import Footer from '../src/components/navegation/footer';
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZonaDefi",
  description: "Información financiera. Mercados. Cripto. Forex.",
  link: "/favicon.ico"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description}/>
        <link rel="icon" href={metadata.link}/>
      </Head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
