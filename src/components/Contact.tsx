import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { fadeUp, stagger } from '../motion.config';
import { Send, User, Bot, CheckCircle2, Clock, Plus, Gift, Smile, Mic } from 'lucide-react';

const Contact: React.FC = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/hrishikesh-kurapati-93a13228a/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            url: 'https://x.com/HrishikeshK245',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/hrishikesh_kurapati/',
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" className="py-32 bg-[#313338]" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-8"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Get in <span className="text-[#5865f2]">Touch</span>
                    </h2>
                    <p className="text-[#b9bbbe] text-lg">
                        Have a project in mind or want to collaborate? Let's start a conversation.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center lg:items-stretch">
                    {/* Social Links & Info - Right Side (1/2 width) */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.4 }}
                        className="space-y-6 w-full max-w-md lg:max-w-none"
                    >
                        {/* Direct Contact */}
                        <div className="bg-[#2f3136] rounded-lg p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-2xl">📧</span>
                                <h3 className="text-xl font-bold text-white">Direct Contact</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-[#b9bbbe] text-sm">Email</p>
                                    <a href="mailto:hrishikesh.kurapati@gmail.com" className="text-[#5865f2] hover:underline">
                                        hrishikesh.kurapati@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-[#b9bbbe] text-sm">Response Time</p>
                                    <p className="text-white">24-48 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-[#2f3136] rounded-lg p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-2xl">🔗</span>
                                <h3 className="text-xl font-bold text-white">Connect on Social</h3>
                            </div>
                            <div className="space-y-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3 p-3 bg-[#36393f] hover:bg-[#40444b] rounded-lg transition-colors group"
                                    >
                                        <div className="text-[#b9bbbe] group-hover:text-white transition-colors">
                                            {social.icon}
                                        </div>
                                        <span className="text-[#dcddde] group-hover:text-white transition-colors">
                                            {social.name}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* About This Contact */}
                        <div className="bg-[#2f3136] rounded-lg p-6">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-2xl">💡</span>
                                <h3 className="text-xl font-bold text-white">About This Contact</h3>
                            </div>
                            <p className="text-[#b9bbbe] text-sm leading-relaxed">
                                I'm always open to new work opportunities or collaborations. Feel free to reach out and contact me!
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;