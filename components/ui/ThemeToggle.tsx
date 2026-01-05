'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative p-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: 1,
                }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            >
                {theme === 'dark' ? (
                    <Moon className="w-5 h-5 text-primary" />
                ) : (
                    <Sun className="w-5 h-5 text-yellow-500" />
                )}
            </motion.div>
        </motion.button>
    );
}
