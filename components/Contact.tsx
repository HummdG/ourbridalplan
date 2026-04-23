export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">

        {/* Top divider */}
        <div className="w-10 h-px bg-gold/50 mx-auto mb-12" />

        <p className="font-script text-4xl md:text-5xl text-gold/80 mb-3 leading-none">
          Ready to begin?
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight mt-4 mb-7">
          Let&apos;s Plan Your
          <br />
          <span className="italic">Perfect Day</span>
        </h2>
        <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Reach out for a no-pressure conversation about your wedding. We&apos;d
          love to hear your story and explore how we can help make your day
          everything you&apos;ve dreamed of.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/447852723515?text=Hello%2C%20I%27d%20love%20to%20enquire%20about%20wedding%20planning%20with%20Our%20Bridal%20Plan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#20bc5a] transition-colors duration-300"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a
            href="mailto:hello@ourbridalplan.co.uk"
            className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-10 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/8 hover:border-white/40 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Send an Email
          </a>
        </div>

        {/* Bottom divider */}
        <div className="w-10 h-px bg-gold/25 mx-auto mt-16" />
      </div>
    </section>
  );
}
