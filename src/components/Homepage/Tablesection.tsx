'use client'
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';



const tabsData: TabData[] = [
  {
    id: 'how-it-works',
    label: 'HOW IT WORKS',
    title: 'Comprehensive Tech Repair Services:',
    content: 'iCloudwireless – Fast, reliable phone and tablet repairs available conveniently in our Dallas stores.',
    features: [
      'Wide range of repairs including screen replacement, battery swap, charging port repair, back glass replacement, and diagnostic services for Apple, Samsung, Google, and other popular devices.'
    ],
    buttonText: 'Learn More'
  },
  {
    id: 'what-to-expect',
    label: 'WHAT TO EXPECT',
    title: 'Professional & Convenient Service:',
    content: 'Certified technicians in our stores are equipped with all necessary tools and parts, providing transparent and friendly service.',
    features: [
      'Same-day appointments available',
      'Experienced and certified technicians',
      'Use of high-quality genuine and OEM parts',
      'Real-time updates during your repair'
    ],
    buttonText: 'View Process'
  },
  {
    id: 'our-guarantee',
    label: 'OUR GUARANTEE',
    title: 'Quality Assurance & Warranty:',
    content: 'We stand by our repairs with a 30-day warranty on parts and labor, ensuring your peace of mind.',
    features: [
      '30-day warranty on all repairs and parts',
      'Satisfaction guaranteed or your money back',
      'Free diagnostic with repair',
      'Ongoing customer support post-repair'
    ],
    buttonText: 'Read Warranty'
  },
  {
    id: 'your-privacy',
    label: 'YOUR PRIVACY',
    title: 'Data Protection & Security:',
    content: 'Your data and privacy are protected with industry-leading security standards throughout the repair process.',
    features: [
      'No access to personal files during repair',
      'Secure device handling and storage',
      'Encrypted communication and data transfer',
      'Strict privacy protocols in place'
    ],
    buttonText: 'Privacy Policy'
  },
  {
    id: 'about-us',
    label: 'ABOUT US',
    title: 'Trusted Tech Repair Experts:',
    content: 'With years of experience, iCloudwireless combines expert technicians and advanced technology to deliver exceptional repair services.',
    features: [
      'Over 15 years of combined repair experience',
      'Thousands of happy customers in Dallas and beyond',
      'Partnerships with top device manufacturers',
      'Commitment to sustainable repair and device refurbishment'
    ],
    buttonText: 'Our Story'
  }
];


export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState('how-it-works');

  const currentTab = tabsData.find((tab) => tab.id === activeTab) || tabsData[0];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/50 py-24 px-6 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-[1536px] mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">
            THIS IS HOW WE DO IT!
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            How it Works, What to<br />
            Expect, and Our Guarantee.
          </h2>
        </div>

        {/* Tabs Container */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-100 pb-8">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20 transform scale-105'
                    : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[300px]">
            <div className="space-y-6 max-w-3xl">
              <div className="text-gray-600">
                <p className="text-xl text-gray-900 leading-relaxed mb-6 font-medium">
                  {currentTab.content}
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentTab.title}
                </h3>
                
                {currentTab.features && (
                  <div className="space-y-4">
                    {currentTab.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="mt-2 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Learn More Button */}
              <div className="pt-8 mt-8 border-t border-gray-100">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-8 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {currentTab.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}