import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ isDark }) => {
    const skills = [
        { name: "C / C++", level: 85 },
        { name: "Python", level: 80 },
        { name: "HTML / CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Node.js", level: 70 },
        { name: "MongoDB", level: 75 },
    ];

    return (
        <section id="skills" className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-pink-50/30'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 rounded-xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-sm hover:shadow-md transition-shadow`}
                        >
                            <div className="flex justify-between mb-2">
                                <span className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                                    {skill.name}
                                </span>
                                <span className={`text-sm ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className={`w-full h-2.5 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
