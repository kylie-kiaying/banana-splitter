import React, { useState } from 'react';
import { 
  Box, Button, Flex, Heading, Text, VStack, HStack, IconButton, 
  useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalFooter, ModalBody, ModalCloseButton, Input, Tag, TagLabel, TagCloseButton 
} from '@chakra-ui/react';
import { AddIcon, SmallAddIcon } from '@chakra-ui/icons';

// Original mock data for the trips
const originalTrips = [
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tripName, setTripName] = useState('');
  const [currency, setCurrency] = useState('');
  const [friends, setFriends] = useState<string[]>([]);
  const [friendName, setFriendName] = useState('');
  const [trips, setTrips] = useState(originalTrips); // Use state for trips including the original mock data

  const handleFriendSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && friendName) {
      setFriends([...friends, friendName]);
      setFriendName(''); // Clear the input after adding to the list
    }
  };

  const removeFriend = (index: number) => {
    setFriends(friends.filter((_, i) => i !== index));
  };

  // Add handlers for tripName, currency changes and submission of the new trip...

  return (
    <VStack spacing={4} align="stretch" mt={8}>
      <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid" onClick={onOpen}>
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

      {/* Modal for adding new trip */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Trip</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Input 
                placeholder="Trip Name" 
                value={tripName} 
                onChange={(e) => setTripName(e.target.value)}
              />
              <Input 
                placeholder="Currency (e.g. SGD, MYR, USD)" 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
              />
              <Input 
                placeholder="Add friends involved" 
                value={friendName}
                onChange={(e) => setFriendName(e.target.value)}
                onKeyDown={handleFriendSubmit}
              />
              <HStack spacing={2}>
                {friends.map((name, index) => (
                  <Tag size="lg" key={index} borderRadius="full">
                    <TagLabel>{name}</TagLabel>
                    <TagCloseButton onClick={() => removeFriend(index)} />
                  </Tag>
                ))}
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Add Trip</Button> {/* Implement the actual add trip logic */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default TripsTab;
