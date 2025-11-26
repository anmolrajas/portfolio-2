import React from 'react';
import { Heart } from 'lucide-react';

const Footer = ({ isDark }) => {
    return (
        <footer className={`py-8 text-center ${isDark ? 'bg-gray-900 text-gray-500' : 'bg-white text-gray-500'} border-t ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
            <p className="flex items-center justify-center gap-2">
                Made with <Heart size={16} className="text-pink-500 fill-current" /> by Khushi Bhatt © {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
