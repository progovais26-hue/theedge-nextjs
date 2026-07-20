import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkPageClient from "@/components/WorkPageClient";
import { VIDEOS } from "@/lib/video-meta";

export default function WorkPage() {
  return (
    <>
      <ParticleField />
      <Navbar />
      <WorkPageClient videos={VIDEOS} />
      <Footer />
    </>
  );
}
