import { useState } from "react";
import { ReactLenis } from 'lenis/react';

import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import InteractiveSection from "@/components/InteractiveSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
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
    </ReactLenis>
  );
};

export default Index;