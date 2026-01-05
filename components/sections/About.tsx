'use client';

import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';
import { GraduationCap, Briefcase, User } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
    const { t, language } = useLanguage();

    const education = [
        {
            degree: t('edu.degree'),
            institution: t('edu.institution'),
            period: t('edu.period'),
            description: t('edu.description'),
        },
    ];

    const experience = [
        {
            role: t('exp.role'),
            company: t('exp.company'),
            period: t('exp.period'),
            description: t('exp.description'),
        },
    ];

    // Check if profile image exists - you can add your image at /public/profile.jpg
    const profileImage = '/profile.jpg';

    return (
        <Section id="about" className="relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10" />

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Text Content with Profile Photo */}
                <div>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                        <span className="font-mono text-primary/60">01.</span>
                        <span className="bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                            {t('about.title')}
                        </span>
                    </h2>

                    {/* Profile Photo Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center md:justify-start mb-8"
                    >
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

                            {/* Profile Image Container */}
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                                {/* Using a placeholder gradient if no image exists */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-violet-500/20 to-primary/20 flex items-center justify-center">
                                    <User className="w-20 h-20 text-muted-foreground/50" />
                                </div>
                                {/* Uncomment and use this when you have a profile image */}
                                {/* 
                                <Image
                                    src={profileImage}
                                    alt="Süleyman Sardoğan"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                */}
                            </div>

                            {/* Status Badge */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                                <div className="flex items-center gap-1.5 px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full border border-border/50 shadow-lg">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-medium text-foreground">
                                        {language === 'tr' ? 'Staj Arıyorum' : 'Open to Work'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="prose prose-invert text-muted-foreground space-y-4">
                        <p className="leading-relaxed">{t('about.paragraph1')}</p>
                        <p
                            className="leading-relaxed"
                            dangerouslySetInnerHTML={{
                                __html: t('about.paragraph2').replace(/<strong>/g, '<strong class="text-primary font-semibold">')
                            }}
                        />
                        <p className="leading-relaxed italic text-muted-foreground/80">{t('about.paragraph3')}</p>
                    </div>
                </div>

                {/* Education & Experience */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> {t('about.education')}
                        </h3>
                        <div className="space-y-6 border-l-2 border-border pl-6 ml-2 relative">
                            {education.map((edu, idx) => (
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

                    {experience.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 mt-8">
                                <Briefcase className="text-primary" /> {t('about.experience')}
                            </h3>
                            <div className="space-y-6 border-l-2 border-border pl-6 ml-2 relative">
                                {experience.map((exp, idx) => (
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
