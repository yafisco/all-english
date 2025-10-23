import React, { useState, useEffect } from "react";
type Course = {
  id: number;
  title: string;
  description: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  duration: string;
};

// Styles
const formCardStyle: React.CSSProperties = {
  marginBottom: "20px",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxShadow: "0 3px 8px rgba(0,0,0,0.05)"
};

const inputStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "10px",
  padding: "8px",
  width: "100%",
  borderRadius: "4px",
  border: "1px solid #ccc"
};

const btnStyle: React.CSSProperties = {
  padding: "8px 16px",
  borderRadius: "4px",
  border: "none",
  color: "white",
  cursor: "pointer"
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse"
};

const tableHeaderStyle: React.CSSProperties = {
  borderBottom: "2px solid #ccc",
  textAlign: "left",
  padding: "8px"
};

const tableRowStyle: React.CSSProperties = {
  borderBottom: "1px solid #eee",
  padding: "8px"
};

// Composant Courses
const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState<Course["level"]>("Débutant");
  const [duration, setDuration] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("courses");
    if (stored) setCourses(JSON.parse(stored));
  }, []);

  const saveCourses = (updated: Course[]) => {
    localStorage.setItem("courses", JSON.stringify(updated));
    setCourses(updated);
  };

  const handleAddOrEdit = () => {
    if (!title || !description || !duration) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    if (editingId !== null) {
      const updated = courses.map(c =>
        c.id === editingId ? { ...c, title, description, level, duration } : c
      );
      saveCourses(updated);
      setEditingId(null);
    } else {
      const newCourse: Course = { id: Date.now(), title, description, level, duration };
      saveCourses([...courses, newCourse]);
    }

    setTitle("");
    setDescription("");
    setLevel("Débutant");
    setDuration("");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce cours ?")) {
      saveCourses(courses.filter(c => c.id !== id));
    }
  };

  const handleEdit = (course: Course) => {
    setEditingId(course.id);
    setTitle(course.title);
    setDescription(course.description);
    setLevel(course.level);
    setDuration(course.duration);
  };

  const filteredCourses = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.level.toLowerCase().includes(search.toLowerCase())
  );

  const sortedCourses = filteredCourses.sort((a, b) => a.level.localeCompare(b.level));

  return (
    <div >
      <h2 style={{ marginBottom: "20px" }} className="text-blue-700">📚 Gestion des cours</h2>

      {/* Formulaire */}
      <div style={formCardStyle}>
        <h3>{editingId ? "Modifier un cours" : "Ajouter un cours"}</h3>
        <input
          type="text"
          placeholder="Titre du cours"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={inputStyle}
        />
        <select value={level} onChange={e => setLevel(e.target.value as Course["level"])} style={inputStyle}>
          <option>Débutant</option>
          <option>Intermédiaire</option>
          <option>Avancé</option>
        </select>
        <input
          type="text"
          placeholder="Durée (ex: 2h, 5 modules)"
          value={duration}
          onChange={e => setDuration(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleAddOrEdit} style={btnStyle}>
          {editingId ? "Enregistrer" : "Ajouter"}
        </button>
      </div>

      {/* Recherche */}
      <input
        type="text"
        placeholder="Rechercher par titre ou niveau..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ ...inputStyle, marginBottom: "15px" }}
      />

      {/* Table des cours */}
      <table style={tableStyle}>
        <thead>
          <tr style={tableHeaderStyle}>
            <th>Titre</th>
            <th>Description</th>
            <th>Niveau</th>
            <th>Durée</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedCourses.map(c => (
            <tr key={c.id} style={tableRowStyle}>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.level}</td>
              <td>{c.duration}</td>
              <td>
                <button onClick={() => handleEdit(c)} style={{ ...btnStyle, background: "#fbbf24", marginRight: "5px" }}>Éditer</button>
                <button onClick={() => handleDelete(c.id)} style={{ ...btnStyle, background: "#dc2626" }}>Supprimer</button>
              </td>
            </tr>
          ))}
          {sortedCourses.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "10px" }}>Aucun cours trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
