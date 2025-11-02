// types.ts dosyasından tipleri import ediyoruz
import type { NavLink, TeamMember, Project } from './types';

export const LOGO_URL = '/yoda-logo.png';
export const HERO_BACKGROUND_URL = '/anasayfa.png';

// NAV_LINKS (Bu bölüm zaten istediğin gibiydi)
export const NAV_LINKS: NavLink[] = [
  { name: 'Hakkımızda', href: '#hakkimizda' },
  { name: 'Takımlarımız', href: '#takimlar' },
  { name: 'Ekibimiz', href: '#ekibimiz' },
  { name: 'Mezunlarımız', href: '#mezunlarimiz' },
  { name: 'İletişim', href: '#iletisim' },
];

// TAKIM ÜYELERİ (EKİBİMİZ)
export const TEAM_DATA: TeamMember[] = [
  {
    name: 'Zeynep Aksoy',
    role: 'Takım Kaptanı',
    description: 'Otonom sistemler',
    image: 'https://picsum.photos/seed/zeynep/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Mehmet Öztürk',
    role: 'Yazılım Lideri',
    description: 'Gömülü sistemler',
    image: 'https://picsum.photos/seed/mehmet/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Elif Bulut',
    role: 'Mekanik Tasarımcı',
    description: 'CAD/CAM',
    image: 'https://picsum.photos/seed/elif/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Ali Can',
    role: 'Elektronik Donanım Lideri',
    description: 'PCB tasarımı',
    image: 'https://picsum.photos/seed/ali/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Selin Vural',
    role: 'Yapay Zeka Geliştiricisi',
    description: 'Görüntü işleme',
    image: 'https://picsum.photos/seed/selin/400/400',
    socials: {
      linkedin: '#',
    },
  },
];

// YENİDEN ADLANDIRILDI: MEZUNLARIMIZ
// Bu liste 'Mezunlar.tsx' component'i tarafından kullanılacak.
// 'description' alanı mezun yılını içeriyor (ancak component'te gizlenecek).
export const ALUMNI_DATA: TeamMember[] = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Takım Kaptanı & Proje Yöneticisi',
    description: '23-24 Mezunu',
    image: 'https://picsum.photos/seed/ayse/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Burak Kaya',
    role: 'Yazılım Geliştirme Lideri',
    description: '22-23 Mezunu',
    image: 'https://picsum.photos/seed/burak/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Ceren Demir',
    role: 'Mekanik Tasarım Lideri',
    description: '23-24 Mezunu',
    image: 'https://picsum.photos/seed/ceren/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Deniz Arslan',
    role: 'Elektronik Sistemler Sorumlusu',
    description: '22-23 Mezunu',
    image: 'https://picsum.photos/seed/deniz/400/400',
    socials: {
      linkedin: '#',
    },
  },
   {
    name: 'Emre Çelik',
    role: 'Yapay Zeka Uzmanı',
    description: '23-24 Mezunu',
    image: 'https://picsum.photos/seed/emre/400/400',
    socials: {
      linkedin: '#',
    },
  },
   {
    name: 'Fatma Şahin',
    role: 'Gömülü Sistemler Geliştiricisi',
    description: '22-23 Mezunu',
    image: 'https://picsum.photos/seed/fatma/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Gökhan Özkan',
    role: 'Veri Bilimi Uzmanı',
    description: '23-24 Mezunu',
    image: 'https://picsum.photos/seed/gokhan/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Hilal Yıldız',
    role: 'UI/UX Tasarımcısı',
    description: '22-23 Mezunu',
    image: 'https://picsum.photos/seed/hilal/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'İbrahim Korkmaz',
    role: 'Siber Güvenlik Uzmanı',
    description: '23-24 Mezunu',
    image: 'https://picsum.photos/seed/ibrahim/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Jale Aktaş',
    role: 'Proje Koordinatörü',
    description: '22-23 Mezunu',
    image: 'https://picsum.photos/seed/jale/400/400',
    socials: {
      linkedin: '#',
    },
  },
  {
    name: 'Mehmet Can',
    role: 'Takım Kaptanı & Proje Yöneticisi',
    description: '23-24 Mezunu',
    // Not: 'ayse' seed'i kopyalanmıştı, 'mehmetcan' olarak değiştirdim
    image: 'https://picsum.photos/seed/mehmetcan/400/400',
    socials: {
      linkedin: '#',
    },
  },
];

// TAKIMLARIMIZ (PROJELER) - Değişiklik yok
export const TEAMS_DATA: Project[] = [
  {
    title: 'Otonom Araç Takımı',
    description: 'Yapay zeka destekli, tamamen otonom sürüş yeteneklerine sahip elektrikli bir aracın geliştirilmesi.',
    image: 'https://picsum.photos/seed/autonomous-car/800/600',
    tags: ['Yapay Zeka', 'Otonom Sürüş', 'Gömülü Sistemler', 'Robotik'],
  },
  {
    title: 'İHA Takımı',
    description: 'Görüntü işleme ve görev otomasyonu kabiliyetlerine sahip, keşif ve haritalama amaçlı İHA tasarımı.',
    image: 'https://picsum.photos/seed/drone/800/600',
    tags: ['Havacılık', 'Görüntü İşleme', 'Kontrol Sistemleri'],
  },
  {
    title: 'Akıllı Tarım Takımı',
    description: 'Tarımsal verimliliği artırmak için sensörler ve yapay zeka ile donatılmış otonom bir tarım robotu.',
    image: 'https://picsum.photos/seed/agri-robot/800/600',
    tags: ['Robotik', 'IoT', 'Yapay Zeka', 'Sürdürülebilirlik'],
  },
  {
    title: 'Sualtı Keşif Takımı',
    description: 'Derin deniz araştırmaları için tasarlanmış, otonom navigasyon ve veri toplama özelliklerine sahip sualtı dronu.',
    image: 'https://picsum.photos/seed/underwater-drone/800/600',
    tags: ['Robotik', 'Deniz Bilimleri', 'Otonom Sistemler'],
  },
];

// SocialIcons bölümü aynı kalıyor
export const SocialIcons = {
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  twitter: (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
  )
}