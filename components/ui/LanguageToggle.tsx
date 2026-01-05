'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="relative flex items-center gap-1 p-1 rounded-full bg-secondary/50 border border-border/50">
            <button
                onClick={() => setLanguage('tr')}
                className={`relative z-10 px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${language === 'tr' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
            >
                TR
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`relative z-10 px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
            >
                EN
            </button>

            {/* Animated background pill */}
            <motion.div
                className="absolute top-1 h-[calc(100%-8px)] bg-primary rounded-full"
                initial={false}
                animate={{
                    left: language === 'tr' ? 4 : 'calc(50% + 2px)',
                    width: language === 'tr' ? 'calc(50% - 6px)' : 'calc(50% - 6px)',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                }}
            />
        </div>
    );
}
