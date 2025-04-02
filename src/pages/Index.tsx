
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductOverview from '../components/ProductOverview';
import FAQ from '../components/FAQ';
import Clownery from '../components/Clownery';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import Executors from '../components/Executors';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <ProductOverview />
      <Executors />
      <FAQ />
      <Reviews />
      <Clownery />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
