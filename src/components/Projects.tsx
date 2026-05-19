import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { fadeUp, stagger } from '../motion.config';
import { ArrowUpRight, Github, ExternalLink, X, Calendar, Code2, Layers } from 'lucide-react';

// Import project banner images
import mentalHealthClassifierBanner from '../assets/images/projects/mentalhealthclassifier_banner.png';
import collabSyncBanner from '../assets/images/projects/collabsync_banner.png';
import leanFeastImage from '../assets/images/projects/leanfeast_banner.png';
import cdrpModelArchitecture from '../assets/images/projects/cdrp_banner.png';
import brainTumorBanner from '../assets/images/projects/brain_tumor_banner.png';

const Projects: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const projectItems = [
        {
            id: "lean-feast-ai",
            title: "LeanFeastAI",
            subtitle: "End-to-End AI Culinary Platform with RAG Pipeline",
            description: "An AI-powered cooking platform that generates personalized recipes using RAG, optimizes meals for dietary goals, and supports hands-free voice guidance.",
            tags: ["Full Stack", "AI & LLM", "React", "FastAPI", "RAG"],
            image: leanFeastImage,
            link: "#",
            fileName: "LeanFeastAI.exe",
            detailedDescription: `An end-to-end AI culinary platform built with React (Frontend) and FastAPI (Backend). It features a RAG-based pipeline using Gemini 2.5 and Pinecone to generate personalized recipes, enriched with real-time nutritional data and asynchronous AI image generation.

            Key capabilities include an intelligent dietary optimization engine that adapts recipes for specific health goals (e.g., "Make it Keto") and a hands-free voice interface using command recognition for seamless kitchen navigation. The platform also includes a community hub and admin dashboard that uses Supabase Realtime for live data synchronization.`,
            features: [
                "RAG-Based Recipe Generation using Gemini 2.5 & Pinecone",
                "Hands-Free Voice Control with Custom Wake-Word ('LeanFeast')",
                "Intelligent Dietary Optimization Engine (Context-Aware Substitutions)",
                "Asynchronous Image Generation with Background Polling",
                "Real-time Nutritional Breakdown via Spoonacular API",
                "Live Admin Dashboard  powered by Supabase Realtime",
                "Optimistic UI Community Hub with Weighted Engagement Sorting"
            ],
            technologies: [
                "React 19 & TypeScript",
                "FastAPI & Python 3.11",
                "LangChain & Gemini 2.5",
                "Pinecone (Vector DB)",
                "Supabase (Auth, Postgres & Realtime)",
                "Redux Toolkit",
                "Tailwind CSS 4",
                "Web Speech API & Porcupine"
            ],
            github: "https://github.com/HrishikeshKurapati24/LeanFeastAI",
            demo: "https://lean-feast-ai.vercel.app"
        },
        {
            id: "Mental Health Sentiment Analysis",
            title: "Mental Health Sentiment Analysis",
            subtitle: "AI-Powered Mental Health Sentiment Analysis",
            description: "A multi-label NLP system that detects depression, anxiety, and stress from long-form text using Longformer with explainable AI insights.",
            tags: ["NLP", "Mental Health", "Text Classification", "Explainable AI", "SHAP", "Cohere API", "Machine Learning", "AI for Healthcare", "Longformer", "Gradio"],
            image: mentalHealthClassifierBanner,
            link: "#",
            fileName: "MentalHealthClassifier.exe",
            detailedDescription: "Fine-tuned Longformer on a heterogeneous dataset of 54,500+ samples, achieving 89% F1-score for multi-label classification of complex mental health states. Architected a robust ingestion system using PRAW and BeautifulSoup to scrape 20+ niche forums, implementing Regex/TF-IDF cleaning pipelines and augmenting data with 20,500+ synthetic samples via ChatGPT. Designed a Human-in-the-Loop labeling workflow utilizing Gemini and Cohere APIs to annotate 17,000+ raw texts using agreement-based validaton.",
            features: [
                "Multi-label classification (Neutral, Depression, Anxiety, Stress)",
                "Phrase-level SHAP explainability for model transparency",
                "LLM-powered summarization (Cohere API) for instant insights",
                "Privacy-first design with processing done on inference"
            ],
            technologies: [
                "Longformer (Hugging Face)",
                "PyTorch",
                "Gradio",
                "PRAW (Reddit Scraper)",
                "Cohere & Gemini APIs",
                "Pandas/Scikit-learn"
            ],
            github: "https://github.com/HrishikeshKurapati24/Mental-Health-Sentiment-Analyser",
            demo: "https://huggingface.co/spaces/Hrishikesh4/mental-health-emotion-classifier?logs=container"
        },
        {
            id: "CollabSync",
            title: "CollabSync",
            subtitle: "Multi-Role Influencer Marketing & E-Commerce Platform",
            description: "A full-stack influencer marketing platform with 170 REST endpoints, 95.3% latency reduction via Redis caching, and a complete campaign-to-e-commerce lifecycle.",
            tags: ["Full Stack", "Node.js", "React", "MongoDB", "Redis"],
            image: collabSyncBanner,
            link: "#",
            fileName: "CollabSync.exe",
            detailedDescription: `CollabSync is a multi-role influencer marketing platform built on a decoupled full-stack architecture (Node.js + Express.js backend, React frontend). It handles the complete campaign lifecycle — from brand-influencer matchmaking and collaboration management to real-time analytics, subscription billing, and a direct-to-consumer e-commerce layer.

I led a full backend refactor into a layered service architecture (services/, controllers/, routes/) and engineered significant performance improvements: Redis caching cut Brand Dashboard load time by 95.3% (650.5ms → 30.4ms) and Influencer Dashboard by 94.1% (482.1ms → 28.5ms). I also built 170 REST API endpoints, 14 Mongoose models, and authored the entire GitHub Actions CI pipeline covering 154 passing tests across 22 Jest suites.`,
            features: [
                "95.3% latency reduction on Brand Dashboard via Redis caching (650ms → 30ms)",
                "170 REST API endpoints with layered service architecture",
                "Referral-based product ordering system with full edge-case handling",
                "GitHub Actions CI/CD: 154 tests across 22 Jest suites",
                "Real-time WebSocket sync via Supabase Realtime",
                "Role-Based Access Control (Brand, Influencer, Customer, Admin)"
            ],
            technologies: [
                "React & Redux Toolkit",
                "Node.js & Express.js",
                "MongoDB & Mongoose",
                "Redis (Caching)",
                "GitHub Actions (CI/CD)",
                "Jest & Supertest",
                "JWT & bcrypt",
                "Cloudinary"
            ],
            github: "https://github.com/HrishikeshKurapati24/FFSD-Project",
            demo: "https://ffsd-project-six.vercel.app/"
        },
        {
            id: "cdrp-gnn-project",
            title: "FUSE-CDR: Cancer Drug Response Prediction",
            subtitle: "Heterogeneous GNN Framework for Precision Oncology",
            description: "A novel heterogeneous graph learning framework predicting cancer drug response with AUC 0.9359 on GDSC, outperforming 5 baseline architectures across 117,330 drug-cell response pairs.",
            tags: ["Deep Learning", "Bioinformatics", "GNN", "PyTorch Geometric", "Research"],
            image: cdrpModelArchitecture,
            link: "#",
            fileName: "Honors_Project.exe",
            detailedDescription: `FUSE-CDR (Flexible Unified Sequential Encoding of Omics-based Cancer Drug Response) is a novel heterogeneous graph learning framework for predicting cancer drug responses. It combines biologically-guided multi-omics fusion with a dual-branch GNN architecture (GraphSAGE + HGT), modeling complex relationships between cancer cell-lines and drugs across 7 omics modalities.

Benchmarked on GDSC (456 cell lines, 297 drugs, 117,330 pairs) and CCLE datasets:
• AUC 0.9359 on GDSC random split (+11.32% vs GADRP, +6.26% vs DeepTTC)
• AUC 0.8945 on GDSC Unseen Cells (+14.92% vs GraphCDR, +18.78% vs DeepTTC)
• Strict 5-fold cross-validation across 4 inductive split strategies`,
            features: [
                "AUC 0.9359 on GDSC — outperforms 5 baseline GNN architectures",
                "Dual-branch GNN: GraphSAGE (local) + HGT (global) with attention aggregation",
                "Biologically-guided multi-omics fusion across 7 modalities (Genomics, Epigenomics, Transcriptomics)",
                "Heterogeneous graph: 117,330 drug-cell pairs on GDSC with Top-k cosine similarity edges",
                "Supervised Contrastive Learning for representation robustness",
                "4 strict inductive benchmarking splits (Random, Unseen Cells, Unseen Drugs, Unseen Both)"
            ],
            technologies: [
                "PyTorch & PyTorch Geometric",
                "GraphSAGE & HGT",
                "RDKit & DeepChem",
                "scikit-learn",
                "GDSC & CCLE Datasets"
            ],
            github: "https://github.com/HrishikeshKurapati24/Honors_Project",
            demo: "#"
        },
        {
            id: "brain-tumor-segmentation",
            title: "3D Brain Tumor Segmentation",
            subtitle: "ResUNet3D with Learnable Fusion on BraTS 2021",
            description: "A 3D medical image segmentation framework achieving Macro Dice 0.8292 (+21% over baseline) by combining a ResUNet3D backbone with a learnable multimodal fusion module trained on BraTS 2021.",
            tags: ["Deep Learning", "Medical Imaging", "PyTorch", "3D Segmentation", "Research"],
            image: brainTumorBanner,
            link: "#",
            fileName: "BrainTumorSeg.exe",
            detailedDescription: `An advanced 3D brain tumor segmentation framework leveraging a Learnable Weighted Fusion Module integrated with a 3D Residual U-Net (ResUNet3D) backbone, trained and evaluated on the BraTS 2021 dataset.

Key results:
• Macro Tumor Dice: 0.8292 (+21% over baseline 0.6851)
• Tumor Core (TC) Dice: 0.9056 (baseline: 0.8504)
• Enhancing Tumor (ET) Dice: 0.8430 (+13.6% via Combined Dice+Focal Loss)
• Whole Tumor (WT) Dice: 0.8563

I independently implemented the ResUNet3D backbone, custom Combined Dice+Focal Loss, AMP-based training pipeline, and the evaluation engine — trained within 16GB VRAM constraints on Kaggle T4 GPUs using gradient accumulation.`,
            features: [
                "Macro Dice 0.8292 — +21% over ResUNet3D baseline via Learnable Fusion",
                "Tumor Core Dice 0.9056 using Learnable Softmax-Weighted Fusion of 4 MRI modalities",
                "+13.6% Enhancing Tumor accuracy with Combined Dice + Focal Loss",
                "PyTorch AMP + 4-step Gradient Accumulation within 16GB VRAM (Kaggle T4)",
                "Ablation studies: ResUNet skip connections vs CNN, Learnable vs Mean Fusion",
                "Tumor-Centric 3D patch sampler on 98³ voxel volumes"
            ],
            technologies: [
                "PyTorch & CUDA",
                "ResUNet3D Backbone",
                "Automatic Mixed Precision (AMP)",
                "scikit-learn",
                "Matplotlib",
                "BraTS 2021 Dataset"
            ],
            github: "https://github.com/HrishikeshKurapati24/Brain-tumor-segmentation-using-Learnable-ResUnet-3D",
            demo: "#"
        }
    ];

    return (
        <section
            id="projects"
            className="py-24 sm:py-32 bg-black relative"
            ref={ref}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <motion.div
                    className="mb-16 md:mb-24"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Featured <span className="text-gray-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        A curated selection of technical solutions, research implementations, and full-stack applications.
                    </p>
                </motion.div>

                {/* Vertical Project List / Grid */}
                <div className="space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
                    {projectItems.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                            className="group h-full"
                        >
                            <div className="flex flex-col h-full bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
                                {/* Project Preview Image */}
                                <div
                                    className="relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />

                                    {/* Action Button Overlay */}
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                                            className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                                        >
                                            <ArrowUpRight size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="space-y-2 mb-6">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-lg text-gray-300 font-medium">
                                            {project.subtitle}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-400 leading-relaxed line-clamp-3 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-6 pt-2 border-t border-white/5 mt-auto">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="text-white font-medium border-b border-white hover:border-gray-500 pb-0.5 transition-colors"
                                        >
                                            View more details
                                        </button>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {((project.demo && project.demo !== '#' && project.demo !== '') || project.link !== '#') && (
                                            <a
                                                href={project.demo && project.demo !== '#' ? project.demo : project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                            className="relative w-full max-w-5xl h-[90vh] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                        >
                            {/* Scrollable Container */}
                            <div className="overflow-y-auto flex-1 custom-scrollbar">
                                {/* Banner Image */}
                                <div className="relative h-[40vh] min-h-[300px] w-full">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/50 to-transparent" />

                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
                                    >
                                        <X size={24} />
                                    </button>

                                    <div className="absolute bottom-8 left-6 md:left-10 right-6">
                                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                                            {selectedProject.title}
                                        </h2>
                                        <p className="text-xl text-gray-300 font-medium">
                                            {selectedProject.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="grid grid-cols-1 ml-6 lg:grid-cols-3 gap-10 p-6 md:p-10">
                                    {/* Main Description */}
                                    <div className="lg:col-span-2 space-y-10">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-wider">
                                                <Code2 size={16} />
                                                <span>Project Overview</span>
                                            </div>
                                            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                                                {selectedProject.detailedDescription}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-wider">
                                                <Layers size={16} />
                                                <span>Key Features</span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {selectedProject.features.map((feature: string, idx: number) => (
                                                    <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sidebar Info */}
                                    <div className="space-y-8">
                                        <div className="p-6 bg-white/5 rounded-xl border border-white/5 space-y-6">
                                            <div>
                                                <h4 className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Tech Stack</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedProject.technologies.map((tech: string, idx: number) => (
                                                        <span key={idx} className="px-2 py-1 text-xs text-white bg-white/10 rounded border border-white/10">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="pt-6 border-t border-white/10 space-y-3">
                                                {selectedProject.github && (
                                                    <a
                                                        href={selectedProject.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                                    >
                                                        <Github size={18} />
                                                        <span>View Source</span>
                                                    </a>
                                                )}
                                                {((selectedProject.demo && selectedProject.demo !== '#' && selectedProject.demo !== '') || selectedProject.link !== '#') && (
                                                    <a
                                                        href={selectedProject.demo && selectedProject.demo !== '#' ? selectedProject.demo : selectedProject.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors"
                                                    >
                                                        <ExternalLink size={18} />
                                                        <span>Live Demo</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;