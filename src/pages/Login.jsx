import {
  Box,
  Flex,
  Text,
  Input,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import fondo from "@/assets/cielo.jpg";
import logo from "@/assets/logo.png";

function Login() {
  return (
    <Flex
      minH="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      align="center"
      justify="center"
      bgImage={`url(${fondo})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      px={{ base: 4, md: 0 }}
    >
      {/* Ambient lights */}
      <Box
        position="absolute"
        top="-30%"
        left="-20%"
        w={{ base: "300px", md: "620px" }}
        h={{ base: "300px", md: "620px" }}
        bg="rgba(255, 255, 255, 0.05)"
        borderRadius="full"
      />
      <Box
        position="absolute"
        bottom="-25%"
        right="-15%"
        w={{ base: "260px", md: "520px" }}
        h={{ base: "260px", md: "520px" }}
        bg="rgba(29,174,170,0.15)"
        filter="blur(1px)"
        borderRadius="full"
      />

      {/* Glass Panel */}
      <Flex
        zIndex={1}
        w={{ base: "100%", md: "70%", lg: "52%" }}
        maxW="1200px"
        minH={{ base: "auto", md: "78vh" }}
        p={{ base: 6, md: 10 }}
        borderRadius={{ base: "20px", md: "30px" }}
        bg="rgba(255,255,255,0.08)"
        backdropFilter="blur(3px) saturate(90%)"
        border="1px solid rgba(255,255,255,0.15)"
        direction="column"
        align="center"
        justify="center"
      >
        {/* Logo + Bienvenido */}
        <VStack spacing={3} mb={{ base: 6, md: 10 }}>
          <Image
            src={logo}
            alt="Logo"
            w={{ base: "160px", md: "220px", lg: "250px" }}
          />

          <Text
            fontSize={{ base: "lg", md: "24px" }}
            fontWeight="700"
            color="white"
            letterSpacing="0.4px"
            textAlign="center"
          >
            Bienvenido a Music App
          </Text>
        </VStack>

        {/* Formulario */}
        <VStack spacing={5} w="100%" maxW="360px">
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            color="white"
            fontWeight="600"
          >
            Iniciar sesión
          </Text>

          <Input
            placeholder="Correo electrónico"
            variant="unstyled"
            px={5}
            py={4}
            bg="rgba(255,255,255,0.4)"
            borderRadius="16px"
            color="gray.800"
            _placeholder={{ color: "gray.600" }}
            _focus={{
              bg: "rgba(255,255,255,0.5)",
              boxShadow: "0 0 0 2px rgba(29,174,170,0.6)",
            }}
          />

          <Input
            type="password"
            placeholder="Contraseña"
            variant="unstyled"
            px={5}
            py={4}
            bg="rgba(255,255,255,0.4)"
            borderRadius="16px"
            color="gray.800"
            _placeholder={{ color: "gray.600" }}
            _focus={{
              bg: "rgba(255,255,255,0.5)",
              boxShadow: "0 0 0 2px rgba(29,174,170,0.6)",
            }}
          />

          <Button
            w="100%"
            h="52px"
            borderRadius="18px"
            bg="rgba(255,255,255,0.28)"
            color="gray.800"
            fontWeight="600"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "0 12px 35px rgba(29,174,170,0.4)",
            }}
          >
            Entrar
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default Login;
