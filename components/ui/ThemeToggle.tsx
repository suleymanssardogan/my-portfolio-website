'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground text-foreground transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon size={20} className="transition-all" />
            ) : (
                <Sun size={20} className="transition-all" />
            )}
        </button>
    );
}
