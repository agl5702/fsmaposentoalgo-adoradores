import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function RoleBreadcrumb({ role }) {
  const itemsByRole = {
    musico: ["Canción", "Tutorial", "Teoría"],
    voz: ["Letra", "Voces", "Tutorial"],
    director: ["Canción", "Teoría", "Anuncios"],
  };

  return (
    <Breadcrumb
      separator={<ChevronRightIcon color="gray.400" />}
      mb={4}
      fontSize="sm"
    >
      {itemsByRole[role]?.map((item) => (
        <BreadcrumbItem key={item}>
          <BreadcrumbLink
            fontWeight="medium"
            color="blue.600"
            _hover={{ textDecoration: "none", color: "blue.800" }}
          >
            {item}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
