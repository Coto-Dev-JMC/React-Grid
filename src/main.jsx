import { createRoot } from "react-dom/client";
import { lazy, Suspense } from "react";
import "./index.css";
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("app")).render(
  <Suspense fallback={null}>
    <App />
  </Suspense>
);
