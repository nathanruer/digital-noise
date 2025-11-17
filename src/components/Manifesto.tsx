import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  useEffect(() => {
    const manifestoTexts = document.querySelectorAll(".manifesto-text");
    manifestoTexts.forEach(text => {
      gsap.to(text, {
        opacity: 1,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          end: "top 40%",
          scrub: true
        }
      });
    });

    const statsCards = document.querySelectorAll('.stats-card');
    statsCards.forEach(card => {
      const cardElement = card as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        gsap.to(cardElement, {
          x: (x - rect.width / 2) / 5,
          y: (y - rect.height / 2) / 5,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(cardElement, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)"
        });
      };

      cardElement.addEventListener('mousemove', handleMouseMove);
      cardElement.addEventListener('mouseleave', handleMouseLeave);
    });
  }, []);

  return (
    <section id="about" className="relative py-32 px-4 md:px-12 bg-foreground text-background overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neo-purple opacity-20 clip-corner" />
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <h2 className="font-heavy text-6xl md:text-8xl mb-6 text-neo-accent">THE<br/>MANIFESTO</h2>
            <div className="w-full h-4 bg-neo-main border-2 border-background shadow-[4px_4px_0px_0px_hsl(var(--background))]" />
          </div>
        </div>
        
        <div className="md:col-span-7 space-y-12 text-xl md:text-3xl font-bold leading-snug">
          <p className="manifesto-text opacity-20">
            We believe the internet has become a sterile hospital hallway. Everything is round, soft, and safe. <span className="text-neo-main bg-background px-2">We are the sledgehammer.</span>
          </p>
          <p className="manifesto-text opacity-20">
            This isn't about making sense. It's about making feelings. We utilize raw aesthetics to trigger dopamine receptors you didn't know you had.
          </p>
          <p className="manifesto-text opacity-20">
            Ugly is the new beautiful. Wrong is the new right. If your website doesn't look like it might crash the browser, you aren't trying hard enough.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="stats-card interactive bg-background text-foreground border-4 border-background p-6 shadow-neo-accent hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-none">
              <h3 className="font-heavy text-5xl">99%</h3>
              <p className="text-sm font-mono uppercase mt-2">Chaos Factor</p>
            </div>
            <div className="stats-card interactive bg-neo-main text-background border-4 border-background p-6 shadow-neo-purple hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-none">
              <h3 className="font-heavy text-5xl">0%</h3>
              <p className="text-sm font-mono uppercase mt-2">Subtlety</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
