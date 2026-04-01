"use client";

import React, { useState, useEffect } from "react";
import { X, ShoppingBag, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the banner every time the site is opened/reloaded
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-md overflow-hidden bg-white rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(30, 58, 138, 0.2)"
        }}
      >
        {/* Modern Gradient Header */}
        <div className="relative h-48 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex flex-col items-center justify-center overflow-hidden">
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="z-10 text-center px-6 flex flex-col items-center">
            <div className="mb-3 p-4">
              <Image
                src="/assets/logo.png"
                alt="icloudwireless"
                width={200}
                height={46}
                className=" object-contain h-auto w-auto"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400/90 text-blue-900 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" /> Exclusive Offer
            </div>
          </div>

          <button
            onClick={closeBanner}
            className="absolute top-4 right-4 p-2.5 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all backdrop-blur-md z-50 border border-white/20 active:scale-90 shadow-lg"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-8 text-center">
          <div className="mb-6">
            <p className="text-xl font-bold text-slate-700">Book Your Repair Now & Get </p>

            <div className="text-5xl font-black text-blue-900 mb-2">
              $10 <span className="text-2xl align-top mt-2 inline-block">OFF*</span>
            </div>
            <p className="text-xl font-bold text-slate-700">Any Devices Repair </p>
          </div>

          <p className="text-slate-500 mb-8 max-w-xs mx-auto leading-relaxed">
            Mention this banner to get an instant discount on your next visit! We fix screens, batteries, and more.
          </p>

          <div className="space-y-3">
            <Button
              asChild
              onClick={closeBanner}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl text-lg font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              <Link href="https://icloudwireless.setmore.com/" target="_blank" rel="noopener noreferrer">
                Claim My Discount
              </Link>
            </Button>
            <button
              onClick={closeBanner}
              className="text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors"
            >
              No thanks, I'll pay full price
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-6 text-slate-400">
            <div className="flex flex-col items-center gap-1">
              <Phone className="w-5 h-5" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Call Us</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-[10px] uppercase font-bold tracking-widest">Visit Shop</span>
            </div>
          </div>

          <p className="mt-4 text-[10px] text-slate-400">
            *Valid for first-time customers. Cannot be combined with other offers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
