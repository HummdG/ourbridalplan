"use client";

import { useState } from "react";
import Image from "next/image";

const WA_URL =
  "https://wa.me/447852723515?text=Hello%2C%20I%27d%20love%20to%20enquire%20about%20wedding%20planning%20with%20Our%20Bridal%20Plan";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup card */}
      <div
        className={`w-[290px] transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Chat with Our Bridal Plan on WhatsApp"
      >
        <div className="bg-ink border border-white/10 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden border border-gold/30">
                <Image
                  src="/brand/logo.png"
                  alt="Our Bridal Plan"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-[#FAF8F5] text-sm leading-none tracking-wide">
                  Our Bridal Plan
                </p>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#C9A96E] mt-1">
                  Wedding Coordination
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="text-[#7A7A7A] hover:text-[#FAF8F5] transition-colors duration-200 p-1 -mr-1"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Message bubble */}
          <div className="p-4">
            <div className="bg-white/[0.07] p-4">
              <p className="font-serif text-[#FAF8F5]/85 text-sm italic leading-relaxed">
                Hi! Tell us about your dream wedding. We&apos;d love to bring every detail to life.
              </p>
              <div className="flex items-center gap-2 mt-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-[#7A7A7A]">
                  Online now
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2.5 w-full bg-[#C9A96E] text-[#0F0F0F] py-4 font-sans text-[11px] tracking-[0.25em] uppercase hover:bg-[#b8945a] transition-colors duration-200"
          >
            <WhatsAppIcon className="w-4 h-4" />
            Start Chat
          </a>
        </div>
      </div>

      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Chat with us on WhatsApp"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-lg hover:scale-105 transition-all duration-200"
      >
        <span
          className={`absolute transition-all duration-200 ${
            open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span
          className={`absolute transition-all duration-200 ${
            open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        >
          <WhatsAppIcon className="w-6 h-6" />
        </span>
      </button>
    </div>
  );
}
