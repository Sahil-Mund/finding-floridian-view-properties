import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserModalProvider } from "./providers/ModalProvider";
import { AuthProvider } from "providers/AuthProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
