'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section
      className="relative mx-6 lg:w-7xl md:mx-auto rounded-3xl mt-10 -mb-10 h-[35vh] md:h-[50vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-3">
          Visit Jimma
        </h1>

        <p className="text-lg md:text-xl text-gray-200 tracking-wide max-w-xl mx-auto">
          Among the pioneering tourism applications in East Africa.
        </p>
      </motion.div>
    </section>
  );
};

export default Banner;
