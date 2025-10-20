import { useState } from "react";
import { Target, Eye, Heart, Users, BookOpen, Globe, Award, Sparkles, Mail, Linkedin, Twitter } from "lucide-react";

export default function apropos() {
  const [activeFounder, setActiveFounder] = useState(null);

  const missions = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Enseignement de Qualité",
      description: "Offrir des cours d'anglais de haute qualité adaptés à tous les niveaux et tous les âges"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Ouverture au Monde",
      description: "Connecter nos apprenants à la culture anglophone et aux opportunités internationales"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Communauté Active",
      description: "Créer un environnement d'apprentissage collaboratif et bienveillant"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence Pédagogique",
      description: "Utiliser les méthodes d'enseignement les plus modernes et efficaces"
    }
  ];

  const founders = [
    {
      name: "IBRAHIMA TONTON YAFA",
      role: "Co-fondatrice & Directrice Pédagogique",
      bio: "15 ans d'expérience dans l'enseignement de l'anglais. Diplômée de Cambridge, passionnée par l'innovation pédagogique.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      email: "sarah@allenglishlovers.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "PAPE ALE NGACK SAMB",
      role: "Co-fondateur & Directeur des Opérations",
      bio: "Expert en technologie éducative avec une vision pour rendre l'apprentissage de l'anglais accessible à tous.",
      image: "./public/al.png",
      email: "michael@allenglishlovers.com",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "KHALY NIANG",
      role: "Co-fondatrice & Responsable Communication",
      bio: "Spécialiste en communication interculturelle, elle crée des ponts entre les cultures anglophones et francophones.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      email: "emma@allenglishlovers.com",
      linkedin: "#",
      twitter: "#"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Étudiants Formés" },
    { number: "95%", label: "Taux de Satisfaction" },
    { number: "50+", label: "Professeurs Certifiés" },
    { number: "8", label: "Ans d'Expérience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-block mb-6">
            <Sparkles className="w-16 h-16 mx-auto animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            All English Lovers
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Votre partenaire de confiance pour maîtriser l'anglais et ouvrir les portes du monde
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision & Ambition Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Devenir la référence en Afrique de l'Ouest pour l'apprentissage de l'anglais, 
              en combinant excellence pédagogique et technologies innovantes. Nous aspirons 
              à créer une communauté de passionnés qui maîtrisent l'anglais et s'ouvrent 
              aux opportunités internationales.
            </p>
          </div>

          {/* Ambitions */}
          <div className="bg-white rounded-3xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Ambitions</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Former 50,000 apprenants d'ici 2028, développer une plateforme d'apprentissage 
              en ligne révolutionnaire, et établir des partenariats avec les meilleures 
              institutions internationales. Nous voulons rendre l'anglais accessible à tous, 
              partout et à tout moment.
            </p>
          </div>
        </div>
      </div>

      {/* Missions Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nos Missions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ce qui nous anime au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {mission.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Heart className="w-12 h-12 text-pink-500 mx-auto animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nos Fondateurs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            L'équipe passionnée derrière All English Lovers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
              onMouseEnter={() => setActiveFounder(index)}
              onMouseLeave={() => setActiveFounder(null)}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-blue-200 text-sm">{founder.role}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {founder.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <a 
                    href={`mailto:${founder.email}`}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href={founder.linkedin}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={founder.twitter}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer votre aventure en anglais ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers d'apprenants qui ont transformé leur vie grâce à All English Lovers
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Commencer Maintenant
          </button>
        </div>
      </div>
    </div>
  );
}