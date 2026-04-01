"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Phone, Mail, Headphones } from "lucide-react";
import { servicesData } from "@/lib/data";

const ServiceSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="space-y-8">
      {/* Services List Menu */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h3 className="font-bold text-slate-900 uppercase tracking-wider text-xs">Our Services</h3>
        </div>
        <nav className="p-2">
          {servicesData.map((service) => {
            const isActive = pathname === `/services/${service.slug}`;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 group ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <span className="font-bold text-sm leading-tight">{service.title}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`} />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Have a Question Box */}
      <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-100">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/30">
            <Headphones className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black mb-4">Have a Question?</h3>
          <p className="text-blue-100 text-sm mb-8 leading-relaxed">
            Not sure what repair you need? Our experts are ready to help.
          </p>
          
          <div className="w-full space-y-4">
            <a 
              href="tel:214-436-7998" 
              className="flex items-center justify-center gap-3 bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              214-436-7998
            </a>
            <Link 
              href="/#contact" 
              className="flex items-center justify-center gap-3 bg-blue-500 text-white py-4 rounded-2xl font-bold hover:bg-blue-400 transition-colors border border-blue-400 shadow-lg"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
