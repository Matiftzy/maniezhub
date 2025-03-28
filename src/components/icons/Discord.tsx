
import React from 'react';

interface DiscordProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const Discord: React.FC<DiscordProps> = ({ 
  size = 24, 
  className = "", 
  ...props 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M7.5 7.2c.7-.7 1.5-1.2 2.4-1.5 1-.3 1.9-.5 2.9-.6 1.3.1 2.6.4 3.8 1l-1.1 1.8" />
      <path d="M7 16.8c.7.7 1.6 1.2 2.5 1.5 1 .3 2 .5 3 .5 1.3 0 2.7-.3 3.9-.9l-1-1.9" />
      <path d="M2 12a10 10 0 0 0 5.3 8.8L4 16" />
      <path d="M22 12a10 10 0 0 0-5.3-8.8L20 8" />
      <path d="M9 22h6c1.7 0 3-1.4 3-3V5c0-1.7-1.3-3-3-3H9C7.3 2 6 3.3 6 5v14c0 1.6 1.3 3 3 3Z" />
    </svg>
  );
};

export default Discord;
