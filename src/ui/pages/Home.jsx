import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Avatar,
  SimpleGrid,
  Card,
  CardBody,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { songs } from "@/data/songs";
import { announcements } from "@/data/announcements";

// ICONOS
import { FaBullhorn, FaMusic } from "react-icons/fa";
import { RiFileMusicFill } from "react-icons/ri";
import { BsBookmarkPlusFill, BsBookmarkFill } from "react-icons/bs";

export default function Home() {
  const [role, setRole] = useState(null);
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const navigate = useNavigate();

  const cardBg = useColorModeValue("white", "gray.700");
  const cardHover = useColorModeValue("gray.50", "gray.600");
  const sectionBg = useColorModeValue("gray.100", "gray.800");

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (!storedRole) return;
    setRole(storedRole);

    const storedFavs = JSON.parse(
      localStorage.getItem("favoriteSongs") || "[]",
    );
    setFavoriteSongs(storedFavs);
  }, []);

  const toggleFavorite = (songId) => {
    const updatedFavs = favoriteSongs.includes(songId)
      ? favoriteSongs.filter((id) => id !== songId)
      : [...favoriteSongs, songId];

    setFavoriteSongs(updatedFavs);
    localStorage.setItem("favoriteSongs", JSON.stringify(updatedFavs));
  };

  if (!role) return null;

  return (
    <Box>
      {/* HEADER */}
      <Box mb={8}>
        <Heading size="lg">Buenos días</Heading>
        <Text color="gray.500">
          Bienvenido, contenido para <b>{role}</b>
        </Text>
      </Box>

      {/* ================= ANUNCIOS ================= */}
      <Box mb={10} p={5} bg={sectionBg} borderRadius="lg">
        <Flex justify="space-between" align="center" mb={4}>
          <Flex align="center" gap={2}>
            <FaBullhorn />
            <Heading size="md">Últimos anuncios</Heading>
          </Flex>

          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/announcements")}
          >
            Ver todos
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {announcements.slice(0, 2).map((a) => (
            <Card
              key={a.id}
              bg={cardBg}
              _hover={{ bg: cardHover, transform: "translateY(-2px)" }}
              transition="all .2s"
            >
              <CardBody>
                <Heading size="sm" mb={1}>
                  {a.title}
                </Heading>
                {a.date && (
                  <Text fontSize="xs" color="gray.500" mb={2}>
                    {a.date}
                  </Text>
                )}
                <Text fontSize="sm" color="gray.600">
                  {a.description}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      {/* ================= FAVORITOS ================= */}
      <Box mb={10} p={5} bg={sectionBg} borderRadius="lg">
        <Flex justify="space-between" align="center" mb={4}>
          <Flex align="center" gap={2}>
            <FaMusic />
            <Heading size="md">Tus canciones favoritas</Heading>
          </Flex>

          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/songs")}
          >
            Ver todas
          </Button>
        </Flex>

        {favoriteSongs.length === 0 && (
          <Text color="gray.500">Aún no tienes canciones favoritas.</Text>
        )}

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {favoriteSongs.map((songId) => {
            const song = songs.find((s) => s.id === songId);
            if (!song) return null;

            return (
              <Card key={song.id} bg={cardBg}>
                <CardBody>
                  <Flex justify="space-between" align="center">
                    <Flex align="center" gap={3}>
                      <Avatar src={song.image} size="sm" />
                      <Box>
                        <Text fontWeight="medium">{song.name}</Text>
                        <Text fontSize="xs" color="gray.500">
                          {song.author}
                        </Text>
                      </Box>
                    </Flex>

                    <IconButton
                      size="sm"
                      aria-label="Quitar de favoritos"
                      colorScheme="red"
                      icon={<BsBookmarkFill />}
                      onClick={() => toggleFavorite(song.id)}
                    />
                  </Flex>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>

      {/* ================= EXPLORAR ================= */}
      <Box mb={10} p={5} bg={sectionBg} borderRadius="lg">
        <Flex justify="space-between" align="center" mb={4}>
          <Flex align="center" gap={2}>
            <RiFileMusicFill />
            <Heading size="md">Explorar canciones</Heading>
          </Flex>

          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/songs")}
          >
            Ver todas
          </Button>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          {songs.slice(0, 4).map((song) => {
            const isFav = favoriteSongs.includes(song.id);

            return (
              <Card key={song.id} bg={cardBg}>
                <CardBody>
                  <Flex justify="space-between" align="center">
                    <Flex align="center" gap={3}>
                      <Avatar src={song.image} size="sm" />
                      <Box>
                        <Text fontWeight="medium">{song.name}</Text>
                        <Text fontSize="xs" color="gray.500">
                          {song.author}
                        </Text>
                      </Box>
                    </Flex>

                    <IconButton
                      size="sm"
                      aria-label="Favorito"
                      colorScheme={isFav ? "red" : "blue"}
                      icon={isFav ? <BsBookmarkFill /> : <BsBookmarkPlusFill />}
                      onClick={() => toggleFavorite(song.id)}
                    />
                  </Flex>
                </CardBody>
              </Card>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
