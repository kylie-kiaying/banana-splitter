import * as React from "react";
import { Box, Flex, Text, Divider, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const HomePaymentOverview: React.FC = () => {
  return (
    <Box mt={8} display="flex" flexDirection="column" alignItems="center" width="full">
      <Flex
        direction={['column', 'row']} // Stack vertically on small screens, horizontally on larger
        p={4}
        bg="yellow.100"
        borderRadius="lg"
        boxShadow="md"
        justifyContent="space-around" // This ensures even spacing around items
        alignItems="center"
        mb={4}
        width={['90%', '80%', '70%']} // Responsive width
      >
        <Box textAlign="center" flex="1">
          <Text fontSize="lg" fontWeight="bold">
            You are owed
          </Text>
          <Text fontSize="3xl" fontWeight="extrabold" color="green.500">
            $200
          </Text>
        </Box>
        <Divider orientation="vertical" height="60px" borderColor="gray.400" display={['none', 'block']} />
        <Box textAlign="center" flex="1">
          <Text fontSize="lg" fontWeight="bold">
            You owe
          </Text>
          <Text fontSize="3xl" fontWeight="extrabold" color="red.500">
            $120
          </Text>
        </Box>
      </Flex>

      <Tabs isFitted variant="enclosed" mt={4} width="full">
        <TabList>
          <Tab>You Owe</Tab>
          <Tab>You Are Owed</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* Placeholder for list of trips you owe */}
            <Text>No trips found.</Text>
          </TabPanel>
          <TabPanel>
            {/* Placeholder for list of trips you are owed */}
            <Text>No trips found.</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default HomePaymentOverview;
