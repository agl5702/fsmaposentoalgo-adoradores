import { Center, Text, Button, VStack, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import fondo from "@/assets/fondo.png";
import icono2 from "@/assets/icono2.png";
import { BiSolidPiano } from "react-icons/bi";
import { IoMdMicrophone } from "react-icons/io";

function Rol() {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    localStorage.setItem("role", role);
    navigate("/home");
  };

  return (
    <Center
      position="relative"
      minH="100vh"
      bgImage={fondo}
      bgSize="cover"
      bgPosition="center"
      overflow="hidden"
      p={0}
      m={0}
    >
      {/* ICONO DE FONDO */}
      <Image
        m="auto"
        src={icono2}
        position="absolute"
        top="20%"
        left="50%"
        transform="translateX(-50%)"
        w="2xs"
        opacity={0.25}
        filter="
      brightness(0.95)
      saturate(0.5)
      hue-rotate(-10deg)
    "
        zIndex={0}
        pointerEvents="none"
      />

      {/* CARD DEL ROL */}
      <Box
        bg="white"
        p={10}
        borderRadius="2xl"
        boxShadow="lg"
        w="100%"
        maxW="360px"
        textAlign="center"
        zIndex={1}
      >
        <VStack spacing={6}>
          <Text
            fontFamily="Montserrat, sans-serif"
            fontWeight="extrabold"
            fontSize="34px"
            color="#4c4c4c"
          >
            ¿Cuál es tu rol?
          </Text>

          <Text fontSize="sm" fontWeight="semibold" color="#636363">
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
