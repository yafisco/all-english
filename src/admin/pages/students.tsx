import React, { useState, useEffect } from "react";
import { Search, Users, Mail, TrendingUp, Award, Filter, Plus, Edit2, Trash2, X, Phone, Calendar } from "lucide-react";

type Student = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  progress: number;
  category: "Anglais Général" | "Anglais Business" | "Anglais Informatique";
  enrollmentDate?: string;
  status: "Actif" | "Inactif" | "En pause";
};

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("Tous");
  const [filterStatus, setFilterStatus] = useState<string>("Tous");
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<Student["category"]>("Anglais Général");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<Student["status"]>("Actif");

  useEffect(() => {
    // Données de démonstration
    const demoStudents: Student[] = [
      { id: 1, name: "Alice Martin", email: "alice.martin@email.com", phone: "+221 77 123 4567", progress: 85, category: "Anglais Business", enrollmentDate: "2024-01-15", status: "Actif" },
      { id: 2, name: "Bob Diop", email: "bob.diop@email.com", phone: "+221 76 234 5678", progress: 72, category: "Anglais Général", enrollmentDate: "2024-02-20", status: "Actif" },
      { id: 3, name: "Fatou Sall", email: "fatou.sall@email.com", phone: "+221 78 345 6789", progress: 95, category: "Anglais Informatique", enrollmentDate: "2024-01-10", status: "Actif" },
      { id: 4, name: "Omar Ndiaye", email: "omar.ndiaye@email.com", phone: "+221 77 456 7890", progress: 68, category: "Anglais Business", enrollmentDate: "2024-03-05", status: "En pause" },
      { id: 5, name: "Marie Fall", email: "marie.fall@email.com", phone: "+221 76 567 8901", progress: 88, category: "Anglais Général", enrollmentDate: "2024-02-01", status: "Actif" },
      { id: 6, name: "Moussa Kane", email: "moussa.kane@email.com", phone: "+221 78 678 9012", progress: 76, category: "Anglais Informatique", enrollmentDate: "2024-03-15", status: "Actif" }
    ];
    setStudents(demoStudents);
  }, []);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddOrEdit = () => {
    if (!name || !email) {
      showNotification('error', 'Veuillez remplir les champs obligatoires !');
      return;
    }

    if (editingId !== null) {
      const updated = students.map(s =>
        s.id === editingId ? { ...s, name, email, phone, category, progress, status } : s
      );
      setStudents(updated);
      showNotification('success', 'Étudiant mis à jour avec succès');
      setEditingId(null);
    } else {
      const newStudent: Student = {
        id: Date.now(),
        name,
        email,
        phone,
        category,
        progress,
        status,
        enrollmentDate: new Date().toISOString().split('T')[0]
      };
      setStudents([...students, newStudent]);
      showNotification('success', 'Étudiant ajouté avec succès');
    }

    resetForm();
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    setStudents(students.filter(s => s.id !== id));
    showNotification('success', 'Étudiant supprimé');
    setDeleteConfirm(null);
  };

  const handleEdit = (student: Student) => {
    setEditingId(student.id);
    setName(student.name);
    setEmail(student.email);
    setPhone(student.phone || "");
    setCategory(student.category);
    setProgress(student.progress);
    setStatus(student.status);
    setShowForm(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCategory("Anglais Général");
    setProgress(0);
    setStatus("Actif");
    setEditingId(null);
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
                         s.email.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = filterCategory === "Tous" || s.category === filterCategory;
    const matchesStatus = filterStatus === "Tous" || s.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Actif": return "bg-green-100 text-green-700 border-green-200";
      case "Inactif": return "bg-gray-100 text-gray-700 border-gray-200";
      case "En pause": return "bg-yellow-100 text-yellow-700 border-yellow-200";
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

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === "Actif").length;
  const averageProgress = students.length > 0
    ? Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)
    : 0;
  const topPerformers = students.filter(s => s.progress >= 80).length;

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
              <Users className="text-blue-600" size={36} />
              Gestion des Étudiants
            </h1>
            <p className="text-gray-500 mt-2">Suivez et gérez vos étudiants</p>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); resetForm(); }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 font-semibold"
          >
            <Plus size={20} />
            Nouvel étudiant
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600 font-medium mb-1">Total</p>
                <p className="text-3xl font-bold text-blue-700">{totalStudents}</p>
              </div>
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600 font-medium mb-1">Actifs</p>
                <p className="text-3xl font-bold text-green-700">{activeStudents}</p>
              </div>
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600 font-medium mb-1">Progression</p>
                <p className="text-3xl font-bold text-purple-700">{averageProgress}%</p>
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-amber-600 font-medium mb-1">Excellents</p>
                <p className="text-3xl font-bold text-amber-700">{topPerformers}</p>
              </div>
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center">
                <Award className="text-white" size={24} />
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
                {editingId ? "Modifier l'étudiant" : "Ajouter un nouvel étudiant"}
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
                  Nom complet *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Alice Martin"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="+221 77 123 4567"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value as Student["category"])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option>Anglais Général</option>
                    <option>Anglais Business</option>
                    <option>Anglais Informatique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Statut
                  </label>
                  <select
                    value={status}
                    onChange={e => setStatus(e.target.value as Student["status"])}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option>Actif</option>
                    <option>En pause</option>
                    <option>Inactif</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Progression (%)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={e => setProgress(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddOrEdit}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
                >
                  {editingId ? "Enregistrer les modifications" : "Ajouter l'étudiant"}
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

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Rechercher par nom ou email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-500" />
            <select
              value={filterCategory}
              onChange={e => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            >
              <option>Tous</option>
              <option>Anglais Général</option>
              <option>Anglais Business</option>
              <option>Anglais Informatique</option>
            </select>
          </div>

          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option>Tous</option>
            <option>Actif</option>
            <option>En pause</option>
            <option>Inactif</option>
          </select>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-700">Étudiant</th>
                <th className="text-left p-4 font-semibold text-gray-700">Contact</th>
                <th className="text-left p-4 font-semibold text-gray-700">Catégorie</th>
                <th className="text-left p-4 font-semibold text-gray-700">Progression</th>
                <th className="text-left p-4 font-semibold text-gray-700">Statut</th>
                <th className="text-left p-4 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(student => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        {student.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{student.name}</p>
                        {student.enrollmentDate && (
                          <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar size={12} />
                            Inscrit le {new Date(student.enrollmentDate).toLocaleDateString('fr-FR')}
                          </p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-700 flex items-center gap-2">
                        <Mail size={14} className="text-gray-400" />
                        {student.email}
                      </p>
                      {student.phone && (
                        <p className="text-sm text-gray-700 flex items-center gap-2">
                          <Phone size={14} className="text-gray-400" />
                          {student.phone}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm">
                      {getCategoryIcon(student.category)} {student.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${getProgressColor(student.progress)}`}
                          style={{ width: `${student.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 w-12">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getStatusColor(student.status)}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(student)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Modifier"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(student.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-16">
            <Users size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Aucun étudiant trouvé
            </h3>
            <p className="text-gray-500 mb-6">
              {search || filterCategory !== "Tous" || filterStatus !== "Tous"
                ? "Essayez avec d'autres filtres"
                : "Commencez par ajouter votre premier étudiant"}
            </p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
              <Trash2 className="text-red-600" size={32} />
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
              Supprimer l'étudiant ?
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Êtes-vous sûr de vouloir supprimer cet étudiant ? Cette action est irréversible.
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
    </div>
  );
};

export default Students;