import { useState, useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import InteractiveSection from "@/components/InteractiveSection";
import Footer from "@/components/Footer";
import Lenis from "@studio-freight/lenis";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="cursor-none overflow-x-hidden font-body">
      <div className="grain" />
      <CustomCursor />
      <Navigation />
      
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <InteractiveSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
