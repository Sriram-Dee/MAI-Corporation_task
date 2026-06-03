import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Tag,
  ArrowRight,
  Package,
  ShieldCheck,
  Zap,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Belgian Black or Super Black Honed tiles",
    location: "Edinburgh Scotland",
    label: "STONE SLAB SUPPLIER",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=400&q=80",
    status: "Active",
    value: "Flexible",
  },
  {
    title:
      "Bespoke Flamed Granite Entrance Step — Beige/Cream Granite Preferred",
    location: "Greater London - England",
    label: "NATURAL STONE INSTALLATION",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&h=400&q=80",
    status: "Active",
    value: "Flexible",
  },
  {
    title: "Saint Anne Marble Hearth Piece — Cut & Delivery",
    location: "Leicestershire - England",
    label: "NATURAL STONE INSTALLATION",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&h=400&q=80",
    status: "Active",
    value: "Flexible",
  },
  {
    title: "Large Format Tiles – 110 m²",
    location: "Greater London - England",
    label: "TILES SUPPLIER",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&h=400&q=80",
    status: "Active",
    value: "Flexible",
  },
];

const offcutSteps = [
  {
    icon: Package,
    title: "Post Your Project",
    desc: "Describe what you need, add dimensions, set your budget.",
    color: "#3b82f6",
  },
  {
    icon: Zap,
    title: "Get Matched Instantly",
    desc: "MAI finds sellers with matching offcuts in the UK.",
    color: "#FFB800",
  },
  {
    icon: ShieldCheck,
    title: "Buy Safely & Save",
    desc: "Secure payment, verified sellers, up to 70% cheaper.",
    color: "#10b981",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 120 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const leftRevealVariants = {
  hidden: { opacity: 0, x: -100, rotate: -8 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const rightRevealVariants = {
  hidden: { opacity: 0, x: 100, rotate: 8 },
  show: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.15,
    },
  },
};

const getBudgetColor = (val) => {
  const pct = (val - 300) / (25000 - 300);
  const r = Math.round(15 + (16 - 15) * pct);
  const g = Math.round(117 + (185 - 117) * pct);
  const b = Math.round(188 + (129 - 188) * pct);
  return `rgb(${r}, ${g}, ${b})`;
};

export default function ProjectsMarketplace() {
  const [hovered, setHovered] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [budget, setBudget] = useState(300);

  const budgetColor = getBudgetColor(budget);
  const budgetPercentage = ((budget - 300) / (25000 - 300)) * 100;

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.scrollWidth / projects.length;
    const index = Math.min(
      projects.length - 1,
      Math.max(0, Math.round(scrollLeft / itemWidth)),
    );
    setActiveIndex(index);
  };

  return (
    <>
      {/* ── Real UK Projects ── */}
      <section
        id="projects"
        className="py-24 bg-white scroll-mt-16 overflow-hidden"
      >
        <div className="max-w-screen-2xl mx-auto px-[12px] sm:px-10 lg:px-20 xl:px-24">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-[#0F75BC] uppercase tracking-widest block mb-2">
                REAL WORK, REAL RESULTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003F6B] tracking-tight leading-tight">
                Explore Real UK Projects
              </h2>
              <p className="text-gray-400 mt-2 text-sm sm:text-base font-light">
                From loft conversions in Leeds to boiler installs in Bristol.
              </p>
            </div>
            <a
              href="#all-projects"
              className="shrink-0 bg-[#0F75BC] hover:bg-[#0b5c94] text-white px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-sm text-center"
            >
              Explore Projects
            </a>
          </div>

          {/* Cards Grid / Carousel */}
          <motion.div
            id="projects-carousel"
            onScroll={handleScroll}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pt-4 pb-8 px-6 -mx-6 sm:px-10 sm:-mx-10 lg:px-0 lg:mx-0"
          >
            {projects.map((proj, i) => (
              <motion.div
                key={proj.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  rotate: i % 2 === 0 ? 1.5 : -1.5,
                  scale: 1.015,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="group relative flex flex-col bg-white border border-[#E2E8F0]/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer w-[calc(100vw-80px)] max-w-[300px] sm:w-[320px] sm:max-w-none lg:w-auto lg:min-w-0 snap-align-start shrink-0 lg:shrink"
              >
                {/* Image Container */}
                <div className="relative aspect-[1.48] w-full overflow-hidden bg-gray-100">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Status active badge */}
                  <div className="absolute top-3 right-3 bg-[#006837] text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Active
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[#0F75BC] font-semibold text-[10px] sm:text-[11px] tracking-wider uppercase mb-2 block">
                    {proj.label}
                  </span>

                  <h3 className="font-extrabold text-[#003F6B] text-sm sm:text-base leading-snug flex-1 mb-6 group-hover:text-[#0F75BC] transition-colors duration-300 line-clamp-2">
                    {proj.title}
                  </h3>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-gray-400 font-medium truncate max-w-[170px]">
                      <MapPin className="w-3.5 h-3.5 text-[#0F75BC] shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                    <span className="text-xs sm:text-[13px] font-extrabold text-[#006837] shrink-0">
                      {proj.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Carousel Dot Indicators (Mobile/Tablet only) */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const container =
                    document.getElementById("projects-carousel");
                  if (container) {
                    const itemWidth = container.scrollWidth / projects.length;
                    container.scrollTo({
                      left: idx * itemWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-6 bg-[#0F75BC]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stone Offcuts Marketplace ── */}
      <section
        id="offcuts"
        className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-16"
      >
        <div className="max-w-screen-2xl mx-auto px-[12px] sm:px-10 lg:px-20 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: copy */}
            <motion.div
              variants={leftRevealVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15, margin: "-80px" }}
            >
              <span className="text-sm font-bold text-[#0F75BC] uppercase tracking-widest block mb-2">
                Stone Offcuts Marketplace
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                Submit Your Project. Let MAI Find Your Perfect Stone.
              </h2>
              <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed font-light">
                Discover discounted stone offcuts on MAI, connecting you with
                verified UK sellers for secure, budget-friendly options.
              </p>

              {/* Steps with numerical badges */}
              <div className="mt-8 space-y-6">
                {offcutSteps.map((step, i) => {
                  const colors = [
                    "bg-[#0F75BC]/15",
                    "bg-[#EC4899]/15",
                    "bg-[#F59E0B]/15",
                  ];
                  return (
                    <div key={step.title} className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-sm ${colors[i % colors.length]}`}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#003F6B] text-base">
                          {step.title}
                        </h4>
                        <p className="text-gray-400 text-sm mt-0.5 font-light">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: budget form card */}
            <motion.div
              variants={rightRevealVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15, margin: "-80px" }}
              className="bg-[#F8F8F6] border border-[#F8F8F6] rounded-[32px] p-4 sm:p-8 shadow-sm space-y-6"
            >
              <div>
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Find Your Perfect Stone Offcut
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Set your offcut budget and MAI does the rest
                </p>
              </div>

              {/* Input Form Fields */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-[#003F6B]/60 uppercase tracking-wider block">
                      Project Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter project name"
                      className="w-full bg-transparent border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0F75BC]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-extrabold text-[#003F6B]/60 uppercase tracking-wider block">
                      Stone Type
                    </label>
                    <input
                      type="text"
                      placeholder="Select stone type"
                      className="w-full bg-transparent border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0F75BC]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-extrabold text-[#003F6B]/60 uppercase tracking-wider block">
                    Project Description
                  </label>
                  <textarea
                    placeholder="Enter description"
                    rows={3}
                    className="w-full bg-transparent border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#0F75BC] resize-none"
                  />
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-4 pt-2">
                <h4 className="font-extrabold text-[#003F6B] text-sm">
                  Budget Range
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                    <span>£300 (minimum)</span>
                    <span>£25,000 (maximum)</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="25000"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none transition-all duration-300"
                    style={{
                      background: `linear-gradient(to right, ${budgetColor} 0%, ${budgetColor} ${budgetPercentage}%, #E2E8F0 ${budgetPercentage}%, #E2E8F0 100%)`,
                      accentColor: budgetColor
                    }}
                  />
                  <div className="flex flex-col items-center pt-2">
                    <span
                      className="text-3xl font-extrabold pb-1 px-4 tracking-wide border-b-2 transition-all duration-300"
                      style={{ color: budgetColor, borderColor: budgetColor }}
                    >
                      £ {budget.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#003F6B] font-extrabold py-3.5 rounded-full text-xs transition-colors duration-300">
                Post Your Stones Project Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
