// src/lib/auth.ts
export const authConfig = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN!,
    clientId: import.meta.env.VITE_AUTH0_CLIENTID!,
    redirectUri: window.location.origin + '/dashboard', // or wherever you land post-login
  }
  