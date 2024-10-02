import { createGetServerUrl } from "@repo/ui/lib/server-url";
import { User } from '../../types/user';

const getServerUrl = createGetServerUrl({
  // eslint-disable-next-line no-undef
  prodUrl: process.env.VERCEL_URL || "",
});

export const checkAuthStatus = async (): Promise<{ isAuthenticated: boolean; user: User | null }> => {
  try {
    const response = await fetch(`${getServerUrl()}/api/auth/status`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la vérification du statut d'authentification");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la vérification du statut d'authentification:", error);
    return { isAuthenticated: false, user: null };
  }
};
