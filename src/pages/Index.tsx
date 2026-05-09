import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <LoadingScreen onComplete={() => setLoaded(true)} />;
  }

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
