import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const traders = [
  { initials: "LW", name: "Lloyd Wilkinson", location: "Cambourne", specialty: "Granite Worktops", rating: 4.9, jobs: 87 },
  { initials: "MA", name: "Mohamad ALMUSTAFA", location: "London", specialty: "Stone Cladding", rating: 5.0, jobs: 142 },
  { initials: "MD", name: "Mahmood Darr", location: "Birmingham", specialty: "Marble Tiling", rating: 4.8, jobs: 63 },
  { initials: "DE", name: "Driss El Aissati", location: "Manchester", specialty: "Worktop Fitting", rating: 4.9, jobs: 104 },
  { initials: "LD", name: "Lewis Dawson", location: "Leeds", specialty: "Stone Repairs", rating: 4.7, jobs: 56 },
  { initials: "CK", name: "Carl Kimpton", location: "Bristol", specialty: "Firehearth Fitters", rating: 5.0, jobs: 91 },
  { initials: "DM", name: "Daniel Magill", location: "Edinburgh", specialty: "Wall Cladding", rating: 4.8, jobs: 38 },
  { initials: "NC", name: "Nicholas Chaplin", location: "Oxford", specialty: "Bathroom Tiling", rating: 4.9, jobs: 77 },
  { initials: "BB", name: "Barry Barua", location: "Nottingham", specialty: "Stone Offcuts", rating: 4.6, jobs: 44 },
  { initials: "EM", name: "Eamon Mc Loughlin", location: "Liverpool", specialty: "Interior Stonework", rating: 4.9, jobs: 69 },
];

export default function TradersList() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const L = traders.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : L - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < L - 1 ? prev + 1 : 0));
  };

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktopLg = windowWidth >= 1024;

  const spacing = isMobile ? 110 : isTablet ? 160 : (windowWidth >= 1280 ? 270 : 240);
  const maxVisibleDiff = isMobile ? 1 : 2;

  const getCardX = (diff) => {
    if (diff === 0) return 0;
    const sign = Math.sign(diff);
    const absDiff = Math.abs(diff);
    if (absDiff === 1) return sign * spacing;
    return sign * (spacing + (absDiff - 1) * (spacing * 0.85));
  };

  return (
    <section id="traders" className="py-20 bg-[#F4F7FA] overflow-hidden scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Header */}
        <span className="text-xs font-bold text-[#0F75BC] uppercase tracking-widest block">
          TRUSTED BY HOMEOWNERS
        </span>
        <h2
          className="text-2xl sm:text-4xl font-extrabold text-[#003F6B] mt-2 mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Why Choose MAI
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed font-light">
          Every trader on MAI is verified, rated, and ready to work, so you get competitive bids from qualified professionals, not random strangers.
        </p>

        {/* Carousel Container */}
        <div className="relative flex justify-center items-center h-[350px] sm:h-[400px] lg:h-[420px] mt-10 w-full select-none">
          {traders.map((trader, i) => {
            let diff = i - activeIndex;
            if (diff > L / 2) diff -= L;
            if (diff < -L / 2) diff += L;

            const isVisible = Math.abs(diff) <= maxVisibleDiff;
            const x = getCardX(diff);
            const y = isDesktopLg ? (diff === 0 ? -40 : Math.abs(diff) === 1 ? 10 : 50) : 0;
            const scale = diff === 0 ? 1.15 : Math.abs(diff) === 1 ? 0.95 : 0.8;
            const zIndex = 10 - Math.abs(diff);
            const opacity = isVisible ? (diff === 0 ? 1 : Math.abs(diff) === 1 ? 0.9 : 0.75) : 0;

            return (
              <motion.div
                key={trader.name}
                animate={{
                  x,
                  y,
                  scale,
                  zIndex,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) {
                    handleNext();
                  } else if (info.offset.x > 50) {
                    handlePrev();
                  }
                }}
                onClick={() => {
                  if (diff !== 0) {
                    setActiveIndex(i);
                  }
                }}
                className={`absolute w-[200px] h-[300px] sm:w-[240px] sm:h-[360px] lg:w-[200px] lg:h-[310px] xl:w-[220px] xl:h-[340px] rounded-[32px] bg-[#E2E8F0] border border-[#CBD5E1] shadow-md flex flex-col justify-center items-center cursor-pointer overflow-hidden transition-shadow duration-300 ${
                  diff === 0 ? "shadow-xl border-white" : ""
                }`}
              >
                {/* Centered Initials */}
                <span className="text-5xl sm:text-7xl lg:text-6xl xl:text-7xl font-bold text-[#003F6B] tracking-tight select-none">
                  {trader.initials}
                </span>

                {/* Bottom Name Gradient Tag */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#003F6B]/90 via-[#003F6B]/40 to-transparent flex items-end justify-center pb-6 px-4">
                  <span className="text-white text-center text-xs sm:text-sm font-semibold tracking-wide truncate max-w-full select-none">
                    {trader.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mt-3 lg:mt-1">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#003F6B] hover:bg-[#003F6B] hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Previous Trader"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#003F6B] hover:bg-[#003F6B] hover:text-white transition-all duration-300 shadow-sm"
            aria-label="Next Trader"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-6">
          <a
            href="#all-traders"
            className="bg-[#0F75BC] hover:bg-[#0E64A0] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors duration-300 shadow-md inline-block"
          >
            View All Traders
          </a>
        </div>
      </div>
    </section>
  );
}
