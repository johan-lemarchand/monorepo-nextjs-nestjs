export type ServerUrlConfig = {
  prodUrl: string;
};

/**
 * This method return the server URL based on the environment.
 */
export const createGetServerUrl = (config: ServerUrlConfig) => {
  return () => {
    if (typeof window !== "undefined") {
      return window.location.origin;
    }

    // eslint-disable-next-line no-undef
    if (process.env.VERCEL_ENV === "production") {
      return config.prodUrl;
    }

    // eslint-disable-next-line no-undef
    if (process.env.VERCEL_URL) {
      // eslint-disable-next-line no-undef
      return `https://${process.env.VERCEL_URL}/`;
    }

    return "http://localhost:3000/";
  };
};

