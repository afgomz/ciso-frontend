/**
 * Auth0 configuration with environment variable validation.
 */
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENTID;

if (!domain || !clientId) {
  throw new Error("Missing Auth0 environment variables. Please check VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENTID.");
}

export const authConfig = {
  domain,
  clientId,
  redirectUri: window.location.origin,
  useRefreshTokens: true,
  cacheLocation: "localstorage" as "localstorage", // Explicitly type as literal
};