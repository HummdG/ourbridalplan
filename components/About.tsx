import Image from "next/image";

const credentials = [
  { label: "UK AWA Winner", detail: "2025" },
  { label: "Award Finalist", detail: "2026" },
  { label: "BellaNaija Featured", detail: "" },
  { label: "UK-Wide Service", detail: "" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Text */}
          <div>
            <p className="font-script text-4xl md:text-5xl text-gold mb-2 leading-none">
              A Little About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink font-light leading-tight mt-4 mb-6">
              We plan every detail,
              <br />
              so you can live
              <br />
              <span className="italic">every moment.</span>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="text-charcoal leading-relaxed text-lg mb-5">
              At Our Bridal Plan, we believe your wedding day should feel
              completely effortless. From the very first conversation to the
              final dance, we&apos;re here to guide, coordinate, and ensure
              every detail is exactly as you imagined.
            </p>
            <p className="text-charcoal leading-relaxed text-lg mb-10">
              We work with couples across the UK, from intimate, heartfelt
              gatherings to grand, celebratory occasions, bringing calm
              expertise, genuine care, and a deep appreciation for multicultural
              weddings to every celebration we touch.
            </p>

            {/* Credentials grid */}
            <div className="grid grid-cols-2 gap-4 pt-7 border-t border-warm-gray">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5">◆</span>
                  <div>
                    <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-muted leading-none">
                      {c.label}
                    </p>
                    {c.detail && (
                      <p className="font-serif text-ink text-sm mt-0.5">
                        {c.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image with decorative border */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/gallery/pic7.png"
                alt="Elegant gold wedding reception with floral centrepieces"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-gold/25 -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
