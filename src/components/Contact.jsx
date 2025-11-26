import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone, Send } from 'lucide-react';

const Contact = ({ isDark }) => {
    return (
        <section id="contact" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-pink-50/30'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
                    <p className={`mt-4 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}>
                            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <a href="mailto:bhattkhushi1807@gmail.com" className="flex items-center gap-4 group">
                                    <div className={`p-3 rounded-full ${isDark ? 'bg-gray-800 text-pink-400' : 'bg-pink-50 text-pink-600'} group-hover:bg-pink-500 group-hover:text-white transition-colors`}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                                        <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>bhattkhushi1807@gmail.com</p>
                                    </div>
                                </a>

                                <a href="tel:9343902199" className="flex items-center gap-4 group">
                                    <div className={`p-3 rounded-full ${isDark ? 'bg-gray-800 text-pink-400' : 'bg-pink-50 text-pink-600'} group-hover:bg-pink-500 group-hover:text-white transition-colors`}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                                        <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>+91 9343902199</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 group">
                                    <div className={`p-3 rounded-full ${isDark ? 'bg-gray-800 text-pink-400' : 'bg-pink-50 text-pink-600'} group-hover:bg-pink-500 group-hover:text-white transition-colors`}>
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                                        <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Bhopal, Madhya Pradesh - 462042</p>
                                    </div>
                                </div>

                                <a href="https://linkedin.com/in/khushi-bhatt-598333284" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                    <div className={`p-3 rounded-full ${isDark ? 'bg-gray-800 text-pink-400' : 'bg-pink-50 text-pink-600'} group-hover:bg-pink-500 group-hover:text-white transition-colors`}>
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>LinkedIn</p>
                                        <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>View Profile</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-lg`}
                    >
                        <form className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${isDark
                                            ? 'bg-gray-800 border-gray-700 text-white focus:border-pink-500'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
                                        }`}
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all ${isDark
                                            ? 'bg-gray-800 border-gray-700 text-white focus:border-pink-500'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
                                        }`}
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    className={`w-full px-4 py-3 rounded-lg outline-none transition-all resize-none ${isDark
                                            ? 'bg-gray-800 border-gray-700 text-white focus:border-pink-500'
                                            : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-pink-500 focus:ring-2 focus:ring-pink-200'
                                        }`}
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:shadow-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
