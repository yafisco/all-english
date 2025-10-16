import { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock, CheckCircle2 } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  // Validation du mot de passe
  const passwordStrength = {
    hasLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password),
  };

  const isPasswordValid = Object.values(passwordStrength).every(Boolean);

  const submit = (e) => {
    e.preventDefault();
    // Votre logique signup ici
    console.log("Inscription", { name, email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-12">
      {/* Formes décoratives en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Carte principale */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* En-tête avec gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-10 text-center">
            <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Créer un compte
            </h2>
            <p className="text-blue-100">
              Rejoignez-nous en quelques secondes
            </p>
          </div>

          {/* Formulaire */}
          <div className="px-8 py-8 space-y-6">
            {/* Champ Nom */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    focusedField === "name"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-gray-50"
                  } hover:border-gray-300`}
                  placeholder="Entrez votre Nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                  required
                />
              </div>
            </div>

            {/* Champ Email */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  className={`w-full pl-11 pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    focusedField === "email"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-gray-50"
                  } hover:border-gray-300`}
                  placeholder="Entrez votre Adresse email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  required
                />
              </div>
            </div>

            {/* Champ Mot de passe */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full pl-11 pr-12 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none ${
                    focusedField === "password"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-gray-50"
                  } hover:border-gray-300`}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField("")}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Indicateur de force du mot de passe */}
              {password && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        passwordStrength.hasLength
                          ? "text-green-500"
                          : "text-gray-300"
                      }`}
                    />
                    <span
                      className={
                        passwordStrength.hasLength
                          ? "text-green-600"
                          : "text-gray-500"
                      }
                    >
                      Au moins 8 caractères
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        passwordStrength.hasNumber
                          ? "text-green-500"
                          : "text-gray-300"
                      }`}
                    />
                    <span
                      className={
                        passwordStrength.hasNumber
                          ? "text-green-600"
                          : "text-gray-500"
                      }
                    >
                      Un chiffre
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        passwordStrength.hasSpecial
                          ? "text-green-500"
                          : "text-gray-300"
                      }`}
                    />
                    <span
                      className={
                        passwordStrength.hasSpecial
                          ? "text-green-600"
                          : "text-gray-500"
                      }
                    >
                      Un caractère spécial (!@#$%^&*)
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bouton de soumission */}
            <button
              onClick={submit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95"
            >
              Créer mon compte
            </button>

            {/* Lien de connexion */}
            <div className="text-center text-sm text-gray-600">
              Vous avez déjà un compte ?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
              >
                Se connecter
              </a>
            </div>
          </div>

          {/* Pied de page */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              En créant un compte, vous acceptez nos{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Conditions d'utilisation
              </a>{" "}
              et notre{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Politique de confidentialité
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}