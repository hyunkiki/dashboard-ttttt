import React from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Th,
  Tbody,
  Td,
  Tr,
  TableContainer,
  TableCaption,
  Thead,
  Table,
} from "@chakra-ui/react";
const Deployment = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Development Table</Heading>
      </CardHeader>

      <CardBody>
        <TableContainer>
          <Table variant="simple" size={["sm", "md", "lg"]}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th isNumeric>Title</Th>
                <Td>Title</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>MarketPlace</Td>
                <Td>icon</Td>
                <Td isNumeric>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
              <Tr>
                <Td>MarketPlace</Td>
                <Td>icon</Td>
                <Td isNumeric>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
              <Tr>
                <Td>MarketPlace</Td>
                <Td>icon</Td>
                <Td isNumeric>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
              <Tr>
                <Td>MarketPlace</Td>
                <Td>icon</Td>
                <Td isNumeric>25.4</Td>
                <Td>75.5%</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Deployment;
