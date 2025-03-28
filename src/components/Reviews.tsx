
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

type Review = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "FuriousEmile",
    role: "Dumbass Player",
    content: "The script barley has any faulty, and ones that do, is because I use xeno. As someone who plays a lot it's hard to grind kills fast and this script is insanely good.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Competitive Player",
    content: "As someone who plays competitively, I need tools that are reliable and undetectable. Maniez Hub delivers on both fronts. The premium scripts give me the edge I need without compromising my account safety.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Script Developer",
    content: "The script execution engine in Maniez Hub is second to none. I develop scripts professionally and this tool handles even the most complex code with ease. Highly recommended for serious developers.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "Content Creator",
    content: "This hub has become essential for my content creation. The variety of scripts available lets me create unique experiences for my viewers, and the interface makes it easy to showcase different features.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tyler West",
    role: "Beginner",
    content: "I'm new to scripting and Maniez Hub has been perfect for learning the ropes. The free tier has plenty of features to explore, and the community is super helpful when I have questions.",
    rating: 4,
  },
];

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    }
    
    if (isRightSwipe) {
      handlePrev();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
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

  // Auto-advance reviews
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section 
      id="reviews" 
      className="py-24 bg-background relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            User <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Hear what our community has to say about Maniez Hub
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto relative animate-on-scroll">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-secondary/50 rounded-xl p-8 border border-white/10">
                    <div className="flex items-center mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={cn(
                            i < review.rating ? "text-white" : "text-white/20",
                            "fill-current"
                          )}
                        />
                      ))}
                    </div>
                    <p className="italic text-lg mb-6">"{review.content}"</p>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-white/70">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-white scale-110"
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
