import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from './ui/typewriter';
import { SplineRobotNoSpotlight } from './ui/demo';

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOnScreen, setIsMouseOnScreen] = useState(false);

    useEffect(() => {
        const heroSection = document.getElementById('hero-section');
        if (!heroSection) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = heroSection.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        heroSection.addEventListener('mousemove', handleMouseMove, { passive: true });
        heroSection.addEventListener('mouseenter', () => setIsMouseOnScreen(true));
        heroSection.addEventListener('mouseleave', () => setIsMouseOnScreen(false));

        return () => {
            heroSection.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section
            id="hero-section"
            className="min-h-screen flex items-center relative overflow-hidden pt-28 lg:pt-32"
            style={{ backgroundColor: '#010101' }}
        >
            {/* Subtle spotlight */}
            {isMouseOnScreen && (
                <div
                    className="absolute pointer-events-none z-0"
                    style={{
                        left: mousePosition.x - 180,
                        top: mousePosition.y - 180,
                        width: 360,
                        height: 360,
                        background:
                            'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.25) 30%, transparent 65%)',
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                        mixBlendMode: 'screen',
                    }}
                />
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                            Hey,
                            <br />
                            I’m Hrishikesh Kurapati
                        </h1>

                        <div className="space-y-2">
                            <p className="text-2xl lg:text-3xl text-gray-300 font-medium">
                                Software Engineer building end-to-end systems
                            </p>

                            <div className="flex items-baseline gap-3">
                                <span className="text-lg text-gray-400">Across</span>
                                <Typewriter
                                    text={[
                                        'Backend',
                                        'Full-stack',
                                        'Applied AI',
                                        'System-driven applications',
                                    ]}
                                    speed={70}
                                    deleteSpeed={40}
                                    waitTime={2000}
                                    className="text-lg lg:text-xl font-semibold text-white"
                                    cursorChar="_"
                                    cursorClassName="ml-1 text-primary"
                                />
                            </div>
                        </div>

                        <p className="text-lg text-gray-400 max-w-xl">
                            I focus on strong fundamentals, clean design, and consistent
                            execution — building systems that scale beyond demos.
                        </p>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => {
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                            >
                                View Projects
                            </button>
                            <a
                                href="/resume.pdf"
                                className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:border-gray-400 transition"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Right visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative flex justify-center"
                        style={{ opacity: 0.75 }}
                    >
                        <div className="w-full h-[65vh] max-h-[720px]">
                            <SplineRobotNoSpotlight />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;