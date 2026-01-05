'use client';

import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { motion } from 'framer-motion';

export function Skills() {
    const { t } = useLanguage();

    const skillCategories = [
        { name: t('skills.languages'), skills: PORTFOLIO_DATA.skills.languages },
        { name: t('skills.ml_ai'), skills: PORTFOLIO_DATA.skills.ml_ai },
        { name: t('skills.cloud_devops'), skills: PORTFOLIO_DATA.skills.cloud_devops },
        { name: t('skills.web'), skills: PORTFOLIO_DATA.skills.web },
        { name: t('skills.tools'), skills: PORTFOLIO_DATA.skills.tools },
    ];

    return (
        <Section id="skills" className="relative overflow-hidden">
            {/* Decorative Patterns */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl -z-10" />
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl -z-10" />

            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
                <span className="font-mono text-primary/60">02.</span>
                <span className="bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                    {t('skills.title')}
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <h3 className="relative text-lg font-semibold mb-4 text-primary">{category.name}</h3>
                        <div className="relative flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-secondary/80 text-secondary-foreground text-xs font-medium rounded-lg border border-border/50 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
