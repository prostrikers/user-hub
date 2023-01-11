import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles/globals.css";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import history from "./utils/history";

const onRedirectCallback = async (appState?: AppState | undefined) => {
  console.log("redirect callback");
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const providerConfig = {
  domain: "prostrikers.us.auth0.com",
  clientId: "nEfHtkQtI035PKg4STS57zIB4YadpSUs",
  audience: "https://prostrikers.com/",
  redirectUri: window.location.origin,
  cacheLocation: "localstorage",
  onRedirectCallback,
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
