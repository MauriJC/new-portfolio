'use client'

import { motion, useTransform, MotionValue } from 'framer-motion';

interface BackgroundsProps {
    scrollYProgress: MotionValue<number>;
}

const Backgrounds = ({ scrollYProgress }: BackgroundsProps) => {
    const opacityBg1 = useTransform(scrollYProgress, [0, 0.20], [1, 0.9]);
    const opacityBg2 = useTransform(scrollYProgress, [0.1, 0.5], [0.4, 1]);
    const opacityBg3 = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);

    return (
        <>
            <motion.img
                src="/images/background.png"
                alt="fondo 1"
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                style={{ opacity: opacityBg1 }}
            />
            <motion.img
                src="/images/black.jpg"
                alt="fondo 2"
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                style={{ opacity: opacityBg2 }}
            />
            <motion.img
                src="/images/background.png"
                alt="fondo 3"
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                style={{ opacity: opacityBg3 }}
            />
        </>
    );
};

export default Backgrounds;
