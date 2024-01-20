import React from 'react';
import { Box, Button, Flex, Heading, Text, VStack, HStack, IconButton } from '@chakra-ui/react';
import { AddIcon, SmallAddIcon } from '@chakra-ui/icons';

// Mock data for the trips. Replace with real data from backend later
const trips = [
  {
    id: 1,
    name: 'Beach Getaway',
    participants: ['Alice', 'Bob'],
    amountOwed: 85,
  },
  {
    id: 2,
    name: 'Mountain Hike',
    participants: ['Charlie', 'Dave'],
    amountOwed: 120,
  },
  // Add more trips as needed
];

const TripsTab: React.FC = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
        Add New Trip
      </Button>

      {trips.map((trip) => (
        <Box key={trip.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Flex justifyContent="space-between" alignItems="center">
            <VStack align="stretch">
              <Heading fontSize="xl">{trip.name}</Heading>
              <HStack>
                <Text fontWeight="bold">Participants:</Text>
                <Text>{trip.participants.join(', ')}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">You owe:</Text>
                <Text>${trip.amountOwed.toFixed(2)}</Text>
              </HStack>
            </VStack>
            <IconButton
              aria-label={`Add cost for ${trip.name}`}
              icon={<SmallAddIcon />}
              colorScheme="green"
              variant="outline"
            />
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};

export default TripsTab;
