'use client';

import { Section } from '@/components/ui/Section';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
    return (
        <Section id="about" className="relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10" />

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Text Content */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        <span className="text-primary/60">01.</span> {PORTFOLIO_DATA.ui.about.title}
                    </h2>
                    <div className="prose prose-invert text-muted-foreground space-y-4">
                        <p>{PORTFOLIO_DATA.ui.about.paragraph1}</p>
                        <p dangerouslySetInnerHTML={{ __html: PORTFOLIO_DATA.ui.about.paragraph2.replace(/<strong>/g, '<strong class="text-foreground">') }} />
                        <p>{PORTFOLIO_DATA.ui.about.paragraph3}</p>
                    </div>
                </div>

                {/* Education & Experience */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> {PORTFOLIO_DATA.ui.about.education}
                        </h3>
                        <div className="space-y-6 border-l-2 border-border pl-6 ml-2 relative">
                            {PORTFOLIO_DATA.education.map((edu, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                                    <h4 className="font-medium text-foreground">{edu.degree}</h4>
                                    <p className="text-sm text-primary mb-1">
                                        {edu.institution} | {edu.period}
                                    </p>
                                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {PORTFOLIO_DATA.experience.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 mt-8">
                                <Briefcase className="text-primary" /> {PORTFOLIO_DATA.ui.about.experience}
                            </h3>
                            <div className="space-y-6 border-l-2 border-border pl-6 ml-2 relative">
                                {PORTFOLIO_DATA.experience.map((exp, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                                        <h4 className="font-medium text-foreground">{exp.role}</h4>
                                        <p className="text-sm text-primary mb-1">
                                            {exp.company} | {exp.period}
                                        </p>
                                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
}
