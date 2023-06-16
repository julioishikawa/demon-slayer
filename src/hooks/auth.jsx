import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@demon-slayer:user", JSON.stringify(user));
      localStorage.setItem("@demon-slayer:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });
      
    } catch(e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Could not sign in.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@demon-slayer:user");
    localStorage.removeItem("@demon-slayer:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@demon-slayer:user");
    const token = localStorage.getItem("@demon-slayer:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({
        user: JSON.parse(user),
        token,
      });
    }
  }, []);

  return(
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };