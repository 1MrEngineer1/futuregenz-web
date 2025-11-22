import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'general',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name !== 'service') {
        // Show validation feedback as user types
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameError = validate('name', formData.name);
    const emailError = validate('email', formData.email);
    const messageError = validate('message', formData.message);
    
    setErrors({
        name: nameError,
        email: emailError,
        message: messageError
    });
    
    setTouched({
        name: true,
        email: true,
        message: true
    });

    if (nameError || emailError || messageError) {
        return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: 'general', message: '' });
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const getInputStyles = (fieldName: keyof typeof errors) => {
      const hasError = touched[fieldName] && errors[fieldName];
      const isValid = touched[fieldName] && !errors[fieldName];
      
      let borderColor = "border-slate-700";
      let focusColor = "focus:ring-tech-500 focus:border-transparent";
      
      if (hasError) {
          borderColor = "border-red-500";
          focusColor = "focus:ring-red-500 focus:border-red-500";
      } else if (isValid) {
          borderColor = "border-green-500";
          focusColor = "focus:ring-green-500 focus:border-green-500";
      }

      return `w-full px-4 py-3 bg-slate-900 border ${borderColor} rounded-lg focus:ring-2 ${focusColor} focus:outline-none text-white placeholder-slate-500 transition-all pr-10`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Ready to upgrade your setup or need a quick repair? Fill out the form or visit our service center.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-tech-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-slate-400">+233 240 072 224</p>
                  <p className="text-sm text-slate-500">Mon-Fri 9am-6pm</p>
                </div>
              </div>
              
              <div className="flex items-start">
                 <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-tech-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-slate-400">futuregenztechnologies@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                 <div className="flex-shrink-0 bg-slate-800 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-tech-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-slate-400">Accra-West Hills</p>
                  <p className="text-slate-400">Ghana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputStyles('name')}
                      placeholder="John Doe"
                    />
                    {touched.name && errors.name && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                    )}
                    {touched.name && !errors.name && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                    )}
                  </div>
                  {touched.name && errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputStyles('email')}
                      placeholder="john@example.com"
                    />
                    {touched.email && errors.email && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                    )}
                    {touched.email && !errors.email && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                    )}
                  </div>
                   {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Service Interest</label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-tech-500 focus:border-transparent text-white transition-all appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="repair">Hardware Repair</option>
                    <option value="installation">Installation</option>
                    <option value="software">Software Issue</option>
                    <option value="business">Business Solutions</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={4}
                    className={getInputStyles('message')}
                    placeholder="How can we help you?"
                  ></textarea>
                  {touched.message && errors.message && (
                        <div className="absolute top-3 right-0 pr-3 flex items-center pointer-events-none">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                        </div>
                    )}
                   {touched.message && !errors.message && (
                        <div className="absolute top-3 right-0 pr-3 flex items-center pointer-events-none">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                    )}
                </div>
                {touched.message && errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    isSubmitting 
                    ? 'bg-slate-700 cursor-not-allowed' 
                    : isSubmitted 
                        ? 'bg-green-600 hover:bg-green-500' 
                        : 'bg-tech-600 hover:bg-tech-500 focus:ring-tech-500'
                }`}
              >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                        Sending...
                    </>
                ) : isSubmitted ? (
                    <>
                        Message Sent!
                        <CheckCircle className="ml-2 h-4 w-4" />
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};