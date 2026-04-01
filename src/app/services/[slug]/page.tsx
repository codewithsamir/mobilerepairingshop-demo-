import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/lib/data";
import ServiceSidebar from "@/components/Services/ServiceSidebar";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

const ServiceDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  // console.log("DEBUG: Accessing service with slug:", slug);
  const service = servicesData.find((s) => s.slug === slug);
  // console.log("DEBUG: Service found:", service ? service.title : "NOT FOUND");

  if (!service) {
    // console.log("DEBUG: Triggering notFound()");
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="max-w-7xl 2xl:max-w-[1550px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28">
              <ServiceSidebar />
            </div>
          </div>

          {/* Right Main Content */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-12">
            {/* Back Button */}
            <Link 
              href="/services" 
              className="inline-flex items-center text-slate-500 hover:text-blue-600 font-semibold transition-colors group mb-4"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mr-3 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors shadow-sm">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to All Services
            </Link>

            {/* Header Section */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-200 shadow-sm overflow-hidden">
              <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden mb-10 shadow-2xl border border-slate-100">
                <Image
                  src="/assets/iphone-repair.jpg"
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                  {service.title}
                </h1>

                <div className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                  <Zap className="w-3.5 h-3.5" /> High-End Technology Solutions
                </div>

                <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                  Fast, Reliable Repairs for All Your Devices — Done Right the First Time.
                </p>

                <p className="text-lg text-slate-500 leading-relaxed mb-12">
                  {service.longDescription}
                </p>
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <CheckCircle2 className="w-7 h-7 text-blue-600" />
                  What We Offer
                </h3>
                <ul className="space-y-4">
                  {service.features?.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-blue-50 hover:border-blue-100 transition-all">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2.5 flex-shrink-0 group-hover:bg-blue-600"></div>
                      <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-100">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                    <ShieldCheck className="w-7 h-7" />
                    Our Guarantee
                  </h3>
                  <p className="text-blue-50 mb-8 leading-relaxed">
                    All repairs at iCloudwireless are backed by a solid 30-day warranty on parts and labor. We use premium components to ensure your device performs like new.
                  </p>
                  <Button asChild className="w-full py-7 bg-white text-blue-600 hover:bg-blue-50 rounded-2xl text-lg font-bold shadow-lg">
                    <Link href="https://icloudwireless.setmore.com/">
                      Book Your Appointment Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-slate-400">
                    < Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Same-Day Service</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Most repairs are completed within 15 to 30 minutes in our Dallas stores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
