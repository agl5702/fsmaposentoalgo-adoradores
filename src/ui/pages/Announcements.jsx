// src/ui/pages/Announcements.jsx
import {
  Box,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Heading,
} from "@chakra-ui/react";
import { announcements } from "@/data/announcements";

function Announcements() {
  const role = localStorage.getItem("role");

  return (
    <Box>
      {/* Encabezado */}
      <Text fontSize="2xl" fontWeight="bold" mb={2}>
        Anuncios 📢
      </Text>

      {/* Breadcrumb */}

      {/* Grid de anuncios */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {announcements.map((a) => (
          <Card key={a.id} borderRadius="md" shadow="sm" p={4}>
            <CardBody>
              <Heading size="md" mb={2}>
                {a.title}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>
                {a.date}
              </Text>
              <Text fontSize="sm" color="gray.700">
                {a.description}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Announcements;
