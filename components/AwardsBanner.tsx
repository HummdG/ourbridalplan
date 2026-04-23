import Image from "next/image";

export default function AwardsBanner() {
  return (
    <section className="bg-champagne py-12 lg:py-16 border-y border-warm-gray/40">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0">

          {/* 2025 Winner */}
          <div className="flex flex-col items-center text-center px-8 lg:px-12 gap-2 lg:border-r border-warm-gray/50">
            <span className="text-gold text-xl mb-1">★</span>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted mb-0.5">
              Award Winner
            </p>
            <p className="font-serif text-xl lg:text-2xl text-ink leading-snug">
              UK African Wedding Awards
            </p>
            <p className="font-serif text-lg text-charcoal italic">2025</p>
            <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-muted mt-0.5 max-w-[220px]">
              Wedding Coordination Business of the Year
            </p>
          </div>

          {/* Award badge 2026 Finalist */}
          <div className="flex flex-col items-center px-8 lg:px-14 lg:border-r border-warm-gray/50">
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted mb-4">
              Award Finalist 2026
            </p>
            <Image
              src="/awards/award-finalist.png"
              alt="UK African Wedding Awards 2026, Wedding Planning Business of the Year Finalist"
              width={120}
              height={160}
              className="object-contain"
            />
          </div>

          {/* BellaNaija feature */}
          <div className="flex flex-col items-center text-center px-8 lg:px-12 gap-2">
            <p className="font-script text-3xl text-gold/90 leading-none mb-1">
              As Featured In
            </p>
            <p className="font-serif text-xl lg:text-2xl text-ink">
              BellaNaija Weddings
            </p>
            <div className="w-8 h-px bg-gold my-1" />
            <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-muted max-w-[200px]">
              Africa&apos;s Premier Wedding Media Platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
