"use client";
import React, { useState, useEffect } from 'react';
import CategorySelector from './Categorydevice';
import { devices } from '@/lib/data';
import { ShieldCheck, Clock, Award, Star, Smartphone, Laptop, Monitor, Gamepad2, Tablet, ChevronLeft, ChevronRight } from 'lucide-react';

const repairSlides = [
  { id: 1, type: 'phone', title: 'iPhone Repair', desc: 'Screen, Battery & More', icon: Smartphone, bgfrom: 'from-blue-600', bgto: 'to-cyan-500' },
  { id: 2, type: 'phone', title: 'Samsung Repair', desc: 'Expert Android Fixes', icon: Smartphone, bgfrom: 'from-violet-600', bgto: 'to-purple-500' },
  { id: 3, type: 'tablet', title: 'iPad Repair', desc: 'Glass & LCD Replacement', icon: Tablet, bgfrom: 'from-teal-500', bgto: 'to-emerald-400' },
  { id: 4, type: 'laptop', title: 'MacBook Repair', desc: 'Logic Board & Battery', icon: Laptop, bgfrom: 'from-gray-700', bgto: 'to-gray-900' },
  { id: 5, type: 'laptop', title: 'Windows Laptops', desc: 'Hardware & Software', icon: Laptop, bgfrom: 'from-blue-500', bgto: 'to-indigo-600' },
  { id: 6, type: 'desktop', title: 'iMac Services', desc: 'Display & Motherboard', icon: Monitor, bgfrom: 'from-rose-500', bgto: 'to-red-600' },
  { id: 7, type: 'console', title: 'Game Consoles', desc: 'PlayStation, Xbox & Switch', icon: Gamepad2, bgfrom: 'from-orange-500', bgto: 'to-amber-500' },
];

const DeviceShape = ({ type, slide }: { type: string; slide: any }) => {
  const SlideIcon = slide.icon;
  const content = (
    <div className={`w-full h-full bg-gradient-to-br ${slide.bgfrom} ${slide.bgto} p-6 flex flex-col items-center justify-center text-white relative`}>
      <SlideIcon className="w-16 h-16 lg:w-20 lg:h-20 mb-4 opacity-90 drop-shadow-lg" />
      <h3 className="text-2xl lg:text-3xl font-bold text-center mb-2 drop-shadow-md">{slide.title}</h3>
      <p className="text-center text-blue-50 text-sm px-4 font-medium bg-black/20 py-2 rounded-xl backdrop-blur-sm">{slide.desc}</p>
      <div className="mt-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/30 shadow-sm">
        <ShieldCheck className="w-4 h-4" />
        <span className="text-xs font-bold tracking-wide">EXPERT FIX</span>
      </div>
    </div>
  );

  switch (type) {
    case 'phone':
      return (
        <div className="relative w-[280px] h-[580px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col mx-auto transition-transform hover:-translate-y-2 duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl z-30"></div>
          {content}
        </div>
      );
    case 'tablet':
      return (
        <div className="relative w-[400px] h-[540px] bg-gray-900 rounded-[2rem] border-[12px] border-gray-800 shadow-2xl overflow-hidden flex flex-col mx-auto transition-transform hover:-translate-y-2 duration-500">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-16 bg-gray-800 rounded-l-lg z-30 -mr-1.5 opacity-50"></div>
          {content}
        </div>
      );
    case 'laptop':
      return (
        <div className="flex flex-col items-center justify-center w-full transition-transform hover:-translate-y-2 duration-500">
          <div className="relative w-[480px] lg:w-[500px] h-[300px] lg:h-[320px] bg-gray-900 rounded-t-xl border-[8px] border-b-0 border-gray-800 shadow-2xl overflow-hidden">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-700 z-30"></div>
            {content}
          </div>
          <div className="w-[520px] lg:w-[560px] h-4 bg-gray-300 rounded-b-2xl shadow-lg relative border-t border-gray-400">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-400 rounded-b-md"></div>
          </div>
        </div>
      );
    case 'desktop':
      return (
        <div className="flex flex-col items-center justify-center w-full mt-10 transition-transform hover:-translate-y-2 duration-500">
          <div className="relative w-[500px] lg:w-[560px] h-[320px] lg:h-[360px] bg-gray-900 rounded-xl border-[12px] border-b-[24px] border-gray-800 shadow-2xl overflow-hidden mb-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-8 bg-gray-800 flex items-center justify-center z-30">
              <span className="text-[10px] tracking-widest text-gray-400 font-bold">iCloudwireless</span>
            </div>
            {content}
          </div>
          <div className="relative z-0 flex flex-col items-center">
            <div className="w-20 h-16 bg-gradient-to-b from-gray-300 to-gray-400 shadow-inner [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]"></div>
            <div className="w-40 h-2 bg-gray-400 rounded-t-lg shadow-xl shrink-0"></div>
          </div>
        </div>
      );
    case 'console':
      return (
        <div className="flex flex-col items-center justify-center gap-8 w-full mt-10 transition-transform hover:-translate-y-2 duration-500">
          <div className="relative w-[460px] lg:w-[500px] h-[260px] lg:h-[280px] bg-gray-900 rounded-lg border-[4px] border-gray-800 shadow-2xl overflow-hidden pl-1">
            {content}
          </div>
          <div className="flex gap-6 items-end justify-center w-full px-12">
            <div className="w-48 h-12 bg-gray-900 rounded-lg border border-gray-800 shadow-2xl relative overflow-hidden flex items-center px-4 justify-between transform -skew-x-12">
              <div className="w-16 h-1 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_8px_cyan]"></div>
              <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-700"></div></div>
            </div>
            <div className="w-16 h-10 bg-gray-100 rounded-full border border-gray-300 shadow-xl relative flex items-center justify-center gap-3 transform rotate-12">
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Herosection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % repairSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % repairSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? repairSlides.length - 1 : prev - 1));

  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Brand Info */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-blue-200">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>5.0 / 500 Reviews — Dallas' Top Rated Repair</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl lg:leading-tight font-extrabold text-gray-900 tracking-tight">
                Where Technology <span className="text-blue-600">Meets Expertise.</span>
                <br />
                Right Here in DFW.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We proudly serve Dallas, FtWorth, Denton, McKinney, Prosper, Celina, Lake Highlands, University park, White rock, Garland, Richardson, Plano, Irving, and nearby communities.
                <br /><br />
                Our Apple IOS certified technicians provide fast, affordable, and high-quality repairs using premium parts — all backed by warranty with very minimal diagnostic charges.
              </p>
            </div>

            {/* USPs Grid */}
            {/* <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Clock className="w-5 h-5" /></div>
                <span className="font-medium text-gray-800 text-sm">Same-Day Walk-in Repairs</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><ShieldCheck className="w-5 h-5" /></div>
                <span className="font-medium text-gray-800 text-sm">30-Day Parts & Labor Warranty</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Award className="w-5 h-5" /></div>
                <span className="font-medium text-gray-800 text-sm">15+ Years Exp & Apple Certified</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Smartphone className="w-5 h-5" /></div>
                <span className="font-medium text-gray-800 text-sm">Free Screen Protector (Select Repairs)</span>
              </div>
            </div> */}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
              <a
                href="https://icloudwireless.setmore.com/"
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center text-lg"
              >
                Book Your Repair
              </a>
              <div className="text-sm text-gray-500 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="mb-2">Or visit us today at:</span>
                <span className="font-medium text-gray-800">9658 Plano Rd, Suite 100, Dallas, TX 75238 (Primary)</span>
                <span className="font-medium text-gray-800 mt-2">8702 Spring Valley Rd, Suite D, Dallas, TX 75240 (Inside Valley Mart)</span>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Visual (Device Carousel) */}
          <div className="relative z-20 hidden lg:flex justify-center items-center w-[560px] h-[640px] group">
            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            {/* Slider Content */}
            <div className="relative w-full h-full flex items-center justify-center">
              {repairSlides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-center ${isActive ? 'opacity-100 translate-x-0 scale-100 z-20' :
                      index < currentSlide ? 'opacity-0 -translate-x-12 scale-95 z-0 pointer-events-none' :
                        'opacity-0 translate-x-12 scale-95 z-0 pointer-events-none'
                      }`}
                  >
                    <DeviceShape type={slide.type} slide={slide} />
                  </div>
                );
              })}
            </div>

            {/* Manual Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-gray-800 rounded-full z-40 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white text-gray-800 rounded-full z-40 opacity-0 group-hover:opacity-100 transition-opacity shadow-xl border border-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
              {repairSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentSlide ? 'w-8 bg-blue-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -left-12 top-24 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce z-40" style={{ animationDuration: '3s', animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Average Time</p>
                  <p className="text-sm font-bold text-gray-900">Under 30 Mins</p>
                </div>
              </div>
            </div>

            {/* Floating Badge 2 */}
            <div className="absolute -right-8 bottom-32 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce z-40" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Certified</p>
                  <p className="text-sm font-bold text-gray-900">Technicians</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Herosection;