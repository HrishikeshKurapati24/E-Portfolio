import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { stagger, fadeUp } from '../motion.config';
import { Typewriter } from './ui/typewriter';
import astroIcon from '../assets/images/icons/astro.png';
import teslaIcon from '../assets/images/icons/tesla.png';
import jobSculptorIcon from '../assets/images/icons/jobsculptor.png';
import xBladeIcon from '../assets/images/icons/x-blade.png';

const About: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    const [currentCard, setCurrentCard] = useState(0);

    const achievements = [
        {
            title: "Education",
            items: [
                { label: "IIIT Sri City", value: "CSE(2023-2027) GPA: 8.78*", color: "text-blue-400" },
                { label: "Resonance Junior College", value: "Intermediate MPC(2021-2023) GPA: 9.63", color: "text-green-400" },
                { label: "Presidency High School", value: "Class I - X(2011 - 2021) GPA: 10.0", color: "text-purple-400" }
            ]
        },
        {
        title: "Skills",
        items: [
            { label: "Machine Learning", value: "PyTorch, Hugging Face, Scikit-learn", color: "text-green-400" },
            { label: "Deep Learning & NLP", value: "Transformers, Longformer, DistilRoBERTa", color: "text-blue-400" },
            { label: "Graph ML", value: "GNNs, Node2Vec, GraphSAGE, GAT", color: "text-purple-400" },
            { label: "Web Development", value: "React, Tailwind, Node.js", color: "text-yellow-400" },
            { label: "Data Handling", value: "Python, Pandas, SQL, APIs", color: "text-red-400" },
            { label: "Collaboration Tools", value: "Git, GitHub", color: "text-pink-400" }
        ]
        },
        {
        title: "Projects",
        items: [
            { 
            label: "Mental Health Sentiment Analyzer", 
            value: "Longformer-based multi-label mental health text classifier", 
            color: "text-primary" 
            },
            { 
            label: "CollabSync", 
            value: "Platform connecting brands & influencers with campaign tools", 
            color: "text-green-400" 
            },
            { 
            label: "YelpCamp", 
            value: "Full-stack web app for sharing and reviewing campgrounds.", 
            color: "text-yellow-400" 
            }
        ]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prev) => (prev + 1) % achievements.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentCard(index);
    };

    return (
        <section id="about" className="py-16 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#010101' }} ref={containerRef}>
            {/* Subtle Matrix Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-green-400 text-xs font-mono"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 0.3, 0],
                                y: [0, 20, 0],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        >
                            {Math.random() > 0.5 ? '01' : '10'}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Visual Side - Clean Achievement Cards */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative mx-4 sm:mx-0">
                            {/* Main Achievement Card */}
                            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden min-h-[350px] sm:min-h-[400px]">
                                {/* Card Header */}
                                <div className="bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white font-semibold text-base sm:text-lg">
                                            {achievements[currentCard].title}
                                        </h3>
                                        <div className="flex space-x-1">
                                            {achievements.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleDotClick(index)}
                                                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none ${index === currentCard
                                                        ? 'bg-primary shadow-lg shadow-primary/30'
                                                        : 'bg-gray-600 hover:bg-gray-500'
                                                        }`}
                                                    aria-label={`View ${achievements[index].title}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-4 sm:p-6">
                                    <motion.div
                                        key={currentCard}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-4 sm:space-y-6"
                                    >
                                        {achievements[currentCard].items.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg border border-gray-700 space-y-1 sm:space-y-0"
                                            >
                                                <span className="text-gray-400 font-medium text-sm sm:text-base">
                                                    {item.label}
                                                </span>
                                                <span className={`font-bold text-base sm:text-lg ${item.color}`}>
                                                    {item.value}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                            {/* Subtle Background Elements - Hide on mobile to reduce clutter */}
                            <motion.div
                                className="absolute top-1/4 -left-8 w-4 h-4 bg-primary/20 rounded-full hidden sm:block"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.2, 0.4, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute bottom-1/4 -right-8 w-3 h-3 bg-secondary/20 rounded-full hidden sm:block"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2,
                                }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;