import React from "react";
import { TrendingUp, Users, BookOpen, Clock, Award, Activity } from "lucide-react";

const Dashboard: React.FC = () => {
  const stats = [
    { 
      title: "Total Courses", 
      value: 12, 
      change: "+2 this month",
      trend: "up",
      icon: BookOpen,
      gradient: "from-blue-500 to-blue-600" 
    },
    { 
      title: "Etudiants  inscrits", 
      value: 150, 
      change: "+12 this week",
      trend: "up",
      icon: Users,
      gradient: "from-emerald-500 to-emerald-600" 
    },
    { 
      title: "utilisateurs actifs", 
      value: 87, 
      change: "58% online rate",
      trend: "stable",
      icon: Activity,
      gradient: "from-amber-500 to-amber-600" 
    },
    { 
      title: "Pending Tasks", 
      value: 5, 
      change: "2 urgent",
      trend: "down",
      icon: Clock,
      gradient: "from-rose-500 to-rose-600" 
    },
  ];

  const recentActivities = [
    {
      student: "Ibrahima Diop",
      action: "completed",
      course: "English Basics",
      time: "2 hours ago",
      icon: Award,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      student: "Admin",
      action: "added new course",
      course: "Advanced Grammar",
      time: "5 hours ago",
      icon: BookOpen,
      color: "text-blue-600 bg-blue-50"
    },
    {
      student: "Khaly Fall",
      action: "progressed to 80% in",
      course: "French Intermediate",
      time: "1 day ago",
      icon: TrendingUp,
      color: "text-amber-600 bg-amber-50"
    },
    {
      student: "Fatou Seck",
      action: "started",
      course: "Business English",
      time: "2 days ago",
      icon: Users,
      color: "text-purple-600 bg-purple-50"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Welcome back, Admin 👋</h1>
            <p className="text-slate-500 mt-1">voici ce qui s'est passé dans la plateforme aujourd'hui</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">Today</p>
            <p className="text-lg font-semibold text-slate-700">October 23, 2025</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.title}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${stat.gradient} p-1`}>
                  <div className="bg-white p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-slate-800 mt-2">
                          {stat.value}
                        </p>
                        <p className="text-xs text-slate-400 mt-2 flex items-center gap-1">
                          {stat.trend === "up" && <TrendingUp className="w-3 h-3 text-emerald-500" />}
                          {stat.change}
                        </p>
                      </div>
                      <div className={`bg-gradient-to-r ${stat.gradient} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5" />
              les activités récentes
            </h2>
          </div>
          <div className="divide-y divide-slate-100">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="p-5 hover:bg-slate-50 transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${activity.color} p-2.5 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-800 font-medium">
                        <span className="font-semibold">{activity.student}</span>
                        {" "}{activity.action}{" "}
                        <span className="text-slate-600">{activity.course}</span>
                      </p>
                      <p className="text-sm text-slate-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-100">
            <button className="text-sm text-slate-600 hover:text-slate-800 font-medium transition-colors">
              voir toutes les activités →
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-left">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Ajouter un nouveau cours</h3>
                <p className="text-sm text-slate-500">Create learning content</p>
              </div>
            </div>
          </button>

          <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-left">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-200 transition-colors">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">Manage Students</h3>
                <p className="text-sm text-slate-500">View enrollments</p>
              </div>
            </div>
          </button>

          <button className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group text-left">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-lg group-hover:bg-amber-200 transition-colors">
                <Activity className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">View Reports</h3>
                <p className="text-sm text-slate-500">Analytics & insights</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;