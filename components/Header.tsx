'use client';

import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Demo', href: '#demo' },
    { name: 'Audio Stories', href: '#stories' },
    // { name: 'Learn Mode', href: '/learn' },
    // { name: 'Gallery', href: '/gallery' },
    // { name: 'Plan Visit', href: '/plan' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Smartphone className={`md:h-8 md:w-8 w-6 transition-colors duration-300 ${
              isScrolled ? 'text-gold' : 'text-white'
            }`} />
            <span className={`text-sm md:text-xl font-serif font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gold' : 'text-white'
            }`}>
              The first tourism application in Ethiopia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-yellow-400 ${
                  pathname === item.href
                    ? isScrolled 
                      ? 'text-gold border-b-2 border-gold' 
                      : 'text-gold border-b-2 border-gold'
                    : isScrolled 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-gold hover:bg-gray-100' 
                : 'text-white hover:text-yellow-400 hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 transition-all duration-300 ${
            isScrolled 
              ? 'border-t border-gray-200 bg-white' 
              : 'border-t border-white/30 bg-black/20 backdrop-blur-md'
          }`}>
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? isScrolled
                        ? 'text-gold bg-gold/10'
                        : 'text-gold bg-white/20'
                      : isScrolled
                        ? 'text-gray-700 hover:text-gold hover:bg-gray-50'
                        : 'text-white hover:text-yellow-400 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;