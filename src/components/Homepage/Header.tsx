'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { imageData } from '@/lib/imagedata';
import { Menu, X } from 'lucide-react'; // ← install lucide-react if you don't have it

const navItems = [
  { item: 'HOME', href: '/' },
  { item: 'BOOK US', href: 'https://icloudwireless.setmore.com/' },
  { item: 'HOW IT WORKS', href: '/how-it-works' },
  // { item: 'SERVICE AREAS', href: '/servicearea' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-[160px] sm:w-[180px] md:w-[220px] h-10 md:h-14">
              <Image
                src={imageData.logo}
                alt="iCloud Wireless Mobile Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="bg-blue-900 rounded-full px-6 lg:px-10 py-3">
              <ul className="flex items-center gap-6 lg:gap-10">
                {navItems.map((item) => (
                  <li key={item.item}>
                    <Link
                      href={item.href}
                      className="text-white text-sm lg:text-base font-medium hover:text-blue-200 transition-colors duration-200"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

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
        </div>
      </div>
    </header>
  );
};

export default Header;