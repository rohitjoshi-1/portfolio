import React from 'react';
import { personalInfo } from '../data/portfolioData.jsx';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-secondary-bg text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-text-secondary font-mono">
          Crafted with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-accent-1 font-semibold">Rohit Joshi</span>
        </p>
        <p className="text-xs text-text-secondary font-mono mt-1">
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;