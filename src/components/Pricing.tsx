
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const DISCORD_LINK = "https://discord.com/invite/U3CVFrMPeT";

type PlanFeature = {
  text: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  price: string;
  robuxPrice: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  callToAction: string;
};

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: "$0",
    robuxPrice: "0 R$",
    description: "Perfect for beginners to explore basic features",
    features: [
      { text: "Basic script execution", included: true },
      { text: "Access to free script features", included: true },
      { text: "Community support", included: true },
      { text: "One active session", included: true },
      { text: "Premium scripts features", included: false },
      { text: "Script priority updates", included: false },
      { text: "Advanced game compatibility", included: false },
      { text: "Multiple active sessions", included: false },
    ],
    callToAction: "Get Started",
  },
  {
    name: "Premium",
    price: "$1.98",
    robuxPrice: "599 R$",
    description: "Unlock the full potential with advanced features",
    features: [
      { text: "Advanced script execution", included: true },
      { text: "Full script library access", included: true },
      { text: "Priority support", included: true },
      { text: "Three active sessions", included: true },
      { text: "Premium scripts", included: true },
      { text: "Script priority updates", included: true },
      { text: "Advanced game compatibility", included: true },
      { text: "Custom script development", included: false },
    ],
    popular: true,
    callToAction: "Get Premium",
  },
  {
    name: "Lifetime",
    price: "$5.49",
    robuxPrice: "2859/2000 R$",
    description: "For serious developers and power users",
    features: [
      { text: "Enterprise-grade execution", included: true },
      { text: "Complete script library access", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Unlimited active sessions", included: true },
      { text: "Early access to new scripts", included: true },
      { text: "Instant script updates", included: true },
      { text: "All game compatibility", included: true },
      { text: "Custom script development", included: true },
    ],
    callToAction: "Go Lifetime",
  },
];

const specialPlans: PricingPlan[] = [
  {
    name: "Hourly Access",
    price: "$0.99",
    robuxPrice: "119 R$",
    description: "Perfect to test out first",
    features: [
      { text: "Max 7 Alts", included: true },
      { text: "Bald Hero", included: true },
      { text: "All Character", included: false },
    ],
    callToAction: "Get Hourly Access",
  },
  {
    name: "Lifetime",
    price: "$9.99",
    robuxPrice: "2500 R$",
    description: "Perfect to Farm many Acc's to Earn many Kills as You want.",
    features: [
      { text: "Max 7 Alts", included: true },
      { text: "Bald Hero", included: true },
      { text: "All Character", included: true },
    ],
    callToAction: "Get Lifetime Access",
  },
];

const PricingCard = ({ plan, useRobux }: { plan: PricingPlan; useRobux: boolean }) => {
  return (
    <div 
      className={cn(
        "animate-on-scroll rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px]",
        plan.popular ? "border-2 border-white/20" : "border border-white/10"
      )}
    >
      {plan.popular && (
        <div className="bg-white text-black text-center py-1.5 text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className={cn(
        "p-6", 
        plan.popular ? "bg-secondary" : "bg-secondary/50"
      )}>
        <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-4xl font-bold font-display">{useRobux ? plan.robuxPrice : plan.price}</span>
          <span className="text-white/70 mb-1">/month</span>
        </div>
        <p className="text-white/70 mb-6">{plan.description}</p>

        <div className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className={cn(
                "mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                feature.included ? "bg-white/20" : "bg-white/5"
              )}>
                {feature.included && <Check className="w-3 h-3" />}
              </div>
              <span className={feature.included ? "text-white/90" : "text-white/40"}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        <a
          href={DISCORD_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "block w-full py-3 rounded-lg font-medium transition-all duration-300 text-center",
            plan.popular
              ? "bg-white text-black hover:opacity-90"
              : "bg-white/10 text-white hover:bg-white/15"
          )}
        >
          {plan.callToAction}
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [useRobux, setUseRobux] = useState(false);

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
    <section id="pricing" className="py-24 clip-path-slant-bottom bg-accent relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees or long-term commitments.
          </p>
          
          <div className="flex items-center justify-center mt-8 gap-3">
            <span className={`text-sm ${!useRobux ? 'text-white' : 'text-white/50'}`}>USD</span>
            <Switch 
              checked={useRobux}
              onCheckedChange={setUseRobux}
              className="data-[state=checked]:bg-white"
            />
            <span className={`text-sm ${useRobux ? 'text-white' : 'text-white/50'}`}>Robux</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} useRobux={useRobux} />
          ))}
        </div>

        <div className="mt-16 text-center mb-16 animate-on-scroll">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Special Pricing for <span className="text-gradient">Script Farm Kill Alts TSBG</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {specialPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} useRobux={useRobux} />
          ))}
        </div>

        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-white/50 max-w-2xl mx-auto">
            All plans include access to our basic features. Upgrade or downgrade anytime. 
            <br />Need a custom solution? <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/90 transition-colors">Contact us</a>.
          </p>
          {useRobux && pricingPlans[2].robuxPrice.includes('/') && (
            <p className="text-white/70 mt-4">
              *Price becomes 2000 R$ during discount periods
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
