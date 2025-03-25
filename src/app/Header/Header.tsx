// components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import { BsEnvelopePlusFill } from "react-icons/bs";
import { LuDownload } from "react-icons/lu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 hidden sm:block">

<div className="flex justify-between p-5 items-center">
  <div className="flex-1">
<div className="flex justify-start gap-20">
<div className="flex items-center gap-1 ">
<MdLocalPhone className="" color="white" />
<p className="text-white">+91-8950867889</p>
</div>
<div className="flex items-center gap-2">
<BsEnvelopePlusFill color="white"/>
<p className="text-white">accord_cables@yahoo.co.in</p>
</div>
</div>
  </div>
  <div className="flex-1">
<div className="flex justify-end  ">
<a href="/Accord-Cables-Brochure.pdf" download className="">
  <button className="text-white flex gap-3 items-center border-2 border-white p-2 rounded-full cursor-pointer"><LuDownload color="white" /> Download</button>
  </a>
</div>
  </div>
</div>
    </div>

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
            <img src="logo.png" className="w-60 " />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-white-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-900 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}