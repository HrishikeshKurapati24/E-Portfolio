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
            description: "Decoupled SPAs with React & FastAPI/Node.js, backed by PostgreSQL and MongoDB with strict schema design"
        },
        {
            icon: <Cpu className="w-6 h-6 text-primary" />,
            title: "AI & Deep Learning",
            description: "RAG pipelines, fine-tuned Longformer models, GNN-based drug response prediction, and 3D medical image segmentation"
        },
        {
            icon: <Database className="w-6 h-6 text-primary" />,
            title: "Production Engineering",
            description: "CI/CD with GitHub Actions, Docker, real-time WebSockets, and cloud deployments on Vercel, Render & Hugging Face Spaces"
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
                                I'm a full-stack and AI engineer focused on building robust, intelligent, and user-centric systems at the intersection of software engineering and machine learning.
                            </p>
                            <p>
                                I'm passionate about designing scalable products that solve meaningful real-world problems — from LLM-powered web platforms and fine-tuned transformer models to GNN-based bioinformatics research and 3D medical imaging systems.
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
