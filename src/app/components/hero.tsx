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

      <section
        id="about"
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 lg:flex-row"
      >
        <div className="flex w-full flex-col items-start justify-end lg:h-screen lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ translateX: 50 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
            className="font-[tusker-semibold] text-[clamp(4.5rem,10vw,12rem)] leading-none sm:mb-[2rem]"
          >
            FULLSTACK
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ translateX: 50 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
            className="font-[tusker-semibold] text-[clamp(4.5rem,10vw,12rem)] leading-none md:pb-10"
          >
            DEVELOPER
          </motion.h1>
        </div>

        <div className="mt-10 flex w-full flex-col text-right lg:mt-0 lg:h-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.3 }}
            className="flex flex-col justify-end font-[neue-medium] text-[clamp(1.1rem,3vw,1.5rem)] leading-snug md:h-screen md:pb-10"
          >
            <p>I AM MAURICIO, A FULLSTACK DEVELOPER</p>
            <p>BASED IN ARGENTINA, CURRENTLY ON</p>
            <p>MY JOURNEY AS A SOFTWARE ENGINEER.</p>
            <p>I LOVE EFFICIENT AND ROBUST</p>
            <p>SOFTWARE DESIGN. I ALSO LOVE</p>
            <p>PLAYING, EATING MILANESA, AND CODING!</p>

            <br />

            <a
              className="text-neon-glow-animated inline-block cursor-pointer text-[clamp(1.5rem,4vw,2.5rem)] transition-transform hover:scale-102"
              onClick={() => scrollToId('contact')}
              aria-label="Scroll to contact section"
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
