import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Bell, User, Home, BookOpen, Users, BarChart3, Settings, LogOut, Menu, X, ChevronDown } from "lucide-react";

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    // Note: Using in-memory state instead of localStorage
    window.location.href = "/login";
  };

  const notifications = [
    { id: 1, text: "Nouveau cours ajouté", time: "Il y a 5 min" },
    { id: 2, text: "3 nouveaux étudiants inscrits", time: "Il y a 1h" },
    { id: 3, text: "Mise à jour système disponible", time: "Il y a 2h" }
  ];

  const navItems = [
    { to: "dashboard", icon: Home, label: "Dashboard" },
    { to: "courses", icon: BookOpen, label: "Cours" },
    { to: "students", icon: Users, label: "Étudiants" },
    { to: "analytics", icon: BarChart3, label: "Analytiques" },
    { to: "settings", icon: Settings, label: "Paramètres" }
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        } flex flex-col shadow-lg fixed h-full z-30 lg:relative`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {sidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Admin Panel</h2>
                <p className="text-xs text-gray-500">tableau de bord</p>
              </div>
            </div>
          )}
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none transition-colors p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={20} className={isActive ? "text-white" : ""} />
                  {sidebarOpen && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all duration-200 font-medium ${
              !sidebarOpen ? "justify-center" : ""
            }`}
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Déconnexion</span>}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-20">
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                className="text-gray-700 lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu size={24} />
              </button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tableau de bord
                </h1>
                <p className="text-sm text-gray-500">Bienvenue, dans votre page d'administration</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bell size={22} />
                  <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-semibold">
                    3
                  </span>
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <p className="text-sm text-gray-800 font-medium">{notif.text}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Voir tout
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => setShowProfile(!showProfile)}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-semibold text-gray-800">Admin</p>
                    <p className="text-xs text-gray-500">Administrateur</p>
                  </div>
                  <ChevronDown size={16} className="text-gray-500 hidden md:block" />
                </button>

                {showProfile && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                      <p className="font-semibold text-gray-800">Admin</p>
                      <p className="text-xs text-gray-500">admin@example.com</p>
                    </div>
                    <div className="p-2">
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        Mon profil
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        Paramètres
                      </button>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors mt-2"
                      >
                        Déconnexion
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;