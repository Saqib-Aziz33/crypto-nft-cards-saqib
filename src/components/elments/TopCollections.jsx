import { Heading, HStack, Link } from "@chakra-ui/react";
import Slides from "./Slides";

function TopCollections() {
  return (
    <div className="top-collection">
      <HStack justifyContent="space-between" px={4}>
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
