import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { imageData } from '@/lib/imagedata';
import { Home, CalendarPlus, HelpCircle, MapPin } from 'lucide-react';

const Header = () => {
  const navItems = [
    { item: 'HOME', href: '/' },
    { item: 'BOOK US', href: 'https://icloudwireless.setmore.com/' },
    { item: 'HOW IT WORKS', href: 'how-it-works' },
    { item: 'SERVICE AREAS', href: 'servicearea' }
  ];

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">

              <Link href="/">
                <Image src={imageData.logo} alt="logo" width={200} height={100} />
              </Link>


            </div>

            {/* Navigation */}
            <nav className="hidden md:block ">
              <div className="bg-blue-900 rounded-full px-8 py-3">
                <ul className="flex items-center space-x-8">
                  {navItems.map((item) => (
                    <li key={item.item}>
                      <Link
                        href={item.href}
                        className="text-white text-sm font-medium hover:text-blue-200 transition-colors duration-200"
                      >
                        {item.item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 py-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <ul className="flex justify-around items-center">
          <li>
            <Link href="/" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <Home className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">HOME</span>
            </Link>
          </li>
          <li>
            <Link href="https://icloudwireless.setmore.com/" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <CalendarPlus className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">BOOK US</span>
            </Link>
          </li>
          <li>
            <Link href="how-it-works" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <HelpCircle className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">HOW IT WORKS</span>
            </Link>
          </li>
          <li>
            <Link href="servicearea" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <MapPin className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-medium">LOCATIONS</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header