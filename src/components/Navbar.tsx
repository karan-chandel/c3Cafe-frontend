"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+919253779999";
  const displayPhone = "092537 79999";
  const waUrl = "https://wa.me/919253779999?text=" + encodeURIComponent("Hi Chai Chowk Cafe, I want to order/inquire.");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#ebdcd0] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand Logo & Title */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border-2 border-[#e05326] group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="/logo.jpg"
                  alt="Chai Chowk Cafe (C3) Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-xl font-black tracking-tight text-[#1c1917] flex items-center gap-1.5 leading-tight">
                  Chai Chowk Cafe
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#e05326] animate-pulse"></span>
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#e05326] leading-tight mt-0.5">
                  Taste of Tradition.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#3d322c]">
              <Link href="#menu" className="hover:text-[#e05326] transition-colors">
                Menu
              </Link>

              <Link
               href="#tablereserve"
               className="hover:text-[#e05326] transition-colors">
               Book Your Table
              </Link>

              <Link
                href="#franchise"
                className="text-[#133e3b] hover:text-[#e05326] transition-colors flex items-center gap-1.5 font-bold"
              >
                <span>Franchise</span>
                <span className="text-[10px] bg-[#e05326]/15 text-[#e05326] border border-[#e05326]/30 px-2 py-0.5 rounded-full font-bold">
                  Open
                </span>
              </Link>
              <Link href="#location" className="hover:text-[#e05326] transition-colors">
                Location & Hours
              </Link>
            </nav>

            {/* Right Action: Call & Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Full Call Button */}
              <a
                href={`tel:${phoneNumber}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#e05326] to-[#c84318] hover:from-[#c84318] hover:to-[#b03712] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#e05326]/20 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call Now</span>
                <span className="hidden md:inline font-semibold">({displayPhone})</span>
              </a>

              {/* Mobile Quick Call Button (Compact & Elegant) */}
              <a
                href={`tel:${phoneNumber}`}
                aria-label="Call Chai Chowk Cafe"
                className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-[#e05326] to-[#c84318] text-white shadow-sm shadow-[#e05326]/25 active:scale-95 transition-transform"
              >
                <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-[#ebdcd0] text-[#1c1917] hover:border-[#e05326] active:scale-95 transition-all shadow-xs"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg className="w-5 h-5 text-[#e05326]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop with smooth fade */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
            aria-hidden="true"
          />

          {/* Slide-in Drawer from Right */}
          <div className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-[#faf8f5] shadow-2xl flex flex-col justify-between border-l border-[#ebdcd0] z-10 animate-fade-in">
            {/* Drawer Top / Header */}
            <div>
              <div className="flex items-center justify-between p-4 border-b border-[#ebdcd0] bg-white">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#e05326] shrink-0">
                    <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#1c1917] leading-tight">Chai Chowk Cafe</h3>
                    <p className="text-[10px] font-bold text-[#e05326]">Taste of Tradition.</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-[#f4efe8] hover:bg-[#ede4d8] text-[#1c1917] flex items-center justify-center transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Status / Veg Badge */}
              <div className="px-4 py-2.5 bg-emerald-50 border-b border-emerald-100 flex items-center gap-2 text-[11px] font-bold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <span>100% Pure Vegetarian Cafe</span>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-2">
                <Link
                  href="#menu"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#e05326] active:bg-[#f4efe8] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#e05326]/10 text-[#e05326] flex items-center justify-center text-base">
                      📜
                    </span>
                    <span className="text-sm font-bold text-[#1c1917] group-hover:text-[#e05326]">
                      Explore Menu
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-[#786b65] bg-[#faf8f5] px-2 py-0.5 rounded-full border border-[#ebdcd0]">
                    75+ Items
                  </span>
                </Link>

                <Link
                  href="#tablereserve"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#e05326] active:bg-[#f4efe8] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center text-base">
                      🪑
                    </span>
                    <span className="text-sm font-bold text-[#1c1917] group-hover:text-[#e05326]">
                      Book your Table
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
                    Book Online
                  </span>
                </Link>

                <Link
                  href="#franchise"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#e05326] active:bg-[#f4efe8] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#133e3b]/10 text-[#133e3b] flex items-center justify-center text-base">
                      🤝
                    </span>
                    <span className="text-sm font-bold text-[#1c1917] group-hover:text-[#e05326]">
                      Franchise
                    </span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#e05326]/15 text-[#e05326] border border-[#e05326]/30 px-2 py-0.5 rounded-full">
                    Partner With Us
                  </span>
                </Link>

                <Link
                  href="#location"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-[#ebdcd0] hover:border-[#e05326] active:bg-[#f4efe8] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#e05326]/10 text-[#e05326] flex items-center justify-center text-base">
                      📍
                    </span>
                    <span className="text-sm font-bold text-[#1c1917] group-hover:text-[#e05326]">
                      Location & Hours
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-[#786b65]">Fatehabad</span>
                </Link>
              </nav>
            </div>

            {/* Drawer Bottom Actions: Direct Call, WhatsApp & Social */}
            <div className="p-4 border-t border-[#ebdcd0] bg-white space-y-3">
              {/* Call Action */}
              <a
                href={`tel:${phoneNumber}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-[#e05326] to-[#c84318] text-white font-bold text-xs shadow-md shadow-[#e05326]/20 active:scale-98 transition-transform"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call Us ({displayPhone})</span>
              </a>

              {/* WhatsApp Action */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-sm active:scale-98 transition-transform"
              >
                <span className="text-sm">💬</span>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Social Channels Strip */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#6e5f58] border-t border-stone-100">
                <span className="font-semibold text-[11px]">Follow us:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/c3chaichowkcafe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#e05326] hover:underline"
                  >
                    Instagram
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.facebook.com/profile.php?id=61579396418460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1877f2] hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
