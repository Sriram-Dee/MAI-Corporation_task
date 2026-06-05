import { motion } from "framer-motion";
import ctaBgImg from "../assets/cta_bg.webp";

export default function CTASection() {
  return (
    <section
      id="get-started"
      className="py-16 bg-[#F2F5F8] overflow-hidden scroll-mt-16"
    >
      <div className="mx-auto px-6 sm:px-10 lg:px-20 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-4xl md:rounded-[3vw] overflow-hidden bg-cover bg-center py-20 px-6 sm:py-12 md:py-14 text-center flex flex-col items-center justify-center shadow-lg"
          style={{
            backgroundImage: `url(${ctaBgImg})`,
          }}
        >
          <div className="relative z-10 max-w-3xl mx-auto text-white flex flex-col items-center">
            <h2 
              className="text-3xl sm:text-4xl md:text-[44px] font-extrabold tracking-tight mb-4 leading-tight" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Ready To Get Started?
            </h2>
            <p className="text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed mb-8 max-w-xl opacity-90">
              Have 10 minutes? Check out our case studies. We've been in the industry for more than a decade. So there's lots of exciting stuff in here.
            </p>
            <a
              href="#signup"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3.5 rounded-[12px] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] text-sm md:text-base"
            >
              Sign Up Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
