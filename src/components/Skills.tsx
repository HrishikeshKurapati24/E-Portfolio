import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Server, Layout, Database, Brain, PenTool } from 'lucide-react';

// Skill Category Interface
interface SkillCategory {
    id: string;
    title: string;
    icon: React.ElementType;
    skills: string[];
    color: string;
}

const Skills: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    // Responsive State
    const [isMobile, setIsMobile] = useState(false);
    const [openCategory, setOpenCategory] = useState<string | null>(null);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Toggle Accordion (Mobile Only)
    const toggleCategory = (id: string) => {
        if (!isMobile) return;
        setOpenCategory(prev => (prev === id ? null : id));
    };

    const skillCategories: SkillCategory[] = [
        {
            id: 'core',
            title: 'Programming & Core',
            icon: Code,
            skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++'],
            color: 'text-blue-400'
        },
        {
            id: 'backend',
            title: 'Backend & APIs',
            icon: Server,
            skills: ['Node.js', 'FastAPI', 'REST', 'GraphQL', 'Supabase'],
            color: 'text-green-400'
        },
        {
            id: 'frontend',
            title: 'Frontend & UI',
            icon: Layout,
            skills: ['React', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'],
            color: 'text-purple-400'
        },
        {
            id: 'data',
            title: 'Data & Databases',
            icon: Database,
            skills: ['PostgreSQL', 'MongoDB', 'Pandas', 'NumPy'],
            color: 'text-blue-400'
        },
        {
            id: 'ml',
            title: 'Machine Learning & AI',
            icon: Brain,
            skills: ['PyTorch', 'Scikit-learn', 'Transformers', 'Hugging Face', 'GNNs'],
            color: 'text-green-400'
        },
        {
            id: 'tools',
            title: 'Tools & Collaboration',
            icon: PenTool,
            skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux'],
            color: 'text-purple-400'
        }
    ];

    return (
        <section id="skills" className="py-20 lg:py-32 relative overflow-hidden bg-[#010101]" ref={containerRef}>
            {/* Subtle Matrix Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
                        A balanced technical profile spanning full-stack development, data engineering, and AI systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors duration-300"
                        >
                            {/* Header (Always Visible) */}
                            <div
                                onClick={() => toggleCategory(category.id)}
                                className={`px-5 py-4 flex items-center justify-between ${isMobile ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <div className="flex items-center space-x-3">
                                    <category.icon className={`w-5 h-5 ${category.color}`} />
                                    <h3 className="text-lg font-semibold text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                {isMobile && (
                                    <motion.div
                                        animate={{ rotate: openCategory === category.id ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    </motion.div>
                                )}
                            </div>

                            {/* Content */}
                            <AnimatePresence initial={false}>
                                {(!isMobile || openCategory === category.id) && (
                                    <motion.div
                                        initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 1 }}
                                        animate={isMobile ? { height: 'auto', opacity: 1 } : { opacity: 1 }}
                                        exit={isMobile ? { height: 0, opacity: 0 } : undefined}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-5 pb-5 pt-0">
                                            {/* Divider */}
                                            <div className="w-full h-px bg-gray-800 mb-4"></div>

                                            {/* Chips Container */}
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        whileHover={{ y: -2, scale: 1.02 }}
                                                        className={`px-3 py-1.5 rounded-full text-sm font-medium border border-gray-700/50 bg-gray-800/40 text-gray-300 hover:text-white hover:border-${category.color.split('-')[1]}-400/50 hover:bg-gray-800 transition-all duration-200 cursor-default`}
                                                    >
                                                        {skill}
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
