import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="iletisim" className="py-20 bg-[#000000]">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yoda-light uppercase tracking-wider">İletişim</h2>
          <div className="w-24 h-1 bg-yoda-accent mx-auto mt-4"></div>
          <p className="mt-4 text-yoda-light/70 max-w-2xl mx-auto px-4">
            Bir projeniz mi var veya takımımıza katılmak mı istiyorsunuz? Bizimle iletişime geçin.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-900/50 p-6 sm:p-8 rounded-lg shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Sol taraf - İletişim bilgileri */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-yoda-light mb-6">İletişim Bilgileri</h3>
              {/* GÜNCELLEME: Ana bloklar arasındaki boşluk 'space-y-6' (24px) 
                ile zaten eşitti. Sorun, blokların iç hizalamasındaydı.
                Aşağıda bu hizalamayı düzelttik.
              */}
              <div className="space-y-6 text-yoda-light/80">
                
                {/* 1. Adres Bloğu */}
                <div className="flex items-start">
                  {/* GÜNCELLEME: İkon boyutu h-6 w-6 olarak büyütüldü (sosyal ikonlarla eşleşmesi için) */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yoda-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm sm:text-base text-yoda-accent">YTÜ Kulüpler Vadisi, Eğitim Fakültesi, Gençosman, 34165 Güngören/İstanbul</p>
                </div>
                
                {/* 2. Mail Bloğu */}
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-yoda-accent flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:yoda.topluluk@gmail.com" className="text-yoda-accent hover:text-yoda-light transition-colors text-sm sm:text-base break-all">
                    yoda.topluluk@gmail.com
                  </a>
                </div>

                {/* 3. Sosyal Medya Bloğu (İkonlar zaten h-6 w-6 idi) */}
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4">
                  <a 
                    href="https://www.instagram.com/yoda.toplulugu?utm_source=ig_web_button_share_sheet&igsh=MWtqbHE5dXJ2cjNnZw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-yoda-accent hover:text-yoda-light transition-colors"
                  >
                    <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm sm:text-base">@yoda.toplulugu</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/yoda-toplulu%C4%9Fu-0865a6248/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-yoda-accent hover:text-yoda-light transition-colors"
                  >
                    <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm sm:text-base">YODA Topluluğu</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sağ taraf - Konum resmi (Değişiklik yok) */}
            <div className="text-center mt-6 md:mt-0">
              <img 
                src="/konum.png" 
                alt="YODA Topluluğu Konumu" 
                className="w-full h-auto max-h-60 sm:max-h-80 mx-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;