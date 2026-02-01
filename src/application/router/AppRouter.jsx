import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/ui/layouts/MainLayout";
import Login from "@/ui/pages/Login";
import SignUp from "@/ui/pages/SignUp";
import ProtectedRoute from "@/application/router/ProtectedRoute";
import Rol from "@/ui/pages/Rol";
import Announcements from "@/ui/pages/Announcements";
import SongsPage from "../../ui/pages/SongsPage";
// Ejemplo de página protegida
import Home from "@/ui/pages/Home";

function AppRouter() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/rol" element={<Rol />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/songs" element={<SongsPage />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
