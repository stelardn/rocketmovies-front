import { useState } from "react";
import { createContext, useContext, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState("");

  // Connects to the API using email and password inserted by the user and creates a new session
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token });

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível logar. Tente novamente.")
      }
    }

  }

  // Seeks for user authentication data on local storage once the page is rendered
  useEffect(() => {
    const savedUser = localStorage.getItem("@rocketmovies:user");
    const savedToken = localStorage.getItem("@rocketmovies:token");

    if (savedUser && savedToken) {
      setData({ user: savedUser, token: savedToken });
      api.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function authUse() {
  const context = useContext(AuthContext);
  return context;
}


export { AuthProvider, authUse };