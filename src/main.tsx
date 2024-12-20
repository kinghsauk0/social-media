import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { UserProvider } from "./context/UserData.context.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
    </UserProvider>
  </StrictMode>
);
