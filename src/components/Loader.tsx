import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 100);
      }
    });

    tl.to(barsRef.current, {
      height: "100%",
      duration: 0.8,
      stagger: 0.1,
      ease: "power4.inOut"
    })
    .to(".loader-text", {
      opacity: 0,
      duration: 0.2
    })
    .to(loaderRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut"
    }, "-=0.2");
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-foreground z-[10000] flex items-center justify-center"
    >
      <div className="flex gap-2 h-32 items-end">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={el => { if (el) barsRef.current[i] = el }}
            className="w-5 h-0 bg-neo-accent"
          />
        ))}
      </div>
      <h1 className="loader-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-background font-display font-bold text-6xl mix-blend-exclusion">
        LOADING
      </h1>
    </div>
  );
};

export default Loader;
