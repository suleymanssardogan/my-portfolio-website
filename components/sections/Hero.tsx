'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, FileText, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { useTypewriter } from '@/hooks/useTypewriter';

export function Hero() {
    const { t, language } = useLanguage();

    // Typewriter effect strings based on language
    const titles = language === 'tr'
        ? ["Yazılım Mühendisliği Öğrencisi", "Yapay Zeka Meraklısı", "Full Stack Geliştirici", "Veri Bilimi Tutkunu"]
        : ["Software Engineering Student", "AI Enthusiast", "Full Stack Developer", "Data Science Lover"];

    const { text } = useTypewriter(titles);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/15 rounded-full blur-[100px] -z-10" />

            <Container className="relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-mono mb-4 block text-lg">
                            {t('hero.greeting')}
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
                            <span className="text-slate-900 dark:text-transparent bg-none dark:bg-gradient-to-r dark:from-sky-400 dark:via-blue-500 dark:to-purple-500 dark:bg-clip-text dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                {PORTFOLIO_DATA.personal.name}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-12 md:h-16 mb-8"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                            <span className="text-blue-700 dark:text-transparent bg-none dark:bg-gradient-to-r dark:from-sky-400 dark:via-blue-400 dark:to-purple-400 dark:bg-clip-text">
                                {text}
                            </span>
                        </h2>
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
