import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '../motion.config';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const HuggingFaceIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 2c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9zm-3.5 6.5c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5S10 11.828 10 11s-.672-1.5-1.5-1.5zm7 0c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5S17 11.828 17 11s-.672-1.5-1.5-1.5zM8.5 15c-.276 0-.5.224-.5.5 0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5c0-.276-.224-.5-.5-.5h-6z"/>
    </svg>
);

const Contact: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/hrishikesh-kurapati-93a13228a/',
            icon: <Linkedin className="w-5 h-5" />
        },
        {
            name: 'GitHub',
            url: 'https://github.com/HrishikeshKurapati24',
            icon: <Github className="w-5 h-5" />
        },
        {
            name: 'Hugging Face',
            url: 'https://huggingface.co/Hrishikesh4',
            icon: <HuggingFaceIcon />
        }
    ];

    return (
        <footer id="contact" className="bg-black pt-20 pb-10 border-t border-white/10" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
                    {/* Left: Heading and CTA */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Let's build something <br />
                            <span className="text-gray-500">that actually matters.</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl">
                            I'm open to internships and full-time roles in AI engineering, full-stack development,
                            or applied ML research. If you're working on hard problems and want someone who ships
                            end-to-end — let's talk.
                        </p>
                        <a
                            href="mailto:hrishikesh.kurapati@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            <span>hrishikesh.kurapati@gmail.com</span>
                        </a>
                    </motion.div>

                    {/* Right: Scroll to Top */}
                    <motion.button
                        variants={fadeUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
                    >
                        <div className="p-4 rounded-full border border-white/10 group-hover:border-white transition-colors bg-white/5">
                            <ArrowUp className="w-6 h-6" />
                        </div>
                        <span className="text-sm font-medium tracking-wide">BACK TO TOP</span>
                    </motion.button>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/10"
                >
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Hrishikesh Kurapati. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;
