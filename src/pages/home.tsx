import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Sparkles, Target, Users, Award, ArrowRight, CheckCircle, BookOpen, Headphones, PenTool, Briefcase, Code, Globe } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import img1 from "../pages/LEARN 1.jpeg";
import img2 from "../pages/LEARN 2.jpeg";
import img3 from "../pages/LEARN 3.jpeg";
import anglaisImg from "../pages/ANGLAIS.jpg";
import english from "../pages/English In General.jpeg";
import Speaker from "../pages/anglais info.jpeg";

export default function Home() {
  const images = [img1, img2, img3, img1, img2, img3];
  
  const features = [
    { icon: Target, text: "Méthode interactive et efficace" },
    { icon: Users, text: "Enseignants natifs passionnés" },
    { icon: Award, text: "Certifications reconnues" },
    { icon: Sparkles, text: "Suivi personnalisé" }
  ];

  const programs = [
    {
      title: "ANGLAIS GÉNÉRAL",
      image: english,
      description: "Maîtrisez les bases et développez vos compétences pour communiquer au quotidien",
      icon: Globe,
      level: "Tous niveaux",
      duration: "3-6 mois",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "ANGLAIS BUSINESS",
      image: anglaisImg,
      description: "Perfectionnez votre anglais professionnel pour exceller dans le monde des affaires",
      icon: Briefcase,
      level: "Intermédiaire",
      duration: "4-8 mois",
      gradient: "from-emerald-600 to-emerald-800"
    },
    {
      title: "ANGLAIS INFORMATIQUE",
      image: Speaker,
      description: "Développez le vocabulaire technique pour réussir dans l'univers IT",
      icon: Code,
      level: "Avancé",
      duration: "2-4 mois",
      gradient: "from-purple-600 to-purple-800"
    }
  ];

  const learningStyles = [
    {
      icon: Headphones,
      title: "Parler",
      description: "Améliorez votre prononciation et gagnez en confiance avec nos enseignants passionnés.",
      color: "blue",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      btnColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: PenTool,
      title: "Écrire",
      description: "Maîtrisez la grammaire et l'expression écrite à travers des exercices concrets et utiles.",
      color: "green",
      bgGradient: "from-emerald-50 to-emerald-100",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      btnColor: "bg-emerald-600 hover:bg-emerald-700"
    },
    {
      icon: BookOpen,
      title: "Comprendre",
      description: "Entraînez votre oreille et saisissez l'essence de chaque conversation naturellement.",
      color: "yellow",
      bgGradient: "from-amber-50 to-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      btnColor: "bg-amber-600 hover:bg-amber-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      
      {/* ====== Hero Section avec Slogan ====== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 opacity-95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Plateforme n°1 d'apprentissage de l'anglais</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            SPEAK. PRACTICE.
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              PROGRESS.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 font-medium mb-8 max-w-3xl mx-auto">
            L'anglais dans la joie et la bonne humeur 🌟
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-blue-800 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              Découvrir nos programmes
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Étudiants actifs" },
              { value: "98%", label: "Taux de satisfaction" },
              { value: "15+", label: "Années d'expérience" },
              { value: "24/7", label: "Support disponible" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Slider d'images amélioré ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Découvrez notre environnement d'apprentissage
          </h2>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            className="rounded-xl"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={img}
                    alt={`Aperçu ${idx + 1}`}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ====== Section : POUR TOUS LES STYLES D'APPRENTISSAGES ====== */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Pour tous les styles d'apprentissage
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Des formations adaptées à chaque niveau ! Que vous souhaitiez parler, écrire ou comprendre 
              l'anglais comme un vrai anglophone, nos programmes flexibles vous accompagnent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningStyles.map((style, idx) => {
              const Icon = style.icon;
              return (
                <div key={idx} className={`relative bg-gradient-to-br ${style.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className={`${style.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                    <Icon className={`w-8 h-8 ${style.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-3 relative z-10">
                    {style.title}
                  </h3>
                  
                  <p className="text-slate-700 mb-6 relative z-10 leading-relaxed">
                    {style.description}
                  </p>
                  
                  <button className={`${style.btnColor} text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 relative z-10 group-hover:gap-3`}>
                    Découvrir
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== Section : Pourquoi nous choisir ====== */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Pourquoi choisir notre programme ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Parce qu'apprendre l'anglais ne doit pas être une corvée, mais une aventure passionnante 🌍
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Une pédagogie innovante</h3>
              <ul className="space-y-3">
                {[
                  "Méthode interactive basée sur la pratique",
                  "Contenu adapté à votre rythme",
                  "Activités ludiques et engageantes",
                  "Suivi personnalisé de vos progrès"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Des résultats garantis</h3>
              <ul className="space-y-3">
                {[
                  "Enseignants certifiés et passionnés",
                  "Environnement bienveillant et motivant",
                  "Certification reconnue internationalement",
                  "Support continu après la formation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                  <p className="text-sm font-medium">{feature.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button className="px-10 py-4 bg-yellow-400 text-blue-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50 transform hover:scale-105 inline-flex items-center gap-2">
              Rejoindre le programme
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ====== Section : Nos Programmes ====== */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Nos programmes de formation
            </h2>
            <p className="text-lg text-slate-600">
              Choisissez le programme qui correspond à vos objectifs professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => {
              const Icon = program.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium border border-white/30">
                        {program.level}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white rounded-full p-3">
                        <Icon className={`w-6 h-6 bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                      {program.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {program.duration}
                      </span>
                    </div>
                    
                    <button className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}>
                      En savoir plus
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== CTA Final ====== */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre avenir ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez des centaines d'étudiants qui ont déjà franchi le cap et maîtrisent l'anglais avec confiance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-blue-800 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl transform hover:scale-105 inline-flex items-center justify-center gap-2">
              Inscription gratuite
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Nous contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}