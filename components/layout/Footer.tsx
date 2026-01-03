import { Container } from '@/components/ui/Container';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background py-8 mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {currentYear} {PORTFOLIO_DATA.personal.name}. {PORTFOLIO_DATA.ui.footer.rights}
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
                            E-posta
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
