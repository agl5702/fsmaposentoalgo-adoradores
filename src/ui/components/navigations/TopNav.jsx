import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FaMusic } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export default function TopNav({ onLogout }) {
  return (
    <Flex
      px={4}
      py={3}
      align="center"
      justify="space-between"
      bg="white"
      boxShadow="sm"
      display={{ base: "flex", md: "none" }}
      position="sticky"
      top={0}
      zIndex={20}
    >
      <Flex align="center" gap={2}>
        <FaMusic />
        <Text fontSize="lg" fontWeight="bold">
          Music App
        </Text>
      </Flex>

      {onLogout && (
        <IconButton
          aria-label="Cerrar sesión"
          icon={<FiLogOut />}
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={onLogout}
        />
      )}
    </Flex>
  );
}
