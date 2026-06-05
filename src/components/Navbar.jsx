import React, { useState, useEffect } from "react";
import logoImg from "../assets/Logo.webp";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Plus,
  PlusSquare,
  Send,
  Award,
  UserCircle2,
  Search,
  ChevronRight,
  Briefcase,
  Home,
  HelpCircle,
  Folder,
  FileText,
  Trophy,
  Video,
  Phone,
  User,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#", icon: Home },
  {
    name: "How It Works",
    href: "#how-it-works",
    hasDropdown: true,
    dropdown: [
      "Post a Project",
      "Find a Trader",
      "Milestone Payments",
      "AI Brief Writer",
    ],
    icon: HelpCircle,
  },
  { name: "Projects", href: "#projects", icon: Folder },
  { name: "Blogs", href: "#blogs", icon: FileText },
  { name: "Mai Awards", href: "#awards", icon: Trophy },
];

const ctaButtons = [
  { label: "POST A PROJECT", icon: PlusSquare, href: "#post-project" },
  { label: "SEND PROPOSALS", icon: Send, href: "#proposals" },
  { label: "APPLY INTERNSHIP", icon: Briefcase, href: "#internship" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [signInDropdownOpen, setSignInDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      setShowSearch(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-2xl" : ""}`}
      >
        {/* ── Row 1: Logo + Search + Sign In ── */}
        <div className="bg-[#06101D] border-b border-white/5 relative">
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 flex items-center justify-between h-[88px]">
            {/* Logo image */}
            <a
              href="#"
              className="flex items-center hover:opacity-90 transition-opacity shrink-0"
            >
              <img
                src={logoImg}
                alt="MAI – We Build Homes"
                className="w-22 md:w-24 xl:w-28 h-auto brightness-0 invert"
              />
            </a>

            {/* Desktop Search Bar - appears on scroll */}
            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-[calc(100%-360px)] md:max-w-[18rem] lg:max-w-[24rem] xl:max-w-[30rem] z-20"
                >
                  <div className="flex w-full items-center bg-white rounded-full overflow-hidden px-5 py-2 shadow-lg">
                    <input
                      type="text"
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      placeholder="Search Here"
                      className="flex-1 text-gray-800 bg-transparent focus:outline-none text-sm placeholder-gray-400 font-medium"
                    />
                    <button
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 hover:bg-gray-100 transition-colors duration-200"
                      aria-label="Search"
                    >
                      <Search className="w-5 h-5 text-[#0B1829]" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Desktop Sign In */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setSignInDropdownOpen(true)}
              onMouseLeave={() => setSignInDropdownOpen(false)}
            >
              <button
                onClick={() => setSignInDropdownOpen((prev) => !prev)}
                className="flex items-center gap-2.5 text-white text-[15px] font-semibold pr-5 pl-1.5 py-1.5 rounded-full bg-[#1C2836] hover:bg-[#2A394E] border border-transparent transition-all duration-200 focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-[#0F75BC] flex items-center justify-center shrink-0">
                  <UserCircle2 className="w-5 h-5 text-white" />
                </div>
                Sign In
                <ChevronDown
                  className={`w-4 h-4 text-white/70 ml-1 transition-transform duration-200 ${
                    signInDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Sign In Dropdown */}
              {signInDropdownOpen && (
                <div
                  className="absolute top-full mt-1 right-0 w-48 rounded-2xl overflow-hidden z-50 py-2"
                  style={{
                    background:
                      "linear-gradient(160deg, rgb(10, 22, 40) 0%, rgb(13, 31, 60) 60%, rgb(10, 22, 40) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    boxShadow: "rgba(0, 0, 0, 0.5) 0px 16px 40px",
                    animation:
                      "0.18s ease-out 0s 1 normal forwards running dropIn",
                  }}
                >
                  {[
                    { label: "Project Owner", href: "#project-owner" },
                    { label: "Trader", href: "#trader" },
                    { label: "Intern", href: "#intern" },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-5 py-2.5 text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Icons & Hamburger */}
            <div className="md:hidden flex items-center gap-3">
              {/* Search button */}
              <button
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#06101D] hover:bg-white/90 transition-all duration-200 shadow-sm"
                aria-label="Search"
              >
                <Search className="w-[18px] h-[18px] stroke-[2.5]" />
              </button>

              {/* Profile/User button */}
              <button
                className="w-9 h-9 rounded-full bg-[#1B2939]/80 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[#253549] hover:text-white hover:border-white/30 transition-all duration-200"
                aria-label="Profile"
              >
                <User className="w-[18px] h-[18px] stroke-[2]" />
              </button>

              {/* Hamburger Menu button */}
              <button
                onClick={() => setIsOpen(true)}
                className="text-white p-1 hover:text-white/85 transition-colors focus:outline-none ml-1"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  viewBox="0 0 24 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="w-6.5 h-[15px]"
                >
                  <line x1="4" y1="2" x2="22" y2="2" />
                  <line x1="10" y1="9" x2="22" y2="9" />
                  <line x1="16" y1="16" x2="22" y2="16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Row 2: Nav links + CTA buttons ── */}
        <div className="hidden md:block bg-[#06101D]/60 backdrop-blur-md border-b border-white/10">
          <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 flex items-center justify-between h-[54px]">
            {/* Nav Links */}
            <nav className="flex items-center gap-0.5 lg:gap-1.5">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.hasDropdown && setOpenDropdown(link.name)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-1.5 lg:px-2 xl:px-3 py-1.5 rounded-md text-[12px] lg:text-[13px] xl:text-[14px] font-semibold text-white/85 hover:text-white hover:bg-white/15 transition-all duration-150 whitespace-nowrap"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3 lg:w-3.5 h-3 lg:h-3.5 transition-transform duration-200 ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                  {/* Gradient Dropdown */}
                  {link.hasDropdown && openDropdown === link.name && (
                    <div
                      className="absolute top-full left-0 mt-0 w-48 rounded-xl overflow-hidden z-50"
                      style={{
                        background:
                          "linear-gradient(160deg, rgb(10, 22, 40) 0%, rgb(13, 31, 60) 60%, rgb(10, 22, 40) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 16px 40px",
                        animation:
                          "0.18s ease-out 0s 1 normal forwards running dropIn",
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors duration-150"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="flex items-center">
              {ctaButtons.map((btn, idx) => (
                <React.Fragment key={btn.label}>
                  <a
                    href={btn.href}
                    className="flex items-center gap-1.5 lg:gap-2 px-2 lg:px-3 xl:px-4 py-1.5 text-[10.5px] lg:text-[12px] xl:text-[13px] font-bold tracking-wider text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap uppercase"
                  >
                    <btn.icon className="w-3.5 lg:w-4 h-3.5 lg:h-4 shrink-0" />
                    {btn.label}
                  </a>
                  {idx < ctaButtons.length - 1 && (
                    <span className="w-[1px] h-[14px] lg:h-[18px] bg-white/20 shrink-0 mx-0.5 lg:mx-1 xl:mx-1.5" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer (Slide from right) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#0B1829]/60 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#F8FAFC] z-[70] md:hidden flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-5 bg-white border-b border-gray-100">
                <img
                  src={logoImg}
                  alt="MAI"
                  className="h-10 opacity-90 invert brightness-0"
                  style={{
                    filter: "invert(1) hue-rotate(180deg) brightness(0.2)",
                  }}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-[#F1F5F9] rounded-full text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-7">
                {/* Sign In Card */}
                <a
                  href="#signin"
                  className="block bg-[#EBF4FA] rounded-2xl p-4 flex items-center justify-between border border-[#D1E6F5] hover:bg-[#E0EEF8] transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1376B5] flex items-center justify-center text-white shrink-0">
                      <UserCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[#0B1829] font-bold text-[15px]">
                        Sign In / Register
                      </div>
                      <div className="text-gray-500 text-[13px] mt-0.5">
                        Access your MAI account
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </a>

                {/* Quick Actions */}
                <div>
                  <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-widest uppercase">
                    QUICK ACTIONS
                  </div>
                  <div className="space-y-2.5">
                    <button className="w-full flex items-center gap-3.5 bg-[#1376B5] hover:bg-[#106296] text-white p-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm">
                      <Plus className="w-5 h-5" /> Post Project
                    </button>
                    <button className="w-full flex items-center gap-3.5 bg-[#1376B5] hover:bg-[#106296] text-white p-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm">
                      <Briefcase className="w-5 h-5" /> Apply Internship
                    </button>
                    <button className="w-full flex items-center gap-3.5 bg-[#1376B5] hover:bg-[#106296] text-white p-3.5 rounded-xl font-semibold text-sm transition-colors shadow-sm">
                      <Send className="w-5 h-5" /> Send Proposals
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                <div>
                  <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-widest uppercase">
                    NAVIGATION
                  </div>
                  <div className="space-y-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3.5 p-3.5 text-[#0B1829] font-semibold text-[15px] hover:bg-gray-100 rounded-xl transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-[#1376B5]" />{" "}
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 bg-[#F8FAFC] border-t border-gray-200">
                <div className="text-gray-500 text-[13px] font-medium text-center mb-4">
                  Need help? We're here for you
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-[#0B1829] py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm">
                    <Video className="w-4 h-4" /> Book Demo
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-[#1376B5] hover:bg-[#106296] text-white py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-sm">
                    <Phone className="w-4 h-4" /> Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
