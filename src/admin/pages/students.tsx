import React, { useState, useEffect } from "react";

type Student = {
  id: number;
  name: string;
  email: string;
  progress: number; // % complété
};

const Students: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("students");
    if (stored) setStudents(JSON.parse(stored));
  }, []);

  return (
    <div>
      <h2 className="text-2xl text-black font-bold mb-4">Students List</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b text-black" >
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id} className="border-b hover:bg-gray-100">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
