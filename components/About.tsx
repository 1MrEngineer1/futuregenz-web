import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
             {/* Placeholder image using standard rules */}
             <div className="rounded-2xl overflow-hidden shadow-xl">
                 <img 
                    src="https://picsum.photos/800/600" 
                    alt="Technicians working on hardware" 
                    className="w-full h-auto object-cover"
                 />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-xl shadow-lg hidden md:block">
                 <p className="text-3xl font-bold text-tech-500">10+</p>
                 <p className="text-sm font-medium">Years of Excellence</p>
             </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Innovating for the Future Generation
            </h2>
            <div className="prose prose-slate text-lg text-slate-600">
                <p className="mb-6">
                    Founded in 2014, FutureGenz started with a simple mission: to bridge the gap between complex technology and the people who use it. What began as a small repair shop has grown into a full-service technology partner for businesses and individuals alike.
                </p>
                <p className="mb-6">
                    We believe that technology should be an enabler, not a barrier. Our team of certified engineers and technicians are passionate about hardware architecture, software ecosystems, and ensuring your systems operate at peak performance.
                </p>
                <ul className="space-y-4 mt-8">
                    <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="ml-3 text-slate-700">Certified Hardware Specialists</span>
                    </li>
                    <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="ml-3 text-slate-700">24/7 Emergency Support Available</span>
                    </li>
                    <li className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="ml-3 text-slate-700">Authorized Service Center for Major Brands</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};