
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Discord from '@/components/icons/Discord';

type NavLink = {
  name: string;
  href: string;
  isExternal?: boolean;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Product', href: '#product' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Main', href: '/mainscript.lua', isExternal: true },
  { name: 'BAK', href: '/bakscript.lua', isExternal: true },
];

const DISCORD_LINK = "https://discord.com/invite/U3CVFrMPeT";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Function to render nav links appropriately
  const renderNavLink = (link: NavLink, index: number, onClick?: () => void) => {
    if (link.isExternal) {
      // External link or path that should reload the page
      return (
        <a
          key={index}
          href={link.href}
          className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          onClick={onClick}
        >
          {link.name}
        </a>
      );
    } else if (link.href.startsWith('#')) {
      // Anchor link on the same page
      return (
        <a
          key={index}
          href={link.href}
          className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          onClick={onClick}
        >
          {link.name}
        </a>
      );
    } else {
      // Internal route navigation
      return (
        <Link
          key={index}
          to={link.href}
          className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
          onClick={onClick}
        >
          {link.name}
        </Link>
      );
    }
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
          {/* Use a standard <a> tag for the home link that points to the root */}
          <a href="/" className="text-2xl font-bold font-display tracking-tighter flex items-center">
            <img src="/assets/logo.png" alt="Maniez Hub Logo" className="h-8 w-8 mr-2" />
            <span className="text-gradient">Maniez</span> Hub
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => renderNavLink(link, index))}
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

        {/* Mobile Menu Button with animation */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none relative w-6 h-6"
          aria-label="Toggle Menu"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <Menu 
              size={24} 
              className={cn(
                "transition-all duration-300 transform",
                isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
              )} 
            />
            <X 
              size={24} 
              className={cn(
                "absolute transition-all duration-300 transform",
                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
              )} 
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation - Smaller, not full-screen with animation */}
      <div
        className={cn(
          'fixed top-16 right-4 w-64 bg-background/95 backdrop-blur-lg z-40 rounded-lg border border-white/10 shadow-lg transition-all duration-300 ease-in-out md:hidden',
          isOpen 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-full opacity-0 scale-95 pointer-events-none'
        )}
      >
        <div className="flex flex-col py-6 px-4 gap-4">
          {navLinks.map((link, index) => renderNavLink(link, index, toggleMenu))}
          <a
            href={DISCORD_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="mt-2 text-md font-medium px-4 py-3 bg-white text-black rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Discord size={18} />
            Join Discord
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
