"use client";
import { UserCheck, Award, Car } from "lucide-react";

export default function ConvenienceSection() {
  return (
    <section className=" text-white px-6 py-24 border-b border-gray-700 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-[1536px] mx-auto text-center">
        {/* Top Heading */}
        <p className="uppercase tracking-widest text-sm text-blue-400 font-semibold mb-4">
          Unparalleled Convenience
        </p>

        {/* Main Text */}
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-16">
          Say hello to service that has –<br /> won the hearts of countless clients.
        </h2>

        {/* Modern Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <UserCheck className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Walk-ins Welcome</h3>
            <p className="text-gray-400 text-sm">No appointment necessary. Drop by whenever you need help.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">15+ Years Exp</h3>
            <p className="text-gray-400 text-sm">Expertly trained and Apple certified technicians.</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col items-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <Car className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Parking</h3>
            <p className="text-gray-400 text-sm">Ample free parking available directly outside our stores.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
