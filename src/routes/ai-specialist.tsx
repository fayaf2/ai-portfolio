import { createFileRoute } from "@tanstack/react-router";
import { Zap, Phone, Lock } from "lucide-react";

export const Route = createFileRoute("/ai-specialist")({
  head: () => ({
    meta: [
      { title: "Best AI Specialist in Kerala | Fayaz PM" },
      { name: "description", content: "Hire the best AI Specialist in Kerala. Fayaz PM builds custom LLM applications, AI automation, and intelligent cybersecurity solutions." },
      { name: "keywords", content: "AI Specialist Kerala, Best AI Developer in Kerala, AI Consultant, LLM Applications, AI Automation, Machine Learning Expert Kerala, Fayaz PM" },
      { property: "og:title", content: "Best AI Specialist in Kerala | Fayaz PM" },
      { property: "og:description", content: "Hire the best AI Specialist in Kerala. Fayaz PM builds custom LLM applications, AI automation, and intelligent cybersecurity solutions." },
    ],
  }),
  component: AISpecialistLandingPage,
});

function AISpecialistLandingPage() {
  return (
    <div className="min-h-screen bg-[#0f4f5a] font-sans selection:bg-blue-500/30">
      {/* Navigation (Simplified for landing page) */}
      <header className="absolute top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white/90 hover:text-white transition">
             <span className="font-semibold tracking-tight text-xl">fayaz.pm</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-12 min-h-screen">
        
        {/* Left Column */}
        <div className="flex-1 text-white z-10 w-full">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-white/90 mb-8">
            <Zap className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
            <span>Kerala's #1 AI Specialist • Google Certified</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight mb-8">
            Best AI<br />
            Specialist<br />
            in Kerala —<br />
            Architecting<br />
            Smart Systems.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10">
            Fayaz PM is Kerala's most trusted AI expert with 5+ years of proven results. 
            Using cutting-edge AI tools, LLMs, and battle-tested architecture, he's built 
            intelligent, automated systems for clients in Dubai, Saudi Arabia, Germany, and across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 bg-white text-[#0f4f5a] font-semibold rounded hover:bg-gray-100 transition shadow-lg text-sm sm:text-base">
              Get Free AI Consultation
            </button>
            <a href="tel:+918129269317" className="px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition flex items-center gap-2 text-sm sm:text-base">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full max-w-lg lg:w-[480px] shrink-0 z-10">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-10 text-gray-800">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 text-center sm:text-left tracking-tight">
              Get Your Free AI Consultation
            </h2>
            
            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full border-b border-gray-300 pb-2 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full border-b border-gray-300 pb-2 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Website (Optional)" 
                    className="w-full border-b border-gray-300 pb-2 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full border-b border-gray-300 pb-2 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Your Mobile Number" 
                    className="w-full border-b border-gray-300 pb-2 bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <select className="w-full border-b border-gray-300 pb-2 bg-transparent text-sm text-gray-400 focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Service</option>
                    <option value="llm">LLM Application Development</option>
                    <option value="automation">AI Automation</option>
                    <option value="chatbot">AI Chatbot</option>
                    <option value="security">AI Cybersecurity</option>
                    <option value="consulting">AI Consulting</option>
                  </select>
                </div>
              </div>

              {/* Captcha */}
              <div className="flex items-center gap-4 text-sm text-gray-600 pt-2">
                <span>Enter Sum:</span>
                <span className="font-semibold text-gray-900">3 + 2</span>
                <input 
                  type="text" 
                  placeholder="?" 
                  className="w-16 bg-gray-100 border border-gray-200 rounded px-3 py-1.5 text-center text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea 
                  placeholder="Type Message Here" 
                  rows={4}
                  className="w-full bg-gray-100/80 border-none rounded-md p-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-shadow resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button"
                className="w-full bg-[#5d9afb] hover:bg-blue-500 text-white font-medium py-3.5 rounded transition-colors text-sm sm:text-base mt-2 shadow-sm"
              >
                Claim My Free Consultation
              </button>
              
              {/* Footer text */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 mt-4">
                <Lock className="w-3 h-3" />
                <span>No spam. 100% confidential. Response within 24 hours.</span>
              </div>
            </form>
          </div>
          
          {/* Decorative glow behind form */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none -z-10" />
        </div>
      </section>
    </div>
  );
}
