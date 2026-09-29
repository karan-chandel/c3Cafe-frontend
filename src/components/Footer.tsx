"use client";

import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const displayPhone = "+91 92537 79999";
  const telPhone = "+919253779999";

  return (
    <footer className="bg-[#0d2826] border-t border-[#1a4a46] text-stone-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-md border-2 border-[#e05326]">
                <img
                  src="/logo.jpg"
                  alt="Chai Chowk Cafe"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Chai Chowk Cafe
              </span>
            </Link>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              <strong className="text-white block font-bold text-sm">Fatehabad ka Favourite Chai Spot 🔥</strong>
              Best Taste • Best Vibe ✨ Visit Once, Come Again ❤️
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram - Gradient Background */}
              <a
                href="https://www.instagram.com/c3chaichowkcafe/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow C3 Chai Chowk Cafe on Instagram"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-xs font-semibold text-white hover:opacity-90 hover:scale-105 transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>

              {/* Facebook - Blue Background */}
              <a
                href="https://www.facebook.com/profile.php?id=61579396418460"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow C3 Chai Chowk Cafe on Facebook"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1877F2] text-xs font-semibold text-white hover:bg-[#0f5fd1] hover:scale-105 transition-all shadow-md"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#menu" className="hover:text-[#ff8159] transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="#franchise" className="hover:text-[#ff8159] transition-colors">
                  Franchise Model
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-[#ff8159] transition-colors">
                  Location & Hours
                </Link>
              </li>
              <li>
                <Link href="#tablereserve" className="hover:text-[#ff8159] transition-colors">
                  Book Your Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Specialties */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Favorites</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#menu" className="hover:text-[#ff8159] transition-colors">
                  Desi Masala Chai
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#ff8159] transition-colors">
                  Cold Coffee with Ice Cream
                </Link>
              </li>
              <li>
                <Link href="#menu" className="hover:text-[#ff8159] transition-colors">
                  Special Heart Pizza
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Order / Contact</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href={`tel:${telPhone}`} className="hover:text-[#ff8159] flex items-center gap-2 font-bold text-white">
                  <span>📞</span>
                  <span>{displayPhone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5">📍</span>
                <span>MM PG College, Ratia Road, Fatehabad, Haryana 125050</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>09:00 AM – 10:00 PM (Daily)</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex items-start justify-center lg:justify-end">
            <img
              src="/cafe/person-cafe.png"
              alt="Chai Chowk Cafe - Best Chai in Fatehabad"
              className="w-32 sm:w-36 lg:w-40 h-auto object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 mt-10 border-t border-[#1a4a46] flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Chai Chowk Cafe. All rights reserved.</p>
          <p>Handcrafted with warmth & fresh flavors.</p>
        </div>
      </div>
    </footer>
  );
}