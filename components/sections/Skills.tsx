'use client';

import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { motion } from 'framer-motion';

export function Skills() {
    const { t } = useLanguage();
    const skills = PORTFOLIO_DATA.skills;

    // Animation variants for the container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Animation variants for individual cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <Section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Deep Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center gap-4">
                        <span className="font-mono text-indigo-500">02.</span>
                        <span className="text-gray-200">
                            {t('skills.title')}
                        </span>
                    </h2>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {Object.entries(skills).map(([categoryKey, skillList]) => (
                        <motion.div
                            key={categoryKey}
                            variants={cardVariants}
                            className="bg-[#111111] border border-white/5 rounded-2xl p-8 hover:border-indigo-500/30 transition-colors duration-300 h-full"
                        >
                            <h3 className="text-lg font-bold text-indigo-500 mb-6">
                                {t(`skills.${categoryKey}`)}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {Array.isArray(skillList) && skillList.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
