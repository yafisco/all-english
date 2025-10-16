import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, Twitter, Send } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Accueil" },
    { href: "/courses", label: "Nos cours" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/allenglishlovers", 
      label: "Facebook",
      color: "hover:text-blue-400"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/allenglishlovers", 
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/allenglishlovers", 
      label: "Twitter",
      color: "hover:text-sky-400"
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/allenglishlovers", 
      label: "LinkedIn",
      color: "hover:text-blue-300"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/@allenglishlovers", 
      label: "YouTube",
      color: "hover:text-red-500"
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Colonne 1 - Présentation */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              All English Lovers
            </h2>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              Votre plateforme d'e-learning pour maîtriser l'anglais avec des cours interactifs et une communauté passionnée.
            </p>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <span className="text-xl">🌟</span>
              <span>Excellence · Innovation · Passion</span>
            </div>
          </div>

          

          {/* Colonne 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded"></span>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@allenglishlovers.com" className="text-sm">
                  contact@allenglishlovers.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-blue-100 hover:text-white transition-colors">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p>+221 77 161 52 69</p>
                  <p>+221 77 796 45 13</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-blue-100">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">Région de Thiès, Sénégal</span>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Newsletter & Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-400 rounded"></span>
              Restez connecté
            </h3>
            <p className="text-sm text-blue-100 mb-4">
              Suivez-nous sur les réseaux sociaux pour ne rien manquer !
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm ${social.color} transition-all duration-200 transform hover:scale-110 hover:bg-opacity-20`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-blue-100 mb-2">Newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-blue-200 border border-blue-400 border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
                <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-blue-700 border-opacity-50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200 text-center md:text-left">
              © {currentYear} All English Lovers. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-blue-200">
              <a href="/privacy" className="hover:text-white transition-colors">
                Confidentialité
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Conditions
              </a>
              <a href="/cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}