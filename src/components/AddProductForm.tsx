import { useState } from "react";
import Swal from "sweetalert2";
import type { ProductData } from "../types";

type Props = { onSave: (p: ProductData) => Promise<void> };

export default function AddProductForm({ onSave }: Props) {
  const [formData, setFormData] = useState<ProductData>({ name: "", price: 0, stock: 0 });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(formData);
      Swal.fire({ icon: "success", title: "Produit ajouté" });
      setFormData({ name: "", price: 0, stock: 0 });
    } catch (err) {
      Swal.fire({ icon: "error", title: "Erreur", text: "Impossible d'ajouter le produit." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
      <h3 className="text-lg font-semibold mb-4">Ajouter un produit (exemple)</h3>
      <input placeholder="Nom" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="input input-bordered w-full mb-3" required />
      <input type="number" placeholder="Prix" value={formData.price} onChange={e => setFormData({ ...formData, price: Number(e.target.value) })} className="input input-bordered w-full mb-3" min={0} required />
      <input type="number" placeholder="Stock" value={formData.stock} onChange={e => setFormData({ ...formData, stock: Number(e.target.value) })} className="input input-bordered w-full mb-3" min={0} required />
      <button type="submit" disabled={loading} className="btn btn-primary w-full">{loading ? "Envoi..." : "Ajouter"}</button>
    </form>
  );
}
