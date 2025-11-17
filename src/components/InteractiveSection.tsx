import { useRef } from "react"; 
import { Skull } from "lucide-react";
import gsap from "gsap";

const CONFETTI_COLORS = ['#FF4D00', '#A3FF00', '#9D00FF'];

const createConfetto = (container, angle) => {
  const confetto = document.createElement('div');
  const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
  
  Object.assign(confetto.style, {
    position: 'absolute',
    width: '10px',
    height: '10px',
    backgroundColor: color,
    borderRadius: '2px',
    zIndex: '1000',
    bottom: '0',
    left: '50%', 
    transform: 'translateX(-50%)',
    pointerEvents: 'none',
  });

  container.appendChild(confetto);

  gsap.to(confetto, {
    x: angle === 60 ? (Math.random() * 300) + 150 : -(Math.random() * 300) - 150,
    y: -(Math.random() * 500) - 100,
    rotation: Math.random() * 720,
    opacity: 0,
    duration: 1.5 + Math.random(),
    ease: "power2.out",
    onComplete: () => {
      confetto.remove();
    }
  });
};

const fireConfetti = (container, count, angle) => {
  if (!container) return;
  
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      createConfetto(container, angle);
    }, i * 20); 
  }
};


const InteractiveSection = () => {
  const sectionRef = useRef(null); 

  const handleDangerClick = () => {
    const duration = 2000;
    const interval = 150; 
    let elapsed = 0;

    const timer = setInterval(() => {
        fireConfetti(sectionRef.current, 5, 60);
        fireConfetti(sectionRef.current, 5, 120);
        elapsed += interval;
        
        if (elapsed >= duration) {
            clearInterval(timer);
        }
    }, interval);
  };

  return (
    <section 
      id="contact" 
      className="py-32 bg-background flex flex-col items-center justify-center text-center overflow-hidden relative"
      ref={sectionRef}
    >
      <h2 className="font-display font-bold text-4xl md:text-6xl mb-12 z-10">ARE YOU BRAVE?</h2>
      
      <button onClick={handleDangerClick} className="relative group interactive">
        <div className="absolute inset-0 bg-foreground translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
        <div className="relative border-4 border-foreground bg-neo-main px-12 py-8 font-heavy text-4xl md:text-6xl text-background hover:-translate-y-2 hover:-translate-x-2 active:translate-x-2 active:translate-y-2 transition-transform duration-100 flex items-center gap-4">
          <Skull className="w-12 h-12 stroke-[3]" />
          DO NOT CLICK
        </div>
      </button>
    </section>
  );
};

export default InteractiveSection;