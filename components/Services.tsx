import React from 'react';
import { Cpu, Code, Wrench, Settings, ShieldCheck, Cloud } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesData: ServiceItem[] = [
  {
    id: 'hardware',
    title: 'Custom Hardware',
    description: 'High-performance PC builds, server rack assembly, and component upgrades tailored to your specific workload needs.',
    iconName: 'Cpu'
  },
  {
    id: 'software',
    title: 'Software Solutions',
    description: 'Enterprise OS installation, custom software configuration, and licensing management for businesses of all sizes.',
    iconName: 'Code'
  },
  {
    id: 'repairs',
    title: 'Expert Repairs',
    description: 'Diagnostic and repair services for laptops, desktops, and mobile devices. Water damage, screen replacement, and motherboard logic.',
    iconName: 'Wrench'
  },
  {
    id: 'installation',
    title: 'Network Installation',
    description: 'Complete structured cabling, router configuration, and Wi-Fi mesh system setup for homes and offices.',
    iconName: 'Settings'
  },
  {
    id: 'security',
    title: 'Cyber Security',
    description: 'Firewall implementation, virus removal, and security audits to keep your data safe from evolving threats.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'cloud',
    title: 'Cloud Integration',
    description: 'Seamless migration to cloud platforms, hybrid setups, and remote backup solutions for data redundancy.',
    iconName: 'Cloud'
  }
];

const IconMap = {
  Cpu: Cpu,
  Code: Code,
  Wrench: Wrench,
  Settings: Settings,
  ShieldCheck: ShieldCheck,
  Cloud: Cloud
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-tech-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Tech Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            Everything you need to keep your technology running smoothly, from installation to advanced repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = IconMap[service.iconName];
            return (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-slate-100 flex flex-col"
              >
                <div className="h-12 w-12 rounded-lg bg-tech-100 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-tech-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100">
                    <a href="#contact" className="text-tech-600 hover:text-tech-700 font-medium inline-flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};