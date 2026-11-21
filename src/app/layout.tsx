import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";


import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Patrícia Antunes',
    default: 'Patrícia Antunes | Developer & Product Designer',
  },
  description: 'Portfolio of Patrícia Antunes, specialized in web development and UI/UX .',
  keywords: ['Frontend Developer', 'Next.js', 'Product Designer', 'UI/UX' ],
  authors: [{ name: 'Patrícia Antunes' }],
  creator: 'Patrícia Antunes',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Patrícia Antunes Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Create a 1200x630px image in your public folder
        width: 1200,
        height: 630,
        alt: 'Patrícia Antunes Portfolio',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Patrícia Antunes | Product Designer',
    description: 'Explore my design and development projects.',
    images: ['/og-image.jpg'],
  },

  // Browser Icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentYear = new Date().getFullYear();



  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
          <main className="flex min-h-screen w-full max-w-5xl flex-col px-5 md:px-16 bg-white dark:bg-black sm:items-start">
            <nav className="hidden w-full md:flex justify-between items-center flex-wrap py-8">
              <Link href="/"><h1 className="hidden md:inline font-title italic text-2xl md:text-4xl leading-none">Patrícia <span className="block ml-6 -mt-2">Antunes</span></h1></Link>
              <Link href="/projects">01/projects</Link>
              <Link href="/experience">02/experience</Link>
              <Link href="/skills">03/skills</Link>
              <Link href="/contacts">04/contacts</Link>

            </nav>
            <MobileMenu />
            {children}
            <footer className="pt-8 pb-4 text-center w-full">
              <p className="italic mb-1 text-sm">© {currentYear} Patrícia Antunes. Designed & built by me.</p>
              <p><a className="underline" target="_blank" href="https://www.linkedin.com/in/patriciafantunes/">LinkedIn</a> · <a className="underline" target="_blank" href="https://github.com/patriciafantunes">GitHub</a></p>
            </footer>
          </main>
        </div>
        
      </body>
    </html>
  );
}
