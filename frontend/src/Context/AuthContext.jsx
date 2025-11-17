import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser?.fullName) setUser(parsedUser);
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // FIXED LOGIN FUNCTION
  const login = (resData) => {
    // backend sends: { msg, user: {...} }
    const realUser = resData.user ? resData.user : resData;

    localStorage.setItem("user", JSON.stringify(realUser));
    setUser(realUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
