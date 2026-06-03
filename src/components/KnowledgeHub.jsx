import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Import local blog images
import windowSillReplacementImg from "../assets/blogImages/window-sill-replacement.webp";
import windowSillInstallationErrorsImg from "../assets/blogImages/window-sill-installation-errors.webp";
import howToBecomeAPlumberImg from "../assets/blogImages/how-to-become-a-plumber.webp";
import stoneSillCareImg from "../assets/blogImages/stone-sill-care.webp";
import windowSillDecorImg from "../assets/blogImages/window-sill-decor.webp";
import dishwasherInstallationCostImg from "../assets/blogImages/dishwasher-installation-cost.webp";

const blogs = [
  {
    sub: "Window Sill Replacement: Costs, Mistakes & Best Options in the UK",
    image: windowSillReplacementImg,
    slug: "window-sill-replacement",
    heightClass: "h-[380px] md:h-[216px]",
  },
  {
    sub: "How to Detect and Fix Window Sill Installation Errors?",
    image: windowSillInstallationErrorsImg,
    slug: "window-sill-installation-errors",
    heightClass: "h-[300px] md:h-[280px]",
  },
  {
    sub: "How to Become a Plumber in the UK? Latest Guide",
    image: howToBecomeAPlumberImg,
    slug: "how-to-become-a-plumber",
    heightClass: "h-[300px] md:h-[216px]",
  },
  {
    sub: "Stone Sill Care to Keep Window Sills Strong and Stylish",
    image: stoneSillCareImg,
    slug: "stone-care",
    heightClass: "h-[300px] md:h-[272px]",
  },
  {
    sub: "Simple & Best Window Sill Decor Ideas for You",
    image: windowSillDecorImg,
    slug: "window-sill-decor",
    heightClass: "h-[380px] md:h-[216px]",
  },
  {
    sub: "Why Do Some Pay a Lower Dishwasher Installation Cost Than Others?",
    image: dishwasherInstallationCostImg,
    slug: "dishwasher-installation-cost",
    heightClass: "h-[380px] md:h-[272px]",
  },
];


const cardVariants = {
  hidden: ({ idx, isMobile }) => {
    if (isMobile) {
      return { opacity: 0, y: 60, x: 0, scale: 1 };
    }

    // Position cards stacked exactly in the center of the masonry grid
    const col = idx % 3;
    const row = Math.floor(idx / 3);

    // Columns: 0 (left), 1 (middle), 2 (right). Rows: 0 (top), 1 (bottom).
    // Percentage translation offsets match myproject.ai center fanning physics perfectly
    const xOffset = col === 0 ? "100%" : col === 2 ? "-100%" : "0%";
    const yOffset = row === 0 ? "50%" : "-50%";

    return {
      opacity: 0,
      scale: 0.5,
      x: xOffset,
      y: yOffset,
    };
  },
  show: ({ idx }) => {
    // 1-to-1 staggered delays matching myproject.ai entrance order
    const delays = [0.1, 0.3, 0.5, 0.2, 0.4, 0.6];
    return {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween", // Explicitly disable Framer Motion's default spring mechanics for x/y/scale
        ease: "easeOut", // Standard CSS ease-out timing curve
        duration: 1.2,
        delay: delays[idx],
      },
    };
  },
};

function BlogCard({ blog, idx, isMobile, isMobileCarousel, animateState }) {
  return (
    <motion.article
      custom={{ idx, isMobile: isMobile || isMobileCarousel }}
      variants={cardVariants}
      initial="hidden"
      animate={animateState}
      // Note: Removed 'transition-all' as it fights with Framer Motion, causing lag. Only transition the hover shadow.
      className={`relative w-full rounded-[24px] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-end text-white ${
        isMobileCarousel ? "h-[360px]" : blog.heightClass
      }`}
    >
      {/* Image Background with zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.slug}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Sliding Subtitle & Gradient Container */}
      <div className="absolute bottom-0 left-0 right-0 p-5 pt-6 bg-gradient-to-t from-[#003F6B]/90 via-[#003F6B]/70 to-transparent z-10 pointer-events-none transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 ease-in-out flex flex-col justify-end min-h-[20%]">
        <p className="text-white text-xs sm:text-sm font-semibold leading-snug drop-shadow-md">
          {blog.sub}
        </p>
      </div>
    </motion.article>
  );
}

export default function KnowledgeHub() {
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
    setActiveSlide(Math.max(0, Math.min(index, blogs.length - 1)));
  };

  return (
    <section
      ref={sectionRef}
      id="blogs"
      className="py-24 bg-[#F8F9FB] overflow-hidden scroll-mt-16"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#0F75BC] text-xs font-bold uppercase tracking-widest block mb-2">
            KNOWLEDGE HUB
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-[#003F6B] mt-2 mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Latest Blog
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-light max-w-3xl mx-auto leading-relaxed">
            Our articles cover a range of topics to help you stay informed and
            make better decisions. Dive into expert advice and stay ahead in the
            industry with our engaging and informative content.
          </p>
        </div>

        {/* Desktop Grid Layout (Masonry) */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-6 max-w-7xl mx-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 lg:gap-6">
            <BlogCard
              blog={blogs[0]}
              idx={0}
              isMobile={isMobile}
              animateState={isInView ? "show" : "hidden"}
            />
            <BlogCard
              blog={blogs[3]}
              idx={3}
              isMobile={isMobile}
              animateState={isInView ? "show" : "hidden"}
            />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-6 lg:gap-6">
            <BlogCard
              blog={blogs[1]}
              idx={1}
              isMobile={isMobile}
              animateState={isInView ? "show" : "hidden"}
            />
            <BlogCard
              blog={blogs[4]}
              idx={4}
              isMobile={isMobile}
              animateState={isInView ? "show" : "hidden"}
            />
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-6 lg:gap-6">
            <BlogCard
              blog={blogs[2]}
              idx={2}
              isMobile={isMobile}
              animateState={isInView ? "show" : "hidden"}
            />
            <BlogCard
              blog={blogs[5]}
              idx={5}
              isMobile={isMobile}
              animateState={isInView ? "show" : "hidden"}
            />
          </div>
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden flex flex-col items-center">
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="w-full flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {blogs.map((blog, idx) => (
              <div
                key={blog.slug}
                className="w-[85vw] flex-shrink-0 snap-center"
              >
                <BlogCard
                  blog={blog}
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
            {blogs.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? "w-6 bg-[#0F75BC]" : "w-1.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#all-blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-bold text-[#0F75BC] hover:bg-[#0F75BC] hover:text-white transition-all duration-300"
          >
            View All Blogs <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
