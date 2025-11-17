import { Menu } from "lucide-react";
import { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        
        if (href === '#') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 md:p-8 z-50 pointer-events-none mix-blend-difference text-background transform">
      <a href="#" className="pointer-events-auto group cursor-none">
        <span className="font-heavy text-3xl md:text-4xl tracking-tighter hover:text-neo-accent hover:line-through decoration-4 decoration-neo-accent transition-colors">
          NATHAN RUER.
        </span>
      </a>
      
      <div className="pointer-events-auto hidden md:flex gap-8 font-bold text-lg items-center">
        <a href="#about" className="hover:line-through decoration-4 decoration-neo-accent">
          MANIFESTO
        </a>
        <a href="#work" className="hover:line-through decoration-4 decoration-neo-accent">
          CHAOS
        </a>
        <a href="#contact" className="border-2 border-background px-6 py-2 hover:bg-background hover:text-foreground transition-all duration-300 shadow-none hover:shadow-[4px_4px_0px_0px_hsl(var(--neo-accent))]">
          TALK
        </a>
      </div>
      
      <div className="pointer-events-auto md:hidden border-2 border-background p-2 interactive">
        <Menu className="w-6 h-6" />
      </div>
    </nav>
  );
};

export default Navigation;