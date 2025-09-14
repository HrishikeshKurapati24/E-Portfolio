import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, stagger } from '../motion.config';
import { Win98Button } from './ui/win-98-button';
import { Minus, Square, X, FolderOpen } from 'lucide-react';

// Import project banner images
import mentalHealthClassifierBanner from '../assets/images/projects/mentalhealthclassifier_banner.png';
import collabSyncBanner from '../assets/images/projects/collabsync_banner.png';
import yelpCampBanner from '../assets/images/projects/yelpcamp_banner.png';

// Import cursor images
import mouseArrow from '../assets/images/icons/mouse_arrow.png';
import mouseHand from '../assets/images/icons/mouse_hand.png';

const Projects: React.FC = () => {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [openedWindows, setOpenedWindows] = useState<number[]>([]);
    const [showInstructions, setShowInstructions] = useState(true);
    const [loadingWindows, setLoadingWindows] = useState<number[]>([]);
    const [windowContent, setWindowContent] = useState<{ [key: number]: string[] }>({});
    const [windowZIndex, setWindowZIndex] = useState<{ [key: number]: number }>({});
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    // Mobile double-tap detection
    const [lastTap, setLastTap] = useState<{ [key: number]: number }>({});

    const projectItems = [
        {
            id: "Mental Health Sentiment Analysis",
            title: "Mental Health Sentiment Analysis",
            subtitle: "AI-Powered Mental Health Sentiment Analysis",
            description: "A complete workflow for building a mental health text classifier with an interactive app for predictions, SHAP-based explainability, and text summarization powered by the Cohere API.",
            tags: ["NLP", "Mental Health", "Text Classification", "Explainable AI", "SHAP", "Cohere API", "Machine Learning", "AI for Healthcare"],
            image: mentalHealthClassifierBanner,
            link: "#",
            fileName: "MentalHealthClassifier.exe",
            detailedDescription: "This app uses a fine-tuned Longformer model for multi-label text classification to detect potential signs of depression, anxiety, and stress in user text. It is a non-clinical tool for early detection of mental health risks, designed to be integrated into wellness or therapy support applications. The app also provides explainable predictions with SHAP and concise summaries of the text using the Cohere API. It handles long, complex narratives, such as journals or chatbot interactions, by leveraging the Longformer's extended context window.",
            features: [
                "Multi-label classification of user text into categories: depression, anxiety, stress, and neutral.",
                "Explainable AI: SHAP visualizations to help users understand the model's predictions.",
                "Summary generation: Summarizes analyzed text using the Cohere API.",
                "User-friendly web interface: Built with Gradio.",
                "Deployment: Can be deployed on Hugging Face Spaces."
            ],
            technologies: [
                "Language Model: Fine-tuned Longformer.",
                "Summarization: Cohere API.",
                "Frameworks: Hugging Face Transformers, PyTorch.",
                "Interface: Gradio.",
                "Explainability: SHAP.",
                "Deployment: Hugging Face Spaces."
            ],
            github: "https://github.com/HrishikeshKurapati24/Mental-Health-Sentiment-Analyser",
            demo: "https://huggingface.co/spaces/Hrishikesh4/mental-health-emotion-classifier"
        },
        {
            id: "CollabSync",
            title: "CollabSync",
            subtitle: "The Ultimate Influencer-Brand Collaboration Platform",
            description: "CollabSync is a platform that simplifies the process of connecting brands with influencers for marketing and collaboration purposes. It helps both parties maximize growth, engagement, and revenue. The platform provides features for brands to create and manage campaigns and for influencers to apply for collaborations and track their performance.",
            tags: ["influencer marketing", "brand collaboration", "digital marketing", "social media", "collaboration platform", "brand-influencer partnerships"],
            image: collabSyncBanner,
            link: "#",
            fileName: "CollabSync.exe",
            detailedDescription: "CollabSync is an influencer marketing platform that connects brands with influencers for collaborative campaigns. Brands can create campaigns, discover influencers, and track performance. Influencers can apply for campaigns and manage collaborations. The platform includes analytics, progress tracking, and a commission-based monetization model.",

            features: [
                "Multi-role authentication (Brands, Influencers, Admin)",
                "Campaign creation and management",
                "Influencer discovery and matching",
                "Real-time collaboration requests",
                "Analytics dashboard with performance metrics",
                "Progress tracking system",
                "Payment and commission management",
                "Admin panel for platform oversight",
                "File upload and media management",
                "Responsive design"
            ],

            technologies: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "EJS",
                "JavaScript",
                "Bootstrap",
                "Chart.js",
                "Cloudinary",
                "bcrypt",
                "JWT"
            ],

            github: "https://github.com/HrishikeshKurapati24/CollabSync",

            demo: "N/A"
        },
        {
            id: "YelpCamp",
            title: "YelpCamp",
            subtitle: "A full-stack web application for discovering, sharing, and reviewing campgrounds.",
            description: "YelpCamp is a full-stack web application that allows users to discover, share, and review campgrounds. It features user authentication, image uploads, interactive maps, and a review system, all built with a focus on security and a mobile-friendly design.",
            tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "Cloudinary", "MapTiler", "EJS", "Bootstrap 5", "Joi", "Helmet", "bcrypt"],
            image: yelpCampBanner,
            link: "#",
            fileName: "YelpCamp.exe",
            detailedDescription: "YelpCamp is a comprehensive campground discovery and review platform that allows outdoor enthusiasts to find, share, and review camping locations. The application features a robust user authentication system, interactive maps for location discovery, image upload capabilities, and a comprehensive review system. Built with security and mobile responsiveness as core principles.",
            features: [
                "User authentication and authorization",
                "Campground discovery with interactive maps",
                "Image upload and management",
                "Review and rating system",
                "Search and filtering capabilities",
                "Mobile-responsive design"
            ],
            technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Passport.js", "Cloudinary", "MapTiler", "EJS", "Bootstrap 5", "Joi", "Helmet", "bcrypt"],
            github: "https://github.com/HrishikeshKurapati24/YelpCamp",
            demo: "N/A"
        }
    ];

    const handleWindowAction = (action: string, projectIndex: number) => {
        if (action === 'close') {
            // Remove window from opened windows
            setOpenedWindows(prev => prev.filter(index => index !== projectIndex));
            // Clear window content
            setWindowContent(prev => {
                const newContent = { ...prev };
                delete newContent[projectIndex];
                return newContent;
            });
            // Clear window z-index
            setWindowZIndex(prev => {
                const newZIndex = { ...prev };
                delete newZIndex[projectIndex];
                return newZIndex;
            });
        } else if (action === 'minimize') {
            // For minimize, we'll just bring the window to the back (simulate minimizing)
            const currentMinZ = Math.min(...Object.values(windowZIndex), 0);
            setWindowZIndex(prev => ({ ...prev, [projectIndex]: currentMinZ - 1 }));
        } else if (action === 'maximize') {
            // For maximize, we'll bring the window to the front and make it larger
            const currentMaxZ = Math.max(...Object.values(windowZIndex), 0);
            setWindowZIndex(prev => ({ ...prev, [projectIndex]: currentMaxZ + 1 }));
        }
    };

    const openModal = (project: any) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    useEffect(() => {
        // Test if cursor images are accessible
        const testArrow = new Image();
        const testHand = new Image();

        testArrow.onload = () => console.log('Arrow cursor image loaded successfully');
        testArrow.onerror = () => console.error('Failed to load arrow cursor image');
        testArrow.src = `${process.env.PUBLIC_URL}/mouse_arrow_24.png`;

        testHand.onload = () => console.log('Hand cursor image loaded successfully');
        testHand.onerror = () => console.error('Failed to load hand cursor image');
        testHand.src = `${process.env.PUBLIC_URL}/mouse_hand_24.png`;
    }, []);

    // Handle icon double-click/double-tap
    const handleIconInteraction = (index: number) => {
        if (!openedWindows.includes(index)) {
            // Add window to opened windows and set z-index
            const currentZIndex = Math.max(...Object.values(windowZIndex), 0) + 1;
            setWindowZIndex(prev => ({ ...prev, [index]: currentZIndex }));
            setOpenedWindows(prev => [...prev, index]);
            setLoadingWindows(prev => [...prev, index]);

            // Hide instructions after first click
            if (showInstructions) {
                setShowInstructions(false);
            }

            // Start loading sequence
            setTimeout(() => {
                startLoadingSequence(index);
            }, 2000); // Show loading for 2 seconds
        }
    };

    // Mobile touch handler for double-tap detection
    const handleTouchEnd = (index: number) => {
        const now = Date.now();
        const lastTapTime = lastTap[index] || 0;
        const timeDiff = now - lastTapTime;

        if (timeDiff < 300 && timeDiff > 0) {
            // Double tap detected
            handleIconInteraction(index);
        }

        setLastTap(prev => ({ ...prev, [index]: now }));
    };

    // Window content elements for progressive loading
    const getWindowElements = (index: number) => {
        const project = projectItems[index];
        return [
            'title',
            'subtitle',
            'description',
            'buttons',
            'image'
        ];
    };

    // Start loading sequence for window content
    const startLoadingSequence = (index: number) => {
        setLoadingWindows(prev => prev.filter(w => w !== index));
        const elements = getWindowElements(index);

        elements.forEach((element, i) => {
            setTimeout(() => {
                setWindowContent(prev => ({
                    ...prev,
                    [index]: [...(prev[index] || []), element]
                }));
            }, i * 500); // Load each element with 500ms delay
        });
    };

    // Bring window to front when clicked
    const bringToFront = (index: number) => {
        const currentMaxZ = Math.max(...Object.values(windowZIndex), 0);
        if (windowZIndex[index] !== currentMaxZ) {
            setWindowZIndex(prev => ({ ...prev, [index]: currentMaxZ + 1 }));
        }
    };

    return (
        <section
            id="projects"
            className="py-32 projects-section"
            style={{
                backgroundColor: '#c0c0c0',
                cursor: `url(${process.env.PUBLIC_URL}/mouse_arrow_24.png) 2 2, auto`
            }}
            ref={ref}
        >
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <motion.div
                    className="text-center mb-16 relative"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black font-mono">
                        Featured <span className="text-[#000080]">Projects</span>
                    </h2>
                    <p className="text-black text-lg max-w-2xl mx-auto font-mono">
                        A showcase of applications and games that have reached thousands of users worldwide
                    </p>

                </motion.div>

                {/* Instructions */}
                {showInstructions && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-3 sm:p-4 inline-block mx-4">
                            <p className="text-black font-mono text-xs sm:text-sm flex items-center justify-center space-x-2">
                                <span className="text-base sm:text-lg">👆</span>
                                <span className="hidden sm:inline">Double-click on any program icon below to open it</span>
                                <span className="sm:hidden">Double-tap any icon below to open it</span>
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* Desktop Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16 mb-8 sm:mb-16 px-4"
                >
                    {projectItems.map((project, i) => (
                        <motion.div
                            key={`icon_${i}`}
                            id={`exe-icon-${i}`}
                            className="flex flex-col items-center space-y-2 cursor-pointer select-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            onDoubleClick={() => handleIconInteraction(i)}
                            onTouchEnd={() => handleTouchEnd(i)}
                            style={{
                                filter: openedWindows.includes(i) ? 'grayscale(0.5) opacity(0.6)' : 'none',
                                cursor: `url(${process.env.PUBLIC_URL}/mouse_hand_24.png) 12 12, pointer`
                            }}
                        >
                            <motion.div
                                className="p-2 hover:bg-blue-200/30 rounded transition-colors"
                                whileTap={{ scale: 0.95 }}
                            >
                                <img
                                    src={`${process.env.PUBLIC_URL}/exe-icon.png`}
                                    alt={project.fileName}
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                                    style={{ imageRendering: 'pixelated' }}
                                />
                            </motion.div>
                            <span className="text-black text-xs font-mono bg-white px-2 py-1 rounded border border-gray-400 shadow-sm text-center max-w-[100px] sm:max-w-[120px] break-words">
                                {project.fileName}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Windows 98 Style Project Windows */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 sm:space-y-6"
                >
                    {/* Render windows in reverse order so newest appears on top */}
                    {[...openedWindows].reverse().map((windowIndex) => {
                        const project = projectItems[windowIndex];
                        const i = windowIndex;
                        return (
                            <motion.div
                                key={`project_${i}`}
                                variants={fadeUp}
                                initial={{ opacity: 0, scale: 0.8, y: -50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "backOut" }}
                                className="w-full flex justify-center px-2 sm:px-4"
                                onClick={() => bringToFront(i)}
                            >
                                {/* Windows 98 Window */}
                                <div
                                    className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-lg max-w-4xl w-full"
                                    style={{ zIndex: windowZIndex[i] || 1 }}
                                >
                                    {/* Title Bar */}
                                    <div className="bg-gradient-to-r from-[#0054E3] to-[#0044D3] text-white px-2 py-1 flex justify-between items-center">
                                        <div className="flex items-center space-x-2">
                                            <FolderOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                                            <span className="font-bold text-xs sm:text-sm truncate">{project.fileName}</span>
                                        </div>
                                        <div className="flex space-x-1">
                                            {/* Window Controls with Win98Button */}
                                            <Win98Button
                                                onClick={() => handleWindowAction('minimize', i)}
                                                className="!w-3 !h-3 sm:!w-4 sm:!h-4 !min-w-0 !p-0 win98-button"
                                                style={{ cursor: `url(${process.env.PUBLIC_URL}/mouse_hand_24.png) 2 2, pointer` }}
                                            >
                                                <Minus className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-black" />
                                            </Win98Button>
                                            <Win98Button
                                                onClick={() => handleWindowAction('maximize', i)}
                                                className="!w-3 !h-3 sm:!w-4 sm:!h-4 !min-w-0 !p-0 win98-button"
                                                style={{ cursor: `url(${process.env.PUBLIC_URL}/mouse_hand_24.png) 2 2, pointer` }}
                                            >
                                                <Square className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-black" />
                                            </Win98Button>
                                            <Win98Button
                                                onClick={() => handleWindowAction('close', i)}
                                                className="!w-3 !h-3 sm:!w-4 sm:!h-4 !min-w-0 !p-0 win98-button"
                                                style={{ cursor: `url(${process.env.PUBLIC_URL}/mouse_hand_24.png) 2 2, pointer` }}
                                            >
                                                <X className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-black" />
                                            </Win98Button>
                                        </div>
                                    </div>

                                    {/* Window Content */}
                                    <div className="p-3 sm:p-6 min-h-[300px] sm:min-h-[400px]">
                                        {loadingWindows.includes(i) ? (
                                            // Loading Screen
                                            <div className="flex flex-col items-center justify-center h-full min-h-[250px] sm:min-h-[300px] space-y-4 sm:space-y-6">
                                                <div className="text-center">
                                                    <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4 font-mono">
                                                        Loading {project.title}...
                                                    </h3>
                                                    <img
                                                        src={`${process.env.PUBLIC_URL}/Windows 95 Loading Bar.gif`}
                                                        alt="Loading..."
                                                        className="mx-auto max-w-[200px] sm:max-w-none"
                                                        style={{ imageRendering: 'pixelated' }}
                                                    />
                                                    <p className="text-xs sm:text-sm text-gray-600 font-mono mt-3 sm:mt-4">
                                                        Please wait while the application loads...
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            // Loaded Content with Progressive Display
                                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-8 items-start">
                                                {/* Right Image - Show first on mobile */}
                                                {windowContent[i]?.includes('image') && (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        className="order-first lg:order-last w-full"
                                                    >
                                                        <div className="border-2 border-[#808080] border-t-[#404040] border-l-[#404040] p-1 bg-[#c0c0c0]">
                                                            <div className="border border-[#000000] bg-white p-1 sm:p-2">
                                                                <img
                                                                    className="w-full h-auto object-cover"
                                                                    src={project.image}
                                                                    alt={project.title}
                                                                    style={{ imageRendering: 'pixelated' }}
                                                                />
                                                            </div>
                                                            {/* Image Caption */}
                                                            <div className="text-center mt-1 sm:mt-2">
                                                                <div className="text-xs font-mono text-black bg-white border border-[#808080] px-1 sm:px-2 py-1 inline-block">
                                                                    {project.title}_screenshot.bmp
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}

                                                {/* Left Content */}
                                                <div className="space-y-3 sm:space-y-4 order-last lg:order-first w-full">
                                                    {/* Title and Description */}
                                                    {windowContent[i]?.includes('title') && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="border border-[#808080] border-t-[#404040] border-l-[#404040] p-3 sm:p-4 bg-white"
                                                        >
                                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 font-mono">
                                                                {project.title}
                                                            </h3>
                                                            {windowContent[i]?.includes('subtitle') && (
                                                                <motion.h4
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 0.2 }}
                                                                    className="text-base sm:text-lg text-[#000080] font-semibold mb-2 sm:mb-3 font-mono"
                                                                >
                                                                    {project.subtitle}
                                                                </motion.h4>
                                                            )}
                                                            {windowContent[i]?.includes('description') && (
                                                                <motion.p
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 0.4 }}
                                                                    className="text-black text-xs sm:text-sm leading-relaxed font-mono"
                                                                >
                                                                    {project.description}
                                                                </motion.p>
                                                            )}
                                                        </motion.div>
                                                    )}


                                                    {/* Buttons */}
                                                    {windowContent[i]?.includes('buttons') && (
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="flex items-start"
                                                        >
                                                            <Win98Button
                                                                onClick={() => openModal(project)}
                                                                className="text-black win98-button text-xs sm:text-sm"
                                                                style={{ cursor: `url(${process.env.PUBLIC_URL}/mouse_hand_24.png) 12 12, pointer` }}
                                                            >
                                                                View More Details
                                                            </Win98Button>
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Status Bar */}
                                    <div className="border-t border-[#808080] bg-[#c0c0c0] px-2 sm:px-3 py-1 text-xs font-mono text-black flex justify-between">
                                        <span>Ready</span>
                                        <span className="hidden sm:inline">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
                                        <span className="sm:hidden">{new Date().toLocaleDateString()}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Project Details Modal */}
            {modalOpen && selectedProject && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Title Bar */}
                        <div className="bg-gradient-to-r from-[#0054E3] to-[#0044D3] text-white px-4 py-2 flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <FolderOpen className="w-4 h-4" />
                                <span className="font-bold text-sm">{selectedProject.fileName} - Details</span>
                            </div>
                            <div className="flex space-x-1">
                                <Win98Button
                                    onClick={closeModal}
                                    className="!w-4 !h-4 !min-w-0 !p-0 win98-button"
                                    style={{ cursor: `url(${process.env.PUBLIC_URL}/mouse_hand_24.png) 2 2, pointer` }}
                                >
                                    <X className="w-2 h-2 text-black" />
                                </Win98Button>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-4 max-h-[calc(80vh-60px)] overflow-y-auto">
                            <div className="space-y-4">
                                {/* Project Header */}
                                <div className="text-center">
                                    <h2 className="text-xl md:text-2xl font-bold text-black mb-2 font-mono">
                                        {selectedProject.title}
                                    </h2>
                                    <h3 className="text-base text-[#000080] font-semibold mb-3 font-mono">
                                        {selectedProject.subtitle}
                                    </h3>
                                </div>

                                {/* Project Image */}
                                <div className="flex justify-center">
                                    <div className="border-2 border-[#808080] border-t-[#404040] border-l-[#404040] p-2 bg-[#c0c0c0]">
                                        <div className="border border-[#000000] bg-white p-2">
                                            <img
                                                className="w-full h-auto object-cover max-w-md"
                                                src={selectedProject.image}
                                                alt={selectedProject.title}
                                                style={{ imageRendering: 'pixelated' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed Description */}
                                <div className="border border-[#808080] border-t-[#404040] border-l-[#404040] p-4 bg-white">
                                    <h4 className="text-lg font-bold text-black mb-3 font-mono">Project Overview</h4>
                                    <p className="text-black text-sm leading-relaxed font-mono">
                                        {selectedProject.detailedDescription}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="border border-[#808080] border-t-[#404040] border-l-[#404040] p-4 bg-[#f0f0f0]">
                                    <h4 className="text-lg font-bold text-black mb-3 font-mono">Key Features</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feature: string, index: number) => (
                                            <li key={index} className="text-black text-sm font-mono flex items-start">
                                                <span className="text-[#000080] mr-2 mt-1.5 w-1 h-1 rounded-full bg-[#000080] flex-shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="border border-[#808080] border-t-[#404040] border-l-[#404040] p-4 bg-white">
                                    <h4 className="text-lg font-bold text-black mb-3 font-mono">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map((tech: string, index: number) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs font-mono text-black bg-white border border-[#808080] border-t-white border-l-white border-r-[#404040] border-b-[#404040]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="border border-[#808080] border-t-[#404040] border-l-[#404040] p-4 bg-[#f0f0f0]">
                                    <h4 className="text-lg font-bold text-black mb-3 font-mono">Project Links</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {selectedProject.github && (
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#000080] hover:text-[#0000ff] text-sm font-mono underline"
                                            >
                                                View on GitHub
                                            </a>
                                        )}
                                        {selectedProject.demo && (
                                            <a
                                                href={selectedProject.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#000080] hover:text-[#0000ff] text-sm font-mono underline"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Status Bar */}
                        <div className="border-t border-[#808080] bg-[#c0c0c0] px-4 py-2 text-xs font-mono text-black flex justify-between">
                            <span>Ready</span>
                            <span>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Projects;