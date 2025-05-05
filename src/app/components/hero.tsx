'use client';

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Backgrounds from './backgrounds';
import { scrollToId } from '../utils/scrollToId';
import ProjectsSection from './projectsSection';
import ContactSection from './contactSection';
import ExperienceSection from './experienceSection';

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  return (
    <div ref={containerRef} className="relative h-[450vh] w-full overflow-hidden">
      <Backgrounds scrollYProgress={scrollYProgress} />
      {/* Contenido */}
      <section className="relative z-10 h-screen flex-row items-center lg:flex" id="about">
        <div className="flex h-[50%] w-[50%] flex-col justify-end lg:h-screen">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ translateX: 50 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
            className="mb-[-5rem] font-[tusker-semibold] text-[12rem] lg:mb-[-5rem] lg:text-[25vh]"
          >
            FULLSTACK
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ translateX: 50 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
            className="mb-0 font-[tusker-semibold] text-[12rem] lg:text-[25vh]"
          >
            DEVELOPER
          </motion.h1>
        </div>

        <div className="mr-6 flex h-[50%] w-[50%] flex-col justify-center md:h-screen">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
            className="mt-[40%] text-right font-[neue-medium] text-3xl"
          >
            <p>I AM MAURICIO, A FULLSTACK DEVELOPER</p>
            <p>BASED IN ARGENTINA, CURRENTLY ON</p>
            <p>MY JOURNEY AS A SOFTWARE ENGINEER.</p>
            <p>I LOVE EFFICIENT AND ROBUST</p>
            <p>SOFTWARE DESIGN. I ALSO LOVE</p>
            <p>PLAYING, EATING MILANESA, AND CODING.</p>
            <br />
            <a
              className="text-neon-glow-animated cursor-pointer text-4xl hover:scale-120"
              onClick={() => {
                scrollToId('contact', -0);
              }}
            >
              CONTACT ME!
            </a>
          </motion.div>
        </div>
      </section>

      <ProjectsSection />

      <ExperienceSection />

      <ContactSection />
    </div>
  );
};

export default Hero;
