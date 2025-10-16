import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Logo from "../components/Logo AEL  ONFP.jpg"; 

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#D8DADE] shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Nom */}
        <Link to="../components" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo All English Lovers"
            className="h-12 w-12 rounded-full object-cover shadow-md"
          />
          <span className="text-2xl font-bold text-blue-800">All English Lovers</span>
        </Link>

        {/* Liens et boutons */}
        <div className="flex items-center gap-3">
          <Link to="/courses" className="hidden md:inline-block text-blue-800 hover:text-blue-600 transition-colors">
            Cours
          </Link>
          <Link to="/About" className="hidden md:inline-block text-blue-800 hover:text-blue-600 transition-colors">
            À propos
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                className="px-4 py-2 bg-white text-blue-800 font-semibold rounded-full shadow hover:bg-blue-100 transition-colors"
              >
                {user.name}
              </Link>
              <button
                className="px-4 py-2 border border-blue-800 text-blue-800 rounded-full hover:bg-blue-800 hover:text-white transition-colors"
                onClick={logout}
              >
                Déconnexion
              </button>
            </>
          ) : (
            <>
              <Link
                to="/auth/signin"
                className="px-4 py-2 text-blue-800 font-semibold rounded-full hover:bg-blue-100 transition-colors"
              >
                Se connecter
              </Link>
              <Link
                to="/auth/signup"
                className="px-4 py-2 bg-blue-800 text-white font-semibold rounded-full shadow hover:bg-blue-900 transition-colors"
              >
                S'inscrire
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
