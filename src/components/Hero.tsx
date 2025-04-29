
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Check, Copy } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import GridBackground3D from './GridBackground3D';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  
  const loaderScript = `loadstring(game:HttpGet("https://raw.githubusercontent.com/Matiftzy/Maniez-Hub/refs/heads/main/loader.lua"))()`;
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(loaderScript).then(() => {
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Script loader has been copied to clipboard"
      });
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.hero-animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* 3D Grid Motion Background */}
      <GridBackground3D />
      
      {/* Semi-transparent overlay to ensure text visibility */}
      <div className="absolute inset-0 bg-black/40 z-1"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-[1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-30 animate-rotate-slow"></div>
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          <div className="hero-animate opacity-0 transition-opacity duration-1000 delay-100">
            <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-sm font-medium mb-6 border border-white/10">
              The Ultimate Roblox Script Hub
            </span>
          </div>
          
          <h1 className="hero-animate opacity-0 text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight leading-tight transition-opacity duration-1000 delay-300">
            <span className="block text-gradient">Elevate Your</span> 
            <span className="block mt-2">Roblox Experience</span>
          </h1>
          
          <p className="hero-animate opacity-0 text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-light transition-opacity duration-1000 delay-500">
            Advanced script execution with unparalleled safety and performance. 
            Customize your gameplay and unlock new possibilities.
          </p>
          
          <div className="hero-animate opacity-0 flex flex-col md:flex-row gap-4 mt-8 transition-opacity duration-1000 delay-700">
            <button 
              onClick={copyToClipboard}
              className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? "Copied!" : "Copy Loader"}
            </button>
            <a 
              href="#features" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/15 transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="hero-animate opacity-0 flex justify-center mt-16 transition-opacity duration-1000 delay-900">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-secondary">
              <img 
                src="/assets/maniezhubinterface.png" 
                alt="Maniez Hub Interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-sm z-10">
        <a href="#product" aria-label="Scroll down">
          <ArrowDown className="text-white/50 hover:text-white transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
