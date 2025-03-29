
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
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="product" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Pattern - set lowest z-index */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: "1" }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] z-index[-1]"></div>
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
            <div className="relative">
              <div className="w-full max-w-lg relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm" style={{ zIndex: "2" }}></div>
                <div className="relative bg-black rounded-xl overflow-hidden border border-white/10" style={{ zIndex: "3" }}>
                  <div className="aspect-video flex items-center justify-center bg-secondary/50 p-6">
                    <img 
                      src="/assets/maniezhubtsbg.png" 
                      alt="Maniez Hub Interface" 
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      style={{ 
                        objectFit: "cover", 
                        height: "100%", 
                        zIndex: "4",
                        display: imageLoaded ? "block" : "none" 
                      }}
                      onLoad={handleImageLoad}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    
                    {/* Backup content - only visible if image fails to load */}
                    {!imageLoaded && (
                      <>
                        <div className="bg-black/70 backdrop-blur-md rounded-lg border border-white/10 p-4 mb-4 relative z-3">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium">Maniez Hub v1.2</span>
                            <div className="flex gap-1">
                              <div className="w-3 h-3 rounded-full bg-white/20"></div>
                              <div className="w-3 h-3 rounded-full bg-white/20"></div>
                              <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-2">
                            {scriptImages.map((src, index) => (
                              <a 
                                key={index} 
                                href={scriptLinks[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="aspect-square rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center justify-center overflow-hidden"
                              >
                                <div className="w-full h-full overflow-hidden">
                                  <img 
                                    src={src} 
                                    alt={`Script ${index + 1}`} 
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="bg-black/70 backdrop-blur-md rounded-lg border border-white/10 p-4 relative z-3">
                          <div className="bg-black/50 rounded border border-white/5 p-3 font-mono text-xs text-white/70 h-24 mb-3">
                            <div>print("Maniez Hub on TOP")</div>
                          </div>
                          <div className="flex justify-end">
                            <span className="inline-block px-3 py-1 bg-white text-black text-xs rounded">Execute</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
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
