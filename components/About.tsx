
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-20 bg-[#000000]">
      <div className="container mx-auto px-8 pr-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-yoda-light uppercase tracking-wider">Hakkımızda</h2>
          <div className="w-24 h-1 bg-yoda-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center text-lg text-yoda-light/80 leading-relaxed space-y-4">
            <p>
              <strong>Yıldız Otonom Dizayn Araştırma (YODA)</strong>, geleceğin teknolojilerini bugünden tasarlayan, otonom sistemler ve yapay zeka alanında yenilikçi çözümler üreten bir araştırma ve geliştirme takımıdır.
            </p>
            <p>
              Misyonumuz, disiplinlerarası bir yaklaşımla karmaşık problemlere akıllı ve sürdürülebilir çözümler sunmaktır. Vizyonumuz ise, otonom teknolojiler alanında ulusal ve uluslararası düzeyde öncü bir referans noktası olmaktır.
            </p>
            <p>
              Mühendisliğin sınırlarını zorlayarak, daha verimli, güvenli ve akıllı bir dünya için çalışıyoruz.
            </p>
          </div>
          <div className="flex justify-center lg:max-w-[70%] mx-auto">
            <img 
              src="/hakkımızda.png" 
              alt="YODA Team at Work" 
              className="rounded-lg shadow-2xl shadow-yoda-accent/20 max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
