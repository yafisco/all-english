import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

type Category = {
  id: number;
  name: string;
  description?: string;
  image?: string;
};

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les catégories depuis l'API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement des catégories :", error);
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: "Impossible de charger les catégories 😞",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Chargement des catégories...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Catégories de cours
      </h1>

      {categories.length === 0 ? (
        <p className="text-center text-gray-500">
          Aucune catégorie disponible pour le moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 italic">
                  Pas d’image
                </div>
              )}

              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {cat.name}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  {cat.description || "Aucune description disponible."}
                </p>

                <Link
                  to={`/courses?category=${cat.id}`}
                  className="btn btn-primary w-full"
                >
                  Voir les cours
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
