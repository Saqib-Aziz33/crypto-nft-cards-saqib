// components
import TopCollections from "../components/elments/TopCollections";
import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box className="home-page" py={8} px={4}>
      <TopCollections />
    </Box>
  );
}
export default Home;
