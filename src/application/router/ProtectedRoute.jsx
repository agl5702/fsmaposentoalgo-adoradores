import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Box, Spinner } from "@chakra-ui/react";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        // Verificación simple por token existente
        // Más adelante puedes restaurar la llamada a la API
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error de autenticación:", error);
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Loading state
  if (isAuthenticated === null) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
