import React, { useState, useEffect } from "react";
import { Search, Plus, Edit2, Trash2, BookOpen, Clock, BarChart3, X } from "lucide-react";

type Course = {
  id: number;
  title: string;
  description: string;
  category: "Anglais Général" | "Anglais Business" | "Anglais Informatique";
  level: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
};

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Course["category"]>("Anglais Général");
  const [level, setLevel] = useState<Course["level"]>("Débutant");
  const [duration, setDuration] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    // Simulation de données initiales
    const initialCourses: Course[] = [
      { id: 1, title: "Communication Professionnelle", description: "Maîtrisez l'anglais des affaires et la correspondance professionnelle", category: "Anglais Business", level: "Intermédiaire", duration: "6 heures" },
      { id: 2, title: "Conversation Quotidienne", description: "Apprenez l'anglais pour les situations de tous les jours", category: "Anglais Général", level: "Débutant", duration: "4 heures" },
      { id: 3, title: "Programmation et Développement", description: "Vocabulaire technique pour les développeurs et IT", category: "Anglais Informatique", level: "Avancé", duration: "8 heures" }
    ];
    setCourses(initialCourses);
  }, []);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddOrEdit = () => {
    if (!title || !description || !duration) {
      showNotification('error', 'Veuillez remplir tous les champs !');
      return;
    }

    if (editingId !== null) {
      const updated = courses.map(c =>
        c.id === editingId ? { ...c, title, description, category, level, duration } : c
      );
      setCourses(updated);
      showNotification('success', 'Le cours a été mis à jour avec succès');
      setEditingId(null);
    } else {
      const newCourse: Course = { id: Date.now(), title, description, category, level, duration };
      setCourses([...courses, newCourse]);
      showNotification('success', 'Le cours a été ajouté avec succès');
    }

    resetForm();
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setCourses(courses.filter(c => c.id !== id));
    showNotification('success', 'Le cours a été supprimé');
    setDeleteConfirm(null);
  };

  const handleEdit = (course: Course) => {
    setEditingId(course.id);
    setTitle(course.title);
    setDescription(course.description);
    setCategory(course.category);
    setLevel(course.level);
    setDuration(course.duration);
    setShowForm(true);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setCategory("Anglais Général");
    setLevel("Débutant");
    setDuration("");
    setEditingId(null);
  };

  const filteredCourses = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase()) ||
    c.level.toLowerCase().includes(search.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Anglais Général": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Anglais Business": return "bg-amber-100 text-amber-700 border-amber-200";
      case "Anglais Informatique": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Anglais Général": return "🌍";
      case "Anglais Business": return "💼";
      case "Anglais Informatique": return "💻";
      default: return "📚";
    }
  };

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Débutant": return "bg-green-100 text-green-700 border-green-200";
      case "Intermédiaire": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Avancé": return "bg-purple-100 text-purple-700 border-purple-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getLevelIcon = (level: string) => {
    switch(level) {
      case "Débutant": return "🌱";
      case "Intermédiaire": return "🚀";
      case "Avancé": return "⭐";
      default: return "📚";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-4 rounded-xl shadow-2xl border transform transition-all duration-300 ${
          notification.type === 'success' 
            ? 'bg-green-50 border-green-200 text-green-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{notification.type === 'success' ? '✓' : '✕'}</span>
            <span className="font-medium">{notification.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <BookOpen className="text-blue-600" size={36} />
              Gestion des Cours
            </h1>
            <p className="text-gray-500 mt-2">Gérez et organisez vos cours en ligne</p>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); resetForm(); }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 font-semibold"
          >
            <Plus size={20} />
            Nouveau cours
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium mb-1">Total des cours</p>
                <p className="text-3xl font-bold text-blue-700">{courses.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-xl border border-sky-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-sky-600 font-medium mb-1">Anglais Général</p>
                <p className="text-3xl font-bold text-sky-700">{courses.filter(c => c.category === "Anglais Général").length}</p>
              </div>
              <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-amber-600 font-medium mb-1">Anglais Business</p>
                <p className="text-3xl font-bold text-amber-700">{courses.filter(c => c.category === "Anglais Business").length}</p>
              </div>
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-emerald-600 font-medium mb-1">Anglais IT</p>
                <p className="text-3xl font-bold text-emerald-700">{courses.filter(c => c.category === "Anglais Informatique").length}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-2xl font-bold">
                {editingId ? "Modifier le cours" : "Ajouter un nouveau cours"}
              </h3>
              <button
                onClick={() => { setShowForm(false); resetForm(); }}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Titre du cours
                </label>
                <input
                  type="text"
                  placeholder="Ex: Communication Professionnelle"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Décrivez le contenu du cours..."
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={category}
                  onChange={e => setCategory(e.target.value as Course["category"])}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option>Anglais Général</option>
                  <option>Anglais Business</option>
                  <option>Anglais Informatique</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Niveau
                  </label>
                  <select
                    value={level}
                    onChange={e => setLevel(e.target.value as Course["level"])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option>Débutant</option>
                    <option>Intermédiaire</option>
                    <option>Avancé</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Durée
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 4 heures"
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddOrEdit}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
                >
                  {editingId ? "Enregistrer les modifications" : "Ajouter le cours"}
                </button>
                <button
                  onClick={() => { setShowForm(false); resetForm(); }}
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher par titre ou niveau..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2"></div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getCategoryColor(course.category)} flex items-center gap-1`}>
                  <span>{getCategoryIcon(course.category)}</span>
                  {course.category}
                </div>
              </div>

              <div className="mb-3">
                <div className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getLevelColor(course.level)}`}>
                  {getLevelIcon(course.level)} {course.level}
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                {course.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[40px]">
                {course.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(course)}
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    title="Modifier"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(course.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Trash2 className="text-red-600" size={32} />
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
              Supprimer le cours ?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Êtes-vous sûr de vouloir supprimer ce cours ? Cette action est irréversible.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
              >
                Annuler
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all duration-200"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
          <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Aucun cours trouvé
          </h3>
          <p className="text-gray-500 mb-6">
            {search ? "Essayez avec d'autres mots-clés" : "Commencez par ajouter votre premier cours"}
          </p>
          {!search && (
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
            >
              Ajouter un cours
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Courses;