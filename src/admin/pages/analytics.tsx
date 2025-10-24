import React, { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import { TrendingUp, Users, BookOpen, Award, Activity, Target } from "lucide-react";

type Student = {
  id: number;
  name: string;
  progress: number;
  category?: string;
};

type Course = {
  id: number;
  title: string;
  category?: string;
};

const Analytics: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Données de démonstration
    const demoStudents: Student[] = [
      { id: 1, name: "Alice Martin", progress: 85, category: "Anglais Business" },
      { id: 2, name: "Bob Diop", progress: 72, category: "Anglais Général" },
      { id: 3, name: "Fatou Sall", progress: 95, category: "Anglais Informatique" },
      { id: 4, name: "Omar Ndiaye", progress: 68, category: "Anglais Business" },
      { id: 5, name: "Marie Fall", progress: 88, category: "Anglais Général" },
      { id: 6, name: "Moussa Kane", progress: 76, category: "Anglais Informatique" }
    ];

    const demoCourses: Course[] = [
      { id: 1, title: "Communication Professionnelle", category: "Anglais Business" },
      { id: 2, title: "Conversation Quotidienne", category: "Anglais Général" },
      { id: 3, title: "Programmation et Développement", category: "Anglais Informatique" }
    ];

    setStudents(demoStudents);
    setCourses(demoCourses);
  }, []);

  // Statistiques globales
  const totalStudents = students.length;
  const averageProgress = students.length > 0 
    ? Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)
    : 0;
  const topPerformers = students.filter(s => s.progress >= 80).length;
  const completionRate = students.length > 0
    ? Math.round((students.filter(s => s.progress === 100).length / students.length) * 100)
    : 0;

  // Données pour les graphiques
  const studentProgressData = students.map(s => ({
    name: s.name.split(' ')[0],
    progress: s.progress,
  }));

  const categoryData = [
    { name: "Anglais Business", value: students.filter(s => s.category === "Anglais Business").length, color: "#f59e0b" },
    { name: "Anglais Général", value: students.filter(s => s.category === "Anglais Général").length, color: "#3b82f6" },
    { name: "Anglais Informatique", value: students.filter(s => s.category === "Anglais Informatique").length, color: "#10b981" }
  ];

  const coursesData = courses.map(c => ({
    name: c.title.substring(0, 15) + "...",
    studentsCount: students.filter(s => s.category === c.category).length,
  }));

  const progressDistribution = [
    { range: "0-25%", count: students.filter(s => s.progress <= 25).length },
    { range: "26-50%", count: students.filter(s => s.progress > 25 && s.progress <= 50).length },
    { range: "51-75%", count: students.filter(s => s.progress > 50 && s.progress <= 75).length },
    { range: "76-100%", count: students.filter(s => s.progress > 75).length }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-800">{payload[0].payload.name}</p>
          <p className="text-sm text-blue-600">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Activity className="text-blue-600" size={36} />
          <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
        </div>
        <p className="text-gray-500">Suivez les performances et statistiques en temps réel</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Users size={24} />
            </div>
            <TrendingUp size={20} className="opacity-60" />
          </div>
          <p className="text-sm opacity-90 mb-1">Total Étudiants</p>
          <p className="text-4xl font-bold">{totalStudents}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <TrendingUp size={20} className="opacity-60" />
          </div>
          <p className="text-sm opacity-90 mb-1">Progression Moyenne</p>
          <p className="text-4xl font-bold">{averageProgress}%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Award size={24} />
            </div>
            <TrendingUp size={20} className="opacity-60" />
          </div>
          <p className="text-sm opacity-90 mb-1">Meilleurs Élèves</p>
          <p className="text-4xl font-bold">{topPerformers}</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <TrendingUp size={20} className="opacity-60" />
          </div>
          <p className="text-sm opacity-90 mb-1">Taux de Complétion</p>
          <p className="text-4xl font-bold">{completionRate}%</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Progression des étudiants */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Progression des Étudiants</h3>
              <p className="text-sm text-gray-500">Performance individuelle</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={studentProgressData}>
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="progress" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Distribution par catégorie */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Répartition par Catégorie</h3>
              <p className="text-sm text-gray-500">Distribution des étudiants</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Étudiants par cours */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <BookOpen className="text-amber-600" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Étudiants par Cours</h3>
              <p className="text-sm text-gray-500">Popularité des cours</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={coursesData}>
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#6b7280', fontSize: 11 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="studentsCount" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={{ fill: '#f59e0b', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Distribution de progression */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Activity className="text-purple-600" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Distribution de Progression</h3>
              <p className="text-sm text-gray-500">Répartition par tranche</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={progressDistribution}>
              <XAxis 
                dataKey="range" 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Performers Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <Award className="text-yellow-600" size={20} />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 text-lg">Meilleurs Étudiants</h3>
            <p className="text-sm text-gray-500">Top performers de la semaine</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {students
            .sort((a, b) => b.progress - a.progress)
            .slice(0, 3)
            .map((student, index) => (
              <div
                key={student.id}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 relative overflow-hidden"
              >
                {index === 0 && (
                  <div className="absolute top-2 right-2">
                    <span className="text-2xl">🥇</span>
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute top-2 right-2">
                    <span className="text-2xl">🥈</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="absolute top-2 right-2">
                    <span className="text-2xl">🥉</span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Progression</span>
                  <span className="text-2xl font-bold text-blue-600">{student.progress}%</span>
                </div>
                
                <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${student.progress}%` }}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;