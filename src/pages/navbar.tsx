import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Menu, X, User, LogOut, BookOpen, Home, Info, Mail } from "lucide-react";
import Logo from "../components/Logo_AEL_ONFP.jpg";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { to: "/", label: "Accueil", icon: Home },
    { to: "/courses", label: "Cours", icon: BookOpen },
    { to: "/about", label: "À propos", icon: Info },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="bg-white/20 shadow-lg sticky top-0 z-50 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo et Nom */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform hover:scale-105 hover:rotate-3"
          >
            <div className="relative">
              <img
                src={Logo}
                alt="Logo All English Lovers"
                className="h-12 w-12 rounded-full object-cover shadow-md ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              All English Lovers
            </span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-transform duration-200 transform hover:scale-105 font-medium"
              >
                <link.icon size={18} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg animate-gradient-x transition-all duration-500"
                >
                  <User size={18} />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium"
                >
                  <LogOut size={18} />
                  <span>Déconnexion</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/signin"
                  className="px-5 py-2 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
                >
                  Se connecter
                </Link>
                <Link
                  to="/auth/signup"
                  className="px-5 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg animate-gradient-x transition-all duration-500"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-transform duration-200 transform hover:scale-105 font-medium"
              >
                <link.icon size={20} />
                <span>{link.label}</span>
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-200 space-y-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md animate-gradient-x"
                  >
                    <User size={20} />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all duration-200 font-medium"
                  >
                    <LogOut size={20} />
                    <span>Déconnexion</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/auth/signin"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-center text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/auth/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md animate-gradient-x"
                  >
                    S'inscrire
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
