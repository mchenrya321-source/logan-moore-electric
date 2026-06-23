import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Services from "@/components/Services";
import TrustStrip from "@/components/TrustStrip";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <WhyChooseUs />
        <Gallery />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
