import { Box, Flex, Text } from "@chakra-ui/react";
import { FaHome, FaMusic, FaBullhorn, FaUser } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { label: "Inicio", icon: FaHome, path: "/home" },
    { label: "Canciones", icon: FaMusic, path: "/songs" },
    { label: "Anuncios", icon: FaBullhorn, path: "/announcements" },
    { label: "Perfil", icon: FaUser, path: "/profile" },
  ];

  return (
    <Box
      position="fixed"
      bottom={0}
      w="100%"
      bg="white"
      boxShadow="0 -2px 10px rgba(0,0,0,0.08)"
      display={{ base: "block", md: "none" }}
      zIndex={20}
    >
      <Flex justify="space-around" py={2}>
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Flex
              key={item.path}
              direction="column"
              align="center"
              cursor="pointer"
              color={isActive ? "orange.400" : "gray.500"}
              onClick={() => navigate(item.path)}
            >
              <Icon size={20} />
              <Text fontSize="xs" fontWeight={isActive ? "bold" : "normal"}>
                {item.label}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}
