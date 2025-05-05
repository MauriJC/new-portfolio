'use client';

import { useState } from 'react';
import { scrollToId } from '../utils/scrollToId';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // o cualquier ícono que uses

const NavBar = () => {
  const [selected, setSelected] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string, offset = 0) => {
    scrollToId(id, offset);
    setSelected(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 z-50 w-full border-b border-[rgba(245,238,230,0.5)] bg-transparent px-6 py-4 backdrop-blur-sm"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <a href="#" className="font-[underdog] text-xl">
            Mauricio Chaile
          </a>
          <span className="ml-4 hidden font-[neue-medium] sm:inline">FULLSTACK DEVELOPER</span>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden gap-2 text-lg md:flex">
          {['about', 'projects', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              onClick={() => handleClick(item, -80)}
              className={`cursor-pointer font-[tusker] ${selected === item ? 'line-through' : ''}`}
            >
              {item}-
            </a>
          ))}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col items-end gap-4 text-lg md:hidden">
          {['about', 'projects', 'experience', 'contact'].map((item) => (
            <a
              key={item}
              onClick={() => handleClick(item, -80)}
              className={`cursor-pointer font-[tusker] ${selected === item ? 'line-through' : ''}`}
            >
              {item}-
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
