'use client';

import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t, language } = useLanguage();

    return (
        <footer className="border-t border-border bg-background py-8 mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {currentYear} {PORTFOLIO_DATA.personal.name}. {t('footer.rights')}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <a
                            href={PORTFOLIO_DATA.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href={PORTFOLIO_DATA.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                            className="hover:text-primary transition-colors"
                        >
                            {language === 'tr' ? 'E-posta' : 'Email'}
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
