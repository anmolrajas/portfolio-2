import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ isDark }) => {
    const projects = [
        {
            title: "Upgradist - Online Learning Platform",
            description: "Full-stack online learning and assessment platform enabling students to practice MCQs, attempt custom tests, and track performance with real-time scoring.",
            tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            role: "Implemented a dynamic and responsive frontend with test-taking, MCQ practice, and performance analytics features.",
            image: "/Upgradist_thumb_image.png"
        }
    ];

    return (
        <section id="projects" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Featured Project
                    </h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`group rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700`}
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
                                    <button className="p-2 bg-white rounded-full hover:bg-pink-50 transition-colors">
                                        <Github size={20} className="text-gray-900" />
                                    </button>
                                    <button className="p-2 bg-white rounded-full hover:bg-pink-50 transition-colors">
                                        <ExternalLink size={20} className="text-gray-900" />
                                    </button>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </h3>
                                <p className={`mb-6 text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                        Role
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {project.role}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 text-xs font-medium rounded-full ${isDark
                                                ? 'bg-gray-700 text-pink-300'
                                                : 'bg-pink-50 text-pink-600'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
