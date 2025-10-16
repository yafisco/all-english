import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../pages/LEARN 1.jpeg";
import img2 from "../pages/LEARN 2.jpeg";
import img3 from "../pages/LEARN 3.jpeg";
import anglaisImg from "../pages/ANGLAIS.jpg";
import english from "../pages/English In General.jpeg";
import  Speaker from "../pages/anglais info.jpeg";

export default function Home() {
  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <div className="min-h-screen px-4 py-10" style={{ backgroundColor: "#D8DADE" }}>
      
      {/* ====== Slogan ====== */}
      <section className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2 tracking-wide">
          SPEAK. PRACTICE. PROGRESS.
        </h1>
        <p className="text-xl text-gray-700 font-medium">
          L’ANGLAIS DANS LA JOIE ET LA BONNE HUMEUR 🌟
        </p>
      </section>

      {/* ====== Slider d'images continu ====== */}
      <section className="mb-16">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2.5}
          spaceBetween={20}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          className="rounded-lg"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className="rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ====== Section : POUR TOUS LES STYLES D’APPRENTISSAGES ====== */}
      <section className="mt-12 px-4 py-8 bg-neutral-400 rounded-lg shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
          POUR TOUS LES STYLES D’APPRENTISSAGES
        </h2>
        <p className="text-gray-700 text-center mb-10 text-lg max-w-3xl mx-auto">
          Des formations adaptées à chaque niveau ! Que vous souhaitiez parler, écrire ou comprendre 
          l’anglais comme un vrai anglophone, nos programmes flexibles vous accompagnent depuis le confort de votre maison.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
          {/* Bloc Parler */}
          <div className="p-6 bg-blue-50 rounded-lg flex-1 text-center shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl text-blue-800 mb-2">🗣️ Parler</h3>
            <p className="text-gray-700 mb-4">
              Améliorez votre prononciation et gagnez en confiance avec nos enseignants passionnés.
            </p>
            <button className="px-5 py-2 bg-blue-800 text-white rounded-full font-medium hover:bg-blue-700 transition">
              Découvrir
            </button>
          </div>

          {/* Bloc Écrire */}
          <div className="p-6 bg-green-50 rounded-lg flex-1 text-center shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl text-blue-800 mb-2">✍️ Écrire</h3>
            <p className="text-gray-700 mb-4">
              Maîtrisez la grammaire et l’expression écrite à travers des exercices concrets et utiles.
            </p>
            <button className="px-5 py-2 bg-green-700 text-white rounded-full font-medium hover:bg-green-600 transition">
              Découvrir
            </button>
          </div>

          {/* Bloc Comprendre */}
          <div className="p-6 bg-yellow-50 rounded-lg flex-1 text-center shadow-md hover:shadow-lg transition">
            <h3 className="font-semibold text-xl text-blue-800 mb-2">🎧 Comprendre</h3>
            <p className="text-gray-700 mb-4">
              Entraînez votre oreille et saisissez l’essence de chaque conversation naturellement.
            </p>
            <button className="px-5 py-2 bg-yellow-600 text-white rounded-full font-medium hover:bg-yellow-500 transition">
              Découvrir
            </button>
          </div>
        </div>
      </section>

      {/* ====== Section : Pourquoi choisir notre programme ====== */}
      <section className="mt-16 px-6 py-12 bg-blue-50 rounded-2xl shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
          Pourquoi choisir notre programme ?
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Parce qu’apprendre l’anglais ne doit pas être une corvée, mais une aventure passionnante 🌍.  
          Nos programmes sont conçus pour <span className="font-semibold text-blue-800">tous les styles d’apprenants</span> — 
          débutants, intermédiaires ou avancés.  
          Grâce à une pédagogie dynamique, des activités interactives et un suivi personnalisé, 
          vous apprendrez à <span className="font-semibold">parler, comprendre et penser en anglais </span> 
            avec plaisir et confiance.
        </p>
        <p className="text-center max-w-3xl mx-auto text-gray-700 text-lg mt-4 leading-relaxed">
          Nos enseignants passionnés vous guident pas à pas dans un environnement bienveillant et motivant.  
          Découvrez une nouvelle façon d’apprendre : <span className="italic">efficace, ludique et inspirante</span>.
        </p>
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Rejoindre le programme
          </button>
        </div>
      </section>

      {/* ====== Section : Cours populaires ====== */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
           NOS PROGRAMMES DE FORMATIONS 
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div>
                <img
          src={english}
          alt="Apprenant"
          className="w-64 h-48 object-cover rounded-lg my-6 mx-auto shadow-md"
        />
          <div className="p-6 bg-blue-800 text-white text-center rounded-lg shadow hover:shadow-xl transition">
            
            ANGLAIS GÉNÉRAL
          </div>
          </div>
          <div>
            <img
          src={anglaisImg}
          alt="Lover"
          className="w-64 h-48 object-cover rounded-lg my-6 mx-auto shadow-md"
        />
          <div className="p-6 bg-blue-800 text-white text-center rounded-lg shadow hover:shadow-xl transition">
            ANGLAIS BUSINESS
            <div>
         </div>
         </div>
          </div>
          <div>
             <img
          src={Speaker}
          alt="Lover"
          className="w-64 h-48 object-cover rounded-lg my-6 mx-auto shadow-md"
        />
          <div className="p-6 bg-blue-800 text-white text-center rounded-lg shadow hover:shadow-xl transition">
            ANGLAIS INFORMATIQUE
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
