import { Box, Heading } from "@chakra-ui/react";
import Slides from "./Slides";

function TopCollections() {
  return (
    <div className="top-collection">
      <Heading size="md" mb={4}>
        Top Collections
      </Heading>
      <Slides />
    </div>
  );
}
export default TopCollections;
