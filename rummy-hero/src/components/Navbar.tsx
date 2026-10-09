import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenJourney: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJourney }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "Studio", "About", "Journal", "Reach Us"];

  return (
    <header className="relative z-10 w-full">
      <nav className="flex flex-row items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo: "Velorah®" with Instrument Serif and superscipt ® */}
        <a
          href="#"
          className="text-3xl tracking-tight text-foreground select-none group"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah<sup className="text-xs font-normal ml-0.5 opacity-80 group-hover:opacity-100 transition-opacity">®</sup>
        </a>

        {/* Desktop Nav links (hidden on mobile, md:flex) */}
        <div className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => {
            const isActive = activeLink === link;
            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link);
                  if (link === "Studio" || link === "Reach Us") {
                    onOpenJourney();
                  }
                }}
                className={`text-sm transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link}
              </a>
            );
          })}
        </div>

        {/* CTA Button: "Begin Journey" */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={onOpenJourney}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-all duration-300 font-medium cursor-pointer"
          >
            Begin Journey
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-foreground p-1.5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-8 pb-6 pt-2 max-w-7xl mx-auto animate-fade-rise">
          <div className="liquid-glass rounded-2xl p-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link);
                  setMobileMenuOpen(false);
                  if (link === "Studio" || link === "Reach Us") {
                    onOpenJourney();
                  }
                }}
                className={`text-base py-1 transition-colors ${
                  activeLink === link
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
