"use client";
import CategorySelector from "@/components/Homepage/Categorydevice";
import { devices } from "@/lib/data";
import React from "react";
import { Calendar, ShieldCheck, Clock } from "lucide-react";

const BookUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden pb-20">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-[1536px] mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text & Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div>
              <p className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">
                BOOK YOUR APPOINTMENT
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Ready to Fix Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Favorite Device?
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Select your device category below to see estimated pricing and book your time slot at either of our Dallas locations.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">30-Day Warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Same-Day Repair</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="font-semibold text-sm">Online Booking</span>
              </div>
            </div>
          </div>

          {/* Right Side: Category Selector */}
          <div className="relative">
            {/* Background Glow for Selector */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-[3rem] blur-2xl z-0"></div>
            
            <div className="relative z-10 max-w-[500px] mx-auto w-full">
              <CategorySelector data={devices} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookUsPage;