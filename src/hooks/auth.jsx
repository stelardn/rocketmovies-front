import { useState } from "react";
import { createContext, useContext } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState("");

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token });

    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível logar. Tente novamente.")
      }
    }

  }

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