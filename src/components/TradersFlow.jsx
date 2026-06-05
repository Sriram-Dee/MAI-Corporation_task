import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Post Your Project",
    desc: "Start by sharing your project details, add photos, budget, location, and timeline. The more information you provide, the easier it is for the right traders to understand your needs and respond accurately.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=250&h=250&q=80"
  },
  {
    num: "2",
    title: "Receive Local Proposals",
    desc: "Once your project is live, verified local traders will review it and send you competitive proposals. You'll start receiving multiple options tailored to your requirements.",
    img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=250&h=250&q=80"
  },
  {
    num: "3",
    title: "Compare & Check Credentials",
    desc: "Go through each proposal, compare pricing, and review trader profiles. Check their certifications, ratings, past work, and experience to make a confident, informed choice.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=250&h=250&q=80"
  },
  {
    num: "4",
    title: "Finalise & Start the Work",
    desc: "Select the trader that fits your project best, finalise the details, and get started. Plan the workflow clearly and move forward with confidence knowing you've chosen the right professional.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=250&h=250&q=80"
  }
];

export default function TradersFlow() {
  return (
    <section id="how-it-works" className="py-24 bg-white text-gray-800 scroll-mt-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-[12px] sm:px-10 lg:px-20 xl:px-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#0F75BC] text-xs font-bold uppercase tracking-widest block mb-3">
            SIMPLE PROCESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#003F6B] tracking-tight leading-tight">
            How To Find Verified Traders
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base font-light">
            Find trusted professionals in 4 simple steps
          </p>
        </div>

        {/* Process steps flow */}
        <div className="relative">
          {/* Mobile View */}
          <div className="relative block md:hidden">
            {/* Vertical Connector Line */}
            <div className="absolute top-[48px] bottom-[180px] left-1/2 w-[1.5px] bg-[#006837]/35 -translate-x-1/2 -z-0" />

            <div className="space-y-10 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: -45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 60 }}
                  className="flex flex-col items-center"
                >
                  {/* Circular image and badge */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full border-[3px] border-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] overflow-hidden relative z-10 bg-white">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-[#006837] text-white flex items-center justify-center text-[10px] font-bold z-20 shadow-sm">
                      {step.num}
                    </div>
                  </div>

                  {/* Card box with details */}
                  <div className="bg-[#F1F6FA] border border-[#E2E8F0]/30 rounded-2xl p-6 max-w-sm sm:max-w-md mx-auto w-full text-center">
                    <h3 className="text-lg font-bold text-[#003F6B] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet View */}
          <div className="relative hidden md:block">
            {/* Horizontal Connector Line */}
            <div className="absolute top-[56px] left-[12%] right-[12%] h-[1.5px] bg-[#E2E8F0] -z-0" />

            {/* Grid Layout */}
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", stiffness: 60 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Image circle with green step badge */}
                  <div className="relative mb-6">
                    {/* Outer circle decoration / hover interaction */}
                    <div className="absolute inset-0 rounded-full bg-emerald-500/0 group-hover:bg-emerald-500/5 scale-110 transition-all duration-300" />
                    
                    {/* Circle Image container */}
                    <div className="w-28 h-28 rounded-full border-[3px] border-white shadow-[0_6px_24px_rgba(0,0,0,0.06)] overflow-hidden relative z-10 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Step green Badge */}
                    <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-[#006837] text-white flex items-center justify-center text-[10px] font-bold z-20 shadow-sm">
                      {step.num}
                    </div>
                  </div>

                  {/* Step Info */}
                  <h3 className="text-lg font-bold text-[#003F6B] mb-3 group-hover:text-[#0F75BC] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed max-w-[280px] mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Center CTA Button */}
        <div className="mt-16 flex justify-center">
          <motion.a
            href="#post-project"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#0F75BC] hover:bg-[#0b5c94] text-white font-bold px-10 py-3.5 rounded-full text-sm shadow-[0_4px_15px_rgba(15,117,188,0.2)] transition-all duration-300"
          >
            Post Your Project Now
          </motion.a>
        </div>
      </div>
    </section>
  );
}
