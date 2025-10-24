import { useState } from "react";
import Swal from "sweetalert2";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      return Swal.fire({
        icon: "warning",
        title: "Champs obligatoires",
        text: "Veuillez remplir tous les champs."
      });
    }

    if (newPassword !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Les mots de passe ne correspondent pas."
      });
    }

    // ICI tu pourrais appeler une API pour sauvegarder en backend...

    Swal.fire({
      icon: "success",
      title: "Mot de passe mis à jour",
      showConfirmButton: false,
      timer: 1500
    });

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex justify-center items-start pt-10 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Paramètres Administrateur
        </h2>

        <label className="block text-sm font-medium mb-1 text-gray-700">
          Mot de passe actuel
        </label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full mb-3 p-2.5 border text-black rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <label className="block text-sm font-medium mb-1 text-gray-700">
          Nouveau mot de passe
        </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full mb-3 p-2.5 border text-black rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <label className="block text-sm font-medium mb-1 text-gray-700">
          Confirmer le nouveau mot de passe
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full mb-5 p-2.5 border text-black rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          onClick={handleChangePassword}
          className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Enregistrer
        </button>
      </div>
    </div>
  );
}
