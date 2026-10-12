import React from "react";
import { Smartphone, Download, Shield, Zap } from "lucide-react";
import { IMAGES, handleImageFallback } from "../assets/images";

export const MobileAppSection: React.FC = () => {
  return (
    <section id="mobile" className="relative z-10 py-24 px-6 sm:px-8 max-w-7xl mx-auto w-full">
      <div className="liquid-glass rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 mb-4">
              <Smartphone size={13} />
              <span>Native iOS &amp; Android Apps</span>
            </div>

            <h2
              className="text-4xl sm:text-6xl text-foreground font-normal tracking-tight"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              The felt in your pocket. Pure 120 FPS.
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed max-w-xl">
              Engineered natively for low-latency touch response. Slide, sort, and declare with physical card snap mechanics optimized for high-refresh smartphone displays.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                <Zap size={18} className="text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Zero Disconnect Loss</div>
                  <div className="text-muted-foreground">Auto-save state on network drop</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                <Shield size={18} className="text-emerald-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Biometric Vault</div>
                  <div className="text-muted-foreground">FaceID / TouchID instant login</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <button
                type="button"
                className="px-8 py-3.5 rounded-full bg-amber-400 text-black font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-400/20"
              >
                <Download size={16} />
                <span>Download Android APK</span>
              </button>

              <button
                type="button"
                className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm transition-colors border border-white/15 flex items-center gap-2 cursor-pointer"
              >
                <span>iOS Web App (PWA)</span>
              </button>
            </div>
          </div>

          {/* Right Smartphone Showcase Image (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/80 group">
              <img
                src={IMAGES.mobileAppMockup.src}
                alt="Velorah Mobile Rummy App"
                onError={(e) => handleImageFallback(e, IMAGES.mobileAppMockup.file)}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Live Hand Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl liquid-glass border border-white/15">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-amber-300 font-semibold">Active Tournament Hand</span>
                  <span className="text-emerald-400">120 FPS Active</span>
                </div>
                <div className="text-[11px] text-muted-foreground">
                  Haptic tactile felt feedback enabled · 256-bit secure channel
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
