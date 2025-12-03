'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Heart,
  ArrowUp
} from 'lucide-react';
import { BsTelegram, BsTiktok } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: BsTiktok, href: 'https://www.tiktok.com/@ethiopia.tech.group', label: 'TikTok' },
    { icon: BsTelegram, href: 'https://t.me/EthiopiaTechGroup', label: 'Telegram' },
    { icon: CgWebsite, href: 'https://etg.et/', label: 'Website' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer id='contact' className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Brand & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6"
        >
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <MapPin className="h-8 w-8 text-gold" />
            <span className="text-2xl font-serif font-bold">Visit Jimma</span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed max-w-md">
            Ethiopia's first free digital cultural education platform, preserving ancient heritage 
            through innovative technology and immersive storytelling experiences.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-sm">
            <div className="flex items-center space-x-2 text-slate-300">
              <Mail className="h-4 w-4 text-gold" />
              <span>yahyaabdela0@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <Phone className="h-4 w-4 text-gold" />
              <span>0987818783</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300">
              <MapPin className="h-4 w-4 text-gold" />
              <span>Bole, Addis Ababa · Ethiopia</span>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-between items-center md:items-end gap-6"
        >
          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-8 h-8 bg-slate-700 hover:bg-gold rounded-full flex items-center justify-center transition-all duration-200 group"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 text-slate-300 group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-gold hover:bg-gold/80 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200"
          >
            <ArrowUp className="h-4 w-4" />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-slate-400 text-sm text-center md:text-left">
            <span>© 2025 Visit Jimma. All rights reserved.</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-gold" />
              <span>by Ethiopia Tech Group</span>
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right text-slate-400 text-sm italic max-w-md"
          >
            "Preserving Heritage Through Technology • Empowering Communities Through Innovation • 
            Building Ethiopia's First Digital Cultural Education Platform"
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
