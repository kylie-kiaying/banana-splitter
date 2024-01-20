import React from 'react';
import { Flex, Box, Text, Link, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="yellow.400"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Image
          src="/path-to-your-logo.png" // Replace with your logo path
          alt="BananaSplit Logo"
          boxSize="2rem"
          mr={2}
        />
        <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
          BananaSplit
        </Text>
      </Flex>

      <Box
        display={{ base: 'block', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <Link as={ReactRouterLink} to="/" padding="1rem" color="white" _hover={{ textDecoration: 'none' }}>
          Overview
        </Link>
        <Link as={ReactRouterLink} to="/friends" padding="1rem" color="white" _hover={{ textDecoration: 'none' }}>
          Trips
        </Link>
        <Link as={ReactRouterLink} to="/trips" padding="1rem" color="white" _hover={{ textDecoration: 'none' }}>
          Friends
        </Link>
        <Link as={ReactRouterLink} to="/profile" padding="1rem" color="white" _hover={{ textDecoration: 'none' }}>
          Profile
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
