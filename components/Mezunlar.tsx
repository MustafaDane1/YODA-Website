import React from 'react';
// Sadece mezunların verisini (ALUMNI_DATA) alır
import { ALUMNI_DATA } from '../constants';
import type { TeamMember } from '../types';

// Swiper kütüphanesinden gerekli modülleri import ediyoruz
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper'ın stil dosyalarını import ediyoruz
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ----------------------------------------------------------------
// AlumniMemberCard BİLEŞENİ (Açıklama alanı GERİ EKLENDİ)
// ----------------------------------------------------------------
const AlumniMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const firstSpaceIndex = member.name.indexOf(' ');
  const hasLastName = firstSpaceIndex !== -1;
  const firstName = hasLastName ? member.name.substring(0, firstSpaceIndex) : member.name;
  const lastName = hasLastName ? member.name.substring(firstSpaceIndex + 1) : '';

  return (
    <div className="text-center px-2">
      <div className="relative inline-block">
        <img src={member.image} alt={member.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mx-auto mb-4 border-4 border-gray-700"/>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-yoda-light mb-2 h-12 sm:h-auto">
        <div>{firstName}</div>
        {hasLastName && <div>{lastName}</div>}
      </h3>
      <p className="text-yoda-accent text-sm mb-2 h-16 sm:h-auto leading-normal">
        {member.role}
      </p>
      
      {/* DEĞİŞİKLİK: Mezun yılı (description) paragrafı geri eklendi */}
      <p className="text-gray-300 text-xs mb-4 leading-relaxed">
        {member.description}
      </p>

      {member.socials.linkedin && (
        // DEĞİŞİKLİK: 'mt-4' (ekstra boşluk) kaldırıldı, çünkü üstteki paragraf eklendi
        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-gray-400 hover:text-yoda-accent transition-colors duration-200">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      )}
    </div>
  );
};

// ----------------------------------------------------------------
// Mezunlar BİLEŞENİ (Kodun geri kalanı aynı)
// ----------------------------------------------------------------
const Mezunlar: React.FC = () => {
  const membersPerPage = 10;
  const totalPages = Math.ceil(ALUMNI_DATA.length / membersPerPage);

  const pages = [];
  for (let i = 0; i < ALUMNI_DATA.length; i += membersPerPage) {
    pages.push(ALUMNI_DATA.slice(i, i + membersPerPage));
  }

  // ID'ler 'mezunlarimiz' ve 'alumni-' olarak ayarlı
  const swiperStyles = `
    #mezunlarimiz .swiper {
      min-height: 500px;
    }
    #mezunlarimiz .swiper-wrapper {
      align-items: stretch;
      min-height: 500px;
    }
    #mezunlarimiz .swiper-slide {
      min-height: 500px;
      height: auto !important;
      cursor: grab;
      touch-action: pan-y pinch-zoom;
    }
    #mezunlarimiz .swiper-slide:active {
      cursor: grabbing;
    }
    #mezunlarimiz .swiper-slide > div {
      min-height: 500px;
      width: 100%;
    }
    #alumni-pagination-dots .swiper-pagination-bullet {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 9999px;
      background-color: #4b5563;
      opacity: 1;
      transition: all 0.3s ease;
      margin-left: 0.25rem; 
      margin-right: 0.25rem;
    }
    #alumni-pagination-dots .swiper-pagination-bullet-clickable {
      cursor: pointer;
    }
    #alumni-pagination-dots .swiper-pagination-bullet-active {
      background-color: #D7B00F; 
    }
    #alumni-pagination-dots .swiper-pagination-bullet:not(.swiper-pagination-bullet-active):hover {
      background-color: #6b7280;
    }
  `;

  return (
    <section id="mezunlarimiz" className="py-20 bg-[#000000]">
      
      <style>{swiperStyles}</style>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yoda-light uppercase tracking-wider">Mezunlarımız</h2>
          <div className="w-24 h-1 bg-yoda-accent mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <button 
            id="alumni-swiper-prev"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-yoda-accent transition-colors duration-300 disabled:opacity-30 disabled:hover:text-gray-400"
            aria-label="Önceki sayfa"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            id="alumni-swiper-next"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 hover:text-yoda-accent transition-colors duration-300 disabled:opacity-30 disabled:hover:text-yoda-accent"
            aria-label="Sonraki sayfa"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={0}
            autoHeight={false}
            pagination={{ 
              clickable: true, 
              el: '#alumni-pagination-dots'
            }}
            navigation={{
              prevEl: '#alumni-swiper-prev',
              nextEl: '#alumni-swiper-next',
            }}
            allowTouchMove={true}
            threshold={5}
            touchRatio={1}
            touchAngle={45}
          >
            {pages.map((pageMembers, pageIndex) => (
              <SwiperSlide key={pageIndex}> 
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-4 sm:gap-x-8 px-4 sm:px-8 lg:px-12">
                  {pageMembers.map((member, memberIndex) => (
                    <AlumniMemberCard key={memberIndex} member={member} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {totalPages > 1 && (
          <div 
            id="alumni-pagination-dots" 
            className="flex justify-center mt-8 space-x-2"
          />
        )}
      </div>
    </section>
  );
};

export default Mezunlar;