import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const features = [
        {
            icon: <Terminal className="w-6 h-6 text-primary" />,
            title: "Full-Stack Architecture",
            description: "Building systems with clear data flow & maintainable patterns"
        },
        {
            icon: <Cpu className="w-6 h-6 text-primary" />,
            title: "Intelligent Systems",
            description: "Applying AI/ML where it adds tangible value"
        },
        {
            icon: <Database className="w-6 h-6 text-primary" />,
            title: "Scalable Backend",
            description: "Designing reliable APIs and database schemas"
        }
    ];

    return (
        <section
            id="about"
            ref={ref}
            className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden"
        >
            {/* Background Gradient Mesh (Optional for 'Modern' feel) */}
            <div className="absolute top-0 right-0 p-20 opacity-20 bg-primary rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Col: Text Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            About Me
                        </h2>

                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                I’m a software engineer with strong core fundamentals and hands-on
                                experience building end-to-end systems that combine backend logic,
                                frontend interfaces, and intelligent components.
                            </p>
                            <p>
                                I focus on designing structured, reliable solutions rather than isolated
                                features. My goal is to bridge the gap between complex machine learning models
                                and practical, user-centric applications.
                            </p>
                        </div>

                        <div className="pt-4">
                            <p className="text-gray-400 italic border-l-2 border-primary pl-4">
                                "I strongly believe in a long-term approach to growth — consistent
                                effort, disciplined execution, and trust in the process."
                            </p>
                        </div>
                    </div>

                    {/* Right Col: Visual Features */}
                    <div className="grid gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-zinc-900 border border-white/5">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
