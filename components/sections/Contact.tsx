'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - User needs to set these up
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState<FormState>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        setErrorMessage('');

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: PORTFOLIO_DATA.personal.email,
                },
                EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
            setErrorMessage(
                language === 'tr'
                    ? 'Mesaj gönderilemedi. Lütfen tekrar deneyin veya e-posta ile iletişime geçin.'
                    : 'Failed to send message. Please try again or contact via email.'
            );

            // Reset error status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const labels = {
        name: language === 'tr' ? 'Adınız' : 'Your Name',
        email: language === 'tr' ? 'E-posta Adresiniz' : 'Your Email',
        subject: language === 'tr' ? 'Konu' : 'Subject',
        message: language === 'tr' ? 'Mesajınız' : 'Your Message',
        send: language === 'tr' ? 'Gönder' : 'Send Message',
        sending: language === 'tr' ? 'Gönderiliyor...' : 'Sending...',
        success: language === 'tr' ? 'Mesajınız gönderildi!' : 'Message sent successfully!',
        orConnect: language === 'tr' ? 'veya bağlantı kurun' : 'or connect with me',
    };

    const inputStyles = `
        w-full px-4 py-3 rounded-xl
        bg-white/50 dark:bg-background/50 backdrop-blur-sm
        border border-gray-200 dark:border-border/50
        text-gray-900 dark:text-foreground placeholder:text-gray-400 dark:placeholder:text-muted-foreground/50
        focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-primary/50 focus:border-blue-500 dark:focus:border-primary
        transition-all duration-300 highlight-white/5
        hover:border-blue-500/30 dark:hover:border-primary/30
    `;

    return (
        <Section id="contact" className="relative overflow-hidden">
            {/* Decorative Patterns */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-12">
                    <p className="text-primary font-mono mb-4">05. {t('contact.preTitle')}</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate-900 dark:text-transparent bg-none">
                        <span className="dark:bg-gradient-to-r dark:from-sky-400 dark:via-blue-500 dark:to-purple-500 dark:bg-clip-text dark:drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                            {t('contact.title')}
                        </span>
                    </h2>
                    <p
                        className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
                        dangerouslySetInnerHTML={{
                            __html: t('contact.description').replace(
                                /<strong>/g,
                                '<strong class="text-primary font-semibold">'
                            ),
                        }}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="space-y-4 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                                    {labels.name} *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={inputStyles}
                                    placeholder={language === 'tr' ? 'Adınız Soyadınız' : 'Full Name'}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                                    {labels.email} *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={inputStyles}
                                    placeholder={language === 'tr' ? 'ornek@email.com' : 'example@domain.com'}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                                {labels.subject} *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className={inputStyles}
                                placeholder={language === 'tr' ? 'Staj Fırsatı' : 'Internship Opportunity'}
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                                {labels.message} *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className={`${inputStyles} resize-none`}
                                placeholder={language === 'tr' ? 'Mesajınızı buraya yazın...' : 'Write your message here...'}
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-14 text-lg group"
                            disabled={submitStatus === 'loading'}
                        >
                            {submitStatus === 'loading' ? (
                                <>
                                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                    {labels.sending}
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    {labels.send}
                                </>
                            )}
                        </Button>

                        {/* Status Messages */}
                        <AnimatePresence mode="wait">
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400"
                                >
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <span>{labels.success}</span>
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <span>{errorMessage}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.form>

                    {/* Alternative Contact Methods */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <div className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30">
                            <h3 className="text-xl font-semibold mb-4">
                                {labels.orConnect}
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-background/30 hover:bg-primary/10 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-primary/10 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-primary/20 transition-colors">
                                        <Mail className="w-6 h-6 text-blue-600 dark:text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Email</p>
                                        <p className="text-sm text-muted-foreground">{PORTFOLIO_DATA.personal.email}</p>
                                    </div>
                                </a>

                                <a
                                    href={PORTFOLIO_DATA.personal.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-background/30 hover:bg-primary/10 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-primary/10 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-primary/20 transition-colors">
                                        <Linkedin className="w-6 h-6 text-blue-600 dark:text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">LinkedIn</p>
                                        <p className="text-sm text-muted-foreground">
                                            {language === 'tr' ? 'Profili Görüntüle' : 'View Profile'}
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Response Note */}

                    </motion.div>
                </div>
            </motion.div>
        </Section>
    );
}
