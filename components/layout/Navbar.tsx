'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useLanguage();

    const NAV_LINKS = [
        { href: '#about', label: t('nav.about') },
        { href: '#skills', label: t('nav.skills') },
        { href: '#projects', label: t('nav.projects') },
        { href: '#contact', label: t('nav.contact') },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-2" : "bg-transparent py-4"
            )}
        >
            <Container>
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-lg font-bold tracking-tight hover:text-primary transition-colors"
                    >
                        S.S.
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={PORTFOLIO_DATA.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                            GitHub
                        </a>
                        <ThemeToggle />
                        <LanguageToggle />
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <LanguageToggle />
                        <button
                            className="text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Menüyü aç/kapat"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-fade-in">
                    <nav className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors p-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
