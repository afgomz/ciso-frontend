import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { authConfig } from './config/authConfig';

// Auth0 redirect callback for SPA navigation
const onRedirectCallback = (appState?: { returnTo?: string }) => {
  window.location.assign(appState?.returnTo || window.location.pathname);
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{ redirect_uri: authConfig.redirectUri }}
      useRefreshTokens={authConfig.useRefreshTokens}
      cacheLocation={authConfig.cacheLocation}
      onRedirectCallback={onRedirectCallback}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);