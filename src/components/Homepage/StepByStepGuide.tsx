"use client";
import React, { JSX, useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";

interface TabContent {
  id: string;
  title: string;
  content: JSX.Element;
}

const StepByStepGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState("how-it-works");

  const tabs: TabContent[] = [
    {
      id: "how-it-works",
      title: "How It Works",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 underline mb-2">
              Visit One of Our Stores
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We have two convenient locations in Dallas with free parking right outside! Simply walk in or book an appointment online to skip the line. Our technicians will be ready to assist you immediately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 underline mb-2">
              Free Diagnostics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Upon your arrival, we perform a thorough diagnostic of your device. We explain the issues and provide transparent pricing before any work begins.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 underline mb-2">
              Fast, Expert Repair
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Relax in our store while your device is repaired. Most common issues like screen and battery replacements are finished in about an hour!
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "what-to-expect",
      title: "What to Expect",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Our certified technicians arrive with all the tools and high-quality parts needed for your repair. We work quickly while keeping you informed every step of the way.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Thorough diagnostic check of your device</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Genuine replacement parts where required</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Full testing before you receive your device back</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "our-guarantee",
      title: "Our Guarantee",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We’re committed to quality service and your satisfaction on every repair.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">30-Day Warranty</h4>
            <p className="text-blue-700 text-sm">
              All repairs are backed by a 30-day warranty on parts and labor. If an issue occurs within this period, we’ll fix it at no extra cost.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "your-privacy",
      title: "Your Privacy",
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Your privacy and data protection are important to us at every step of the repair process.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>No access to your personal data during repairs</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Secure handling of devices at all times</span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Commitment to full confidentiality</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      <div className="text-center mb-16">
        <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">
          TRANSPARENCY IN EVERY STEP
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          How It Works & What to Expect
        </h2>
      </div>

      <div className="grid lg:grid-cols-[2fr_3fr] gap-8 items-stretch">
        {/* Left Side Visual */}
        <div className="relative h-full min-h-[400px] rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex items-center justify-center p-10 group hidden lg:flex overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-50/80 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform group-hover:-translate-y-4 transition-transform duration-700"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-blue-500/20 transform group-hover:scale-105 group-hover:-rotate-3 transition-all duration-500">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Fast & Transparent</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Experience hassle-free repair services designed around your busy schedule. Book online, drop off, and relax!
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray-100 w-full">
              <div className="flex items-center justify-center space-x-2 text-sm font-semibold text-blue-600">
                <CheckCircle className="w-5 h-5" />
                <span>No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Tabs */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col min-h-[500px]">
          <div className="flex flex-wrap p-3 bg-gray-50/50 border-b border-gray-100 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onMouseEnter={() => setActiveTab(tab.id)}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[140px] px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 shadow-sm border border-gray-200"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StepByStepGuide;
