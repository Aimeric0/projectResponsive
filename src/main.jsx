import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import Offer from "./pages/OfferPage";
import Home from "./pages/home"
import ProfilePage from "./pages/ProfilePage";

function SimplePage({ title }) {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recherche", element: <SimplePage title="Recherche" /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "conditions", element: <SimplePage title="Conditions d'utilisation" /> },
      { path: "contact", element: <SimplePage title="Contact" /> },
      { path: "offers/:id", element: <Offer /> },
      { path: "*", element: <SimplePage title="Page introuvable" /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);