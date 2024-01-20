import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const data = [
  {
    name: "John Doe",
    amount: 312,
    key: 1,
  },
  {
    name: "Jonathan Little",
    amount: -312,
    key: 2,
  },
  {
    name: "Samantha ",
    amount: -401,
    key: 3,
  },
];

const Friends = () => {
  return (
    <>
      <Stat>
        <StatLabel>Amount to collect</StatLabel>
        <StatNumber>$ {data.reduce((acc, x) => acc + x.amount, 0)}</StatNumber>
      </Stat>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Friend</Th>
              <Th isNumeric>Amount Owed</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((friend) => (
              <Tr key={friend.key}>
                <Td>{friend.name}</Td>
                <Td color={friend.amount >= 0 ? "Green" : "Red"} isNumeric>
                  {friend.amount >= 0 ? "+" : ""}
                  {friend.amount}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Friends;
