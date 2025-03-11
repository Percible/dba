import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

const SESSION_TIMEOUT_MINUTES = 30;
const USER_STORAGE_KEY = 'dbaPanelUserToken'; // Key for storing token
const LOGIN_TIME_STORAGE_KEY = 'dbaPanelLoginTime';

// const SECRET_KEY = 'gizli_keyiniz'; // Removed SECRET_KEY and jsonwebtoken import

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem(USER_STORAGE_KEY) || null); // State to hold simple token

  useEffect(() => {
    // Check for persisted session on component mount
    const storedToken = localStorage.getItem(USER_STORAGE_KEY);
    const storedLoginTime = localStorage.getItem(LOGIN_TIME_STORAGE_KEY);

    if (storedToken && storedLoginTime) {
      try {
        const loginTime = new Date(storedLoginTime);
        const now = new Date();
        const timeDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60);

        if (timeDiff < SESSION_TIMEOUT_MINUTES) {
          setToken(storedToken); // Restore simple token
        } else {
          // Session timed out, clear storage
          localStorage.removeItem(USER_STORAGE_KEY);
          localStorage.removeItem(LOGIN_TIME_STORAGE_KEY);
        }
      } catch (error) {
        console.error("Error parsing stored session data:", error);
        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.removeItem(LOGIN_TIME_STORAGE_KEY);
      }
    }
  }, []);


  const login = async (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          const mockToken = 'mock_simple_token'; // Simple mock token string

          setToken(mockToken);
          localStorage.setItem(USER_STORAGE_KEY, mockToken); // Persist simple token to localStorage
          localStorage.setItem(LOGIN_TIME_STORAGE_KEY, new Date().toISOString());
          resolve({ token: mockToken, user: { username: 'admin', role: 'dba' } }); // Resolve with simple token
        } else {
          reject(new Error('Invalid username or password'));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem(USER_STORAGE_KEY); // Clear simple token from localStorage on logout
    localStorage.removeItem(LOGIN_TIME_STORAGE_KEY); // Clear login timestamp on logout
  };

  const isAuthenticated = !!token; // Check for token existence

  const authContextValue = {
    token, // Provide simple token in context
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
