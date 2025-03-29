
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Shield, Zap, Code, PenTool, Search, UserCircle } from 'lucide-react';

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const featuresList: FeatureProps[] = [
  {
    title: "Script Loader",
    description: "Run complex scripts with a single loader designed for stability and speed.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Advanced Security",
    description: "Stay undetected with our sophisticated anti-ban technology and regular security updates.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Custom Configuration",
    description: "Create and modify the script according to what you want with the in-game configuration feature.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Script Discovery",
    description: "Browse the script-supported games below, we will definitely try to add more games that will be supported by our scripts.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Lightning Fast Updates",
    description: "Enjoy timely updates that keep the hub compatible with the latest script-supported game updates.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Active Community",
    description: "Join our thriving community of script developers and users to share knowledge and scripts.",
    icon: <UserCircle className="w-6 h-6" />,
  },
];

const scriptImages = [
  "https://tr.rbxcdn.com/180DAY-1535d9cb6d8bf258bbba4d5e6522a9a0/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-d534f430c4f71efc23f14edefcf1f82c/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-4818393060647bcbad82bb0ad5fad7d8/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-cee6edfb36f7c1d81e9ab0729d084de5/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-658e1cb8fc6e855f8cc9032c922225ef/256/256/Image/Webp/noFilter",
  "https://tr.rbxcdn.com/180DAY-2fb67737aa79c28b48c072598be6b75f/256/256/Image/Webp/noFilter",
  "https://t3.rbxcdn.com/180DAY-411d27117c6eb4d27d8970fb17860a71",
  "https://t3.rbxcdn.com/180DAY-411d27117c6eb4d27d8970fb17860a71",
];

const scriptLinks = [
  "https://www.roblox.com/games/10449761463/The-Strongest-Battlegrounds",
  "https://www.roblox.com/games/2753915549/Blox-Fruits",
  "https://www.roblox.com/games/17129858194/Realm-Rampage",
  "https://www.roblox.com/games/142823291/Murder-Mystery-2",
  "https://www.roblox.com/games/1215581239/Doomspire-Brickbattle",
  "https://www.roblox.com/games/121383396916457/Fiction-Battleground",
  "https://www.roblox.com/games/448338/Baseplate",
  "https://www.roblox.com/games/448338/Baseplate",
];

const FeatureCard = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="animate-on-scroll bg-secondary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group">
      <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const ImageMarquee = () => {
  return (
    <div className="overflow-hidden w-full py-8 mt-16 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
      <div className="flex animate-marquee">
        {[...scriptImages, ...scriptImages].map((src, index) => (
          <a 
            key={index} 
            href={scriptLinks[index % scriptLinks.length]} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-shrink-0 mx-4 hover:opacity-80 transition-opacity"
          >
            <img 
              src={src} 
              alt={`Supported game ${index}`} 
              className="w-20 h-20 rounded-lg object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  useEffect(() => {
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
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features" className="py-24 relative clip-path-slant-top bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll relative z-50">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Discover the innovative features that make Maniez Hub the premier choice for Roblox enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon} 
            />
          ))}
        </div>

        {/* Marquee/Scrolling Banner */}
        <ImageMarquee />

        {/* Statistics */}
        <div className="mt-24 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-display text-gradient mb-2">10,000+</div>
              <p className="text-white/70">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-display text-gradient mb-2">500+</div>
              <p className="text-white/70">Curated Scripts</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-display text-gradient mb-2">99.9%</div>
              <p className="text-white/70">Uptime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-display text-gradient mb-2">24/7</div>
              <p className="text-white/70">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
