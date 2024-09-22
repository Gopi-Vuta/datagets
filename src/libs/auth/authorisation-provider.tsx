import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider(props: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated');
    const storedUsername = localStorage.getItem('username');
    if (authState) {
      setIsAuthenticated(JSON.parse(authState));
    }
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const login = (usernameValue: string) => {
    setIsAuthenticated(true);
    setUsername(usernameValue);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    localStorage.setItem('username', usernameValue)
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}