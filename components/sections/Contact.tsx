'use client';

import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
    return (
        <Section id="contact" className="relative overflow-hidden">
            {/* Decorative Patterns */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto text-center"
            >
                <p className="text-primary font-mono mb-4">04. {PORTFOLIO_DATA.ui.contact.preTitle}</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{PORTFOLIO_DATA.ui.contact.title}</h2>
                <p
                    className="text-muted-foreground text-lg mb-12"
                    dangerouslySetInnerHTML={{
                        __html: PORTFOLIO_DATA.ui.contact.description.replace(
                            /<strong>/g,
                            '<strong class="text-foreground">'
                        ),
                    }}
                />

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-14 px-8 text-lg" href={`mailto:${PORTFOLIO_DATA.personal.email}`}>
                        <Mail className="mr-2 w-5 h-5" /> {PORTFOLIO_DATA.ui.contact.sayHello}
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14 px-8 text-lg"
                        href={PORTFOLIO_DATA.personal.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Linkedin className="mr-2 w-5 h-5" /> LinkedIn
                    </Button>
                </div>
            </motion.div>
        </Section>
    );
}
