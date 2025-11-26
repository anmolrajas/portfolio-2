import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                {isDark ? (
                    <Sun className="w-6 h-6 text-yellow-400" />
                ) : (
                    <Moon className="w-6 h-6 text-slate-700" />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
