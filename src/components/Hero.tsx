import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Ambient background glows matching Terracotta & Teal logo palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#e05326]/8 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#133e3b]/6 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e05326]/30 bg-[#e05326]/10 text-[#e05326] text-xs sm:text-sm font-bold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-[#e05326] animate-ping" />
              <span>Chai • Coffee • Conversations</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1c1917] tracking-tight leading-[1.15]">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e05326] via-[#c84318] to-[#133e3b]">
                Chai Chowk Cafe.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#574944] leading-relaxed max-w-2xl font-medium">
              Authentic slow-brewed Assam kulhad chai, artisanal cold coffees, fresh oven-baked pizzas, and sizzling snacks in a warm, welcoming vibe.
            </p>

            {/* CTAs: "View Menu" & "Locate Us" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#menu"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#e05326] to-[#c84318] hover:from-[#c84318] hover:to-[#b03712] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#e05326]/25 transition-all hover:scale-105 text-center"
              >
                📜 View Menu
              </a>

              <a
                href="#location"
                className="px-8 py-3.5 rounded-full border-2 border-[#133e3b] text-white bg-[#133e3b] font-bold text-sm sm:text-base transition-all hover:scale-105 text-center flex items-center justify-center gap-2 shadow-sm"
              >
                📍 Locate Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#ebdcd0] w-full max-w-lg text-center sm:text-left">
              <div>
                <span className="block text-xl sm:text-3xl font-black text-[#e05326]">4.9 ★</span>
                <span className="text-[11px] sm:text-xs text-[#786b65] font-semibold">Google Rating</span>
              </div>
              <div>
                <span className="block text-xl sm:text-3xl font-black text-[#133e3b]">100%</span>
                <span className="text-[11px] sm:text-xs text-[#786b65] font-semibold">Fresh Flavors</span>
              </div>
              <div>
                <span className="block text-xl sm:text-3xl font-black text-[#e05326]">1-Tap</span>
                <span className="text-[11px] sm:text-xs text-[#786b65] font-semibold">WA Order</span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase with Real Cafe Interior & Official Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#e05326]/30 shadow-2xl bg-white p-2.5 sm:p-3 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square">
                {/* Real Cafe Interior Seating Photo */}
                <img
                  src="/cafe/meating.png"
                  alt="Chai Chowk Cafe Real Interior at MM PG College Fatehabad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20"></div>

                {/* Floating Official C3 Logo Badge on top-left */}
                <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-[#ebdcd0] rounded-2xl p-2 shadow-xl">
                  <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#e05326] shrink-0">
                    <img src="/logo.jpg" alt="C3 Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="pr-1.5">
                    <p className="text-[11px] font-black text-[#1c1917] leading-tight">Chai Chowk</p>
                    <p className="text-[10px] font-bold text-[#e05326]">Original Cafe</p>
                  </div>
                </div>

                {/* Bottom Timing & Order Card */}
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/95 border border-[#ebdcd0] rounded-2xl p-3.5 flex items-center justify-between shadow-xl">
                  <div>
                    <p className="text-xs font-black text-[#1c1917]">MM PG College, Fatehabad</p>
                    <p className="text-[11px] font-bold text-[#e05326]">Open Daily: 9:00 AM – 10:00 PM</p>
                  </div>
                  <a
                    href="#menu"
                    className="px-4 py-1.5 bg-[#e05326] hover:bg-[#c84318] text-white text-xs font-extrabold rounded-full transition-all shadow-md shadow-[#e05326]/30"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
