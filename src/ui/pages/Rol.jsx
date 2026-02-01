import { Center, Text, Button, VStack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Rol() {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    localStorage.setItem("role", role);
    navigate("/home");
  };

  return (
    <Center minH="100vh" bg="gray.50" p={5}>
      <Box
        bg="white"
        p={10}
        borderRadius="2xl"
        boxShadow="lg"
        w="100%"
        maxW="360px"
        textAlign="center"
      >
        <VStack spacing={6}>
          <Text fontSize="2xl" fontWeight="bold" color="#152563">
            ¿Cuál es tu rol?
          </Text>

          <Text fontSize="sm" color="gray.500">
            Esto nos ayudará a personalizar tu experiencia
          </Text>

          <Button
            h="52px"
            w="100%"
            bg="gray.700"
            color="white"
            borderRadius="999px"
            onClick={() => handleSelectRole("musico")}
          >
            🎸 Músico
          </Button>

          <Button
            h="52px"
            w="100%"
            bg="#5AC7E5"
            color="white"
            borderRadius="999px"
            onClick={() => handleSelectRole("voz")}
          >
            🎤 Voz
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default Rol;
