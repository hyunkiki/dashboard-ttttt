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
  HStack,
  Image,
  Progress,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import apple from "../../assets/images/apple.svg";
import android from "../../assets/images/android.svg";
import window from "../../assets/images/Windows.svg";

const data = [
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 100,
  },
  {
    title: "Marketplace2",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
    ],
    number: 10,
    percentage: 30,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
  {
    title: "Marketplace",
    image: [
      {
        src: apple,
        alt: "apple",
      },
      {
        src: android,
        alt: "android",
      },
      {
        src: window,
        alt: "window",
      },
    ],
    number: 25.4,
    percentage: 75.5,
  },
];

const Deployment = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Development Table</Heading>
      </CardHeader>

      <CardBody py={2} px={5}>
        <TableContainer
          overflowX={"hidden"}
          overflowY={"auto"}
          maxHeight={"300px"}
        >
          <Table variant="simple" size={["sm", "md", "lg"]}>
            <TableCaption>Development Table</TableCaption>
            <Thead pos={"sticky"} top={0}>
              <Tr>
                <Th>Title</Th>
                <Th>Title</Th>
                <Th isNumeric>Title</Th>
                <Th>Title</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.title}</Td>
                  <Td>
                    <HStack spacing={1} alignItems={"center"}>
                      {item.image.map((images, i) => (
                        <Image key={i} src={images.src} alt={images.alt} />
                      ))}
                    </HStack>
                  </Td>
                  <Td isNumeric>{item.number}</Td>
                  <Td>
                    <Flex alignItems={"center"}>
                      <Box w="32px" textAlign={"right"}>
                        {" "}
                        {item.percentage}
                      </Box>
                      <Text variant="txt104" color="#666">
                        %
                      </Text>
                      <Progress w="30px" ml="10px" value={item.percentage} />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
  );
};

export default Deployment;
