'use client';

import { useState } from 'react';
import { scrollToId } from '../utils/scrollToId'; // ajusta el path según tu estructura

const NavBar = () => {
  const [selected, setSelected] = useState('');

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-[rgba(245,238,230,0.5)] bg-transparent px-12 pt-4 pb-4 backdrop-blur-sm">
      <div>
        <a href="#" className="font-[underdog] text-xl">
          Mauricio Chaile
        </a>
        <span className="ml-8 font-[neue-medium]">FULLSTACK DEVELOPER</span>
      </div>

      <div className="flex justify-between text-lg">
        <a
          onClick={() => {
            scrollToId('about', -80);
            setSelected('about');
          }}
          className={`ml-1 cursor-pointer font-[tusker] ${selected == 'about' ? 'line-through' : ''}`}
        >
          about-
        </a>
        <a
          onClick={() => {
            scrollToId('projects', -0);
            setSelected('projects');
          }}
          className={`ml-1 cursor-pointer font-[tusker] ${selected == 'projects' ? 'line-through' : ''}`}
        >
          projects-
        </a>
        <a
          onClick={() => {
            scrollToId('contact', -0);
            setSelected('contact');
          }}
          className={`ml-1 cursor-pointer font-[tusker] ${selected == 'contact' ? 'line-through' : ''}`}
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default NavBar;
