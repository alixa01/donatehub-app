/* eslint-disable react-refresh/only-export-components */

import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decodedUser = jwtDecode(storedToken);
        if (decodedUser.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          setUser(null);
          setToken(null);
        } else {
          setUser(decodedUser);
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Token tidak valid:", error);
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
      }
    }
  }, []);

  const login = ({ token: newToken }) => {
    const decodedUser = jwtDecode(newToken);
    localStorage.setItem("token", newToken);
    setUser(decodedUser);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  const value = { user, token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
