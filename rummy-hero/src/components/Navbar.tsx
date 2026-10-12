import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { IMAGES, handleImageFallback } from "../assets/images";

interface NavbarProps {
  onOpenJourney: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJourney }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Game Modes", href: "#modes" },
    { label: "Studio Felt", href: "#studio" },
    { label: "VIP Club", href: "#vip" },
    { label: "Mobile App", href: "#mobile" },
    { label: "Journal", href: "#journal" },
  ];

  return (
    <header className="relative z-20 w-full">
      <nav className="flex flex-row items-center justify-between px-6 sm:px-8 py-5 max-w-7xl mx-auto">
        {/* Logo: Brand Gold Emblem + "Velorah®" */}
        <a
          href="#home"
          className="flex items-center gap-3 select-none group cursor-pointer"
        >
          <img
            src={IMAGES.brandLogo.src}
            alt="Velorah Monogram"
            onError={(e) => handleImageFallback(e, IMAGES.brandLogo.file)}
            className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(245,184,56,0.35)] group-hover:scale-105 transition-transform"
          />
          <span
            className="text-2xl sm:text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-xs font-normal ml-0.5 opacity-80 group-hover:opacity-100 transition-opacity">®</sup>
          </span>
        </a>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((item) => {
            const isActive = activeLink === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveLink(item.label)}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-amber-300 font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* CTA Button: "Enter Arena" */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            type="button"
            onClick={onOpenJourney}
            className="liquid-glass rounded-full px-6 py-2.5 text-xs sm:text-sm text-foreground hover:scale-[1.03] transition-all duration-300 font-semibold cursor-pointer border border-amber-400/30 shadow-lg shadow-amber-950/20"
          >
            Launch Arena
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground p-1.5 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-6 pt-2 max-w-7xl mx-auto animate-fade-rise">
          <div className="liquid-glass rounded-2xl p-6 flex flex-col space-y-4 border border-white/10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActiveLink(item.label);
                  setMobileMenuOpen(false);
                }}
                className={`text-base py-1.5 transition-colors ${
                  activeLink === item.label
                    ? "text-amber-300 font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJourney();
              }}
              className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/30 border border-amber-400/40 text-sm font-semibold text-amber-300"
            >
              Launch Rummy Arena
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
