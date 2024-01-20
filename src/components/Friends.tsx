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
import { useQuery } from "react-query";
import { getFriends } from "../services/Getters";

const Friends = () => {
  const friends = useQuery({
    queryKey: "friends",
    queryFn: getFriends,
  });
  return (
    <>
      <Stat>
        <StatLabel>Amount to collect</StatLabel>
        <StatNumber>
          ${" "}
          {friends.isSuccess &&
            //@ts-ignore
            friends.data.reduce((acc, x) => acc + x.amount, 0)}
        </StatNumber>
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
            {friends.isSuccess &&
              //@ts-ignore
              friends.data.map((friend) => (
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
