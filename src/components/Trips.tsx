import { AddIcon, SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { getTrips } from "../services/Getters";

// Mock data for the trips. Replace with real data from backend later

const TripsTab: React.FC = () => {
  const trips = useQuery({
    queryKey: "trips",
    queryFn: getTrips,
  });

  return (
    <VStack spacing={4} align="stretch">
      <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
        Add New Trip
      </Button>

      {trips.isSuccess &&
        // @ts-ignore
        trips.data.map((trip) => (
          <Box
            key={trip.id}
            p={5}
            shadow="md"
            borderWidth="1px"
            borderRadius="lg"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <VStack align="stretch">
                <Heading fontSize="xl">{trip.name}</Heading>
                <HStack>
                  <Text fontWeight="bold">Participants:</Text>
                  <Text>{trip.participants.join(", ")}</Text>
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
