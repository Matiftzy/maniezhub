
import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductOverview from "@/components/ProductOverview";
import Features from "@/components/Features";
import Executors from "@/components/Executors";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "@/components/Script"; // Import the Script component

const Index = () => {
  useEffect(() => {
    // If there's a hash in the URL, scroll to it
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="relative bg-background text-foreground min-h-screen">
      <Navigation />
      <Hero />
      <ProductOverview />
      <Features />
      <Executors />
      <Pricing />
      <Reviews />
      <FAQ />
      <Script /> {/* Add the Script component */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
