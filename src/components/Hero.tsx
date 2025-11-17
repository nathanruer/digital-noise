import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const floatReverseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-text", {
      y: 200,
      opacity: 0,
      rotate: 5,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(floatRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(floatReverseRef.current, {
      y: 150,
      rotate: 45,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom top",
        scrub: 1.5
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden border-b-4 border-foreground bg-background">
      {/* Floating Elements */}
      <div
        ref={floatRef}
        className="absolute top-1/4 left-10 w-24 h-24 md:w-48 md:h-48 border-4 border-foreground bg-neo-main rounded-full shadow-neo opacity-80 animate-float"
      />
      <div
        ref={floatReverseRef}
        className="absolute bottom-1/4 right-10 w-32 h-32 md:w-64 md:h-64 border-4 border-foreground bg-neo-purple rotate-12 shadow-neo z-10"
      />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-foreground bg-neo-accent shadow-neo-sm" />

      <div ref={heroTextRef} className="relative z-20 text-center">
        <div className="overflow-hidden">
          <h1 className="hero-text font-display font-bold text-[12vw] leading-[0.85] tracking-tighter text-foreground">
            WE MAKE
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-text font-display font-bold text-[12vw] leading-[0.85] tracking-tighter text-outline">
            DIGITAL
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-text font-display font-bold text-[12vw] leading-[0.85] tracking-tighter text-foreground">
            NOISE.
          </h1>
        </div>
        
        <p className="hero-text mt-8 font-body text-xl md:text-2xl font-bold max-w-md mx-auto bg-card border-4 border-foreground p-4 shadow-neo rotate-2">
          Anti-boring web experiences for brands that hate playing it safe.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-12 h-12 text-foreground stroke-[3]" />
      </div>
    </section>
  );
};

export default Hero;
