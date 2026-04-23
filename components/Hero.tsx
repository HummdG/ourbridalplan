import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <Image
        src="/gallery/pic5.png"
        alt="Elegant bride in bridal suite"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Soft dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/brand/logo.png"
            alt="Our Bridal Plan"
            width={120}
            height={120}
            className="object-contain"
            style={{ filter: "drop-shadow(0 2px 14px rgba(0,0,0,0.3))" }}
          />
        </div>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-10 bg-gold/70" />
          <div className="w-1 h-1 rounded-full bg-gold/70" />
          <div className="h-px w-10 bg-gold/70" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-5 tracking-wide">
          Your Wedding Day,
          <br />
          <span className="italic">Beautifully Handled.</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/70 text-base md:text-lg font-light tracking-wide mb-10 max-w-md mx-auto leading-relaxed">
          Calm, considered wedding planning &amp; coordination, completely personal to you.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-ink px-10 py-4 text-xs tracking-[0.22em] uppercase font-medium hover:bg-white/90 transition-colors duration-300"
          >
            Enquire Now
          </a>
          <a
            href="#gallery"
            className="border border-white/50 text-white px-10 py-4 text-xs tracking-[0.22em] uppercase hover:bg-white/10 hover:border-white/70 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
}
