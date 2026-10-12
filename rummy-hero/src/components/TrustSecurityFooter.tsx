import React from "react";
import { IMAGES, handleImageFallback } from "../assets/images";

export const TrustSecurityFooter: React.FC = () => {
  const trustBadges = [
    {
      img: IMAGES.trustRng,
      title: "iTech Labs Certified",
      desc: "Hardware RNG algorithm tested & certified 100% fair"
    },
    {
      img: IMAGES.trustSsl,
      title: "256-Bit SSL Encryption",
      desc: "Bank-grade data encryption & felt telemetry"
    },
    {
      img: IMAGES.trustInstantPayout,
      title: "48s Instant Withdrawals",
      desc: "Direct credit via IMPS & UPI verified 24/7"
    },
    {
      img: IMAGES.trust18Plus,
      title: "18+ Responsible Gaming",
      desc: "Mandatory KYC verification & self-exclusion tools"
    }
  ];

  return (
    <div className="relative z-10 w-full border-t border-white/10 pt-16 pb-12 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-5 rounded-2xl liquid-glass border border-white/10 hover:border-amber-400/30 transition-colors"
            >
              <img
                src={badge.img.src}
                alt={badge.title}
                onError={(e) => handleImageFallback(e, badge.img.file)}
                className="w-16 h-16 object-contain mb-3 drop-shadow-md"
              />
              <div className="text-xs sm:text-sm font-semibold text-white">{badge.title}</div>
              <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{badge.desc}</div>
            </div>
          ))}
        </div>

        {/* Payment Partner Methods */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 border-y border-white/10 gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <span className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
              Official Instant Banking &amp; Payout Partners
            </span>
            <span className="text-[11px] text-slate-400 mt-0.5">
              Zero transaction fees · 24/7 Instant settlement gateway
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* UPI Logo */}
            <div className="bg-white rounded-lg px-3 py-1.5 flex items-center shadow-sm">
              <img
                src={IMAGES.paymentUpi.src}
                alt="UPI"
                onError={(e) => handleImageFallback(e, IMAGES.paymentUpi.file)}
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* RuPay Logo */}
            <div className="bg-white rounded-lg px-3 py-1.5 flex items-center shadow-sm">
              <img
                src={IMAGES.paymentRupay.src}
                alt="RuPay"
                onError={(e) => handleImageFallback(e, IMAGES.paymentRupay.file)}
                className="h-6 w-auto object-contain"
              />
            </div>

            {/* NetBanking & Visa / Master badges */}
            <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium flex items-center gap-1.5">
              <span>IMPS NetBanking</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-medium flex items-center gap-1.5">
              <span>Visa / Mastercard</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
