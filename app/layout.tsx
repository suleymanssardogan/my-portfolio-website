import type { Metadata } from 'next';
import { Inter, Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';

const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
});

const mono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.personal.name} | ${PORTFOLIO_DATA.personal.title}`,
  description: PORTFOLIO_DATA.personal.summary,
  keywords: [
    'Yazılım Mühendisi',
    'Portfolyo',
    'Yapay Zeka',
    'Veri Bilimi',
    'Öğrenci',
    'Geliştirici',
    'Software Engineer',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${mono.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground transition-colors duration-300`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen flex flex-col">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
