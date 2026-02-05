// src/ui/layouts/MainLayout.jsx
import { Box, Container } from "@chakra-ui/react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import HeaderMenu from "@/ui/components/HeaderMenu";
import BottomNav from "@/ui/components/navigations/BottomNav";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("favoriteSongs");
    navigate("/login");
  };

  // Mostramos navegación solo en páginas principales
  const showNavigation =
    location.pathname.startsWith("/home") ||
    location.pathname.startsWith("/songs") ||
    location.pathname.startsWith("/announcements") ||
    location.pathname.startsWith("/profile");

  return (
    <Box minH="100vh" bg="gray.50">
      {/* Header PC */}
      {showNavigation && <HeaderMenu onLogout={handleLogout} />}

      {/* Contenido principal */}
      <Container
        maxW={{ base: "container.sm", md: "container.lg" }}
        px={{ base: 0, md: 0 }}
        pt={{ base: 0, md: 0 }}
        pb={{ base: showNavigation ? "90px" : 0, md: 6 }}
        display="flex"
        flexDirection="column"
      >
        <Outlet />
      </Container>

      {/* Bottom navigation móvil */}
      {showNavigation && <BottomNav />}
    </Box>
  );
}
