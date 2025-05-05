'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

interface BackgroundsProps {
  scrollYProgress: MotionValue<number>;
}

const Backgrounds = ({ scrollYProgress }: BackgroundsProps) => {
  const opacityBg1 = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const opacityBg2 = useTransform(scrollYProgress, [0.1, 0.5], [0.4, 1]);
  const opacityBg3 = useTransform(scrollYProgress, [0.5, 0.85], [0, 1]);

  return (
    <>
      <motion.img
        src="/images/background2.webp"
        alt="fondo 1"
        className="fixed top-0 left-0 z-0 h-full w-full object-cover"
        style={{ opacity: opacityBg1 }}
      />
      <motion.img
        src="/images/black.webp"
        alt="fondo 2"
        className="fixed top-0 left-0 z-0 h-full w-full object-cover"
        style={{ opacity: opacityBg2 }}
      />
      <motion.img
        src="/images/bg4.webp"
        alt="fondo 3"
        className="fixed top-0 left-0 z-0 h-full w-full object-cover"
        style={{ opacity: opacityBg3 }}
      />
    </>
  );
};

export default Backgrounds;
