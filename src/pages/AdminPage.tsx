import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");
  const [activeTab, setActiveTab] = useState<"dashboard"|"courses"|"students"|"analytics"|"settings">("dashboard");

  if (isAdmin !== "true") {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* SIDEBAR */}
      <aside style={{
        width: "250px",
        background: "#111827",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>
        <h2 style={{ marginBottom: "20px" }}>All English Lovers — Admin</h2>
        
        <button onClick={() => setActiveTab("dashboard")} style={btnStyle}>Dashboard</button>
        <button onClick={() => setActiveTab("courses")} style={btnStyle}>Cours</button>
        <button onClick={() => setActiveTab("students")} style={btnStyle}>Apprenants</button>
        <button onClick={() => setActiveTab("analytics")} style={btnStyle}>Statistiques</button>
        <button onClick={() => setActiveTab("settings")} style={btnStyle}>Paramètres</button>

        <div style={{ marginTop: "auto" }}>
          <button onClick={handleLogout} style={{ ...btnStyle, background:"#dc2626" }}>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <main style={{ flex: 1, padding: "30px", overflowY: "auto" }}>
        {activeTab === "dashboard" && <h1>📊 Vue d’ensemble</h1>}
        {activeTab === "courses" && <Courses />}  {/* TON composant Courses est affiché ici */}
        {activeTab === "students" && <h1>👨‍🎓 Suivi des apprenants</h1>}
        {activeTab === "analytics" && <h1>📈 Statistiques</h1>}
        {activeTab === "settings" && <h1>⚙️ Paramètres</h1>}
      </main>
    </div>
  );
};

const btnStyle: React.CSSProperties = {
  background: "transparent",
  border: "1px solid #374151",
  color: "white",
  padding: "10px",
  textAlign: "left",
  cursor: "pointer",
  borderRadius: "6px"
};

export default AdminPage;