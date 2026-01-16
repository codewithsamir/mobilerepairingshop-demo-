import React from 'react';
import CategorySelector from './Categorydevice';
import { devices } from '@/lib/data';
import { Button } from '../ui/button';
import { ArrowRight, ArrowRightSquare } from 'lucide-react';
import Link from 'next/link';

const Herosection: React.FC = () => {
  return (
    <div className="relative min-h-[80vh] md:min-h-[90vh] bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Optional subtle background pattern/overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#3b82f610_0%,transparent_50%)]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* ── LEFT SIDE ── Text + CTA ──────────────────────────────── */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 max-w-xl mx-auto lg:mx-0">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                Fastest Mobile Phone Repair
                <br className="hidden sm:block" />
                <span className="text-blue-900">We Come to You</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 font-medium">
                iCloud Wireless Mobile • Dallas, TX
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Dallas' most convenient on-demand repair service — now in Plano, Richardson, Frisco and surrounding areas.  
               Quick, professional, and done right at your doorstep.
            </p>

<Link href={"https://icloudwireless.setmore.com/"}>
            <Button className='bg-white text-black border-2 border-blue-900 hover:bg-blue-900 hover:text-white text-md w-[80%]'>Select Your Model <ArrowRight className='text-blue-900' /></Button>

</Link>
          
          </div>

          {/* ── RIGHT SIDE ── Visual / Hero Image Area ──────────────────────────────── */}
          <div className="relative hidden lg:block rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 bg-white">
            {/* You can choose one approach: */}

            {/* Option A - Static high-quality image (recommended for faster LCP) */}
            <div className="aspect-[4/3] lg:aspect-[5/4] relative">
              {/* Pick your favorite from these professional repair images */}
              {/* I'm showing a few good candidates — feel free to swap image_id */}
              <img
                // src="/assets/iphone-repair.jpg"
                src="/assets/iphone-operation.jpg"
                alt="Professional technician repairing smartphone"
                className="absolute inset-0 w-full h-full object-cover"
                width={1248}
                height={832}
                loading="eager"
                decoding="async"
              />

              {/* Optional overlay gradient + text for branding */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-90">On-Demand • Fast • Reliable</p>
              </div>

            </div>

    
          </div>

          {/* Mobile fallback image (shown below text on small screens) */}
          <div className="lg:hidden mt-10 -mx-5 sm:mx-0 rounded-2xl overflow-hidden shadow-xl border border-gray-200/60">
            <img
                src="/assets/iphone-operation.jpg"
              alt="Mobile phone repair technician at work"
              className="w-full h-auto object-cover aspect-[4/3]"
              width={800}
              height={533}
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Herosection;