import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProjectCreationPage from "./pages/ProjectCreationPage";
import PledgePage from "./pages/PledgePage";
import { AuthProvider } from "./components/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="wrapper">
        <NavBar/>
        <div className="content">
          <Outlet/>
        </div>
        <Footer/>
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignUpPage /> },
      { path: "/create", element: <ProjectCreationPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/pledges/:id", element: <PledgePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
