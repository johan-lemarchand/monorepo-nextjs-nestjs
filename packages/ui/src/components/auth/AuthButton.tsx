"use client";

import { useAuth } from '../../hooks/useAuth';
import { LoggedInButton, SignInButton } from "./SignInButton";

export const AuthButton = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (isAuthenticated) {
    return <LoggedInButton />;
  }

  return <SignInButton />;
};
