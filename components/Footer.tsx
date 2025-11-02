
import React from 'react';
import { SocialIcons } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-yoda-light/60 text-sm mb-4 md:mb-0">
          &copy; {currentYear} YODA - Yıldız Otonom Dizayn Araştırma. Tüm Hakları Saklıdır.
        </p>
        {/* Sosyal ikonlar kaldırıldı */}
      </div>
    </footer>
  );
};

export default Footer;
