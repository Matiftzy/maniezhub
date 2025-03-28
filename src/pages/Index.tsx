
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProductOverview from '@/components/ProductOverview';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Executors from '@/components/Executors';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        const isVisible = (elementTop < window.innerHeight * 0.85) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    // Set page title
    document.title = "Maniez Hub | Advanced Roblox Script Hub";
    
    window.addEventListener('scroll', handleScroll);
    // Initial check for elements already in viewport
    setTimeout(handleScroll, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navigation />
      <Hero />
      <ProductOverview />
      <Features />
      <Pricing />
      <Executors />
      <Reviews />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
