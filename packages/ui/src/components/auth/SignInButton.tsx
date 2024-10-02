import Link from 'next/link';
import { Typography } from "../ui/typography";

export const SignInButton = () => (
  <Link href="/auth/signin">
    <Typography variant="muted" className="text-left hover:underline">
      Connexion
    </Typography>
  </Link>
);

export const LoggedInButton = () => {
  const handleSignOut = async () => {
    await fetch('/api/auth/signout', { method: 'POST' });
    window.location.reload();
  };

  return (
    <Typography
      as="button"
      variant="muted"
      className="text-left hover:underline"
      onClick={handleSignOut}
    >
      Déconnexion
    </Typography>
  );
};
