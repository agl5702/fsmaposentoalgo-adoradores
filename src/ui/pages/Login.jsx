import {
  Box,
  Text,
  Center,
  Input,
  VStack,
  Image,
  Button,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { FaChurch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import fondo from "@/assets/fondo.png";
import icono2 from "@/assets/icono2.png";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Guardar token falso
    localStorage.setItem("token", "logged_in");
    navigate("/rol");
  };

  return (
    <Center
      bgImage={fondo}
      backgroundRepeat="no-repeat"
      minH="100vh"
      minW="100%"
      p={0}
    >
      <Box w="100%">
        <Center flexDirection="column">
          <Image
            mx="auto"
            w="2xs"
            src={icono2}
            filter="
    brightness(0.95)
    saturate(0.5)
    hue-rotate(-10deg)
    drop-shadow(0 6px 18px rgba(0,0,0,0.45))
  "
          />

          <Text
            fontFamily="Montserrat, sans-serif;"
            fontSize="34px"
            fontWeight="bold"
            color="white"
            mb={8}
            textAlign="center"
          >
            ¡Bienvenido!
          </Text>

          <VStack spacing={4} w="100%" maxW="320px">
            <Input
              placeholder="Correo / Número telefónico"
              _placeholder={{ color: "#4c4c4c" }}
              fontFamily="Montserrat, sans-serif;"
              fontWeight="bold"
              h="50px"
              bg="white"
              border="none"
              borderRadius="999px"
              textAlign="center"
              color="#4c4c4c"
            />

            <Button
              h="52px"
              w="100%"
              bg="#fe6d40"
              color="white"
              borderRadius="999px"
              fontFamily="Montserrat, sans-serif;"
              fontWeight="bold"
              fontSize="16px"
              _hover={{ bg: "#a64c31" }}
              onClick={handleLogin}
            >
              Inicia sesión
            </Button>
          </VStack>

          <HStack my={8} w="100%" maxW="320px">
            <Divider flex="1" />
            <Text fontSize="14px" color="white" whiteSpace="nowrap">
              O continúa con
            </Text>
            <Divider flex="1" />
          </HStack>

          <HStack spacing={6}>
            <Button bg="white" borderRadius="12px" w="60px" h="50px">
              <FcGoogle size={24} />
            </Button>
          </HStack>

          <Text mt={8} fontSize="sm" fontWeight="bold" color="white">
            ¿Aún no estás registrado?{" "}
            <Text as="span" fontWeight="bold" color="#fe6d40" cursor="pointer">
              Regístrate
            </Text>
          </Text>
        </Center>
      </Box>
    </Center>
  );
}

export default Login;
