'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

export function TypeWriter({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className = '',
}: TypeWriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const type = useCallback(() => {
        const currentWord = words[currentWordIndex];

        if (isPaused) {
            return;
        }

        if (!isDeleting) {
            // Typing
            if (currentText.length < currentWord.length) {
                setCurrentText(currentWord.slice(0, currentText.length + 1));
            } else {
                // Finished typing, pause before deleting
                setIsPaused(true);
                setTimeout(() => {
                    setIsPaused(false);
                    setIsDeleting(true);
                }, pauseDuration);
            }
        } else {
            // Deleting
            if (currentText.length > 0) {
                setCurrentText(currentText.slice(0, -1));
            } else {
                // Finished deleting, move to next word
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
        }
    }, [currentText, currentWordIndex, isDeleting, isPaused, words, pauseDuration]);

    useEffect(() => {
        const timeout = setTimeout(
            type,
            isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed
        );
        return () => clearTimeout(timeout);
    }, [type, typingSpeed, deletingSpeed, pauseDuration, isDeleting, isPaused]);

    return (
        <span className={className}>
            {currentText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                }}
                className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
            />
        </span>
    );
}
