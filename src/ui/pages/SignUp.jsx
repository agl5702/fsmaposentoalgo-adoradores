import {
  Box,
  Text,
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Button,
  Divider,
  HStack,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import { FiUser, FiMail, FiPhone } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaChurch } from "react-icons/fa";

function SignUp() {
  return (
    <Box minH="100vh" p={5}>
      <Center flexDirection="column">
        <Icon as={FaChurch} w="150px" h="150px" color="#5AC7E5" mb={4} />

        {/* Title */}
        <Text
          fontSize="26px"
          fontWeight="bold"
          color="#152563"
          mb={10}
          textAlign="center"
        >
          Bienvenido a Music App
        </Text>

        {/* Inputs */}
        <VStack spacing={4} w="100%" maxW="340px">
          <InputGroup>
            <InputLeftElement>
              <Icon as={FiUser} color="#152563" />
            </InputLeftElement>
            <Input
              placeholder="Nombre"
              h="52px"
              bg="gray.100"
              border="none"
              borderRadius="999px"
              pl="45px"
              _focus={{
                boxShadow: "0 0 0 2px #5AC7E5",
              }}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <Icon as={FiPhone} color="#152563" />
            </InputLeftElement>
            <Input
              placeholder="Número telefónico"
              h="52px"
              bg="gray.100"
              border="none"
              borderRadius="999px"
              pl="45px"
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <Icon as={FiMail} color="#152563" />
            </InputLeftElement>
            <Input
              placeholder="Correo electrónico"
              h="52px"
              bg="gray.100"
              border="none"
              borderRadius="999px"
              pl="45px"
            />
          </InputGroup>

          {/* Button */}
          <Button
            mt={4}
            h="56px"
            w="100%"
            bg="#5AC7E5"
            color="white"
            borderRadius="999px"
            fontSize="16px"
            letterSpacing="1px"
            _hover={{ bg: "#48b6d3" }}
          >
            REGÍSTRATE
          </Button>

          {/* Skip */}
          <Text color="#152563" fontSize="sm" mt={2} cursor="pointer">
            Omitir por ahora
          </Text>

          {/* Privacy */}
          <Checkbox colorScheme="blue" mt={4}>
            Aceptar la política de privacidad
          </Checkbox>
        </VStack>

        {/* Divider */}
        <HStack my={8} w="100%" maxW="340px">
          <Divider />
          <Text fontSize="sm" color="gray.500" whiteSpace="nowrap">
            O continúa con
          </Text>
          <Divider />
        </HStack>

        {/* Social */}
        <HStack spacing={6}>
          <Button bg="blue.50" w="64px" h="56px" borderRadius="12px">
            <FcGoogle size={26} />
          </Button>
          <Button bg="blue.50" w="64px" h="56px" borderRadius="12px">
            <FaFacebookF size={22} color="#1877F2" />
          </Button>
        </HStack>

        {/* Login link */}
        <Text mt={8} fontSize="sm" color="#152563">
          ¿Ya estás registrado?{" "}
          <Text as="span" fontWeight="semibold" cursor="pointer">
            Inicia sesión
          </Text>
        </Text>
      </Center>
    </Box>
  );
}

export default SignUp;
