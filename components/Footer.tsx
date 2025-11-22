import React from 'react';
import { CircuitBoard, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
    setActiveSection: (section: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
                <div className="bg-slate-900 p-1.5 rounded-lg border border-slate-800 mr-3">
                    <CircuitBoard className="h-6 w-6 text-tech-500" />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="font-bold text-white text-base leading-none tracking-tight">Future Generations</span>
                    <span className="font-semibold text-tech-500 text-xs leading-none tracking-widest uppercase mt-1">Technologies</span>
                </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your trusted partner for next-generation hardware repairs, software solutions, and professional installations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-tech-500 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveSection('services')} className="text-slate-400 hover:text-white text-sm transition-colors">Hardware Repair</button></li>
              <li><button onClick={() => setActiveSection('services')} className="text-slate-400 hover:text-white text-sm transition-colors">Network Installation</button></li>
              <li><button onClick={() => setActiveSection('services')} className="text-slate-400 hover:text-white text-sm transition-colors">Software Config</button></li>
              <li><button onClick={() => setActiveSection('services')} className="text-slate-400 hover:text-white text-sm transition-colors">Cyber Security</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-tech-500 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><button onClick={() => setActiveSection('about')} className="text-slate-400 hover:text-white text-sm transition-colors">About Us</button></li>
              <li><button onClick={() => setActiveSection('contact')} className="text-slate-400 hover:text-white text-sm transition-colors">Careers</button></li>
              <li><button onClick={() => setActiveSection('contact')} className="text-slate-400 hover:text-white text-sm transition-colors">Contact</button></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-tech-500 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-tech-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-tech-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-tech-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-tech-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
                <p className="text-xs text-slate-500">Subscribe to our newsletter</p>
                <div className="mt-2 flex">
                    <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-700 text-white px-3 py-1 text-sm rounded-l-md w-full focus:outline-none focus:border-tech-500" />
                    <button className="bg-tech-600 px-3 py-1 rounded-r-md hover:bg-tech-500 transition-colors">Go</button>
                </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Future Generations Technologies. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2 md:mt-0">
            Designed with AI Integration.
          </p>
        </div>
      </div>
    </footer>
  );
};