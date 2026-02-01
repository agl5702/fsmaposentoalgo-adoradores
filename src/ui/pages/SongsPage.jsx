import {
  Box,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Heading,
  Button,
  Collapse,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { songs } from "@/data/songs";
import { transposeChord } from "@/utils/transpose";

export default function SongsPage() {
  const [role, setRole] = useState(null);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [expandedSong, setExpandedSong] = useState(null);
  const [transposeSteps, setTransposeSteps] = useState(0);

  const buttonPlacement = useBreakpointValue({ base: "top", md: "bottom" });
  const containerRef = useRef(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (!storedRole) return;
    setRole(storedRole);
    setFilteredSongs(songs);
  }, []);

  // resetear transposición al cambiar canción
  useEffect(() => {
    setTransposeSteps(0);
  }, [expandedSong]);

  useEffect(() => {
    if (expandedSong && containerRef.current) {
      const el = document.getElementById(`song-${expandedSong}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [expandedSong]);

  if (!role) return null;

  return (
    <Box maxW="1200px" mx="10px" ref={containerRef}>
      <Heading fontSize="2xl" mb={6}>
        Letras de Canciones 🎵
      </Heading>

      <SimpleGrid
        columns={{
          base: 1,
          md: expandedSong ? 1 : 2,
          lg: expandedSong ? 1 : 3,
        }}
        spacing={3}
      >
        {filteredSongs.map((song) => {
          const isExpanded = expandedSong === song.id;
          if (expandedSong && !isExpanded) return null;

          return (
            <Card
              key={song.id}
              id={`song-${song.id}`}
              borderRadius="md"
              shadow={isExpanded ? "lg" : "sm"}
              overflow="hidden"
              variant="outline"
            >
              {/* HEADER */}
              <Flex
                p={3}
                align="center"
                cursor="pointer"
                bg={isExpanded ? "blue.50" : "gray.50"}
                onClick={() => setExpandedSong(isExpanded ? null : song.id)}
              >
                {!isExpanded && (
                  <Avatar
                    name={song.author}
                    src={song.image}
                    size="lg"
                    mr={4}
                  />
                )}

                <Box flex="1">
                  <Heading size="md">{song.name}</Heading>
                  <Text fontStyle="italic" color="gray.600">
                    {song.author}
                  </Text>
                </Box>
              </Flex>

              <Collapse in={isExpanded} animateOpacity>
                <CardBody>
                  {/* BOTÓN OCULTAR (MOBILE) */}
                  {buttonPlacement === "top" && (
                    <Flex justify="flex-end" mb={3}>
                      <Button size="sm" onClick={() => setExpandedSong(null)}>
                        Ocultar letra
                      </Button>
                    </Flex>
                  )}

                  {/* INFO + TRANSPOSICIÓN */}
                  {role === "musico" && (
                    <Flex
                      justify="space-between"
                      align="center"
                      mb={4}
                      wrap="wrap"
                      gap={2}
                    >
                      <Text fontSize="sm" fontWeight="bold">
                        Tono original: {song.scale}{" "}
                        {transposeSteps !== 0 && "(transpuesto)"}
                      </Text>

                      <Flex gap={2}>
                        <Button
                          size="sm"
                          onClick={() => setTransposeSteps((v) => v - 1)}
                        >
                          – Semitono
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => setTransposeSteps((v) => v + 1)}
                        >
                          + Semitono
                        </Button>
                      </Flex>
                    </Flex>
                  )}

                  {/* IMAGEN */}
                  {song.image && (
                    <Flex
                      mb={4}
                      p={3}
                      bg="gray.50"
                      borderRadius="md"
                      align="center"
                    >
                      <Image
                        boxSize="80px"
                        objectFit="cover"
                        borderRadius="md"
                        src={song.image}
                        alt={song.name}
                        mr={4}
                      />
                      <Box>
                        <Heading size="sm">{song.name}</Heading>
                        <Text fontStyle="italic" fontSize="sm">
                          {song.author}
                        </Text>
                      </Box>
                    </Flex>
                  )}

                  {/* LETRA / ACORDES */}
                  <Box
                    bg="white"
                    p={4}
                    borderRadius="md"
                    border="1px solid"
                    borderColor="gray.200"
                  >
                    {role === "musico" && song.lyrics_chords ? (
                      song.lyrics_chords.map((line, index) => (
                        <Box key={index} mb={4}>
                          {/* ACORDES */}
                          <Flex gap={2} wrap="wrap">
                            {line.chords.map((chord, i) => (
                              <Text
                                key={i}
                                fontSize="xs"
                                fontWeight="bold"
                                color="blue.600"
                              >
                                {transposeChord(chord, transposeSteps)}
                              </Text>
                            ))}
                          </Flex>

                          {/* LETRA */}
                          <Text fontSize="sm">{line.text}</Text>
                        </Box>
                      ))
                    ) : (
                      <Text whiteSpace="pre-line" fontSize="sm">
                        {song.lyrics}
                      </Text>
                    )}
                  </Box>
                </CardBody>

                {/* BOTÓN OCULTAR (DESKTOP) */}
                {buttonPlacement === "bottom" && (
                  <CardFooter justify="flex-end">
                    <Button size="sm" onClick={() => setExpandedSong(null)}>
                      Ocultar letra
                    </Button>
                  </CardFooter>
                )}
              </Collapse>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
