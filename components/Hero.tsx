import React from 'react';
import { HERO_BACKGROUND_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="h-dvh w-full relative flex items-center justify-center text-center bg-black overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center w-full px-8">
        <img
          src={HERO_BACKGROUND_URL}
          alt="Ana görsel"
          className="max-w-[90vw] md:max-w-[70vw] lg:max-w-[200vw] max-h-[75vh] object-contain drop-shadow-[0_6px_16px_rgba(0,0,0,0.6)] md:mt-10"
        />
      </div>
      
      {/* GÜNCELLEME: En sağlam yatay merkezleme yöntemi uygulandı. */}
      <a 
        href="#hakkimizda" 
        className="absolute bottom-16 left-0 right-0 z-10 animate-bounce flex justify-center"
      >
        {/* Bu SVG artık bir flex-item'dır ve üstteki 'justify-center' tarafından ortalanır. */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-yoda-light/70 hover:text-yoda-light transition-colors drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </section>
  );
};

export default Hero;