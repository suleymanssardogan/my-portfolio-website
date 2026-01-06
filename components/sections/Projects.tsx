'use client';

import { useState, useRef, MouseEvent } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Github, Folder, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            title: t('project1.title'),
            description: t('project1.description'),
            tech: ['Python', 'FastAPI', 'NLP', 'Scikit-learn', 'PostgreSQL/MongoDB'],
            github: 'https://github.com/suleymanssardogan',
        },
        {
            title: t('project2.title'),
            description: t('project2.description'),
            tech: ['AWS', 'DevOps', 'Cloud Architecture', 'CI/CD'],
            github: 'https://github.com/selmanmoon/aws-zero-to-yeto',
        },
        {
            title: t('project3.title'),
            description: t('project3.description'),
            tech: ['Python', 'Flask', 'Docker', 'OCR', 'Computer Vision'],
            github: 'https://github.com/suleymanssardogan/Pytesseract-with-Python-OCR-',
        },
    ];

    return (
        <Section id="projects" className="relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl -z-10" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold flex items-center gap-2 mb-2">
                        <span className="font-mono text-primary/60">03.</span>
                        <span className="text-slate-900 dark:text-transparent bg-none dark:bg-gradient-to-r dark:from-sky-400 dark:via-blue-500 dark:to-purple-500 dark:bg-clip-text">
                            {t('projects.title')}
                        </span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl">{t('projects.subtitle')}</p>
                </div>
                <div className="hidden md:block">
                    <Button variant="outline" size="sm" href={PORTFOLIO_DATA.personal.github} target="_blank">
                        {t('projects.viewArchive')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <ProjectCard key={project.title} project={project} index={idx} />
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Button variant="outline" href={PORTFOLIO_DATA.personal.github} target="_blank">
                    {t('projects.viewArchive')} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </Section>
    );
}

function ProjectCard({
    project,
    index,
}: {
    project: {
        title: string;
        description: string;
        tech: string[];
        github: string;
    };
    index: number;
}) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col justify-between bg-white dark:bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
            {/* Spotlight Canvas */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Folder className="w-6 h-6" />
                    </div>

                    <div className="flex gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label="GitHub Link"
                            >
                                <Github size={22} />
                            </a>
                        )}
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto text-xs font-mono text-blue-700 dark:text-primary/80">
                    {project.tech.map((t) => (
                        <li key={t} className="bg-gray-100 dark:bg-secondary/50 px-2 py-1 rounded border border-gray-200 dark:border-border/50">
                            {t}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
