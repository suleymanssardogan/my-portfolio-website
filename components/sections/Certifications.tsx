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
        id: 'cert5',
        titleKey: 'cert5.title',
        issuerKey: 'cert5.issuer',
        dateKey: 'cert5.date',
        credentialUrl: '#',
    },
    {
        id: 'cert4',
        titleKey: 'cert4.title',
        issuerKey: 'cert4.issuer',
        dateKey: 'cert4.date',
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
                <p className="text-primary font-mono mb-4">04. {labels.title}</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-transparent bg-none">
                    <span className="dark:bg-gradient-to-r dark:from-sky-400 dark:via-blue-500 dark:to-purple-500 dark:bg-clip-text dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
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
                        className="group relative p-6 rounded-2xl bg-white dark:bg-card/30 backdrop-blur-sm border border-gray-200 dark:border-border/30 hover:border-blue-500/30 dark:hover:border-primary/30 transition-all duration-300 shadow-sm"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-blue-100 dark:group-hover:bg-primary/20 transition-colors">
                                <Award className="w-6 h-6 text-blue-600 dark:text-primary" />
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

        </Section>
    );
}
