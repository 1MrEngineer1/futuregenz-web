import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm the FutureGenz AI. I can answer questions about our repairs, installations, and software services. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("API Key not found");
        }

        const ai = new GoogleGenAI({ apiKey });
        
        const systemInstruction = `
        You are the friendly and technical AI assistant for Future Generations Technologies (FutureGenz).
        
        Contact Info:
        - Phone: +233 240 072 224
        - Email: futuregenztechnologies@gmail.com
        - Location: Accra-West Hills, Ghana
        
        Services provided:
        1. Hardware: Custom PC builds, server racks, component upgrades.
        2. Software: OS installation, custom configuration, licensing.
        3. Repairs: Laptops, desktops, mobile devices, water damage, screen replacement.
        4. Installation: Networking, cabling, Wi-Fi mesh setups.
        5. Security: Firewalls, virus removal.
        
        Tone: Professional, helpful, tech-savvy but accessible.
        Goal: Answer user queries about services, offer basic troubleshooting tips, and encourage them to book a service or contact support via the form if the issue is complex.
        
        Keep responses concise (under 100 words usually) unless a detailed technical explanation is asked for.
        `;

        const model = 'gemini-2.5-flash';
        
        // Construct history for context
        // Limit history to last 10 messages to avoid token limits and keep context fresh
        const history = messages.slice(-10).map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
        }));

        // Add current message
        const response = await ai.models.generateContent({
            model: model,
            contents: [
                ...history,
                { role: 'user', parts: [{ text: userMessage.text }] }
            ],
            config: {
                systemInstruction: systemInstruction,
            }
        });

        const text = response.text;
        
        if (text) {
             setMessages(prev => [...prev, { role: 'model', text }]);
        } else {
             throw new Error("No response text generated");
        }

    } catch (error) {
        console.error("AI Error:", error);
        setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the server right now. Please try again later or use our contact form.", isError: true }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tech-500 ${
          isOpen ? 'bg-red-500 rotate-90 text-white' : 'bg-tech-600 text-white'
        }`}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-tech-600 flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-medium">FutureGenz AI</h3>
                <p className="text-xs text-tech-400">Online • Instant Support</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-tech-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 shadow-sm rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                  <Loader2 className="h-5 w-5 animate-spin text-tech-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about repairs..."
                className="flex-grow px-4 py-2 bg-slate-100 border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-tech-500 focus:outline-none text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="p-2 bg-tech-600 text-white rounded-full hover:bg-tech-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
             <div className="mt-2 text-center">
                <p className="text-[10px] text-slate-400">
                  AI can make mistakes. Verify important info.
                </p>
              </div>
          </div>
        </div>
      )}
    </>
  );
};