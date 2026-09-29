"use client";

import React, { useState, useMemo } from "react";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/menu";
import { MenuCategory } from "@/types";

const CATEGORY_FALLBACKS: Record<string, string> = {
  tea: "public/chai/rosechai.jpg",
  coffee: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
  "mocktails-shakes": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
  "burgers-wraps": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
  "sandwiches-breads": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
  "maggi-pasta": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
  "snacks-chinatown": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
  "desserts-fries": "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
};

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const phoneNumber = "919253779999";

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        (item.hindiName && item.hindiName.includes(query)) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#f4efe8] relative border-t border-[#ebdcd0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold mb-3 shadow-xs">
            <div className="w-3 h-3 border-2 border-emerald-600 flex items-center justify-center p-0.5 rounded-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
            </div>
            <span>100% Pure Vegetarian Cafe | शुद्ध शाकाहारी</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] tracking-tight">
            Chai Chowk Specialty Menu
          </h2>
          <p className="text-[#695c56] text-sm mt-2 font-medium">
            Handcrafted fresh at MM PG College, Fatehabad. Tap any item to place your order on WhatsApp.
          </p>
        </div>

        {/* Search & Category Tabs */}
        <div className="flex flex-col items-center gap-6 mb-12">
          {/* Search Box */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search Chai, Pizza, Cold Coffee, Fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              maxLength={60}
              className="w-full bg-white border border-[#ebdcd0] rounded-full py-3 pl-11 pr-4 text-sm text-[#1c1917] placeholder-[#998b84] focus:outline-none focus:border-[#e05326] focus:ring-1 focus:ring-[#e05326] shadow-sm"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#998b84] text-sm">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#786b65] hover:text-[#1c1917]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex overflow-x-auto sm:flex-wrap items-center justify-start sm:justify-center gap-2 w-full max-w-3xl pb-2 px-2 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as MenuCategory)}
                  className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-sm ${
                    isActive
                      ? "bg-[#e05326] text-white shadow-md shadow-[#e05326]/30 scale-105"
                      : "bg-white text-[#4a3f3b] border border-[#ebdcd0] hover:border-[#e05326] hover:text-[#e05326]"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const orderUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                `Hi Chai Chowk Cafe, I want to order/inquire about: ${item.name} (₹${item.price})`
              )}`;

              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col bg-white border border-[#ebdcd0] rounded-3xl overflow-hidden hover:border-[#e05326]/60 hover:shadow-xl hover:shadow-[#e05326]/10 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.onerror = null;
                        target.src =
                          CATEGORY_FALLBACKS[item.category] ||
                          "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80";
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                    {/* Veg Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-1.5 rounded-lg border border-stone-200 shadow-sm">
                      <div className="w-3.5 h-3.5 border-2 border-emerald-600 flex items-center justify-center p-0.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                      </div>
                    </div>

                    {/* Tag */}
                    {item.isBestseller && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-[#e05326] text-white px-2.5 py-1 rounded-full shadow-md">
                        ★ Bestseller
                      </span>
                    )}
                    {item.isChefSpecial && !item.isBestseller && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-[#133e3b] text-white px-2.5 py-1 rounded-full shadow-md">
                        Special
                      </span>
                    )}

                    {/* Rating */}
                    {item.rating && (
                      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full border border-stone-200 text-[11px] font-bold text-[#e05326] flex items-center gap-1 shadow-sm">
                        <span>★</span>
                        <span>{item.rating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-1 p-5 justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-bold text-[#1c1917] group-hover:text-[#e05326] transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-base font-black text-[#e05326] shrink-0">
                          ₹{item.price}
                        </span>
                      </div>

                      {item.hindiName && (
                        <p className="text-xs text-[#8c6b5b] font-semibold mt-0.5">
                          {item.hindiName}
                        </p>
                      )}

                      <p className="text-xs text-[#6e5f58] mt-2 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Core Direct Action: WhatsApp Order Button */}
                    <div className="pt-4 mt-3 border-t border-[#f0e6dc]">
                      <a
                        href={orderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md shadow-emerald-950/20 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span className="text-sm">💬</span>
                        <span>Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#ebdcd0] max-w-md mx-auto shadow-sm">
            <span className="text-4xl block mb-3">☕</span>
            <h3 className="text-lg font-bold text-[#1c1917]">No dishes found</h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 bg-[#e05326] text-white rounded-full text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Customization & Add-ons Banner */}
        <div className="mt-14 rounded-3xl bg-white border border-[#ebdcd0] p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#f0e6dc] pb-4 mb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#e05326]">
                Pizza Customization & Add-ons
              </span>
              <h3 className="text-lg font-black text-[#1c1917] mt-0.5">
                Customize Your Order Just The Way You Like
              </h3>
            </div>
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hi Chai Chowk Cafe, I want to place a customized order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#133e3b] hover:bg-[#0d2d2a] text-white text-xs font-bold transition-all shadow"
            >
              <span>💬 Ask on WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ebdcd0]">
              <p className="font-bold text-[#1c1917] mb-2 text-sm flex items-center gap-1.5">
                <span>🍕</span> Choice of Crust:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white border border-[#ebdcd0] px-3 py-1.5 rounded-xl font-semibold text-[#4a3f3b]">
                  Thin Crust: <strong className="text-[#e05326]">+₹30</strong>
                </span>
                <span className="bg-white border border-[#ebdcd0] px-3 py-1.5 rounded-xl font-semibold text-[#4a3f3b]">
                  Cheese Burst: <strong className="text-[#e05326]">+₹40</strong>
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ebdcd0]">
              <p className="font-bold text-[#1c1917] mb-2 text-sm flex items-center gap-1.5">
                <span>🧀</span> Extras & Dips:
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white border border-[#ebdcd0] px-3 py-1.5 rounded-xl font-semibold text-[#4a3f3b]">
                  Extra Cheese: <strong className="text-[#e05326]">+₹30</strong>
                </span>
                <span className="bg-white border border-[#ebdcd0] px-3 py-1.5 rounded-xl font-semibold text-[#4a3f3b]">
                  Topping: <strong className="text-[#e05326]">+₹30</strong>
                </span>
                <span className="bg-white border border-[#ebdcd0] px-3 py-1.5 rounded-xl font-semibold text-[#4a3f3b]">
                  Dip: <strong className="text-[#e05326]">+₹20</strong>
                </span>
                <span className="bg-white border border-[#ebdcd0] px-3 py-1.5 rounded-xl font-semibold text-[#4a3f3b]">
                  Spicy: <strong className="text-[#e05326]">+₹10</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
