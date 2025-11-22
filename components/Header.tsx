import React, { useState } from 'react';
import { Menu, X, CircuitBoard } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: 'home' | 'services' | 'about' | 'contact') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'services' | 'about' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: 'home' | 'services' | 'about' | 'contact') => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="bg-tech-50 p-1.5 rounded-lg group-hover:bg-tech-100 transition-colors border border-tech-100">
                <CircuitBoard className="h-7 w-7 text-tech-600" />
            </div>
            <div className="ml-3 flex flex-col justify-center">
                <span className="font-bold text-slate-900 text-sm sm:text-base leading-none tracking-tight">Future Generations</span>
                <span className="font-semibold text-tech-600 text-[0.65rem] sm:text-xs leading-none tracking-widest uppercase mt-0.5">Technologies</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-tech-600'
                    : 'text-slate-600 hover:text-tech-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-tech-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-tech-50 text-tech-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-tech-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};