import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Discord from '@/components/icons/Discord';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Product', href: '#product' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
];

const DISCORD_LINK = "https://discord.com/invite/U3CVFrMPeT";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'bg-background/80 backdrop-blur-custom shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-2xl font-bold font-display tracking-tighter flex items-center">
            <img src="/assets/logo.png" alt="Maniez Hub Logo" className="h-8 w-8 mr-2" />
            <span className="text-gradient">Maniez</span> Hub
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2.5 bg-white text-black rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-1.5"
          >
            <Discord size={16} />
            Join Discord
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Close button for mobile menu */}
        <button 
          onClick={toggleMenu} 
          className="absolute top-6 right-6 text-white"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
        
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onClick={toggleMenu}
            className="text-xl font-medium text-white/80 hover:text-white transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
        <a
          href={DISCORD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={toggleMenu}
          className="text-xl font-medium px-6 py-3 bg-white text-black rounded-lg hover:opacity-90 transition-all duration-300 mt-4 flex items-center gap-2"
        >
          <Discord size={20} />
          Join Discord
        </a>
      </div>
    </header>
  );
};

export default Navigation;
