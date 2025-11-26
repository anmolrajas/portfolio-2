import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About = ({ isDark }) => {
    const education = [
        {
            school: "Sagar Group of Institutions – SISTec",
            location: "Ratibad Campus, Bhopal - MP",
            degree: "Bachelor of Technology, Computer Science and Engineering",
            year: "2021-25",
            score: "C.G.P.A. - 7.41"
        },
        {
            school: "St. Umar Inter College",
            location: "Jhansi - U.P.",
            degree: "12th Grade",
            year: "2021",
            score: "71.21%"
        },
        {
            school: "St. Umar Inter College",
            location: "Jhansi - U.P.",
            degree: "10th Grade",
            year: "2019",
            score: "77%"
        }
    ];

    return (
        <section id="about" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
                    <p className={`mt-4 text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        To work in an organization where I can acquire new knowledge, sharpen skills, & put my efforts into achieving organizational as well as personal goals.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                            <GraduationCap /> Education Journey
                        </h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div
                                    key={index}
                                    className={`relative pl-8 border-l-2 ${isDark ? 'border-gray-700' : 'border-pink-200'}`}
                                >
                                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${isDark ? 'bg-pink-500' : 'bg-pink-400'}`}></div>
                                    <div className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow ${isDark ? 'bg-gray-800' : 'bg-pink-50/50'}`}>
                                        <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                            {edu.school}
                                        </h4>
                                        <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {edu.degree}
                                        </p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                            <span className="flex items-center gap-1"><Calendar size={14} /> {edu.year}</span>
                                            <span className="flex items-center gap-1"><MapPin size={14} /> {edu.location}</span>
                                        </div>
                                        <div className={`mt-2 font-medium ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>
                                            {edu.score}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl border border-gray-100 dark:border-gray-700`}>
                            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Co-Curricular Activities
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-yellow-500">🏆</span>
                                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                        Awarded 1st Prize in the Sistec Face Painting Competition 2022
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 text-gray-400">🥈</span>
                                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                                        Awarded 2nd Prize in the Sistec Dance Competition 2023
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-xl border border-gray-100 dark:border-gray-700`}>
                            <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Hobbies
                            </h3>
                            <div className="flex gap-4">
                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-gray-700 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>
                                    🎨 Sketching
                                </span>
                                <span className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-gray-700 text-pink-300' : 'bg-pink-100 text-pink-700'}`}>
                                    📚 Reading
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
