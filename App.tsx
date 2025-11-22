import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { About } from './components/About';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'services' | 'about' | 'contact'>('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => setActiveSection('services')} />
            <Services />
            <About />
            <Contact />
          </>
        );
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onCtaClick={() => setActiveSection('services')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer setActiveSection={setActiveSection} />
      <AIAssistant />
    </div>
  );
};

export default App;