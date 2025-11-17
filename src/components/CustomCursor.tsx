import { useEffect, useState, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const easing = 0.05; 
    
    let hasMoved = false;

    const updatePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!hasMoved) {
        currentX = targetX;
        currentY = targetY;
        hasMoved = true;
      }
    };

    const animate = () => {
      if (cursorRef.current && hasMoved) {
        currentX += (targetX - currentX) * easing;
        currentY += (targetY - currentY) * easing;
        
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);
    document.addEventListener("mousemove", updatePosition);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll("a, button, .interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      cancelAnimationFrame(animationFrameId);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: "0px",
        top: "0px",
        borderRadius: "0%", 
        
        width: isHovering ? "60px" : "24px",
        height: isHovering ? "60px" : "24px",
        backgroundColor: isHovering ? "hsl(var(--neo-accent))" : "hsl(var(--destructive))",
        transition: "width 0.3s cubic-bezier(0.19, 1, 0.22, 1), height 0.3s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.3s ease",
      }}
    />
  );
};

export default CustomCursor;