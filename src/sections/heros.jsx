import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [rotation, setRotation] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  let lastScrollTop = 0;
  let lastScrollTime = Date.now();

  useEffect(() => {
    const handleScroll = () => {
      const currentTime = Date.now();
      const currentScrollTop = window.scrollY;
      const timeDiff = currentTime - lastScrollTime;
      
      const speed = Math.abs(currentScrollTop - lastScrollTop) / timeDiff;
      setScrollSpeed(speed);
      
      const baseSpeed = 0.7;
      const speedMultiplier = 10;
      const newRotation = rotation + (baseSpeed + (speed * speedMultiplier));
      
      setRotation(newRotation);
      
      lastScrollTop = currentScrollTop;
      lastScrollTime = currentTime;
    };

    const rotateInterval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 70);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(rotateInterval);
    };
  }, [rotation]);

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden">
      {/* Video Container */}
      <div className="absolute top-0 left-0 w-screen h-screen">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transform: 'scale(1.01)', // Slight scale to prevent white edges
          }}
        >
          <source src="/assets/mainwin.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#010103] opacity-80 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-screen c-space flex flex-col items-center justify-center gap-8">
        {/* Logo Container with mix-blend-mode */}
        <div 
          className="w-24 h-24 md:w-32 md:h-32 transition-transform bg-blend-screen"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <img 
            src="/assets/profile.png" 
            alt="Company Logo" 
            className="w-full h-full object-contain mix-blend-screen"
            style={{
              filter: 'brightness(1.2) contrast(1.1)',
            }}
          />
        </div>

        {/* Company Name */}
        <h1 className="hero_tag text-gray_gradient">
          DEVISE ENGINEERING TOOLS
        </h1>

        {/* Tagline */}
        <p className="text-sm md:text-base text-neutral-400 font-generalsans tracking-wider uppercase">
          Work with perfection
        </p>
      </div>
    </section>
  );
};

export default Hero;