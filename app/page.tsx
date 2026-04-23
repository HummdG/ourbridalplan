import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AwardsBanner from "@/components/AwardsBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AwardsBanner />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
