"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function TableReservation() {
  const [guests, setGuests] = useState("2 Guests");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `Hello Chai Chowk Cafe 👋

I want to reserve a table.

👥 Guests: ${guests}
📅 Date: ${date}
🕐 Time: ${time}
👤 Name: ${name}
📱 Phone: ${phone}
💬 Special Request: ${request || "None"}

Please confirm my table reservation.`;

    const whatsappUrl = `https://wa.me/919253779999?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#35170e]">

      {/* ================= HERO ================= */}
      <section id="tablereserve" className="relative min-h-[400px] flex items-center overflow-hidden">

        {/* Background */}
        <img
          src="/cafe/holl.png"
          alt="Chai Chowk Cafe"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">

          <div className="grid items-center gap-8 lg:grid-cols-2">

            {/* LEFT SIDE CONTENT */}
            <div className="max-w-2xl">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-orange-400" />

                <span className="text-xs font-bold uppercase tracking-[0.28em] text-orange-300">
                  Table Reservation
                </span>

                <span className="h-px w-10 bg-orange-400" />
              </div>

              <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Reserve Your
                <span className="block text-orange-400">
                  Table
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                Good chai, delicious food, and a table waiting for you.
                Make your visit to Chai Chowk Cafe a little more special.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#booking-form"
                  className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition hover:-translate-y-1 hover:bg-orange-600"
                >
                  🪑 Book Online
                  <span>↓</span>
                </a>
                <a
                  href="https://wa.me/919253779999?text=Hello%20Chai%20Chowk%20Cafe%2C%20I%20want%20to%20inquire%20about%20a%20table%20reservation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/20"
                >
                  💬 Direct WhatsApp
                </a>
              </div>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
                <img
                  src="/cafe/collage.png"
                  alt="Chai Chowk Cafe Table"
                  className="h-[400px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= OCCASIONS ================= */}
      <section className="bg-[#fffaf3] px-5 py-16 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-2xl text-center">

            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-orange-400" />

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-orange-600">
                Perfect For Every Occasion
              </span>

              <span className="h-px w-8 bg-orange-400" />
            </div>

            <h2 className="text-3xl font-black text-[#35170e] sm:text-4xl">
              Make Every Moment Special
            </h2>

            <p className="mt-3 text-sm leading-6 text-stone-600">
              Whether it&apos;s chai with friends or a special celebration,
              there&apos;s always a reason to gather around a table.
            </p>

          </div>


          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="group overflow-hidden rounded-2xl border border-[#eadbce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-52 overflow-hidden">
                <img
                  src="/cafe/gupshup.jpeg"
                  alt="Chai and Gupshup"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-xl shadow-lg">
                  ☕
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-black text-[#35170e]">
                  Chai &amp; Gupshup
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Relaxed chai time with friends is always a good idea.
                </p>
              </div>

            </div>


            {/* Card 2 */}
            <div className="group overflow-hidden rounded-2xl border border-[#eadbce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-52 overflow-hidden">
                <img
                  src="/cafe/birthday.png"
                  alt="Birthday Celebration"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-xl shadow-lg">
                  🎂
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-black text-[#35170e]">
                  Birthday Celebration
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Make your special day more memorable with your favourite people.
                </p>
              </div>

            </div>


            {/* Card 3 */}
            <div className="group overflow-hidden rounded-2xl border border-[#eadbce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

              <div className="relative h-52 overflow-hidden">
                <img
                  src="/cafe/special.jpg"
                  alt="Special Moments"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-xl shadow-lg">
                  ❤️
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-black text-[#35170e]">
                  Special Moments
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Couples, anniversaries and unforgettable moments.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= INTERACTIVE BOOKING FORM ================= */}
      <section id="booking-form" className="relative px-5 py-16 sm:px-8 lg:px-10 bg-gradient-to-b from-[#fffaf3] via-white to-[#fffaf3]">
        <div className="mx-auto max-w-4xl">
          
          <div className="rounded-3xl border border-[#ebdcd0] bg-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-stone-200/50">
            {/* Form Header */}
            <div className="mb-8 text-center">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3.5 py-1 text-xs font-bold text-orange-700">
                <span>✨ Instant WhatsApp Confirmation</span>
              </div>
              <h2 className="text-2xl font-black text-[#35170e] sm:text-3xl lg:text-4xl">
                Book Your Table Online
              </h2>
              <p className="mt-2 text-sm sm:text-base text-stone-600">
                Fill details below and we&apos;ll reserve your spot instantly over WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf8f5] px-4 py-3 text-sm text-[#35170e] placeholder-stone-400 transition focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="res-phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf8f5] px-4 py-3 text-sm text-[#35170e] placeholder-stone-400 transition focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="res-guests" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Number of Guests
                  </label>
                  <select
                    id="res-guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf8f5] px-4 py-3 text-sm text-[#35170e] transition focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="1 Guest">👤 1 Guest</option>
                    <option value="2 Guests">👥 2 Guests</option>
                    <option value="3-4 Guests">👨‍👩‍👧 3 - 4 Guests</option>
                    <option value="5-6 Guests">👨‍👩‍👧‍👦 5 - 6 Guests</option>
                    <option value="7-10 Guests">🎉 7 - 10 Guests</option>
                    <option value="10+ Party/Event">🎈 10+ Big Party / Celebration</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Reservation Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf8f5] px-4 py-3 text-sm text-[#35170e] transition focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="res-time" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="res-time"
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf8f5] px-4 py-3 text-sm text-[#35170e] transition focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                {/* Special Request */}
                <div>
                  <label htmlFor="res-request" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Occasion / Special Request
                  </label>
                  <input
                    id="res-request"
                    type="text"
                    placeholder="e.g. Birthday decor, quiet corner, etc."
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-stone-200 bg-[#faf8f5] px-4 py-3 text-sm text-[#35170e] placeholder-stone-400 transition focus:border-orange-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-[#c84318] px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange-600/30 transition hover:-translate-y-0.5 hover:from-orange-600 hover:to-[#b03712] active:scale-95"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                  <span>Confirm Table on WhatsApp</span>
                  <span>→</span>
                </button>
                <p className="mt-3 text-xs text-stone-500">
                  🔒 No advance payment needed. We will instantly verify &amp; confirm your table via WhatsApp.
                </p>
              </div>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}