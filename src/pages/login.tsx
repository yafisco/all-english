import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [login, setLogin] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login === "admin" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");

      // Success alert
      Swal.fire({
        icon: "success",
        title: "Connexion réussie",
        text: "Bienvenue Admin !",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => navigate("/admin"));
    } else {
      // Error alert
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Login ou mot de passe incorrect",
      });
    }
  };

  return (
    <div style={containerStyle} className="text-black">
      <div style={cardStyle}>
        <h1 style={titleStyle}>All English Lovers</h1>
        <p style={subtitleStyle}>Connectez-vous pour gérer le site</p>

        <input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStylePassword}
        />

        <button onClick={handleLogin} style={btnStyle}>Se connecter</button>
      </div>
    </div>
  );
};

// Styles
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  fontFamily: "sans-serif"
};

const cardStyle: React.CSSProperties = {
  background: "white",
  padding: "40px",
  borderRadius: "12px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  width: "350px",
  textAlign: "center"
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: "10px",
  fontSize: "28px",
  color: "#111827"
};

const subtitleStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: "30px",
  fontSize: "14px",
  color: "#6b7280"
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 15px",
  marginBottom: "20px",
  borderRadius: "6px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
  outline: "none",
  backgroundColor: "#f9fafb",
  boxSizing: "border-box"
};

const inputStylePassword: React.CSSProperties = {
  ...inputStyle,
  backgroundColor: "#f3f4f6",
};

const btnStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#667eea",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
  transition: "0.3s"
};

export default Login;
