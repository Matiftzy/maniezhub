
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What is Maniez Hub?",
    answer: "Maniez Hub is a Hub script that you can use in various Roblox games that are Maniez Hub-supported to enhance your gaming experience.",
  },
  {
    question: "Is Maniez Hub safe to use?",
    answer: "Yes, Maniez Hub is designed with security in mind. Our scripting system is virtually undetectable by existing anti-cheat systems if used correctly. We also regularly update our security measures to stay ahead of detection methods.",
  },
  {
    question: "Will my account get banned for using Maniez Hub?",
    answer: "When used responsibly and according to our guidelines, Maniez Hub is designed to minimize the risk of banning. However, no script can guarantee 100% security against anti-cheat systems because developers continuously update their methods. We recommend using an alternate account for testing and avoiding obvious cheating behavior.",
  },
  {
    question: "How do I use Maniez Hub?",
    answer: "It is easy to use. Copy the Script Loader from our website, open your executor that has been injected, paste the Script Loader you copied, and then execute it. Done!",
  },
  {
    question: "Is there a free version available?",
    answer: "Yes, we offer a free version with basic functionalities to help you get started. It includes access to our basic script library and essential execution features. For more advanced features and premium scripts, you can upgrade to our Premium or Professional plans.",
  },
  {
    question: "How often is Maniez Hub updated?",
    answer: "We release updates regularly to improve performance, add new features, and maintain compatibility with the latest Roblox updates. Premium and Professional users receive priority updates as soon as they're available.",
  },
  {
    question: "Can I create my own scripts with Maniez Hub?",
    answer: "No, Maniez Hub is developed by our specialized team of professionals in coding and reverse engineering. However, if you purchase a plan, you will get priority in requesting new scripts for supported games.",
  },
  {
    question: "How do I contact support if I have issues?",
    answer: "You can contact our support team via the Help section of the Maniez Hub Discord Server or by emailing support@maniezhub.com. Premium and Lifetime users receive priority support with faster response times.",
  },
];

const FAQItem = ({ item, isOpen, toggleOpen }: { item: FAQItem; isOpen: boolean; toggleOpen: () => void }) => {
  return (
    <div className="border-b border-white/10 last:border-0 animate-on-scroll">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between w-full py-5 text-left focus:outline-none"
      >
        <span className="text-lg font-medium">{item.question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen ? "transform rotate-180" : ""
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-white/70">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="faq" className="py-24 bg-background relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about Maniez Hub
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-secondary/30 rounded-xl p-6 md:p-8 border border-white/10">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-white/70 mb-4">Still have questions?</p>
          <a
            href="https://discord.com/invite/U3CVFrMPeT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-colors duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
