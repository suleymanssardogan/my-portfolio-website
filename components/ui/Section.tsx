import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, children, container = true, ...props }, ref) => {
        const content = container ? <Container>{children}</Container> : children;

        return (
            <section
                ref={ref}
                className={cn("py-16 md:py-24", className)}
                {...props}
            >
                {content}
            </section>
        );
    }
);

Section.displayName = "Section";

export { Section };
