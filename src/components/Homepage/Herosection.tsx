import React from 'react';
import CategorySelector from './Categorydevice';
import { devices } from '@/lib/data';
import { ShieldCheck, Clock, Award, Star, Smartphone } from 'lucide-react';

const Herosection: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-[90vh] bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Optional subtle background pattern/overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3b82f610_0%,transparent_50%)]" />
      </div>

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
              <span>5.0 / 145 Reviews — Dallas' Top Rated Repair</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl lg:leading-tight font-extrabold text-gray-900 tracking-tight">
                Fix Your Device <span className="text-blue-600">Today.</span>
                <br />
                Right Here in Dallas.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Welcome to <strong className="text-gray-900">iCloudwireless</strong>. We provide expert, same-day phone, tablet, and computer repairs alongside premium print shop services.
              </p>
            </div>

            {/* USPs Grid */}
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Clock className="w-5 h-5"/></div>
                <span className="font-medium text-gray-800 text-sm">Same-Day Walk-in Repairs</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><ShieldCheck className="w-5 h-5"/></div>
                <span className="font-medium text-gray-800 text-sm">30-Day Parts & Labor Warranty</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Award className="w-5 h-5"/></div>
                <span className="font-medium text-gray-800 text-sm">15+ Years Exp & Apple Certified</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Smartphone className="w-5 h-5"/></div>
                <span className="font-medium text-gray-800 text-sm">Free Screen Protector (Select Repairs)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4">
              <a 
                href="https://icloudwireless.setmore.com/" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center text-lg"
              >
                Book Your Repair
              </a>
              <div className="text-sm text-gray-500 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="mb-1">Or visit us today at:</span>
                <span className="font-medium text-gray-800">9658 Plano Rd, Suite 100</span>
                <span className="font-medium text-gray-800">8702 Spring Valley Rd, Suite D</span>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Visual */}
          <div className="relative z-20 hidden lg:flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            
            {/* Phone Mockup Frame */}
            <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center transform transition-transform hover:-translate-y-2 duration-500">
              <div className="absolute top-0 w-32 h-6 bg-gray-800 rounded-b-3xl z-10"></div> {/* Notch */}
              
              {/* Inner Screen Content */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 p-6 flex flex-col items-center justify-center text-white relative">
                <ShieldCheck className="w-20 h-20 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold text-center mb-2">Expert Repair</h3>
                <p className="text-center text-blue-100 text-sm px-4">Your device in safe, certified hands.</p>
                
                {/* Simulated App Grid */}
                <div className="grid grid-cols-2 gap-4 mt-12 w-full">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl flex flex-col items-center shadow-inner">
                    <Smartphone className="w-8 h-8 mb-2" />
                    <span className="text-xs font-medium">Screens</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl flex flex-col items-center shadow-inner">
                    <div className="w-8 h-8 mb-2 flex items-center justify-center text-xl">🔋</div>
                    <span className="text-xs font-medium">Batteries</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1 */}
            <div className="absolute -left-8 top-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
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
            <div className="absolute -right-12 bottom-32 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Diagnostics</p>
                  <p className="text-sm font-bold text-gray-900">100% Free</p>
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