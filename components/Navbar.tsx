"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1c]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              Z
            </div>
            <span className="font-heading font-extrabold text-xl text-white tracking-tight">
              Zenforce<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <Link href="/cybersecurity/" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/compliance/" className="hover:text-white transition-colors">
              Compliance
            </Link>
            <Link href="/solutions/" className="hover:text-white transition-colors">
              Solutions
            </Link>
            <Link href="/industries/" className="hover:text-white transition-colors">
              Industries
            </Link>
            <Link href="/pricing/" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/resources/guides/penetration-testing/" className="hover:text-white transition-colors">
              Resources
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/get-a-quote/"
              className="bg-orange-600 hover:bg-orange-500 text-white font-medium text-sm px-4 py-2 rounded-lg transition-all shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 active:scale-95"
            >
              Get a Scoped Quote
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/cybersecurity/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/compliance/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Compliance
          </Link>
          <Link
            href="/solutions/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Solutions
          </Link>
          <Link
            href="/industries/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Industries
          </Link>
          <Link
            href="/pricing/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            Pricing
          </Link>
          <Link
            href="/get-a-quote/"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-orange-600 text-white py-2.5 rounded-lg font-medium"
          >
            Get a Scoped Quote
          </Link>
        </div>
      )}
    </header>
  );
}
