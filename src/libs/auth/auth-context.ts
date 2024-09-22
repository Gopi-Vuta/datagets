import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  username: '',
  login: (username: string) => {},
  logout: () => {},
});
