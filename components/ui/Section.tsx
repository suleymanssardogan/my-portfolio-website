'use client';

import { ReactNode } from 'react';
import { Container } from './Container';
import { cn } from '@/lib/utils';

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32", className)}>
            <Container>
                {children}
            </Container>
        </section>
    );
}
