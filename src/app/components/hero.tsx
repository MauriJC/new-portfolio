'use client'

import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Backgrounds from './backgrounds';

const Hero = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    return (
        <div ref={containerRef} className="relative h-[300vh] overflow-hidden">
            <Backgrounds scrollYProgress={scrollYProgress} />
            {/* Contenido */}
            <section className="relative h-screen z-10 lg:flex flex-row items-center" id="about">
                <div className="w-[50%] flex flex-col justify-end h-screen">

                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ translateX: 50 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-[20rem] lg:text-[25vh] font-[tusker-semibold] mb-[-10vh]"
                    >
                        FULLSTACK
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ translateX: 50 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="text-[20rem] lg:text-[25vh] font-[tusker-semibold] mb-0"
                    >
                        DEVELOPER
                    </motion.h1>
                </div>

                <div className="w-[50%] h-screen flex flex-col justify-center mr-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ amount: 0 }}
                        className="text-3xl font-[neue-medium] mt-[40%] text-right"
                    >
                        <p>I AM A FULLSTACK DEVELOPER</p>
                        <p> BASED IN ARGENTINA. I AM STARTING</p>
                        <p>MY JOURNEY AS SOFTWARE ENGINEER</p>
                        <p>I LOVE EFFICIENT AND ROBUST</p>
                        <p> SOFTWARE DESIGN. I LOVE PLAYING,</p>
                        <p>PIZZA AND PROGRAMMING.</p>
                        <br></br>
                        <a href='#contact' className="text-neon-glow-animated text-4xl">CONTACT ME!</a>
                    </motion.div>

                    {/*                     <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ amount: 0.4, once: true }}
                        className="text-white text-3xl"
                    >
                        ¡Hola! Soy una caja animada 😄
                    </motion.div> */}
                </div>
            </section>

            <section className="relative h-screen flex items-center justify-center z-10" id="projects">
                <h2 className="text-white text-5xl">Sección 2</h2>
            </section>

            <section className="relative h-screen flex items-center justify-center z-10" id="contact">
                <h2 className="text-white text-5xl">Sección 3</h2>
            </section>
        </div >
    );
};

export default Hero;
