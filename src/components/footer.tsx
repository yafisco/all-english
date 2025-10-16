export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Colonne 1 — Présentation */}
        <div>
          <h2 className="text-2xl font-bold mb-3">All English Lovers</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Plateforme d’e-learning dédiée à l’apprentissage de l’anglais à travers
            des cours interactifs, des ressources pédagogiques et une communauté
            passionnée. 🚀
          </p>
        </div>

        {/* Colonne 2 — Liens rapides */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Liens utiles</h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="/" className="hover:underline">Accueil</a></li>
            <li><a href="/courses" className="hover:underline">Cours</a></li>
            <li><a href="/auth/signin" className="hover:underline">Connexion</a></li>
            <li><a href="/auth/signup" className="hover:underline">Inscription</a></li>
            <li><a href="/profile" className="hover:underline">Mon profil</a></li>
          </ul>
        </div>

        {/* Colonne 3 — Réseaux sociaux */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Nous suivre</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <i className="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors"
            >
              <i className="fa-brands fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} All English Lovers. Tous droits réservés.
      </div> 
    </footer>
  );
}
