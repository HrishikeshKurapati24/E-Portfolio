import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from './ui/typewriter';
import { SplineRobotNoSpotlight } from './ui/demo';

const Hero: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseOnScreen, setIsMouseOnScreen] = useState(false);

    useEffect(() => {
        const heroSection = document.getElementById('hero-section');

        const handleMouseMove = (e: MouseEvent) => {
            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                // Track mouse relative to the hero section
                setMousePosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        const handleMouseEnter = () => {
            setIsMouseOnScreen(true);
        };

        const handleMouseLeave = () => {
            setIsMouseOnScreen(false);
        };

        if (heroSection) {
            // Add event listeners to the hero section only
            heroSection.addEventListener('mousemove', handleMouseMove, { passive: true });
            heroSection.addEventListener('mouseenter', handleMouseEnter);
            heroSection.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                heroSection.removeEventListener('mousemove', handleMouseMove);
                heroSection.removeEventListener('mouseenter', handleMouseEnter);
                heroSection.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <section
            id="hero-section"
            className="min-h-screen flex items-center justify-center px-4 pt-20 relative"
            style={{ backgroundColor: '#010101' }}
        >
            {/* Hero-only spotlight that follows mouse - Behind all elements - Only when mouse is on screen */}
            {isMouseOnScreen && (
                <div
                    className="absolute pointer-events-none z-0"
                    style={{
                        left: mousePosition.x - 200,
                        top: mousePosition.y - 200,
                        width: 400,
                        height: 400,
                        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                        borderRadius: '50%',
                        filter: 'blur(30px)',
                        mixBlendMode: 'screen'
                    }}
                />
            )}

            {/* Hero Container - Transparent Background */}
            <div className="w-full max-w-7xl mx-auto p-8 lg:p-16 relative z-20">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen lg:min-h-0 w-full">
                    {/* Left Content */}
                    <div className="flex-1 space-y-6 flex flex-col justify-center lg:pr-8">
                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                Hey,
                                <br />
                                I am Hrishikesh
                            </h1>

                            {/* I'm a text with typewriter effect */}
                            <div className="flex items-start space-x-4">
                                <span className="text-3xl lg:text-4xl font-medium text-gray-300 leading-tight">I'm an aspiring</span>
                                <div className="flex-1 max-w-md">
                                    <Typewriter
                                        text={["ML Engineer", "Web Developer", "ML Research Scientist"]}
                                        speed={80}
                                        waitTime={2000}
                                        deleteSpeed={50}
                                        className="text-3xl lg:text-4xl text-white font-bold leading-tight"
                                        cursorChar="_"
                                        cursorClassName="ml-1 text-primary"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-xl text-gray-400 leading-relaxed max-w-lg"
                        >
                            I’m a computer science student passionate about building intelligent systems and modern web applications. My interests span machine learning engineering, web development, and research, where I enjoy bridging theory with practice to create real-world impact. I thrive at solving complex problems, whether it’s deploying scalable ML models, designing user-focused platforms, or exploring cutting-edge research questions. My goal is to contribute to innovative projects that push the boundaries of technology while delivering practical value to users.
                        </motion.p>
                    </div>

                    {/* Right Visual - Spline Robot (Centered) */}
                    <div className="flex-1 flex justify-center items-center relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="w-full h-[70vh] max-h-[800px] flex items-center justify-center"
                            style={{
                                overflow: 'visible'
                            }}
                        >
                            <SplineRobotNoSpotlight />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
