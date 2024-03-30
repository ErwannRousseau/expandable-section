import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { TailwindIndicator } from "./components/ui/tailwind-indicator.tsx";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion:
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <TailwindIndicator />
  </React.StrictMode>,
);
