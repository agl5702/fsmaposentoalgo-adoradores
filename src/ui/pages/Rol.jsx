import { Center, Text, Button, VStack, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import fondo from "@/assets/fondo.png";
import { BiSolidPiano } from "react-icons/bi";
import { IoMdMicrophone } from "react-icons/io";

function Rol() {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    localStorage.setItem("role", role);
    navigate("/home");
  };

  return (
    <Center minH="100vh" bg="gray.50" p={5} bgImage={fondo}>
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
          <Text
            fontFamily="Montserrat, sans-serif"
            fontSize="34px"
            fontWeight="extrabold"
            color="#4c4c4c"
          >
            ¿Cuál es tu rol?
          </Text>

          <Text
            fontFamily="Montserrat, sans-serif"
            fontSize="sm"
            fontWeight="semibold"
            color="#636363"
          >
            Esto nos ayudará a personalizar tu experiencia
          </Text>

          <Button
            h="52px"
            w="100%"
            bg="#fe6d40"
            color="white"
            borderRadius="999px"
            onClick={() => handleSelectRole("musico")}
          >
            <BiSolidPiano fontSize="28px" color="#541d0c" />
            <Text mx="5px">Músico</Text>
          </Button>

          <Button
            h="52px"
            w="100%"
            bg="#a166b9"
            color="white"
            borderRadius="999px"
            onClick={() => handleSelectRole("voz")}
          >
            <IoMdMicrophone fontSize="28px" color="#55206c" />
            <Text>Voz</Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default Rol;
