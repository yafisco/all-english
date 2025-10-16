import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

type User = { id: string; name: string; email: string } | null;
type AuthContextType = {
  user: User;
  loading: boolean;
  signin: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ael_token");
    const userRaw = localStorage.getItem("ael_user");
    if (token && userRaw) setUser(JSON.parse(userRaw));
    setLoading(false);
  }, []);

  const signin = async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    const { accessToken, user } = res.data;
    localStorage.setItem("ael_token", accessToken);
    localStorage.setItem("ael_user", JSON.stringify(user));
    setUser(user);
  };

  const signup = async (name: string, email: string, password: string) => {
    const res = await api.post("/auth/signup", { name, email, password });
    const { accessToken, user } = res.data;
    localStorage.setItem("ael_token", accessToken);
    localStorage.setItem("ael_user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("ael_token");
    localStorage.removeItem("ael_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
