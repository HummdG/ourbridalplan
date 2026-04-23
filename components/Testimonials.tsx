const testimonials = [
  {
    quote:
      "Everything was so beautifully organised. We felt completely at ease from the very first call. Our Bridal Plan thought of everything.",
    couple: "Adeola & James",
    service: "Full Wedding Planning",
  },
  {
    quote:
      "Our day ran perfectly. We didn't have to worry about a single thing and could simply enjoy every moment together.",
    couple: "Priya & Michael",
    service: "Wedding Day Coordination",
  },
  {
    quote:
      "So calm, professional, and thoughtful throughout the entire process. You truly understood our vision and brought it to life.",
    couple: "Chioma & Tobi",
    service: "Bespoke Wedding Support",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="font-script text-4xl md:text-5xl text-gold mb-2 leading-none">
            Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light mt-3">
            What Our Couples Say
          </h2>
          <div className="w-10 h-px bg-warm-gray mx-auto mt-7" />
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              <span className="font-serif text-7xl text-gold/30 leading-none mb-4">
                &ldquo;
              </span>
              <p className="font-serif text-xl md:text-2xl text-ink leading-relaxed italic flex-1 mb-7">
                {t.quote}
              </p>
              <div className="w-8 h-px bg-warm-gray mb-4" />
              <p className="font-sans text-sm font-medium text-charcoal tracking-wide">
                {t.couple}
              </p>
              <p className="font-sans text-[11px] tracking-[0.18em] uppercase text-muted mt-1">
                {t.service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
