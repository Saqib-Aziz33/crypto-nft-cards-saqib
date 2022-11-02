import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <Box className="dashboard" py={8} px={4}>
      <Flex>
        <Box display={{ base: "none", md: "block" }} className="sidebar">
          <Sidebar />
        </Box>
        <Box
          w={{ base: "100%", md: "calc(100% - 300px)" }}
          pl={{ base: 0, md: 4 }}
        >
          <Flex className="filter-bar"></Flex>
        </Box>
      </Flex>
    </Box>
  );
}
export default Dashboard;
