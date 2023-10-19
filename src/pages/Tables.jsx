import React from "react";
import {
  Grid,
  GridItem,
  //   Card,
  //   CardHeader,
  //   Heading,
  //   Text,
  //   Box,
  //   StackDivider,
  //   CardBody,
  //   Stack,
} from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import Deployment from "../components/tables/Development";
const Tables = () => {
  return (
    <Layout title="Tables" pagename={"Tables"}>
      <Grid
        h={"calc(100vh - 50px * 2 - 97px)"}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1} bg="yellow">
          <Deployment />
        </GridItem>
        <GridItem bg="papayawhip" />
        <GridItem bg="blue" />
        <GridItem bg="tomato" />
      </Grid>
    </Layout>
  );
};
export default Tables;
