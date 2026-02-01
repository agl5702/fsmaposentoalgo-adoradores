import {
  Box,
  Text,
  Center,
  Input,
  VStack,
  Icon,
  Button,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { FaChurch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Guardar token falso
    localStorage.setItem("token", "logged_in");
    navigate("/rol");
  };

  return (
    <Center minH="100vh" p={5}>
      <Box w="100%">
        <Center flexDirection="column">
          <Icon as={FaChurch} w="150px" h="150px" color="#5AC7E5" mb={4} />

          <Text
            fontSize="24px"
            fontWeight="semibold"
            color="#152563"
            mb={8}
            textAlign="center"
          >
            ¡Qué bueno verte de nuevo!
          </Text>

          <VStack spacing={4} w="100%" maxW="320px">
            <Input
              placeholder="Correo / Número telefónico"
              h="50px"
              bg="gray.100"
              border="none"
              borderRadius="999px"
              textAlign="center"
            />

            <Button
              h="52px"
              w="100%"
              bg="#5AC7E5"
              color="white"
              borderRadius="999px"
              fontSize="16px"
              _hover={{ bg: "#48b6d3" }}
              onClick={handleLogin}
            >
              Inicia sesión
            </Button>
          </VStack>

          <HStack my={8} w="100%" maxW="320px">
            <Divider flex="1" />
            <Text fontSize="14px" color="gray.500" whiteSpace="nowrap">
              O continúa con
            </Text>
            <Divider flex="1" />
          </HStack>

          <HStack spacing={6}>
            <Button bg="black" borderRadius="12px" w="60px" h="50px">
              <FcGoogle size={24} />
            </Button>
            <Button bg="black" borderRadius="12px" w="60px" h="50px">
              <FaFacebookF color="white" size={20} />
            </Button>
          </HStack>

          <Text mt={8} fontSize="sm" color="#152563">
            ¿Aún no estás registrado?{" "}
            <Text as="span" fontWeight="semibold" cursor="pointer">
              Regístrate
            </Text>
          </Text>
        </Center>
      </Box>
    </Center>
  );
}

export default Login;
