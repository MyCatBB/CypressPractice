import React from "react";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import { isAuthenticated } from "./auth";
import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isAuthenticated() ? <AboutPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/gallery"
          element={
            isAuthenticated() ? <GalleryPage /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
