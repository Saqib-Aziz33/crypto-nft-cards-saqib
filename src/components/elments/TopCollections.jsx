import { Box, Heading, HStack, Link, Text } from "@chakra-ui/react";
import Slides from "./Slides";

function TopCollections() {
  return (
    <div className="top-collection">
      <HStack justifyContent="space-between">
        <Heading size="md" mb={4}>
          Top Collections
        </Heading>
        <Link>See All</Link>
      </HStack>
      <Slides />
    </div>
  );
}
export default TopCollections;
