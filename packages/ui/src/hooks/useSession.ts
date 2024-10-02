import { useState, useEffect } from 'react';
import { checkAuthStatus } from '../lib/api/auth';

type SessionType = {} | null;

export const useSession = () => {
  const [session, setSession] = useState<SessionType>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSession = async () => {
      const isAuthenticated = await checkAuthStatus();
      setSession(isAuthenticated ? {} : null);
      setIsLoading(false);
    };
    loadSession();
  }, []);

  return { data: session, status: isLoading ? "loading" : session ? "authenticated" : "unauthenticated" };
};