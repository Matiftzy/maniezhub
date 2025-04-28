
import { Check, X } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Maniez Hub</h1>
          <p className="text-gray-400">Smooth. Powerful. Reliable.</p>
        </header>

        <main>
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">About</h2>
            <p className="mb-4">
              <strong>Maniez Hub</strong> is a Roblox script hub created to elevate your gameplay experience with smooth and efficient scripts.
              Currently supporting <strong>The Strongest Battlegrounds</strong>, and constantly evolving for more!
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Getting Started</h2>
            <p className="mb-4">
              No complicated setup — just <strong>copy</strong>, <strong>paste</strong>, and <strong>play</strong>:
            </p>
            <ol className="list-decimal ml-6 mb-6">
              <li className="mb-2">Copy the script from this repository.</li>
              <li className="mb-2">Paste it into your preferred Roblox executor.</li>
              <li className="mb-2">Launch and enjoy the enhanced gaming experience!</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Why Choose Maniez Hub?</h2>
            <ul className="list-disc ml-6 mb-6">
              <li className="mb-2"><strong>Ultra Smooth Scripts</strong> — fluid and lag-free execution.</li>
              <li className="mb-2"><strong>User-Friendly</strong> — optimized for easy use.</li>
              <li className="mb-2"><strong>Lightweight</strong> — minimal performance impact.</li>
              <li className="mb-2"><strong>Frequent Updates</strong> — always improving and expanding!</li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Informasi</h2>
            <p className="italic mb-4">A failed function does not always mean it is broken or missing. It may still work, but failed one of sUNC's checks.</p>
            <p className="mb-4">
              Information is based on whatexpsare.online, weao.xyz, discord.gg/weao, and Numelon.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Executors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AWP.GG */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">AWP.GG</h3>
                <div className="mb-4">
                  <p><span className="text-gray-400">sUNC:</span> <span className="text-green-400">98%</span></p>
                  <p><span className="text-gray-400">UNC:</span> <span className="text-green-400">99%</span></p>
                </div>
                <div className="mb-2">
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Decompiler:</span> <Check className="text-green-400" size={18} /></p>
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Multi-Inject:</span> <Check className="text-green-400" size={18} /></p>
                </div>
              </div>
              
              {/* Wave */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Wave</h3>
                <div className="mb-4">
                  <p><span className="text-gray-400">sUNC:</span> <span className="text-green-400">100%</span></p>
                  <p><span className="text-gray-400">UNC:</span> <span className="text-green-400">99%</span></p>
                </div>
                <div className="mb-2">
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Decompiler:</span> <X className="text-red-400" size={18} /></p>
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Multi-Inject:</span> <Check className="text-green-400" size={18} /></p>
                </div>
              </div>
              
              {/* Velocity */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Velocity</h3>
                <div className="mb-4">
                  <p><span className="text-gray-400">sUNC:</span> <span className="text-green-400">90%</span></p>
                  <p><span className="text-gray-400">UNC:</span> <span className="text-green-400">99%</span></p>
                </div>
                <div className="mb-2">
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Decompiler:</span> <Check className="text-green-400" size={18} /></p>
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Multi-Inject:</span> <X className="text-red-400" size={18} /></p>
                </div>
              </div>
              
              {/* Swift */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Swift</h3>
                <div className="mb-4">
                  <p><span className="text-gray-400">sUNC:</span> <span className="text-green-400">100%</span></p>
                  <p><span className="text-gray-400">UNC:</span> <span className="text-green-400">99%</span></p>
                </div>
                <div className="mb-2">
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Decompiler:</span> <Check className="text-green-400" size={18} /></p>
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Multi-Inject:</span> <X className="text-red-400" size={18} /></p>
                </div>
              </div>
              
              {/* Delta (formerly Arceus X) */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-2">Delta</h3>
                <div className="mb-4">
                  <p><span className="text-gray-400">sUNC:</span> <span className="text-green-400">94%</span></p>
                  <p><span className="text-gray-400">UNC:</span> <span className="text-green-400">100%</span></p>
                </div>
                <div className="mb-2">
                  <p className="flex items-center"><span className="text-gray-400 mr-2">Decompiler:</span> <X className="text-red-400" size={18} /></p>
                </div>
                <div className="mt-4">
                  <p><a href="https://discord.gg/deltaex" className="text-blue-400 hover:text-blue-300 underline">discord.gg/deltaex</a></p>
                  <p><a href="https://deltaexploits.gg" className="text-blue-400 hover:text-blue-300 underline">deltaexploits.gg</a></p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Supported Games</h2>
            <ul className="list-disc ml-6 mb-6">
              <li className="mb-2"><strong>The Strongest Battlegrounds</strong></li>
              <li className="mb-2 text-gray-400"><em>(More games coming soon!)</em></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Development Status</h2>
            <ul className="list-none mb-6">
              <li className="mb-2"><strong>BAK Script (Battleground Alt Kill):</strong> <span className="text-green-400">Active</span></li>
              <li className="mb-2"><strong>Main Script:</strong> <span className="text-blue-400">On-Develop</span></li>
            </ul>
            <p className="mb-4">Stay tuned for future updates and expansions!</p>
          </section>
        </main>

        <footer className="text-center text-gray-500 mt-16 pb-8">
          <p className="mb-2">All rights reserved.</p>
          <p>Created and maintained by <strong>KentalManiz</strong>.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
