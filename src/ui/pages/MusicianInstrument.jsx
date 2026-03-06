// src/pages/MusicianInstrument.jsx
import {
  Center,
  Text,
  Button,
  VStack,
  Box,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import fondo from "@/assets/fondo.png";
import icono2 from "@/assets/icono2.png";
// Importamos los iconos que me pasaste
import { FaGuitar } from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";
import { BiSolidPiano } from "react-icons/bi";
import { FaDrum } from "react-icons/fa";
import { PiProhibitInsetBold } from "react-icons/pi";

function MusicianInstrument() {
  const navigate = useNavigate();

  const handleSelectInstrument = (instrument) => {
    localStorage.setItem("instrument", instrument);
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
      {/* BACKGROUND ICON */}
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

      {/* INSTRUMENT SELECTION CARD */}
      <Box
        bg="white"
        p={10}
        borderRadius="2xl"
        boxShadow="lg"
        w="100%"
        maxW="450px"
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
            ¿Cuál es tu instrumento principal?
          </Text>

          <Text fontSize="sm" fontWeight="semibold" color="#636363">
            Selecciona el que más dominas
          </Text>

          {/* 2-COLUMN GRID FOR INSTRUMENTS */}
          <SimpleGrid columns={2} spacing={4} w="100%">
            {/* Bass Button */}
            <Button
              h="80px"
              bg="#fe6d40"
              color="white"
              borderRadius="xl"
              onClick={() => handleSelectInstrument("bass")}
              flexDirection="column"
              _hover={{ bg: "#a64c31" }}
              p={2}
            >
              <GiGuitarBassHead fontSize="32px" color="#541d0c" />
              <Text mt={1} fontSize="sm">
                Bajo
              </Text>
            </Button>

            {/* Piano Button */}
            <Button
              h="80px"
              bg="#a166b9"
              color="white"
              borderRadius="xl"
              onClick={() => handleSelectInstrument("piano")}
              flexDirection="column"
              _hover={{ bg: "#a64c31" }}
              p={2}
            >
              <BiSolidPiano fontSize="32px" color="#55206c" />
              <Text mt={1} fontSize="sm">
                Piano
              </Text>
            </Button>

            {/* Guitar Button */}
            <Button
              h="80px"
              bg="#a166b9"
              color="#55206c"
              borderRadius="xl"
              onClick={() => handleSelectInstrument("guitar")}
              flexDirection="column"
              _hover={{ bg: "#a64c31" }}
              p={2}
            >
              <FaGuitar fontSize="32px" color="#55206c" />
              <Text mt={1} fontSize="sm">
                Guitarra
              </Text>
            </Button>

            {/* Percussion Button */}
            <Button
              h="80px"
              bg="#fe6d40"
              color="white"
              borderRadius="xl"
              onClick={() => handleSelectInstrument("percussion")}
              flexDirection="column"
              _hover={{ bg: "#a64c31" }}
              p={2}
            >
              <FaDrum fontSize="32px" color="#541d0c" />
              <Text mt={1} fontSize="sm">
                percusión
              </Text>
            </Button>
          </SimpleGrid>

          {/* NONE OF THE ABOVE BUTTON */}
          <Button
            h="52px"
            w="100%"
            bgColor="#a166b9"
            color="white"
            borderRadius="999px"
            onClick={() => handleSelectInstrument("other")}
            _hover={{ bg: "gray.500" }}
            leftIcon={
              <Text fontSize="lg">
                <PiProhibitInsetBold />
              </Text>
            }
          >
            Ninguno de los anteriores
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default MusicianInstrument;
