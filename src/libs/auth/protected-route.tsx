import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './use-auth-hook';

export interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return props.children;
}

