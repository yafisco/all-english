import React from "react";

const Dashboard: React.FC = () => {
  // Exemple de stats
  const stats = [
    { title: "Courses", value: 12, color: "bg-blue-500" },
    { title: "Students", value: 150, color: "bg-green-500" },
    { title: "Active Users", value: 87, color: "bg-yellow-500" },
    { title: "Pending Tasks", value: 5, color: "bg-red-500" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl text-black font-bold">Welcome, Admin 👋</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className={`${s.color} text-white p-6 rounded-lg shadow hover:shadow-xl transition`}
          >
            <h3 className="text-sm font-medium">{s.title}</h3>
            <p className="text-2xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-600 rounded-lg p-6 shadow">
        <h3 className="text-lg font-bold mb-4">Recent Activities</h3>
        <ul className="space-y-2">
          <li className="p-2 border-b hover:bg-none-50 transition">
            Student ibrahima completed course “English Basics”
          </li>
          <li className="p-2 border-b hover:bg-none-50 transition">
            New course “Advanced Grammar” added
          </li>
          <li className="p-2 border-b hover:bg-none-50 transition">
            Student khaly progressed 80%
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
