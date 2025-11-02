import React from 'react';
// DEĞİŞİKLİK: 'PROJECTS_DATA' yerine 'TEAMS_DATA' import edildi
import { TEAMS_DATA } from '../constants';
// Tip adı 'Project' olarak kalabilir, çünkü veri yapısı aynı
import type { Project } from '../types';

// DEĞİŞİKLİK: Component adını daha anlamlı olması için 'TeamCard' yaptık
// ve 'project' prop'u yerine 'team' kullandık
const TeamCard: React.FC<{ team: Project }> = ({ team }) => {
  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-yoda-accent/30">
      <img src={team.image} alt={team.title} className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-yoda-light mb-2">{team.title}</h3>
        <p className="text-yoda-light/70 mb-4 text-sm">{team.description}</p>
        <div className="flex flex-wrap gap-2">
          {team.tags.map((tag) => (
            <span key={tag} className="bg-yoda-accent/20 text-yoda-accent text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// DEĞİŞİKLİK: Component adını 'Projects' yerine 'Teams' yaptık
const Teams: React.FC = () => {
  return (
    // DEĞİŞİKLİK: 'id' güncellendi -> '#takimlar' (NAV_LINKS ile eşleşmesi için)
    <section id="takimlar" className="py-20 bg-[#000000]">
      <div className="container mx-auto px-8 pr-10">
        <div className="text-center mb-12">
          {/* DEĞİŞİKLİK: Başlık güncellendi -> 'Takımlarımız' */}
          <h2 className="text-4xl font-bold text-yoda-light uppercase tracking-wider">Takımlarımız</h2>
          <div className="w-24 h-1 bg-yoda-accent mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* DEĞİŞİKLİK: 'PROJECTS_DATA' yerine 'TEAMS_DATA' map ediliyor */}
          {/* ve 'project' yerine 'team' değişkeni kullanıldı */}
          {TEAMS_DATA.map((team, index) => (
            // DEĞİŞİKLİK: 'ProjectCard' yerine 'TeamCard' kullanıldı
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

// DEĞİŞİKLİK: 'Projects' yerine 'Teams' export edildi
export default Teams;