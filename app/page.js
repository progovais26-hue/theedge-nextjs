import CustomCursor from "@/components/CustomCursor";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Showreel from "@/components/Showreel";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ParticleField />

      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Showreel />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
