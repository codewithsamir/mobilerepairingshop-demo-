"use client";

import Image from "next/image";
import { Wrench, ShieldCheck, DollarSign, MapPin } from "lucide-react";

export default function ServiceSection() {
  return (
    <section className=" text-white px-6 py-12 rounded-2xl border-b border-gray-700">
      <div className="max-w-[1536px] mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8">
            Same-Day Instore Repairs <br />
            With Genuine Parts & <br />
            Certified Experts.
          </h2>

          <div className="space-y-8">
            {/* 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">15+ Years Combined Experience</h3>
                <p className="text-sm text-gray-300">
                  Our certified technicians have the expertise to repair iPhones, Samsung, iPads, and even printers and computers.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">30-Day Warranty</h3>
                <p className="text-sm text-gray-300">
                  We stand by our work. All repairs come with a solid 30-day warranty on parts and labor for your peace of mind.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 bg-white/10 p-3 rounded-full">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Transparent Pricing</h3>
                <p className="text-sm text-gray-300">
                  No hidden fees. We explain all costs upfront before any work begins, ensuring complete transparency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-white/5 rounded-xl border border-white/10 p-8 flex flex-col justify-center h-full">
          <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Visit Our Stores</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            What sets us apart is our dedication to quality in-store service. With our two convenient locations in Dallas, you get immediate access to top-tier repair experts.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            Whether you need a quick screen replacement, a complex water damage repair, or print shop services, our certified technicians are ready to assist you. Walk in today and experience the iCloudwireless difference!
          </p>
          <div className="space-y-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-medium text-white">9658 Plano Rd, Suite 100</p>
              <p className="text-sm text-gray-400">Dallas, TX 75238 (Primary)</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="font-medium text-white">8702 Spring Valley Rd, Suite D</p>
              <p className="text-sm text-gray-400">Dallas, TX 75240 (Inside Valley Mart)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
