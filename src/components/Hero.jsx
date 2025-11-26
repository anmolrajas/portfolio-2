import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';

const Hero = ({ isDark }) => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-yellow-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    <h2 className={`text-lg font-semibold tracking-wide uppercase mb-2 ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                        Hello, I am
                    </h2>
                    <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Khushi Bhatt
                    </h1>
                    <p className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto md:mx-0 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        A passionate <span className="text-pink-500 font-semibold">Computer Science Engineer</span> crafting modern digital experiences.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            View Work <ArrowRight size={20} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1aMkTPkPZWbmmk9O_2L6fLeH3eNBaMy71/view?usp=drivesdk"
                            className={`px-8 py-3 rounded-full border-2 font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 ${isDark
                                    ? 'border-pink-500 text-pink-400 hover:bg-pink-500/10'
                                    : 'border-pink-500 text-pink-600 hover:bg-pink-50'
                                }`}
                        >
                            Resume <Download size={20} />
                        </a>
                    </div>

                    <div className="mt-12 flex justify-center md:justify-start gap-6">
                        <a href="https://linkedin.com/in/khushi-bhatt-598333284" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-500 hover:text-pink-600'}`}>
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:bhattkhushi1807@gmail.com" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-pink-400' : 'text-gray-500 hover:text-pink-600'}`}>
                            <Mail size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        <div className={`absolute inset-0 rounded-full animate-pulse ${isDark ? 'bg-pink-500/20' : 'bg-pink-200'}`}></div>
                        <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/50 shadow-2xl">
                            {/* Profile image */}
                            <img
                                src="/khushiProfile.png"
                                alt="Khushi Bhatt"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            className={`absolute -top-4 -right-4 p-4 rounded-2xl shadow-xl backdrop-blur-md ${isDark ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/80 border border-white'}`}
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                            className={`absolute -bottom-4 -left-4 p-4 rounded-2xl shadow-xl backdrop-blur-md ${isDark ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/80 border border-white'}`}
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
