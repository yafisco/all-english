import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import AdminLayout from "./admin/adminLayout";
import Dashboard from "./admin/pages/Dashboard";
import AdminCourses from "./admin/pages/courses"; // renommé pour éviter conflit
import Students from "./admin/pages/students";
import Analytics from "./admin/pages/analytics";
import Settings from "./admin/pages/settings";
import PublicCourses from "./pages/courses"; // version publique
import CourseDetail from "./pages/courseDetail";
import SignIn from "./pages/Auth/SignIN";
import SignUp from "./pages/Auth/SignUp";
import About from "./pages/About"; 
import Profile from "./pages/profile";
import CategorieList from "./pages/CategorieList";
import Footer from "./components/footer";
import Contact from "./pages/contact";

export default function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />

          <main className="flex-1">
            <Routes>
              {/* Dashboard Admin */}
              <Route
                path="/admin"
                element={isAdmin ? <AdminLayout /> : <Navigate to="/login" />}
              >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="courses" element={<AdminCourses />} />
                <Route path="students" element={<Students />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="settings" element={<Settings />} />
                <Route index element={<Navigate to="dashboard" />} />
              </Route>

              {/* Pages publiques */}
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<PublicCourses />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/categories" element={<CategorieList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
  );
}
