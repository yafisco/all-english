import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line
} from "recharts";

type Student = {
  id: number;
  name: string;
  progress: number; // %
};

type Course = {
  id: number;
  title: string;
};

const Analytics: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    const storedCourses = localStorage.getItem("courses");
    if (storedStudents) setStudents(JSON.parse(storedStudents));
    if (storedCourses) setCourses(JSON.parse(storedCourses));
  }, []);

  // Préparation des données
  const studentProgressData = students.map(s => ({
    name: s.name,
    progress: s.progress,
  }));

  const coursesData = courses.map(c => ({
    name: c.title,
    studentsCount: Math.floor(Math.random() * 50 + 1), // exemple aléatoire
  }));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-black">Analytics Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Progression des étudiants */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-4 text-black">Progression des étudiants</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={studentProgressData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="progress" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Nombre d’étudiants par cours */}
        <div className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold mb-4 text-black">Nombre d’étudiants par cours</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={coursesData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="studentsCount" stroke="#f59e0b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
