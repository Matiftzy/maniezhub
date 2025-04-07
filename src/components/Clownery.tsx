import React, { useRef, useState } from 'react';
import { Button } from './ui/button';
import { VolumeX, Volume2, ZoomIn, X } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

interface ClowneryItemProps {
  imageSrc: string;
  soundSrc: string;
  comment: string;
  smallSize?: boolean;
}

const ClowneryItem: React.FC<ClowneryItemProps> = ({ imageSrc, soundSrc, comment, smallSize }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleSound = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  // Class for smaller boxes
  const boxClass = smallSize 
    ? "flex flex-col items-center mb-8 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700 h-[85%]" 
    : "flex flex-col items-center mb-8 p-4 bg-zinc-800/50 rounded-lg border border-zinc-700";

  return (
    <div className={boxClass}>
      <div className="relative w-full max-w-md">
        <img 
          src={imageSrc} 
          alt="Clownery content" 
          className="w-full rounded-md shadow-lg cursor-pointer"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          <Button 
            onClick={toggleSound} 
            variant="outline" 
            size="sm"
            className="bg-zinc-900/80 hover:bg-zinc-800 text-white border-zinc-700"
          >
            {isPlaying ? <VolumeX className="h-4 w-4 mr-1" /> : <Volume2 className="h-4 w-4 mr-1" />}
            {isPlaying ? "Stop" : "Play"}
          </Button>
          
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-zinc-900/80 hover:bg-zinc-800 text-white border-zinc-700"
              >
                <ZoomIn className="h-4 w-4 mr-1" />
                Zoom
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[90vw] max-w-[800px] p-0 bg-zinc-900 border-zinc-700">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={imageSrc} 
                    alt="Zoomed content" 
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="absolute top-2 right-2 bg-zinc-900/80 hover:bg-zinc-800 text-white border-zinc-700"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-3 border-t border-zinc-700">
                <p className="text-sm text-zinc-300 italic">{comment}</p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <audio ref={audioRef} src={soundSrc} onEnded={handleAudioEnded} />
      </div>
      <p className="text-sm text-zinc-300 mt-2 italic">{comment}</p>
    </div>
  );
};

const Clownery = () => {
  const clownItems = [
    {
      imageSrc: "https://github.com/Matiftzy/maniezhub/blob/main/public/assets/clownrev.png?raw=true",
      soundSrc: "https://github.com/Matiftzy/maniezhub/raw/refs/heads/main/public/assets/stinky.mp3",
      comment: "where did lil bro come from? 😭"
    },
    {
      imageSrc: "https://github.com/Matiftzy/maniezhub/blob/main/public/assets/clown2bruhrev.png?raw=true",
      soundSrc: "https://github.com/Matiftzy/maniezhub/raw/refs/heads/main/public/assets/stinky.mp3",
      comment: "ok boomer"
    },
    {
      imageSrc: "https://github.com/Matiftzy/maniezhub/blob/main/public/assets/thisyoscripts.png?raw=true",
      soundSrc: "https://github.com/Matiftzy/maniezhub/raw/refs/heads/main/public/assets/stinky.mp3",
      comment: "is this ur owner's script? 😭😭"
    },
    {
      imageSrc: "https://github.com/Matiftzy/maniezhub/blob/main/public/assets/chatgbt.png?raw=true",
      soundSrc: "https://github.com/Matiftzy/maniezhub/raw/refs/heads/main/public/assets/stinky.mp3",
      comment: "tell me if this doesnt looks like chatgpt-made, at least be self-aware before criticizing 😭🙏"
    },
    {
      imageSrc: "https://github.com/Matiftzy/maniezhub/blob/main/public/assets/antiafkclown.png?raw=true",
      soundSrc: "https://github.com/Matiftzy/maniezhub/raw/refs/heads/main/public/assets/stinky.mp3",
      comment: "no comment 💀💀",
      smallSize: true  // Make this box smaller
    },
    {
      imageSrc: "https://github.com/Matiftzy/maniezhub/blob/main/public/assets/clown4sensor.png?raw=true",
      soundSrc: "https://github.com/Matiftzy/maniezhub/raw/refs/heads/main/public/assets/stinky.mp3",
      comment: "it's really pitiful for this dog, being ordered to bark 😢🥺😓",
      smallSize: true  // Make this box smaller
    }
  ];

  return (
    <section id="clownery" className="w-full py-16 bg-gradient-to-b from-zinc-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Clownery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clownItems.map((item, index) => (
            <ClowneryItem
              key={index}
              imageSrc={item.imageSrc}
              soundSrc={item.soundSrc}
              comment={item.comment}
              smallSize={item.smallSize}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clownery;
