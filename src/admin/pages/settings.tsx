import React, { useState } from "react";

const Settings: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Les nouveaux mots de passe ne correspondent pas !");
      return;
    }

    const storedPassword = localStorage.getItem("adminPassword") || "admin123";

    if (currentPassword !== storedPassword) {
      alert("Mot de passe actuel incorrect !");
      return;
    }

    localStorage.setItem("adminPassword", newPassword);
    alert("Mot de passe mis à jour avec succès !");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Paramètres Admin</h2>

      <div className="p-6 bg-white rounded shadow max-w-md">
        <h3 className="font-semibold mb-4">Changer mot de passe</h3>
        <input
          type="password"
          placeholder="Mot de passe actuel"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="block w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Nouveau mot de passe"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="block w-full mb-3 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Confirmer nouveau mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full mb-4 p-2 border rounded"
        />
        <button
          onClick={handleChangePassword}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
};

export default Settings;
