import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import testimonialsBgImg from "../assets/testimonials_bg.png";

const testimonials = [
  {
    name: "Athikur Rahman",
    location: "Birmingham",
    text: "Excellent service from start to finish. The quartz worktop quality is outstanding and the fitting was done perfectly. Very clean and professional work. Highly recommended!"
  },
  {
    name: "B.S. Uberai",
    location: "London",
    text: "Brilliant Stone, polished to perfection. While we had some challenges with the delivery of the stone & cuts, the aftersales service was also fantastic thanks to Mr. Kumar!"
  },
  {
    name: "James",
    location: "Leeds",
    text: "Great service from start to finish. Very responsive and helpful. They have a huge range of product and are very good at understanding what you are looking for and helping you find it."
  },
  {
    name: "Ricardo Angelo Marcella",
    location: "Manchester",
    text: "Excellent service from start to finish. Quick turnaround and my quartz worktops are now fitted and look incredible."
  }
];

const cardVariants = {
  hidden: ({ idx, isMobile }) => {
    if (isMobile) {
      return { opacity: 0, y: 60, x: 0, scale: 1 };
    }
    // Slide in from right-bottom offset
    return {
      opacity: 0,
      x: 180,
      y: 180,
      scale: 0.85
    };
  },
  show: ({ idx }) => {
    // Stagger delays matching fanning feel
    const delays = [0.1, 0.3, 0.2, 0.4];
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "tween", // Force tween to bypass standard Framer Motion spring mechanics
        ease: "easeOut",
        duration: 1.0,
        delay: delays[idx]
      }
    };
  }
};

const cardThemes = [
  {
    borderBottomClass: "border-b-[6px] border-b-transparent hover:border-b-[#0F75BC]",
    hoverQuoteClass: "group-hover:text-[#0F75BC]"
  },
  {
    borderBottomClass: "border-b-[6px] border-b-transparent hover:border-b-[#EAB308]",
    hoverQuoteClass: "group-hover:text-[#EAB308]"
  },
  {
    borderBottomClass: "border-b-[6px] border-b-transparent hover:border-b-[#10B981]",
    hoverQuoteClass: "group-hover:text-[#10B981]"
  },
  {
    borderBottomClass: "border-b-[6px] border-b-transparent hover:border-b-[#F43F5E]",
    hoverQuoteClass: "group-hover:text-[#F43F5E]"
  }
];

function TestimonialCard({ t, idx, isMobile, isMobileCarousel, animateState }) {
  const theme = cardThemes[idx % cardThemes.length];

  return (
    <motion.div
      custom={{ idx, isMobile: isMobile || isMobileCarousel }}
      variants={cardVariants}
      initial="hidden"
      animate={animateState}
      whileHover={
        isMobile || isMobileCarousel
          ? {}
          : {
              rotateZ: idx % 2 === 0 ? -2 : 2,
              y: -8,
              scale: 1.02,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }
      }
      className={`group bg-white rounded-[24px] p-7 md:p-8 shadow-md transition-[border-color] duration-300 flex flex-col justify-between text-gray-800 border border-gray-100 ${theme.borderBottomClass} ${
        isMobileCarousel ? "h-[360px]" : "h-full"
      }`}
    >
      <div>
        <span className={`text-5xl font-serif text-gray-300 ${theme.hoverQuoteClass} transition-colors duration-300 leading-none block mb-2`}>
          “
        </span>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
          {t.text}
        </p>
      </div>
      <div className="mt-6">
        <h4 className="font-extrabold text-gray-900 text-sm sm:text-base">{t.name}</h4>
        <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{t.location}</p>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCarouselScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const index = Math.round(scrollLeft / (clientWidth - 20));
    setActiveSlide(Math.max(0, Math.min(index, testimonials.length - 1)));
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-28 overflow-hidden bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url(${testimonialsBgImg})`
      }}
    >
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Info */}
          <div className="lg:col-span-5 text-left text-white">
            <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-2">
              WHAT PEOPLE SAY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 mb-4 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              The Proof Is In The Pudding
            </h2>
            <p className="text-gray-300 text-sm sm:text-base font-semibold leading-relaxed max-w-xl">
              Tradespeople are winning, homeowners are relieved. Don't take our word for it, here's what real MAI users across the UK have to say.
            </p>
          </div>

          {/* Right Column: 2x2 Cards Grid on Desktop / Carousel on Mobile */}
          <div className="lg:col-span-7">
            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <TestimonialCard
                  key={t.name}
                  t={t}
                  idx={idx}
                  isMobile={isMobile}
                  animateState={isInView ? "show" : "hidden"}
                />
              ))}
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden flex flex-col items-center">
              <div
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="w-full flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
                style={{ scrollbarWidth: "none" }}
              >
                {testimonials.map((t, idx) => (
                  <div key={t.name} className="w-[85vw] flex-shrink-0 snap-center">
                    <TestimonialCard
                      t={t}
                      idx={idx}
                      isMobile={isMobile}
                      isMobileCarousel={true}
                      animateState={isInView ? "show" : "hidden"}
                    />
                  </div>
                ))}
              </div>
              {/* Active indicator dots */}
              <div className="flex gap-2 mt-4">
                {testimonials.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === idx ? "w-6 bg-[#0F75BC]" : "w-1.5 bg-gray-300/50"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
