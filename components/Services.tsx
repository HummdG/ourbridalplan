const services = [
  {
    number: "01",
    title: "Full Wedding Planning",
    description:
      "From venue selection and vendor management to timelines, budgets, and final details. We handle every element from your engagement to the aisle. You enjoy the journey; we carry the weight.",
  },
  {
    number: "02",
    title: "Wedding Day Coordination",
    description:
      "You've planned the perfect day. We ensure it unfolds exactly that way. On your wedding day, we manage every timeline, every supplier, and every moment, so you can be fully present.",
  },
  {
    number: "03",
    title: "Partial Planning Services",
    description:
      "Already started planning but need expert support along the way? We step in wherever you are, bring structure and calm to what's already in motion, and carry it beautifully to the finish line.",
  },
  {
    number: "04",
    title: "Bespoke Wedding Support",
    description:
      "Every love story is unique. Our bespoke service is shaped entirely around you: whether you need consultancy, creative direction, or dedicated support for specific elements of your day.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="font-script text-4xl md:text-5xl text-gold mb-2 leading-none">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light mt-3">
            Wedding Services
          </h2>
          <div className="w-10 h-px bg-warm-gray mx-auto mt-7" />
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-px bg-warm-gray">
          {services.map((service) => (
            <div
              key={service.number}
              className="bg-white p-10 md:p-12 group hover:bg-cream transition-colors duration-400"
            >
              <p className="font-serif text-5xl text-gold/25 font-light mb-5 leading-none">
                {service.number}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">
                {service.title}
              </h3>
              <div className="w-8 h-px bg-gold mb-5 transition-all duration-300 group-hover:w-14" />
              <p className="text-charcoal leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Soft CTA */}
        <p className="text-center mt-10 text-muted text-sm">
          Not sure which service suits you?{" "}
          <a
            href="#contact"
            className="text-ink underline underline-offset-4 hover:text-charcoal transition-colors"
          >
            Get in touch →
          </a>
        </p>
      </div>
    </section>
  );
}
