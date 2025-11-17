import { useEffect } from "react";
import { LayoutGrid, Zap, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.from(".service-card", {
      y: 100,
      opacity: 0,
      rotate: 5,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 85%"
      }
    });
  }, []);

  return (
    <section id="work" className="py-20 bg-neo-blue border-t-4 border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16 border-b-4 border-foreground pb-4">
          <h2 className="font-heavy text-5xl md:text-7xl text-background">OUR TOOLKIT</h2>
          <Wrench className="w-12 h-12 text-neo-accent stroke-[3] animate-spin-slow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]">
          
          <div className="service-card interactive bg-background border-4 border-foreground shadow-neo p-8 flex flex-col justify-between md:col-span-2 hover:bg-neo-accent transition-colors duration-300 group">
            <div className="flex justify-between items-start">
              <h3 className="font-heavy text-4xl uppercase">Web<br/>Brutalism</h3>
              <LayoutGrid className="w-10 h-10 stroke-[3] group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <p className="font-bold text-lg mt-4 border-t-2 border-foreground pt-4">
              Creating layouts that defy grid systems and user expectations.
            </p>
          </div>

          <div className="service-card interactive bg-neo-main border-4 border-foreground shadow-neo p-8 flex flex-col justify-center items-center text-center rotate-1 hover:rotate-0 transition-transform duration-300">
            <Zap className="w-20 h-20 text-foreground fill-background mb-4 stroke-[3]" />
            <h3 className="font-display font-bold text-2xl text-background">HIGH VOLTAGE<br/>DEVELOPMENT</h3>
          </div>

          <div className="service-card interactive bg-foreground border-4 border-foreground shadow-neo p-8 flex flex-col justify-between text-background hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all">
            <h3 className="font-heavy text-3xl text-neo-purple">MOTION<br/>DESIGN</h3>
            <p className="text-muted-foreground">Things moving when they shouldn't.</p>
          </div>

          <div className="service-card interactive bg-background border-4 border-foreground shadow-neo p-0 overflow-hidden md:col-span-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-neo-purple to-neo-main opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-heavy text-5xl text-background -rotate-6">VISUAL CHAOS</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
