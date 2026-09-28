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
          src="/images/holl.png"
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

              <a
                href="https://wa.me/message/4ZSZBI3J3HKXA1"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition hover:-translate-y-1 hover:bg-orange-600"
              >
                🪑 Book Your Table
                <span>→</span>
              </a>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl">
                <img
                  src="images/collage.png"
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
                  src="images/gupshup.jpeg"
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
                  src="images/birthday.png"
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
                  src="images/special.jpg"
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

    </main>
  );
}