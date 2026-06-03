import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Matched Traders",
    desc: "Stop sifting through hundreds of irrelevant trader profiles. MAI's intelligent matching engine notifies your project with every qualified tradespeople whose skills, availability, location and work style align precisely with your project.",
    color: "#3b82f6"
  },
  {
    title: "End-to-End Project Transparency",
    desc: "From milestones to payments, every stage of your project lives in one place. MAI's real-time dashboard gives you complete visibility over progress, budgets, and deliverables, eliminating the back-and-forth that slows projects down.",
    color: "#10b981"
  },
  {
    title: "Milestone-Secured Payments",
    desc: "Your investment is protected at every step. MAI's secured payment system releases funds only when agreed milestones are met and approved, giving both project owners and professionals the security to focus on doing great work.",
    color: "#f59e0b"
  },
  {
    title: "A Verified Community You Can Trust",
    desc: "Every professional on MAI is rigorously reviewed, verified, and rated by the community. You're not hiring blindly, you're choosing from a trusted network of proven experts backed by real project history, reviews, and credentials.",
    color: "#8b5cf6"
  }
];

const cardVariants = {
  hidden: ({ i, isMobile }) => {
    if (isMobile) {
      return { opacity: 0, y: 60, x: 0 };
    }
    // 2x2 grid center offsets
    const xOffset = i % 2 === 0 ? 60 : -60;
    const yOffset = i < 2 ? 60 : -60;
    return {
      opacity: 0,
      x: xOffset,
      y: yOffset,
      scale: 0.95
    };
  },
  show: ({ i }) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 16,
      mass: 1.1,
      delay: i * 0.15
    }
  })
};

export default function WhyChooseMAI() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="why-choose-mai" className="py-24 bg-white scroll-mt-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#0F75BC] text-xs font-bold uppercase tracking-widest block mb-2">
            Our Difference
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003F6B] mt-2 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Where Traders &amp; Homeowners Both Win
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            From first brief to final delivery. MAI gives you the tools, talent, and transparency to build with confidence.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 lg:gap-y-16 py-4">
          {/* Centered Grid Dividers */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200/50 -translate-x-1/2 pointer-events-none" />
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-gray-200/50 -translate-y-1/2 pointer-events-none" />

          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              custom={{ i, isMobile }}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="relative p-6 sm:p-10 flex flex-col justify-start"
            >
              {/* Giant Background Number */}
              <div
                className="absolute -top-6 left-4 sm:left-8 text-8xl sm:text-[110px] font-bold opacity-[0.07] pointer-events-none select-none"
                style={{ color: feat.color, fontFamily: "'Montserrat', sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-[#003F6B] mb-4 mt-2">
                {feat.title}
              </h3>
              <p className="relative z-10 text-gray-500 text-sm sm:text-base leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
