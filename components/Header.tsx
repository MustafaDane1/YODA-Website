import React, { useState } from 'react';
// types.ts dosyasından NavLink tipini de import ettiğinizden emin olun
import type { NavLink } from '../types';
import { NAV_LINKS, LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bu fonksiyon SADECE sayfa içi linkler için kullanılacak
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg">
      {/* DEĞİŞİKLİK 1: 
        Logoyu sola, menüyü sağa yanaştırmak için padding'i (iç boşluk) azalttık.
        'px-8 pr-10' (soldan 2rem, sağdan 2.5rem boşluk) yerine 'px-4' (iki taraftan da 1rem boşluk) kullandık.
        Daha da yanaşmasını istersen 'px-2' veya 'px-0' yapabilirsin.
      */}
      <div className="container mx-auto max-w-none px-8 py-3 flex justify-between items-center">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          // DEĞİŞİKLİK 2: Gereksiz olan 'space-x-2' sınıfını temizledik.
          className="flex items-center"
        >
          <img
            src="/yoda-logo.png"
            onError={(e) => {
              // ... (mevcut onError kodunuz burada kalabilir)
              const img = e.currentTarget as HTMLImageElement;
              const candidates = ['/yoda-logo.jpg', '/yoda-logo.webp'];
              const next = candidates.shift();
              if (next) {
                img.src = next;
                img.onerror = () => {
                  const fallback = candidates.shift();
                  if (fallback) {
                    img.src = fallback;
                  } else {
                    img.onerror = null;
                    img.src = LOGO_URL;
                  }
                };
              } else {
                img.onerror = null;
                img.src = LOGO_URL;
              }
            }}
            alt="YODA"
            // DEĞİŞİKLİK 3: Logoyu büyütmek için 'h-10' (2.5rem) olan yüksekliği 'h-14' (3.5rem) yaptık.
            className="h-14 w-auto filter brightness-150 drop-shadow-[0_0_5px_rgba(240,230,210,0.7)]"
          />
        </a>

        {/* 1. DEĞİŞİKLİK: Masaüstü Menü */}
        <nav className="hidden md:flex space-x-8">
          {(NAV_LINKS as NavLink[]).map((link) => ( // <-- Tipi NavLink[] olarak belirttik
            <a
              key={link.name}
              href={link.href}
              // <-- Tıklama olayını koşullu hale getirdik
              onClick={
                link.external ? undefined : (e) => handleNavClick(e, link.href)
              }
              // <-- Harici linkse yeni sekmede aç
              target={link.external ? '_blank' : '_self'}
              // <-- Güvenlik için
              rel={link.external ? 'noopener noreferrer' : ''}
              className="text-yoda-light hover:text-yoda-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-yoda-light focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg">
          {/* 2. DEĞİŞİKLİK: Mobil Menü */}
          <nav className="flex flex-col items-center py-4 space-y-4">
            {(NAV_LINKS as NavLink[]).map((link) => ( // <-- Tipi NavLink[] olarak belirttik
              <a
                key={link.name}
                href={link.href}
                className="text-yoda-light hover:text-yoda-accent transition-colors duration-300"
                // <-- Tıklama olayını koşullu hale getirdik
                onClick={
                  link.external ? undefined : (e) => handleNavClick(e, link.href)
                }
                // <-- Harici linkse yeni sekmede aç
                target={link.external ? '_blank' : '_self'}
                // <-- Güvenlik için
                rel={link.external ? 'noopener noreferrer' : ''}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;