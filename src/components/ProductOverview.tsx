
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const scriptImages = [
  "https://tr.rbxcdn.com/180DAY-1535d9cb6d8bf258bbba4d5e6522a9a0/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-d534f430c4f71efc23f14edefcf1f82c/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-4818393060647bcbad82bb0ad5fad7d8/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-cee6edfb36f7c1d81e9ab0729d084de5/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-658e1cb8fc6e855f8cc9032c922225ef/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-2fb67737aa79c28b48c072598be6b75f/256/256/Image/Webp/noFilter",
  "https://t3.rbxcdn.com/180DAY-411d27117c6eb4d27d8970fb17860a71",
  "https://t3.rbxcdn.com/180DAY-411d27117c6eb4d27d8970fb17860a71"
];

const scriptLinks = [
  "https://www.roblox.com/games/10449761463/The-Strongest-Battlegrounds",
  "https://www.roblox.com/games/2753915549/Blox-Fruits",
  "https://www.roblox.com/games/17129858194/Realm-Rampage",
  "https://www.roblox.com/games/142823291/Murder-Mystery-2",
  "https://www.roblox.com/games/1215581239/Doomspire-Brickbattle",
  "https://www.roblox.com/games/121383396916457/Fiction-Battleground",
  "https://www.roblox.com/games/448338/Baseplate",
  "https://www.roblox.com/games/448338/Baseplate"
];

const ProductOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        const isVisible = (elementTop < window.innerHeight * 0.8) && (elementBottom > 0);
        
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add hover tilt effect handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = (y - centerY) / 10;
    const tiltY = (centerX - x) / 10;
    
    setTiltValues({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    setTiltValues({ x: 0, y: 0 });
  };

  return (
    <section id="product" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Pattern - set lowest z-index */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: "1" }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] z-index[1]"></div>
      </div>

      <div className="container mx-auto px-6 relative" style={{ zIndex: "5" }}>
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Product <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Maniez Hub combines powerful features with an elegant interface for the ultimate Roblox experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Advanced Script Execution</h3>
              <p className="text-white/70">
                Run complex Roblox scripts with precision and reliability. Our execution system is optimized for performance and stability.
              </p>
            </div>

            <div className="animate-on-scroll">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Extensive Script Library</h3>
              <p className="text-white/70">
                Access a curated collection of powerful scripts for various Roblox games, regularly updated and tested for compatibility.
              </p>
            </div>

            <div className="animate-on-scroll">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 mb-4">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Undetectable Operation</h3>
              <p className="text-white/70">
                Our advanced bypassing system ensures you stay undetected while using Maniez Hub, providing a safe environment for script execution.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-on-scroll">
            <div 
              ref={imageRef}
              className="relative transition-transform duration-300 ease-out transform-gpu"
              style={{ 
                transform: `perspective(1000px) rotateX(${tiltValues.x}deg) rotateY(${tiltValues.y}deg) scale3d(1, 1, 1)`,
                transformStyle: 'preserve-3d'
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="w-full max-w-lg mx-auto">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm"></div>
                  <img 
                    src="/assets/maniezhubtsbg.png" 
                    alt="Maniez Hub Interface" 
                    className="w-full h-full object-cover rounded-lg border border-white/10"
                    style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
