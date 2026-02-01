// src/components/tabs/RoleTabs.jsx
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

export default function RoleTabs({ role, children }) {
  const tabsByRole = {
    musico: ["Canción", "Tutorial", "Teoría"],
    voz: ["Letras", "Voces", "Tutorial"],
    director: ["Canción", "Teoría", "Anuncios"],
  };

  const tabs = tabsByRole[role] || [];

  return (
    <Tabs colorScheme="blue" variant="enclosed" mb={4}>
      <TabList>
        {tabs.map((tab) => (
          <Tab key={tab}>{tab}</Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.map((tab, index) => (
          <TabPanel key={tab}>
            {/* Renderizamos solo el contenido que venga desde el padre */}
            {children[tab] || <Box>Contenido de {tab} próximamente</Box>}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
