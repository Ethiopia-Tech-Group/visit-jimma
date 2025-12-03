// app/components/Hero/MinimalHero.tsx
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MinimalHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleStartExploring = (): void => {
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-deep-green overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000`}
        style={{
          backgroundImage: "url('/aba-jifar-palace.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-2xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl uppercase tracking-wide sm:text-7xl md:text-9xl font-serif font-black text-white mb-3 sm:mb-4 leading-none"
          >
            Jimma
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-24 sm:w-32 h-1 bg-gold mx-auto mb-5 sm:mb-6 transform origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 font-light tracking-widest uppercase"
          >
            Home of the Gibe Kingdom • Birthplace of Coffee
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: 'var(--gold)',
            color: 'var(--deep-green)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleStartExploring}
          className="border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-deep-green font-medium px-8 sm:px-12 py-3 sm:py-4 rounded-none text-sm sm:text-lg transition-all duration-300 tracking-widest uppercase"
        >
          Explore Jimma
        </motion.button>

        {/* Subtle Location Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-12 sm:mt-16 text-gray-200 text-xs sm:text-sm tracking-wide"
        >
          <div>Southwestern Ethiopia • 7°40′N 36°50′E</div>
          <div className="text-[10px] sm:text-xs mt-1">Capital of the Gibe Region</div>
        </motion.div>
      </div>

      {/* Side Texts (Hidden on Mobile) */}
      <div className="hidden md:block absolute left-8 top-1/2 transform -translate-y-1/2 -rotate-90 origin-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-100 text-sm tracking-widest whitespace-nowrap"
        >
          LAND OF COFFEE ORIGIN
        </motion.div>
      </div>

      <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 rotate-90 origin-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-gray-200 text-sm tracking-widest whitespace-nowrap"
        >
          ABA JIFAR II KINGDOM
        </motion.div>
      </div>
    </section>
  );
};

export default MinimalHero;
