import React from 'react';
import { ArrowRight, Cpu, Shield, Zap } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
               <pattern id="hero_grid_pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                 <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
               </pattern>
            </defs>
            <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
            <rect width="100" height="100" fill="url(#hero_grid_pattern)" />
         </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-tech-500/30 bg-tech-500/10 text-tech-500 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-tech-500 mr-2"></span>
              Next Gen Technology Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Empowering Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-500 to-blue-500">
                Digital Future
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
              From custom hardware builds to enterprise software installations and critical repairs. FutureGenz delivers robust tech solutions for modern businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCtaClick}
                className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-tech-600 hover:bg-tech-500 transition-colors shadow-lg shadow-tech-500/25"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                className="inline-flex justify-center items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
          
          {/* Abstract Visual */}
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-xl p-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                        <div className="bg-slate-700/50 p-4 rounded-lg">
                            <Cpu className="h-8 w-8 text-tech-500 mb-2" />
                            <div className="h-2 w-16 bg-slate-600 rounded mb-2"></div>
                            <div className="h-2 w-24 bg-slate-600 rounded"></div>
                        </div>
                        <div className="bg-slate-700/50 p-4 rounded-lg">
                            <Zap className="h-8 w-8 text-yellow-500 mb-2" />
                            <div className="h-2 w-20 bg-slate-600 rounded mb-2"></div>
                            <div className="h-2 w-12 bg-slate-600 rounded"></div>
                        </div>
                    </div>
                    <div className="space-y-4 mt-8">
                        <div className="bg-slate-700/50 p-4 rounded-lg">
                            <Shield className="h-8 w-8 text-emerald-500 mb-2" />
                             <div className="h-2 w-14 bg-slate-600 rounded mb-2"></div>
                            <div className="h-2 w-20 bg-slate-600 rounded"></div>
                        </div>
                         <div className="bg-gradient-to-br from-tech-600 to-blue-600 p-4 rounded-lg text-white">
                            <div className="font-bold text-lg">99.9%</div>
                            <div className="text-xs opacity-80">Uptime Guarantee</div>
                        </div>
                    </div>
                </div>
             </div>
             {/* Decorative elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-tech-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};