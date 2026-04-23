import Image from "next/image";

const galleryImages = [
  { src: "/gallery/pic2.png", alt: "Elegant bride in white gown at ornate mirror" },
  { src: "/gallery/pic5.png", alt: "Bride in luxurious bridal suite getting ready" },
  { src: "/gallery/pic7.png", alt: "Elegant gold and floral wedding reception centrepieces" },
  { src: "/gallery/pic1.png", alt: "Joyful couple in traditional Nigerian wedding attire" },
  { src: "/gallery/pic3.png", alt: "Stunning multi-tier white wedding cake with gold details" },
  { src: "/gallery/pic4.png", alt: "White horse-drawn carriage arriving at English manor house" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-script text-4xl md:text-5xl text-gold mb-2 leading-none">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink font-light mt-3">
            A Glimpse of What We Create
          </h2>
          <div className="w-10 h-px bg-warm-gray mx-auto mt-7" />
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center hover:opacity-90 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/ourbridalplan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted border-b border-warm-gray pb-1 hover:text-ink hover:border-ink transition-all duration-300"
          >
            View More on Instagram
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7v10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
