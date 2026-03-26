<<<<<<< HEAD
"use client";
=======
'use client';

>>>>>>> 05bd4ad9c9df8bd3ff6fa4a8bf3e36bfc0e823d2
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { imageData } from '@/lib/imagedata';
import { Home, CalendarPlus, HelpCircle, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { item: 'HOME', href: '/' },
    { item: 'BOOK US', href: 'https://icloudwireless.setmore.com/' },
    { item: 'HOW IT WORKS', href: '/how-it-works' },
    { item: 'LOCATIONS', href: '/servicearea' }
  ];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          </nav>

<<<<<<< HEAD
            {/* Navigation */}
            <nav className="hidden md:block ">
              <div className="bg-blue-900 rounded-full px-8 py-3">
                <ul className="flex items-center space-x-8">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.item}>
                        <Link
                          href={item.href}
                          className={`text-sm font-semibold transition-all duration-300 px-4 py-2 rounded-full ${
                            isActive 
                              ? 'bg-white text-blue-900 shadow-sm' 
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {item.item}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </nav>
          </div>
=======
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0'
        } bg-white border-t shadow-lg`}
      >
        <div className="px-5 flex flex-col space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.item}
              href={item.href}
              className="text-gray-800 font-medium hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.item}
            </Link>
          ))}
>>>>>>> 05bd4ad9c9df8bd3ff6fa4a8bf3e36bfc0e823d2
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-2 py-2 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <ul className="flex justify-around items-center">
          <li>
            <Link href="/" className={`flex flex-col items-center p-2 transition-colors ${pathname === '/' ? 'text-blue-600' : 'text-gray-500'}`}>
              <Home className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold">HOME</span>
            </Link>
          </li>
          <li>
            <Link href="https://icloudwireless.setmore.com/" className="flex flex-col items-center p-2 text-gray-500 hover:text-blue-600 transition-colors">
              <CalendarPlus className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold">BOOK US</span>
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className={`flex flex-col items-center p-2 transition-colors ${pathname === '/how-it-works' ? 'text-blue-600' : 'text-gray-500'}`}>
              <HelpCircle className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold">HOW IT WORKS</span>
            </Link>
          </li>
          <li>
            <Link href="/servicearea" className={`flex flex-col items-center p-2 transition-colors ${pathname === '/servicearea' ? 'text-blue-600' : 'text-gray-500'}`}>
              <MapPin className="w-6 h-6 mb-1" />
              <span className="text-[10px] font-bold">LOCATIONS</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header;