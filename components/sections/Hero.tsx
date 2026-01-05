'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { TypeWriter } from '@/components/ui/TypeWriter';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export function Hero() {
    const { t, language } = useLanguage();

    // Dynamic typing words based on language
    const typingWords = language === 'tr'
        ? [
            'Yazılım Mühendisliği Öğrencisi',
            'Yapay Zeka Meraklısı',
            'Veri Bilimi Tutkunu',
            'Full Stack Developer',
            'Bulut Mimarisi Öğrencisi',
        ]
        : [
            'Software Engineering Student',
            'AI Enthusiast',
            'Data Science Passionate',
            'Full Stack Developer',
            'Cloud Architecture Learner',
        ];

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-50" />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[100px] -z-10" />

            <Container className="relative z-10">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                    >
                        <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text">
                            {PORTFOLIO_DATA.personal.name}
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-[1.5em]"
                    >
                        <span className="bg-gradient-to-r from-primary/80 to-violet-400 bg-clip-text text-transparent">
                            <TypeWriter
                                words={typingWords}
                                typingSpeed={80}
                                deletingSpeed={40}
                                pauseDuration={2500}
                            />
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-base md:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            size="lg"
                            className="group"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('hero.viewProjects')}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <Button
                            variant="secondary"
                            size="lg"
                            href={PORTFOLIO_DATA.personal.cv}
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Suleyman_Sardogan_CV.pdf"
                        >
                            <FileText className="mr-2 h-4 w-4" /> {t('hero.downloadCV')}
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            href={PORTFOLIO_DATA.personal.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            href={PORTFOLIO_DATA.personal.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                        </Button>
                    </motion.div>
                </div>
            </Container>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
}
