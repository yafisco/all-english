import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Bell, User } from "lucide-react";

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {sidebarOpen && <h2 className="text-xl font-bold">Admin Panel</h2>}
          <button
            className="text-white focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "«" : "»"}
          </button>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-2">
          <NavLink
            to="dashboard"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 p-2 rounded flex items-center gap-2"
                : "p-2 rounded flex items-center gap-2 hover:bg-gray-700"
            }
          >
            <span>🏠</span>
            {sidebarOpen && <span>Dashboard</span>}
          </NavLink>
          <NavLink
            to="courses"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 p-2 rounded flex items-center gap-2"
                : "p-2 rounded flex items-center gap-2 hover:bg-gray-700"
            }
          >
            <span>📚</span>
            {sidebarOpen && <span>Courses</span>}
          </NavLink>
          <NavLink
            to="students"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 p-2 rounded flex items-center gap-2"
                : "p-2 rounded flex items-center gap-2 hover:bg-gray-700"
            }
          >
            <span>👨‍🎓</span>
            {sidebarOpen && <span>Students</span>}
          </NavLink>
          <NavLink
            to="analytics"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 p-2 rounded flex items-center gap-2"
                : "p-2 rounded flex items-center gap-2 hover:bg-gray-700"
            }
          >
            <span>📊</span>
            {sidebarOpen && <span>Analytics</span>}
          </NavLink>
          <NavLink
            to="settings"
            className={({ isActive }) =>
              isActive
                ? "bg-gray-700 p-2 rounded flex items-center gap-2"
                : "p-2 rounded flex items-center gap-2 hover:bg-gray-700"
            }
          >
            <span>⚙️</span>
            {sidebarOpen && <span>Settings</span>}
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="p-2 m-4 bg-red-600 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow">
          <div className="flex items-center gap-4">
            <button
              className="text-gray-700 md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <h1 className="text-xl text-black font-bold">Administrateur</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
                3
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <User className="w-6 h-6 text-gray-700" />
              <span className="hidden text-blue-700 md:inline">Admin</span>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-6 flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
