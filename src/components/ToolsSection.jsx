import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  MapPin,
  Sparkles,
  Send,
  Check,
  ShieldCheck,
  Clock,
  User,
  ChevronRight,
} from "lucide-react";

import mapImg from "../assets/map.png";
import pinImg from "../assets/pin.png";
import cursorImg from "../assets/cursor.png";

export default function ToolsSection() {
  // Responsive / Mobile detection state
  const [isMobile, setIsMobile] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Card 1: Dashboard states ---
  const initialChartData = {
    Jan: [40, 25, 15, 8],
    Feb: [50, 30, 20, 12],
    Mar: [35, 45, 25, 18],
    Apr: [60, 50, 30, 22],
  };

  const [chartData, setChartData] = useState(initialChartData);
  const [dashboardRating, setDashboardRating] = useState("4.5");
  const [isHoveredCard1, setIsHoveredCard1] = useState(false);

  const isDashboardAnimActive = isHoveredCard1 || (isMobile && activeIdx === 0);

  useEffect(() => {
    if (isDashboardAnimActive) {
      // Randomize once per active/hover trigger
      setChartData({
        Jan: Array.from(
          { length: 4 },
          () => Math.floor(Math.random() * 55) + 15,
        ),
        Feb: Array.from(
          { length: 4 },
          () => Math.floor(Math.random() * 55) + 15,
        ),
        Mar: Array.from(
          { length: 4 },
          () => Math.floor(Math.random() * 55) + 15,
        ),
        Apr: Array.from(
          { length: 4 },
          () => Math.floor(Math.random() * 55) + 15,
        ),
      });
      setDashboardRating((Math.random() * 1.1 + 3.8).toFixed(1));
    } else {
      // Reset to initial data
      setChartData(initialChartData);
      setDashboardRating("4.5");
    }
  }, [isDashboardAnimActive]);

  // --- Card 2: Search With Postcode states ---
  const initialProfiles = [
    {
      id: 1,
      name: "Devon Lane",
      rating: "4.2",
      tag: "ME1 1YL",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 2,
      name: "Eleanor Pena",
      rating: "4.8",
      tag: "ALS 2TR",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 3,
      name: "Robert Fox",
      rating: "3.9",
      tag: "LSR 3DN",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80",
    },
    {
      id: 4,
      name: "Wade Warren",
      rating: "4.8",
      tag: "England",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
    },
  ];

  const [profiles, setProfiles] = useState(initialProfiles);
  const [isHoveredCard2, setIsHoveredCard2] = useState(false);

  const isSearchAnimActive = isHoveredCard2 || (isMobile && activeIdx === 1);

  useEffect(() => {
    if (isSearchAnimActive) {
      setProfiles((prev) => {
        const shuffled = [...prev];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    } else {
      setProfiles(initialProfiles);
    }
  }, [isSearchAnimActive]);

  // --- Card 3: Write With AI states ---
  const [isHoveredCard3, setIsHoveredCard3] = useState(false);
  const [clickActive, setClickActive] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  const [aiText, setAiText] = useState("");

  const fullAiText =
    "This project involves a full renovation of an existing 12×15 ft kitchen. Scope includes replacing all cabinetry with handleless shaker units, installing a quartz waterfall island, upgrading to integrated appliances, laying large-format porcelain tiles, and fitting LED under-cabinet lighting to complete the space.";

  const isWriteAnimActive = isHoveredCard3 || (isMobile && activeIdx === 2);

  useEffect(() => {
    let clickTimeout;

    if (isWriteAnimActive) {
      // Cursor takes 0.9s to reach the button, click triggers at 0.95s
      clickTimeout = setTimeout(() => {
        setClickActive(true);
        setTimeout(() => setClickActive(false), 150);
        setTypingStarted(true);
      }, 950);
    } else {
      setClickActive(false);
      setTypingStarted(false);
      setAiText("");
    }

    return () => clearTimeout(clickTimeout);
  }, [isWriteAnimActive]);

  useEffect(() => {
    if (!typingStarted) return;

    let idx = 0;
    const interval = setInterval(() => {
      setAiText(fullAiText.substring(0, idx));
      idx++;
      if (idx > fullAiText.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [typingStarted]);

  // --- Rendering Helpers for Cards to prevent duplicate markup ---
  const renderCard1 = (extraClasses = "") => (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseEnter={() => setIsHoveredCard1(true)}
      onMouseLeave={() => setIsHoveredCard1(false)}
      className={`bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between cursor-pointer hover:border-[#0F75BC]/20 transition-colors duration-300 group ${extraClasses}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#003F6B] mb-3">Dashboard</h3>
        <p className="text-[#003F6B]/70 text-sm leading-relaxed min-h-[40px]">
          Keep track of every job in one clean dashboard, from your first quote
          request to the final sign-off.
        </p>
      </div>

      {/* Mockup */}
      <div className="bg-[#F8FAFC] rounded-2xl p-4 space-y-3 font-sans text-xs min-h-[250px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-gray-200/60 pb-2">
            <span className="font-bold text-gray-800">Project Overview</span>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 bg-white border border-gray-200 px-2 py-0.5 rounded-full font-medium">
              <span>This Year - 2026</span>
              <span className="text-[8px]">▼</span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 gap-y-1 mt-2 text-[8px] text-gray-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003F6B]" /> Posted
              Project
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F75BC]" /> Active
              Project
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]" /> Pending
              Project
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />{" "}
              Completed Project
            </span>
          </div>

          {/* Bar Graph */}
          <div className="flex items-end justify-between h-[85px] mt-4 pt-2 border-b border-gray-200/40 relative">
            {Object.keys(chartData).map((month) => (
              <div key={month} className="flex flex-col items-center flex-1">
                <div className="flex items-end justify-center gap-[2.5px] h-[65px] w-full px-1">
                  {chartData[month].map((val, barIdx) => {
                    const colors = ["#003F6B", "#0F75BC", "#93C5FD", "#22C55E"];
                    return (
                      <motion.div
                        key={barIdx}
                        initial={{ height: 0 }}
                        animate={{ height: `${val}%` }}
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 15,
                        }}
                        style={{ backgroundColor: colors[barIdx] }}
                        className="w-2 rounded-t-[3px]"
                      />
                    );
                  })}
                </div>
                <span className="text-[8px] text-gray-400 mt-1 font-medium">
                  {month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ratings block */}
        <div className="flex items-center justify-between bg-white px-3 py-2.5 rounded-xl border border-gray-150 shadow-sm mt-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] font-bold text-sm shrink-0">
              ★
            </span>
            <div>
              <span className="font-bold text-gray-800 text-xs block leading-none">
                {dashboardRating}
              </span>
              <span className="text-[9px] text-gray-400">Ratings</span>
            </div>
          </div>
          <span className="text-[9px] text-[#003F6B] font-bold bg-[#E0F2FE] px-2 py-0.5 rounded-full">
            All Time
          </span>
        </div>
      </div>
    </motion.div>
  );

  const renderCard2 = (extraClasses = "") => (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseEnter={() => setIsHoveredCard2(true)}
      onMouseLeave={() => setIsHoveredCard2(false)}
      className={`bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between cursor-pointer hover:border-[#0F75BC]/20 transition-colors duration-300 group ${extraClasses}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#003F6B] mb-3">
          Search With Postcode
        </h3>
        <p className="text-[#003F6B]/70 text-sm leading-relaxed min-h-[40px]">
          Find tradespeople near you, just enter your county and browse
          verified, rated tradespeople in your area.
        </p>
      </div>

      {/* Mockup */}
      <div className="bg-[#F8FAFC] rounded-2xl p-3 flex gap-3 h-[250px] overflow-hidden font-sans text-[11px] relative">
        {/* Left Column: Profiles */}
        <div className="flex-1 flex flex-col gap-2 z-10 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {profiles.map((profile) => (
              <motion.div
                layout="position"
                key={profile.id}
                className="bg-white p-2 rounded-xl border border-gray-100 flex items-center gap-2 shadow-sm shrink-0"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 22,
                }}
              >
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-8 h-8 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800 text-[10px] truncate">
                      {profile.name}
                    </span>
                    <span className="text-[9px] text-amber-500 font-semibold flex items-center shrink-0">
                      ★ {profile.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[8px] text-gray-400 mt-0.5">
                    <span>{profile.tag}</span>
                    <span className="text-green-600 font-semibold bg-green-50 px-1 py-0.2 rounded text-[7px]">
                      Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Column: Map */}
        <div className="w-[110px] sm:w-[130px] rounded-xl overflow-hidden relative border border-gray-200 bg-[#E0F2FE] shrink-0">
          {/* Styled Map Background Image */}
          <motion.img
            src={mapImg}
            alt="Map"
            animate={{
              scale: isSearchAnimActive ? 2.4 : 1.4,
              x: isSearchAnimActive ? -15 : 0,
              y: isSearchAnimActive ? -15 : 0,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />

          {/* Pulsing Pin */}
          <div
            style={{
              left: isSearchAnimActive ? "46%" : "90%",
              bottom: isSearchAnimActive ? "52%" : "50%",
              transition:
                "left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), bottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            className="absolute z-20 w-8 h-8 -ml-4 -mb-4 cursor-pointer"
          >
            <div className="relative w-full h-full">
              <img
                src={pinImg}
                alt="Pin"
                className="w-full h-full object-contain"
              />
              <span className="absolute inset-0 m-auto w-4 h-4 rounded-full bg-red-500/25 animate-ping -z-10" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderCard3 = (extraClasses = "") => (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseEnter={() => setIsHoveredCard3(true)}
      onMouseLeave={() => setIsHoveredCard3(false)}
      className={`bg-white rounded-[2rem] p-6 lg:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-between cursor-pointer hover:border-[#0F75BC]/20 transition-colors duration-300 group ${extraClasses}`}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#003F6B] mb-3">
          Write With AI
        </h3>
        <p className="text-[#003F6B]/70 text-sm leading-relaxed min-h-[40px]">
          Not sure how to describe your project? Our AI helps you write a clear,
          detailed brief in seconds. Just answer a few questions, we do the
          rest.
        </p>
      </div>

      {/* Mockup */}
      <div className="bg-[#F8FAFC] rounded-2xl p-4 space-y-4 min-h-[250px] flex flex-col justify-between relative overflow-hidden">
        <div className="space-y-3">
          <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-gray-700 font-semibold text-[11px] shadow-sm">
            Modern Kitchen Renovation
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-gray-100 min-h-[110px] max-h-[110px] text-gray-600 leading-relaxed overflow-y-auto text-[10px] shadow-sm relative">
            {aiText || (
              <span className="text-gray-400 italic">
                Brief draft will generate here...
              </span>
            )}
            {typingStarted && aiText.length < fullAiText.length && (
              <span className="inline-block w-1 h-3 bg-[#0F75BC] ml-0.5 animate-pulse" />
            )}
          </div>
        </div>

        {/* Bottom row containing resting area for cursor and the button */}
        <div className="flex items-center justify-between mt-2 relative h-12 w-full">
          {/* Resting point for cursor */}
          <div className="w-12 h-full flex items-center justify-start">
            {/* Space for the cursor to sit at when not hovered */}
          </div>

          <motion.button
            animate={{ scale: clickActive ? 0.92 : 1 }}
            transition={{ duration: 0.1 }}
            className={`font-bold py-2 px-5 rounded-full text-center flex items-center gap-1.5 shadow-[0_4px_12px_rgba(15,117,188,0.15)] transition-colors duration-200 ${
              clickActive
                ? "bg-[#d0ecfb] text-[#0F75BC]"
                : "bg-[#E0F2FE] hover:bg-[#bae6fd] text-[#0F75BC]"
            }`}
          >
            <Sparkles
              className={`w-3.5 h-3.5 text-[#0F75BC] fill-[#0F75BC]/20 ${typingStarted && aiText.length < fullAiText.length ? "animate-spin" : ""}`}
            />
            <span className="text-[10px] font-bold">Write with MAI AI</span>
          </motion.button>

          {/* Cursor Icon Animation inside the bottom row */}
          <div
            style={{
              position: "absolute",
              left: isWriteAnimActive ? "82%" : "12px",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${clickActive ? 0.85 : 1})`,
              transition:
                "left 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.1s ease",
              zIndex: 30,
            }}
            className="pointer-events-none w-8 h-8"
          >
            <img
              src={cursorImg}
              alt="Cursor"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="tools"
      className="py-24 bg-gradient-to-r from-white via-pink-50 to-white text-gray-800 border-y border-gray-100"
    >
      <div className="max-w-screen-2xl mx-auto px-[12px] sm:px-10 lg:px-20 xl:px-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#0F75BC] text-xs font-bold uppercase tracking-widest block mb-2">
            YOUR MAI TOOLKIT
          </span>
          <h2 className="text-xl sm:text-4xl font-bold text-[#003F6B] mt-3 tracking- leading-tight">
            Unlock Powerful Tools After SignUp
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Everything You Need to{" "}
            <a
              href="#traders"
              className="text-[#0F75BC] hover:underline font-semibold"
            >
              Hire the Right Tradesperson
            </a>
          </p>
        </motion.div>

        {/* Mobile View */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block md:hidden"
        >
          <div className="relative overflow-hidden flex flex-col justify-between">
            <div className="relative w-full min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      setActiveIdx((prev) => (prev < 2 ? prev + 1 : 0));
                    } else if (info.offset.x > swipeThreshold) {
                      setActiveIdx((prev) => (prev > 0 ? prev - 1 : 2));
                    }
                  }}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
                >
                  {activeIdx === 0 && renderCard1("w-full")}
                  {activeIdx === 1 && renderCard2("w-full")}
                  {activeIdx === 2 && renderCard3("w-full")}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2.5 mt-8">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIdx === idx ? "bg-[#0F75BC] w-6" : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to card ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tablet View */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-6 pb-6 w-full no-scrollbar"
        >
          <div className="flex-none w-[380px] sm:w-[400px] snap-center">
            {renderCard1("h-full")}
          </div>
          <div className="flex-none w-[380px] sm:w-[400px] snap-center">
            {renderCard2("h-full")}
          </div>
          <div className="flex-none w-[380px] sm:w-[400px] snap-center">
            {renderCard3("h-full")}
          </div>
        </motion.div>

        {/*Desktop View (3-Column Grid layout) --- */}
        <div className="hidden lg:grid grid-cols-3 gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="h-full"
          >
            {renderCard1("h-full")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="h-full"
          >
            {renderCard2("h-full")}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="h-full"
          >
            {renderCard3("h-full")}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
