
import React from 'react';

const Script = () => {
  return (
    <section id="script" className="py-24 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-background to-background/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Script</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Use this script in your Roblox executor
          </p>
        </div>
        
        <div className="w-full max-w-3xl mx-auto bg-black/20 rounded-lg p-6 backdrop-blur-lg border border-white/10">
          <pre className="text-sm md:text-base overflow-x-auto whitespace-pre-wrap break-all text-white/80 font-mono">
            print("hello")
          </pre>
          
          <div className="mt-4 flex justify-end">
            <button 
              className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-md text-sm text-white/80"
              onClick={() => {
                navigator.clipboard.writeText('print("hello")');
              }}
            >
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Script;
