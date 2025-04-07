
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Maniez Hub</h1>
        <p className="text-xl mb-8 text-center">
          A powerful Roblox script hub designed to enhance your gaming experience!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Supported Games</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>The Strongest Battlegrounds</li>
            </ul>
          </div>
          <div className="bg-white/20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Features</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Powerful and efficient scripts</li>
              <li>Easy to use interface</li>
              <li>Regular updates</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a 
            href="https://discord.gg/U3CVFrMPeT" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 transition-colors px-6 py-3 rounded-full text-lg font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
