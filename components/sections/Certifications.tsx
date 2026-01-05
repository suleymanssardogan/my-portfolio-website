'use client';

import { Section } from '@/components/ui/Section';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

interface Certification {
    id: string;
    titleKey: string;
    issuerKey: string;
    dateKey: string;
    credentialUrl?: string;
    icon?: string;
}

const certifications: Certification[] = [
    {
        id: 'cert1',
        titleKey: 'cert1.title',
        issuerKey: 'cert1.issuer',
        dateKey: 'cert1.date',
        credentialUrl: '#', // Add your actual credential URL
    },
    {
        id: 'cert2',
        titleKey: 'cert2.title',
        issuerKey: 'cert2.issuer',
        dateKey: 'cert2.date',
        credentialUrl: '#',
    },
    {
        id: 'cert3',
        titleKey: 'cert3.title',
        issuerKey: 'cert3.issuer',
        dateKey: 'cert3.date',
        credentialUrl: '#',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function Certifications() {
    const { t, language } = useLanguage();

    const labels = {
        title: language === 'tr' ? 'Sertifikalar & Başarılar' : 'Certifications & Achievements',
        subtitle: language === 'tr'
            ? 'Profesyonel gelişimimi ve edindiğim yetkinlikleri gösteren sertifikalarım.'
            : 'Certifications showcasing my professional development and acquired competencies.',
        viewCredential: language === 'tr' ? 'Sertifikayı Görüntüle' : 'View Credential',
    };

    return (
        <Section id="certifications">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <p className="text-primary font-mono mb-4">05. {labels.title}</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-foreground via-primary to-violet-400 bg-clip-text text-transparent">
                        {labels.title}
                    </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    {labels.subtitle}
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
                {certifications.map((cert) => (
                    <motion.div
                        key={cert.id}
                        variants={itemVariants}
                        className="group relative p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <Award className="w-6 h-6 text-primary" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                                {t(cert.titleKey)}
                            </h3>

                            {/* Issuer */}
                            <p className="text-muted-foreground text-sm mb-3">
                                {t(cert.issuerKey)}
                            </p>

                            {/* Date */}
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                                <Calendar className="w-4 h-4" />
                                <span>{t(cert.dateKey)}</span>
                            </div>

                            {/* View Credential Link */}
                            {cert.credentialUrl && cert.credentialUrl !== '#' && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                                >
                                    {labels.viewCredential}
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Add More Certifications Note */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center text-muted-foreground text-sm mt-8"
            >
                {language === 'tr'
                    ? '🎯 Sürekli öğrenmeye ve kendimi geliştirmeye devam ediyorum!'
                    : '🎯 Continuously learning and improving myself!'
                }
            </motion.p>
        </Section>
    );
}
