'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { FileCode, Database, Server, Cloud, Github as GithubIcon, Terminal, Box } from 'lucide-react';

// --- Icons Configuration (Same as before) ---
const Icons = {
    Javascript: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 3h18v18H3V3zm14.5 13.5c.3 0 .7.1 1 .3l.6-1.6c-.6-.4-1.3-.6-2-.6-1.5 0-2.3 1-2.3 2.5v.1c0 1.6.9 2.4 2.3 2.4.7 0 1.4-.2 2.1-.7l-.6-1.6c-.3.2-.7.4-1.1.4-.7 0-1.1-.3-1.1-1v-.1c0-.7.4-1.1 1.1-1.1zM6.6 13.2h1.8v3.4c0 .8.4 1.2 1.2 1.2.7 0 1.1-.4 1.1-1.2v-3.4h1.8v3.6c0 1.8-1 2.8-2.9 2.8-1.8 0-2.9-1.1-2.9-2.8v-3.6z" /></svg>),
    Typescript: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zM15 12h4v8h-1.5v-2h-1v2h-1.5V12zm.75 1.25H18v3.5h-2.25v-3.5zm-8.25 0h1.5v4.25h1.75v1.5h-3.25V13.25zm-2.75 0h2.75l-1.375 5.75L6.125 13.25h1.125v-2.5h-4.5v2.5z" /></svg>),
    React: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.2c4.475 0 8.358 3.012 9.429 7.027-1.393-.524-2.887-.827-4.429-.827-2.737 0-5.289.923-7.398 2.502C6.837 8.01 3.515 8.16 3.515 8.16S6.96 4.606 12 2.2zm0 19.6c-4.475 0-8.358-3.012-9.429-7.027 1.393.524 2.887.827 4.429.827 2.737 0 5.289-.923 7.398-2.502 2.766 2.894 6.088 2.744 6.088 2.744s-3.445 3.554-8.486 5.958zM12 10c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z" /></svg>),
    Vue: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M24 1.61c0-.206-.04-.412-.122-.603-.082-.19-.2-.363-.352-.513-.153-.152-.327-.27-.517-.352A1.56 1.56 0 0 0 22.406 0H18.91l-6.91 11.97L5.09 0H1.594c-.206 0-.412.04-.603.122-.19.082-.363.2-.513.352a1.56 1.56 0 0 0-.352.518c-.082.19-.122.396-.122.602s.04.412.122.603L10.96 22.44c.152.26.377.47.644.6.267.13.565.176.85.132.285-.044.55-.18.756-.388a1.59 1.59 0 0 0 .393-.746L23.878 2.213c.082-.19.122-.396.122-.602zM12 18.57L3.65 4.1h2.64l5.71 9.89 5.71-9.9h2.64L12 18.57z" /></svg>),
    NextJS: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17h-1.5l-5.5-8v8H8V7h1.5l5.5 8V7h1.5v10z" /></svg>),
    Tailwind: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 16.618 9.027 18 12.001 18c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 12.182 8.976 10.8 6.001 10.8z" /></svg>),
    Node: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12 0L2.25 5.625v12.75L12 24l9.75-5.625V5.625L12 0zm.75 16.5v-3.75l-4.5-2.625V6.75l3.75 2.15V7.4l-2.25-1.3v2.85l3-1.75V3.85l4.5 2.6v7.4l-4.5 2.65z" /></svg>),
    Python: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M14.25.75A5.25 5.25 0 009 6v2.25H6A5.25 5.25 0 00.75 13.5v2.25A2.25 2.25 0 003 18h3.75v-3A5.25 5.25 0 0112 9.75h3v-3.75A5.25 5.25 0 0014.25.75zM8.25 20.25a2.25 2.25 0 00-2.25-2.25H2.25v2.25A5.25 5.25 0 007.5 25.5h3.75v-2.25H8.25v-3zM21 5.25h-3.75v3A5.25 5.25 0 0112 13.5h-3v3.75A5.25 5.25 0 0014.25 22.5h2.25A5.25 5.25 0 0021.75 17.25v-2.25H24v-2.25A5.25 5.25 0 0018.75 7.5h-3.75V6A2.25 2.25 0 0117.25 3.75h3.75v1.5z" /></svg>),
    Docker: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M1.498 12.09c-.198.309-.387.685-.606 1.054-.3.518-.328.625-.437 1.258-.208 1.164.07 2.115.753 2.924.363.428.87.828 1.487 1.144 1.495.766 4.3 1.071 7.218.805 1.547-.14 2.898-.54 3.993-1.125 1.488-.795 2.28-1.928 2.15-3.088-.046-.42-.162-.752-.303-1.077l-.234-.515H1.498zm4.332-9.67c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm4.07 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm4.068 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm-8.136 3.19c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm4.068 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm4.068 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm4.068 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z" /></svg>),
    AWS: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M12.9 8.8c.8 1.4 1 1.7 1.8 3.1-1.3-.4-3.1-.7-4.4-.7-.9 0-1.7.2-1.7.9 0 .4.4.8 1.1.8.8 0 2.2-.4 3.2-1l.7 1.3c-1.2.7-2.9 1.1-4.2 1.1-1.8 0-3.1-1-3.1-2.6 0-1.7 1.4-2.8 3.9-2.8 1.4 0 2.4.1 2.7.2v-.6c0-1.1-1-1.6-2.5-1.6-1.4 0-2.3.4-3.5 1l-.6-1.3c1.4-.7 2.7-1.1 4.5-1.1 2.5 0 4.1 1.1 4.1 3.5v3.4l1.4-.2.2 1.4c-1.6.4-3.2.6-4.9.4l-.1-1.7c-.5.9-1.3 1.6-2.6 1.6-1.5 0-2.5-.9-2.5-2.2 0-1.3 1.1-2 2.7-2 1.3 0 2.6.4 3.9 1V8.8zm-5.7 6.4c1.1.8 3.3.7 4.7 0 .5-.2.8-.5.8-1-.5 1-2.9 1.5-4.5.3-.4-.3-.6-.7-.6-1.1 0 .8-.1 1.5-.4 1.8zM17.1 19.3c3.4-1.3 5.9-3.9 5.9-3.9l1.1.8s-2.7 2.9-6.6 4.3c-4.4 1.6-8.9.7-12.2-1.2l.9-1.2c3 1.7 7 2.5 10.9 1.2zm-2.5-10.7c-.8-1.5-2.9-2.2-4.8-1.7-1.4.3-2.6 1.1-3.3 2.1l-1.1-1.2C6.3 6.4 8.2 5.3 10.4 5c2.6-.4 5.3.6 6.3 2.6l-2.1 1z" /></svg>),
    Git: () => (<svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M2.59 10.85L10.85 2.59c.78-.78 2.05-.78 2.83 0l7.73 7.73c.78.78.78 2.05 0 2.83l-8.26 8.26c-.78.78-2.05.78-2.83 0l-7.73-7.73c-.78-.78-.78-2.05 0-2.83zM12 17a2 2 0 100-4 2 2 0 000 4zm0-6a2 2 0 100-4 2 2 0 000 4z" /></svg>),
    Postgres: Database,
    Mongo: Database,
    Github: GithubIcon,
    Express: Server,
    Linux: Terminal,
};

// Colors are used for TINTING (not glowing).
const keys = [
    { id: '1', icon: Icons.Javascript, brand: '#facc15', label: 'JS', exp: '3 Years', projects: 12 }, // yellow-400
    { id: '2', icon: Icons.Typescript, brand: '#3b82f6', label: 'TS', exp: '2 Years', projects: 8 }, // blue-500
    { id: '3', icon: Icons.React, brand: '#22d3ee', label: 'Rct', exp: '3 Years', projects: 15 }, // cyan-400
    { id: '4', icon: Icons.Vue, brand: '#34d399', label: 'Vue', exp: '1 Year', projects: 4 }, // emerald-400
    { id: '5', icon: Icons.NextJS, brand: '#e5e5e5', label: 'Nxt', exp: '2 Years', projects: 10 }, // neutral-200
    { id: '6', icon: Icons.Tailwind, brand: '#06b6d4', label: 'Css', exp: '2 Years', projects: 20 }, // cyan-500
    { id: '7', icon: Icons.Node, brand: '#4ade80', label: 'Nde', exp: '2 Years', projects: 10 }, // green-400
    { id: '8', icon: Icons.Express, brand: '#94a3b8', label: 'Exp', exp: '2 Years', projects: 8 }, // slate-400
    { id: '9', icon: Icons.Python, brand: '#fbbf24', label: 'Py', exp: '3 Years', projects: 14 }, // amber-400
    { id: '10', icon: Icons.Postgres, brand: '#60a5fa', label: 'SQL', exp: '2 Years', projects: 6 }, // blue-400
    { id: '11', icon: Icons.Mongo, brand: '#4ade80', label: 'MDB', exp: '2 Years', projects: 5 }, // green-400
    { id: '12', icon: Icons.Docker, brand: '#3b82f6', label: 'Dck', exp: '1 Year', projects: 4 }, // blue-500
    { id: '13', icon: Icons.AWS, brand: '#fb923c', label: 'AWS', exp: '1 Year', projects: 3 }, // orange-400
    { id: '14', icon: Icons.Git, brand: '#f87171', label: 'Git', exp: '3 Years', projects: 30 }, // red-400
    { id: '15', icon: Icons.Github, brand: '#94a3b8', label: 'Hub', exp: '3 Years', projects: 30 }, // slate-400
    { id: '16', icon: Icons.Linux, brand: '#facc15', label: 'Lin', exp: '2 Years', projects: 5 }, // yellow-400
];

interface TechKeyboardProps {
    onSelect?: (tech: typeof keys[0]) => void;
}

export function TechKeyboard({ onSelect }: TechKeyboardProps) {
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleSelect = (key: typeof keys[0]) => {
        const isNew = activeId !== key.id;
        const newId = isNew ? key.id : null;
        setActiveId(newId);
        if (onSelect) onSelect(isNew ? key : null as any);
    };

    return (
        <div className="w-full flex items-center justify-center p-8 py-20 overflow-visible select-none">
            <div className="relative" style={{ perspective: '1000px' }}>
                <motion.div
                    className="relative bg-[#18181b] p-6 rounded-3xl shadow-2xl"
                    initial={{ rotateX: 60, rotateZ: 25 }}
                    whileHover={{ rotateX: 55, rotateZ: 20 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        transformStyle: 'preserve-3d',
                        width: '360px',
                        height: '360px',
                        boxShadow: '40px 60px 80px -20px rgba(0,0,0,0.8)'
                    }}
                >
                    <div className="absolute inset-x-0 bottom-0 h-[40px] bg-[#101012] rounded-3xl transform translate-z-[-40px] shadow-xl" />
                    <div className="absolute top-full left-0 w-full h-[40px] bg-[#0c0c0e] origin-top rotate-x-[-90deg] rounded-b-xl" />
                    <div className="absolute top-0 right-0 h-full w-[40px] bg-[#1c1c20] origin-right rotate-y-[90deg] rounded-r-xl" />
                    <div className="absolute top-0 left-0 h-full w-[40px] bg-[#08080a] origin-left rotate-y-[-90deg] rounded-l-xl" />

                    <div className="grid grid-cols-4 gap-4 relative z-10" style={{ transformStyle: 'preserve-3d' }}>
                        {keys.map((key) => (
                            <VolumetricKey
                                key={key.id}
                                data={key}
                                isActive={activeId === key.id}
                                onClick={() => handleSelect(key)}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function VolumetricKey({ data, isActive, onClick }: { data: typeof keys[0], isActive: boolean, onClick: () => void }) {
    const [isHovered, setIsHovered] = useState(false);

    // Geometry Constants
    const baseHeight = 30;
    const pressHeight = 10;
    const keyThickness = 16;

    const isEngaged = isActive || isHovered;
    // Interactive Z-Height
    const targetZ = isActive ? pressHeight : (isHovered ? baseHeight + 5 : baseHeight);

    const brandColor = data.brand;

    // Material Logic: "Structural Accent"
    // Top is Neutral Dark Graphite.
    // Sides are Deep Brand Color.

    // Material Logic: "Colored Composite"
    // The entire key is made of a dark, matte material colored by the brand.

    // Mix brand color with dark grey to get a "Dark Muted" base.
    // Top surface: Slightly lighter, matte finish.
    const topBase = `color-mix(in srgb, ${brandColor} 15%, #27272a)`;
    const topShade = `color-mix(in srgb, ${brandColor} 15%, #18181b)`;
    const topMaterial = `linear-gradient(145deg, ${topBase}, ${topShade})`;

    // Sides: Darker, purer matte.
    const sideColor = `color-mix(in srgb, ${brandColor} 10%, #0f0f11)`;

    return (
        <div
            className="w-[70px] h-[70px] relative cursor-pointer"
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Hard Shadow - Pure Black, no blur for "manufactured" feel? User said "Shadows remain pure black" */}
            <motion.div
                className="absolute inset-1 rounded-xl bg-black"
                animate={{
                    opacity: isEngaged ? 0.6 : 0.8,
                    scale: isEngaged ? 0.98 : 1,
                    // Keep soft blur for ground shadow, but darker/denser
                    filter: `blur(${isEngaged ? '4px' : '8px'})`
                }}
            />

            {/* Key Body */}
            <motion.div
                className="absolute inset-0"
                style={{ transformStyle: 'preserve-3d' }}
                initial={false}
                animate={{ z: targetZ }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                {/* TOP FACE */}
                <div
                    className={cn(
                        "absolute inset-0 rounded-2xl flex flex-col items-center justify-center transition-all duration-300",
                        // Matte finish border - subtle
                        "border-t border-white/5 border-b border-black/50"
                    )}
                    style={{
                        transform: `translateZ(${keyThickness}px)`,
                        background: topMaterial,
                        // Matte texture effect - very subtle noise or grain could be good, but sticking to solid matte for now.
                        // Minimal bevel highlight
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.02)',
                    }}
                >
                    {/* Active Indicator - Small Mechanical LED */}
                    {isActive && (
                        <div
                            className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white/90"
                            style={{ boxShadow: 'none' }} // No glow, just light source
                        />
                    )}

                    {/* Icon - Strictly Neutral */}
                    <div
                        className={cn(
                            "w-8 h-8 relative z-10 transition-all duration-300",
                            isEngaged ? "text-white" : "text-[#71717a]" // Neutral-400
                        )}
                        style={{
                            // Engraved or Printed look
                            filter: isEngaged ? 'drop-shadow(0 1px 0 rgba(0,0,0,0.5))' : 'none',
                            transform: isEngaged ? 'scale(1.02)' : 'scale(1)'
                        }}
                    >
                        <data.icon />
                    </div>
                </div>

                {/* SIDES - Solid Matte Material */}

                {/* Front */}
                <div
                    className="absolute bottom-0 left-0 w-full origin-bottom rounded-b-md"
                    style={{
                        height: `${keyThickness}px`,
                        transform: `rotateX(-90deg)`,
                        background: sideColor,
                        filter: 'brightness(0.7)' // Naturally darker due to angle
                    }}
                />

                {/* Right */}
                <div
                    className="absolute top-0 right-0 h-full origin-right rounded-r-md"
                    style={{
                        width: `${keyThickness}px`,
                        transform: `rotateY(90deg)`,
                        background: sideColor,
                        filter: 'brightness(0.6)' // Darkest face usually
                    }}
                />

                {/* Left */}
                <div
                    className="absolute top-0 left-0 h-full origin-left rounded-l-md"
                    style={{
                        width: `${keyThickness}px`,
                        transform: `rotateY(-90deg)`,
                        background: sideColor,
                        filter: 'brightness(0.85)' // Slightly lighter side
                    }}
                />

                {/* Back */}
                <div
                    className="absolute top-0 left-0 w-full origin-top rounded-t-md"
                    style={{
                        height: `${keyThickness}px`,
                        transform: `rotateX(90deg)`,
                        background: sideColor,
                        filter: 'brightness(0.6)'
                    }}
                />

            </motion.div>
        </div>
    );
}

