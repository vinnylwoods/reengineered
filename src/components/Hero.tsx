import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section id="home" className="relative isolate pt-14 lg:pt-0 min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-40"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        {/* Left Content */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
           {/* Badge */}
           <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400 backdrop-blur-sm mb-8 animate-fade-in-up">
             <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
             Systems Operational
           </div>
           
           <h1 className="max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance font-mono">
             r<span className="text-green-500">(e)</span>ngineering <br/>
             <span className="text-gray-500">the Future.</span>
           </h1>
           
           <p className="mt-6 text-lg leading-8 text-gray-400 max-w-xl">
             Advanced consulting and content strategies for the digital age. We deconstruct complex problems and engineer scalable, high-performance solutions.
           </p>
           
           {/* Buttons */}
           <div className="mt-10 flex items-center gap-x-6">
             <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20 border border-green-500/50" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
               Initialize Project
             </Button>
             <a href="#about" className="text-sm font-semibold leading-6 text-white hover:text-green-400 transition-colors flex items-center gap-2 group">
               View Documentation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
             </a>
           </div>
           
           <div className="mt-14 pt-10 border-t border-gray-800">
            <p className="text-sm font-semibold text-gray-500 mb-4 font-mono uppercase tracking-wider">Powered by</p>
            <div className="flex gap-x-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Tech-focused placeholders */}
               <span className="text-xl font-bold text-white font-mono">REACT</span>
               <span className="text-xl font-bold text-white font-mono">NODE</span>
               <span className="text-xl font-bold text-white font-mono">AI</span>
               <span className="text-xl font-bold text-white font-mono">DATA</span>
            </div>
          </div>
        </div>
        
        {/* Right Content - Terminal Window */}
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow w-full max-w-lg mx-auto lg:mx-0">
          <div className="relative rounded-xl bg-gray-900/90 border border-gray-800 backdrop-blur-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500 group">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-950/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500 transition-colors"></div>
              </div>
              <div className="text-xs text-gray-500 font-mono">bash — 80x24</div>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm text-gray-300 space-y-4 min-h-[300px]">
              <div className="flex">
                <span className="text-green-500 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <span className="text-gray-100">./init_sequence.sh --optimize</span>
              </div>
              
              <div className="space-y-1 text-gray-400">
                <div className="flex items-center gap-2">
                   <span className="text-green-500">✔</span> Loading core modules...
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-green-500">✔</span> Analyzing business logic...
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-green-500">✔</span> Optimizing performance...
                </div>
                <div className="flex items-center gap-2">
                   <span className="text-green-500">✔</span> Generating revenue streams...
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/50">
                <div className="text-gray-400 mb-2">&gt; <span className="text-blue-400">Strategy</span> compiled successfully.</div>
                <div className="text-gray-400">&gt; <span className="text-blue-400">Growth</span> vector calculated.</div>
                <div className="text-gray-400">&gt; <span className="text-green-400">Ready to deploy.</span></div>
              </div>
              
              <div className="flex pt-2">
                 <span className="text-green-500 mr-2">➜</span>
                 <span className="text-blue-400 mr-2">~</span>
                 <span className="w-2.5 h-5 bg-gray-500 animate-pulse block"></span>
              </div>
            </div>
            
            {/* Background Glow inside terminal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-green-500/5 rounded-full blur-[50px] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
