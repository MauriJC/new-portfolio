'use client';

import { useState } from 'react';
import { scrollToId } from '../utils/scrollToId'; // ajusta el path según tu estructura

const NavBar = () => {
    const [selected, setSelected] = useState('');

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-transparent px-12 pt-4 pb-4 flex justify-between items-center border-b border-[rgba(245,238,230,0.5)] backdrop-blur-sm">
            <div>
                <a href="#" className="font-[underdog] text-xl">
                    Mauricio Chaile
                </a>
                <span className="font-[neue-medium] ml-8">FULLSTACK DEVELOPER</span>
            </div>

            <div className="flex justify-between text-lg">
                <a
                    onClick={() => { scrollToId('about', -80); setSelected('about') }}
                    className={`font-[tusker] ml-1 cursor-pointer  ${selected == 'about' ? 'line-through' : ''}`}
                >
                    about,
                </a>
                <a
                    onClick={() => { scrollToId('projects', -0); setSelected('projects') }}
                    className={`font-[tusker] ml-1 cursor-pointer  ${selected == 'projects' ? 'line-through' : ''}`}
                >
                    projects,
                </a>
                <a
                    onClick={() => { scrollToId('contact', -0); setSelected('contact') }}
                    className={`font-[tusker] ml-1 cursor-pointer  ${selected == 'contact' ? 'line-through' : ''}`}
                >
                    contact
                </a>
            </div>
        </div>
    );
};

export default NavBar;
