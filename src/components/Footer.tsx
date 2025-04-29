
import React from 'react';
import { cn } from '@/lib/utils';
import { Github } from 'lucide-react';
import Discord from '@/components/icons/Discord';

const DISCORD_LINK = "https://discord.com/invite/U3CVFrMPeT";
const TWITTER_LINK = "https://x.com/ManiezHub";
const GITHUB_LINK = "https://github.com/Matiftzy/maniezhub";

const Footer = () => {
  return (
    <footer className="bg-black py-16 relative">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold font-display tracking-tighter mb-4 inline-block">
              <span className="text-gradient">Maniez</span> Hub
            </a>
            <p className="text-white/70 max-w-sm mb-6">
              Elevate your Roblox experience with the most advanced script execution platform available.
            </p>
            <div className="flex gap-4">
              <a 
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
                aria-label="Discord"
              >
                <Discord size={18} />
              </a>
              <a 
                href={TWITTER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#product" className="text-white/70 hover:text-white transition-colors">Product</a></li>
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#reviews" className="text-white/70 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">DMCA</a></li>
              <li><a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Maniez Hub. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
