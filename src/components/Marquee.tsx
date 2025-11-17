const Marquee = () => {
  return (
    <div className="w-full bg-neo-accent border-b-4 border-foreground py-6 overflow-hidden flex items-center transform -skew-y-2 origin-left -mt-1 z-30 relative">
      <div className="marquee-container font-heavy text-4xl md:text-6xl text-foreground uppercase tracking-widest whitespace-nowrap">
        <div className="inline-block animate-marquee">
          /// NO TEMPLATES ALLOWED /// BRUTAL SIMPLICITY /// PIXEL PERFECTION IS DEAD /// LONG LIVE THE GLITCH /// DESIGN IS CHAOS /// 
          /// NO TEMPLATES ALLOWED /// BRUTAL SIMPLICITY /// PIXEL PERFECTION IS DEAD /// LONG LIVE THE GLITCH /// DESIGN IS CHAOS /// 
        </div>
      </div>
    </div>
  );
};

export default Marquee;
