import  { useState } from "react";
import {
  Monitor,
  Briefcase,
  Globe,
  Clock,
  Users,
  Award,
  ChevronRight,
  Star,
  BookOpen,
  Video,
  CheckCircle,
} from "lucide-react";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const courses = [
    {
      id: 1,
      category: "informatique",
      title: "Anglais Informatique & Tech",
      description:
        "Maîtrisez le vocabulaire technique et communiquez efficacement dans l'univers IT",
      level: "Tous niveaux",
      duration: "12 semaines",
      students: 20,
      rating: 4.9,
      lessons: 48,
      price: "30 000 FCFA",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Vocabulaire technique",
        "Communication projet",
        "Documentation",
        "Présentations tech",
      ],
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      category: "general",
      title: "Anglais Général",
      description:
        "Développez vos compétences en anglais pour la vie quotidienne et les voyages",
      level: "Débutant à Avancé",
      duration: "16 semaines",
      students: 25,
      rating: 4.8,
      lessons: 64,
      price: "25 000 FCFA",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      features: [
        "Conversation courante",
        "Grammaire essentielle",
        "Vocabulaire quotidien",
        "Prononciation",
      ],
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      category: "business",
      title: "Anglais Business",
      description:
        "Excellez dans vos communications professionnelles et négociations d'affaires",
      level: "Intermédiaire à Avancé",
      duration: "10 semaines",
      students: 634,
      rating: 4.9,
      lessons: 40,
      price: "35 000 FCFA",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      features: [
        "Emails professionnels",
        "Réunions & présentations",
        "Négociation",
        "Networking",
      ],
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      category: "informatique",
      title: "Anglais DevOps & Cloud",
      description:
        "Communiquez efficacement sur les infrastructures cloud et DevOps",
      level: "Intermédiaire",
      duration: "8 semaines",
      students: 267,
      rating: 4.7,
      lessons: 32,
      price: "35 000 FCFA",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Terminologie cloud",
        "CI/CD workflows",
        "Documentation technique",
        "Support client",
      ],
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      category: "business",
      title: "Anglais Marketing & Sales",
      description:
        "Boostez vos compétences en marketing et vente en anglais",
      level: "Intermédiaire",
      duration: "12 semaines",
      students: 521,
      rating: 4.8,
      lessons: 48,
      price: "40 000 FCFA",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      features: [
        "Pitch commercial",
        "Content marketing",
        "Social media",
        "Storytelling",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      category: "general",
      title: "Anglais Conversationnel",
      description:
        "Pratiquez l'anglais oral avec des conversations réelles et engageantes",
      level: "Tous niveaux",
      duration: "8 semaines",
      students: 745,
      rating: 4.9,
      lessons: 32,
      price: "30 000 FCFA",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      features: [
        "Sessions live",
        "Groupes de discussion",
        "Sujets variés",
        "Feedback personnalisé",
      ],
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    },
  ];

  const categories = [
    { id: "all", label: "Tous les cours", icon: BookOpen },
    { id: "informatique", label: "Anglais Informatique", icon: Monitor },
    { id: "general", label: "Anglais Général", icon: Globe },
    { id: "business", label: "Anglais Business", icon: Briefcase },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">ALL ENGLISH LOVERS</h1>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Découvrez nos cours d'anglais adaptés à vos ambitions
            professionnelles et personnelles.
          </p>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2" />
              <div className="text-3xl font-bold">100+</div>
              <div className="text-white/80">Étudiants</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-2" />
              <div className="text-3xl font-bold">90%</div>
              <div className="text-white/80">Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-8 h-8 mb-2" />
              <div className="text-3xl font-bold">4.5/5</div>
              <div className="text-white/80">Note moyenne</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => {
          const Icon = course.icon;
          return (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-60`}
                ></div>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-sm">{course.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div
                    className={`bg-gradient-to-r ${course.color} p-3 rounded-xl shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Video className="w-4 h-4" />
                    <span>{course.lessons} leçons</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{course.students} étudiants</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500">À partir de</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {course.price}
                    </div>
                  </div>
                  <button
                    className={`bg-gradient-to-r ${course.color} text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    S'inscrire
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-center py-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Prêt à commencer votre parcours d'apprentissage ?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Rejoignez des milliers d'apprenants qui ont transformé leur carrière
          avec ALL ENGLISH LOVERS
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Essai Gratuit 7 Jours
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
            Nous Contacter
          </button>
        </div>
      </div>
    </div>
  );
}
