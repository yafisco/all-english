import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import type { Course } from "../types";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!id) return;
    api.get(`/courses/${id}`).then(res => setCourse(res.data)).catch(err => console.error(err));
  }, [id]);

  if (!course) return <div className="container mx-auto px-4 py-8">Chargement...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold">{course.title}</h1>
        <p className="mt-3 text-gray-700">{course.description}</p>
        <div className="mt-6">
          <button className="btn btn-primary">S'inscrire</button>
        </div>
      </div>
    </div>
  );
}
