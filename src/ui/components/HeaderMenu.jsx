import {
  Flex,
  Button,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

export default function HeaderMenu({ onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const bg = useColorModeValue("white", "gray.800");
  const activeBg = useColorModeValue("blue.600", "blue.400");
  const activeColor = "white";

  const items = [
    { label: "Inicio", path: "/home" },
    { label: "Canciones", path: "/songs" },
    { label: "Anuncios", path: "/announcements" },
    { label: "Perfil", path: "/profile" },
  ];

  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      px={{ base: 4, md: 8 }}
      py={4}
      bg={bg}
      boxShadow="sm"
      mb={6}
      position="sticky"
      top={0}
      zIndex={20}
      display={{ base: "none", md: "flex" }}
    >
      {/* BRAND */}
      <Flex align="center" gap={2}>
        <FaMusic size={20} />
        <Text fontSize="xl" fontWeight="bold">
          Music App
        </Text>
      </Flex>

      {/* NAV */}
      <HStack spacing={2}>
        {items.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <Button
              key={item.path}
              size="sm"
              variant={isActive ? "solid" : "ghost"}
              bg={isActive ? activeBg : "transparent"}
              color={isActive ? activeColor : "inherit"}
              _hover={{
                bg: isActive ? activeBg : "gray.100",
              }}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </Button>
          );
        })}

        {onLogout && (
          <Button
            size="sm"
            variant="outline"
            colorScheme="red"
            ml={4}
            onClick={onLogout}
          >
            Cerrar sesión
          </Button>
        )}
      </HStack>
    </Flex>
  );
}
