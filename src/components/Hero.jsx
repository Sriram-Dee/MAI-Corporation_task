import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2 } from "lucide-react";

const services = [
  "Worktop Fitters",
  "Stone Repairs",
  "Worktop Fabricator",
  "Local Wall Tilers",
  "Stone Offcuts",
  "Trusted Stonemason",
  "Kitchen Installers",
  "Bathroom Designers",
  "Firehearth Fitters",
  "Remnant Slabs",
  "Wall Claddings",
  "Bathroom Tiling",
  "Wall Insulations",
  "Interior Decorators",
];

const trustBadges = [
  "200K+ Trusted Traders",
  "Transparent Bidding System",
  "11K Monthly Active Users",
];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [serviceIdx, setServiceIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  /* ── Typewriter effect ── */
  useEffect(() => {
    const activeWord = services[serviceIdx];
    const speed = isDeleting ? 40 : 90;
    let timer;

    if (!isDeleting && currentText === activeWord) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setServiceIdx((p) => (p + 1) % services.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? activeWord.slice(0, currentText.length - 1)
            : activeWord.slice(0, currentText.length + 1),
        );
      }, speed);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, serviceIdx]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden text-white flex flex-col"
      style={{
        minHeight: "100dvh",
        // paddingTop: "142px" /* 88px row1 + 54px row2 */,
      }}
    >
      {/* ── Background video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          {/* Free Pexels stock video – stone / kitchen tradesperson */}
          <source
            src="https://videos.pexels.com/video-files/3195533/3195533-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay matching original ~65% opacity */}
        <div className="absolute inset-0 bg-[#0B1829]/70" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full py-8">
        {/* H1 — static prefix + typewriter*/}
        <motion.h1
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 15,
            mass: 1.2,
          }}
          className="font-bold text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {/* Static part */}
          <span className="w-full sm:flex-1 text-center sm:text-right whitespace-nowrap">
            We Find You The&nbsp;
          </span>

          {/* Typed part */}
          <span className="w-full sm:flex-1 text-center sm:text-left text-brand-accent whitespace-nowrap">
            {currentText}
            <span
              style={{
                display: "inline-block",
                width: "3px",
                height: "0.85em",
                background: "#FFB800",
                verticalAlign: "middle",
                marginLeft: "2px",
                animation: "blink 0.75s step-end infinite",
              }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 15,
            mass: 1.2,
            delay: 0.15,
          }}
          className="mt-4 text-white/85 text-xs sm:text-base md:text-xl font-medium px-4"
        >
          Find Local Trusted Tradespeople in Minutes
        </motion.p>

        {/* Search bar — white pill, single input + search icon */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 35,
            damping: 13,
            mass: 1.4,
            delay: 0.3,
          }}
          className="mt-6 sm:mt-8 w-full max-w-xl px-2 sm:px-0"
        >
          <div className="flex items-center bg-white rounded-full shadow-2xl overflow-hidden pr-2">
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="I Want Stone..."
              className="flex-1 py-3 sm:py-4 px-4 sm:px-6 text-gray-800 bg-transparent focus:outline-none text-xs sm:text-base placeholder-gray-400 font-medium"
            />
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-primary flex items-center justify-center shrink-0 hover:bg-brand-accent hover:text-brand-dark transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 35,
            damping: 13,
            mass: 1.4,
            delay: 0.45,
          }}
          className="mt-6 flex flex-wrap md:flex-nowrap items-center justify-center gap-x-2 gap-4 sm:gap-4 md:gap-8 text-xs sm:text-sm md:text-base text-gray-200 max-w-4xl"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-white/90 sm:font-semibold"
            >
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-brand-accent shrink-0" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Blink keyframe */}
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
