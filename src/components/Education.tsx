import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const educationData = [
        {
            institution: "IIIT Sri City",
            degree: "CSE",
            years: "2023 - 2027",
            gpa: "8.73",
            color: "text-blue-400",
            glowColor: "shadow-blue-500/50",
            current: true
        },
        {
            institution: "Resonance Junior College",
            degree: "Intermediate MPC",
            years: "2021 - 2023",
            gpa: "9.63",
            color: "text-green-400",
            glowColor: "shadow-green-500/50",
            current: false
        },
        {
            institution: "Presidency High School",
            degree: "Class I - X",
            years: "2011 - 2021",
            gpa: "10.0",
            color: "text-purple-400",
            glowColor: "shadow-purple-500/50",
            current: false
        }
    ];

    return (
        <section id="education" className="py-20 lg:py-32 relative overflow-hidden bg-[#010101]" ref={containerRef}>
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-gray-600 rounded-full opacity-20"
                            style={{
                                width: Math.random() * 2 + 'px',
                                height: Math.random() * 20 + 'px',
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 360}deg)`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Currently pursuing a Bachelor’s in Computer Science with strong academic performance.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Timberline Spine */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-700/60"></div>

                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative flex items-center"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-6 transform -translate-x-1/2 flex items-center justify-center z-10">
                                    <div
                                        className={`rounded-full border-2 bg-gray-900 transition-all duration-300 ${item.current ? `w-6 h-6 border-white/50 ${item.glowColor} shadow-[0_0_15px_rgba(0,0,0,0.5)]` : 'w-4 h-4 border-gray-600'}`}
                                    >
                                        {item.current && <div className={`w-full h-full rounded-full bg-white/20 animate-pulse`} />}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="w-full pl-16 md:pl-20 pr-4">
                                    <motion.div
                                        whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
                                        className={`bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 relative transition-all duration-300 group hover:border-gray-700 ${item.current ? 'border-gray-700/80' : ''}`}
                                    >
                                        <h3 className={`text-xl font-bold text-white mb-1 ${item.current ? 'text-white' : 'text-gray-200'}`}>
                                            {item.institution}
                                        </h3>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400 text-sm mb-3">
                                            <span>{item.degree}</span>
                                            <span className="mt-1 sm:mt-0 px-2 py-0.5 rounded-full bg-gray-800/50 text-xs border border-gray-700/50">
                                                {item.years}
                                            </span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-gray-500 text-sm font-medium mr-2">GPA:</span>
                                            <span className={`text-base font-bold ${item.color}`}>
                                                {item.gpa}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
