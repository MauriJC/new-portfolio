'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Interpolamos la opacidad entre los dos fondos
    const opacityBg1 = useTransform(scrollYProgress, [0, 0.15], [1, 0.6]);
    const opacityBg2 = useTransform(scrollYProgress, [0.15, 0.3], [0.4, 1]);

    return (
        <div ref={containerRef} className="relative h-[300vh] overflow-hidden">
            {/* Fondo 1 */}
            <motion.img
                src="/images/background.png"
                alt="fondo 1"
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                style={{ opacity: opacityBg1 }}
            />

            {/* Fondo 2 */}
            <motion.img
                src="/images/black.jpg"
                alt="fondo 2"
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                style={{ opacity: opacityBg2 }}
            />

            {/* Contenido */}
            <section className="relative h-screen flex items-center justify-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-white text-6xl font-bold text-center"
                >
                    ¡Bienvenido a mi portafolio!
                </motion.h1>
            </section>

            <section className="relative h-screen flex items-center justify-center z-10">
                <h2 className="text-white text-5xl">Sección 2</h2>
            </section>
        </div>
    );
};

export default Hero;
