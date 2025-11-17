const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 px-4 border-t-8 border-neo-accent">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="font-heavy text-[15vw] md:text-[10vw] leading-none text-background select-none">
              NATHAN.
            </h1>
          </div>
          <div className="flex flex-col justify-end items-start md:items-end space-y-6">
            <a href="#" className="text-4xl font-display hover:text-neo-accent hover:ml-4 transition-all">
              INSTAGRAM -&gt;
            </a>
            <a href="#" className="text-4xl font-display hover:text-neo-accent hover:ml-4 transition-all">
              TWITTER -&gt;
            </a>
            <a href="#" className="text-4xl font-display hover:text-neo-accent hover:ml-4 transition-all">
              GITHUB -&gt;
            </a>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t-2 border-background/20 flex flex-col md:flex-row justify-between items-center text-sm font-mono">
          <p>© 2025 NATHAN RUER. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0">
            MADE WITH <span className="text-neo-main">♥</span> AND TOO MUCH CAFFEINE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
