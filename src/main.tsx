import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/index.css";
import AppRoutes from "./routes/appRoutes";
import { DatabaseProvider } from "./contexts/DatabaseContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DatabaseProvider>
      <AppRoutes />
    </DatabaseProvider>
  </React.StrictMode>,
);
