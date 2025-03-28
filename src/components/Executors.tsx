import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Globe from '@/components/icons/Globe';
import Discord from '@/components/icons/Discord';

type ExecutorProps = {
  name: string;
  logo: string;
  cost: string;
  unc: string;
  sunc: string;
  description: string;
  discord: string;
  website: string;
  recommended?: string;
};

const executorsList: ExecutorProps[] = [
  {
    name: "AWP.GG",
    logo: "assets/awpgg.png",
    cost: "$6.99 weekly",
    unc: "100%",
    sunc: "99%",
    description: "AWP is a sleek, undetected scripting utility with a user-friendly interface, perfect for everyone.",
    discord: "discord.gg/awpgg",
    website: "buyawp.gg",
    recommended: "RECOMMENDED",
  },
  {
    name: "Wave",
    logo: "assets/wave.png",
    cost: "$7.49 weekly",
    unc: "100%",
    sunc: "100%",
    description: "Wave, one of the oldest paid scripting utilities, combines powerful performance with a user-friendly interface, trusted by many.",
    discord: "discord.gg/f6CQJPQT8X",
    website: "getwave.gg",
    recommended: "VERY RECOMMENDED",
  },
  {
    name: "Velocity",
    logo: "assets/velocitys.png",
    cost: "FREE",
    unc: "99%",
    sunc: "99%",
    description: "Velocity is an upcoming executor with 99% sUNC and level 8 capabilities, offering premium execution to its users for free.",
    discord: "discord.gg/getvelocity",
    website: "No Official Website",
    recommended: "RECOMMENDED FOR MULTIPLE CLIENT FARM",
  },
  {
    name: "Swift",
    logo: "assets/swift.png",
    cost: "FREE",
    unc: "100%",
    sunc: "98%",
    description: "Swift offers a freemium scripting utility with high UNC and a fast support team.",
    discord: "discord.gg/getswift",
    website: "getswift.xyz",
    recommended: "RECOMMENDED",
  },
  {
    name: "Arceus X",
    logo: "assets/arceusx.png",
    cost: "FREE",
    unc: "99%",
    sunc: "99%",
    description: "Arceus X is a leading script executor for Roblox that allows users to run scripts to modify and enhance their gaming experience. It is compatible with Android and iOS.",
    discord: "arceus",
    website: "spdmteam.com",
    recommended: "RECOMMENDED FOR MOBILE",
  },
];

const ExecutorCard = ({ executor }: { executor: ExecutorProps }) => {
  return (
    <div className="animate-on-scroll bg-secondary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img 
            src={executor.logo} 
            alt={`${executor.name} logo`} 
            className="w-12 h-12 rounded-lg object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          <div>
            <h3 className="text-xl font-semibold">{executor.name}</h3>
            <p className="text-white/70 text-sm">{executor.cost}</p>
          </div>
        </div>
        {executor.recommended && (
          <Badge variant="outline" className="bg-white/10 text-white text-xs">
            {executor.recommended}
          </Badge>
        )}
      </div>
      
      <div className="flex gap-4 mb-4">
        <div className="bg-white/10 rounded px-2 py-1 text-sm">
          UNC: {executor.unc}
        </div>
        <div className="bg-white/10 rounded px-2 py-1 text-sm">
          sUNC: {executor.sunc}
        </div>
      </div>
      
      <p className="text-white/70 mb-4">{executor.description}</p>
      
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a 
          href={`https://${executor.discord}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
        >
          <Discord className="w-4 h-4" />
          {executor.discord}
          <ExternalLink className="w-3 h-3" />
        </a>
        {executor.website !== "No Official Website" ? (
          <a 
            href={`https://${executor.website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <Globe className="w-4 h-4" />
            {executor.website}
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="flex items-center gap-2 text-sm text-white/50">
            <Globe className="w-4 h-4" />
            {executor.website}
          </span>
        )}
      </div>
    </div>
  );
};

const Executors = () => {
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
    <section id="executors" className="py-24 bg-accent relative">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Recommended <span className="text-gradient">Executors</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Explore our recommended execution platforms to run Maniez Hub scripts.
            <br />
            <span className="text-sm text-white/50 italic mt-2 inline-block">Some information is based on Team Component, discord.gg/component</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {executorsList.map((executor, index) => (
            <ExecutorCard key={index} executor={executor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executors;
