import { motion } from "framer-motion";

const servicesList = [
  {
    name: "Dry Stone Walling",
    image:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Flooring",
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Worktop & Tile Removal",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Tiles Supplier",
    image:
      "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Sinks",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Engineered Stone Installation",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Natural Stone Installation",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Stone Repairs",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=compress&cs=tinysrgb&w=500&q=80",
  },
  {
    name: "Kitchen Installers",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=compress&cs=tinysrgb&w=500&q=80",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white text-gray-800 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold text-[#0F75BC] uppercase tracking-widest block mb-2">
            GET ANY HOME REPAIR DONE
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#06101D] mt-2">
            Looking For A Service?
          </h2>
          <p className="text-gray-500 mt-3 max-w-3xl mx-auto text-sm sm:text-base">
            From a dripping tap to a full{" "}
            <a
              href="#projects"
              className="text-[#0F75BC] hover:underline font-medium"
            >
              loft conversion
            </a>{" "}
            find the right{" "}
            <a
              href="#traders"
              className="text-[#0F75BC] hover:underline font-medium"
            >
              verified tradesperson
            </a>{" "}
            for any job.
          </p>
        </motion.div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative w-full overflow-hidden py-4 select-none"
      >
        {/* Left & Right gradient shadows */}
        <div className="absolute inset-y-0 left-0 w-4 sm:w-24 bg-white z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-4 sm:w-24 bg-white z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap w-max">
          {/* First Render Loop */}
          {servicesList.map((item, idx) => (
            <div
              key={`loop1-${idx}`}
              className="flex-shrink-0 w-[200px] md:w-[240px] mx-4 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <p className="mt-4 text-center text-[14px] md:text-[15px] font-semibold text-[#06101D]/90 group-hover:text-[#0F75BC] transition-colors duration-200 whitespace-normal leading-snug px-1">
                {item.name}
              </p>
            </div>
          ))}

          {/* Second Render Loop (for seamless infinite looping) */}
          {servicesList.map((item, idx) => (
            <div
              key={`loop2-${idx}`}
              className="flex-shrink-0 w-[200px] md:w-[240px] mx-4 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-full aspect-4/3 rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 group-hover:shadow-md group-hover:border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <p className="mt-4 text-center text-[14px] md:text-[15px] font-semibold text-[#06101D]/90 group-hover:text-[#0F75BC] transition-colors duration-200 whitespace-normal leading-snug px-1">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Button below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center mt-12"
      >
        <a
          href="#all-services"
          className="inline-block bg-[#0F75BC] hover:bg-[#0d64a0] text-white px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transform"
        >
          View All Services
        </a>
      </motion.div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
