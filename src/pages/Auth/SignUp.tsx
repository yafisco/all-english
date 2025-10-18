import { useState } from "react";
import { Eye, EyeOff, Mail, User, Lock, CheckCircle2 } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const passwordStrength = {
    hasLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password),
  };

  const isPasswordValid = Object.values(passwordStrength).every(Boolean);

  const submit = (e) => {
    e.preventDefault();
    console.log("Inscription", { name, email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Formes décoratives */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "1s" }}></div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* En-tête compact */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-5 text-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl mx-auto mb-2 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-0.5">
              Créer un compte
            </h2>
            <p className="text-blue-100 text-sm">
              Rejoignez-nous en quelques instants
            </p>
          </div>

          {/* Formulaire compact */}
          <div className="px-6 py-5 space-y-4">
            {/* Nom */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Nom complet
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg transition-all text-sm focus:outline-none ${
                    focusedField === "name"
                      ? "border-blue-500 bg-white shadow-md shadow-blue-100"
                      : "border-gray-200 bg-gray-50"
                  } hover:border-gray-300`}
                  placeholder="Entrez votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg transition-all text-sm focus:outline-none ${
                    focusedField === "email"
                      ? "border-blue-500 bg-white shadow-md shadow-blue-100"
                      : "border-gray-200 bg-gray-50"
                  } hover:border-gray-300`}
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  className={`w-full pl-10 pr-11 py-2.5 border-2 rounded-lg transition-all text-sm focus:outline-none ${
                    focusedField === "password"
                      ? "border-blue-500 bg-white shadow-md shadow-blue-100"
                      : "border-gray-200 bg-gray-50"
                  } hover:border-gray-300`}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField("")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Indicateur compact */}
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        passwordStrength.hasLength ? "text-green-500" : "text-gray-300"
                      }`}
                    />
                    <span className={passwordStrength.hasLength ? "text-green-600" : "text-gray-500"}>
                      8+ caractères
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        passwordStrength.hasNumber ? "text-green-500" : "text-gray-300"
                      }`}
                    />
                    <span className={passwordStrength.hasNumber ? "text-green-600" : "text-gray-500"}>
                      Un chiffre
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <CheckCircle2
                      className={`w-3.5 h-3.5 ${
                        passwordStrength.hasSpecial ? "text-green-500" : "text-gray-300"
                      }`}
                    />
                    <span className={passwordStrength.hasSpecial ? "text-green-600" : "text-gray-500"}>
                      Un caractère spécial
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Bouton */}
            <button
              onClick={submit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 active:scale-95"
            >
              Créer mon compte
            </button>

            {/* Lien connexion */}
            <div className="text-center text-xs text-gray-600 pt-1">
              Vous avez déjà un compte ?{" "}
              <a
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
              >
                Se connecter
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              En créant un compte, vous acceptez nos{" "}
              <a href="#" className="text-blue-600 hover:underline">
                CGU
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