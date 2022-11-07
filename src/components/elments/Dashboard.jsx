import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import data from "../../data/crypto_data.json";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import SideDrawer from "./SideDrawer";

function Dashboard() {
  const [cryptos] = useState(data);

  return (
    <Box className="dashboard" py={8} px={{ base: 2, md: 4 }}>
      <Flex>
        <Box display={{ base: "none", md: "block" }} className="sidebar">
          <Sidebar />
        </Box>
        <Container
          maxW={2000}
          // 250px is sidebar width
          w={{ base: "100%", md: "calc(100% - 250px)" }}
          px={[0, 2, 4]}
        >
          {/* filterbar */}
          <HStack justify="space-between" className="filterbar">
            <Box visibility={{ base: "visible", md: "hidden" }}>
              <SideDrawer />
            </Box>
            <Menu>
              <MenuButton as="button">
                <Button bg="transparent" border="1px solid #fff" rounded="2xl">
                  Sort By
                  <AiFillCaretDown style={{ display: "inline" }} />
                </Button>
              </MenuButton>
              <MenuList color="black">
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {/* cards grid */}
          <Grid
            pt={8}
            className="cards"
            gap={4}
            gridTemplateColumns={{
              base: "repeat(1fr)",
              sm: "1fr 1fr",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
              "2xl": "repeat(4, 1fr)",
            }}
          >
            {cryptos.map((item, i) => (
              <GridItem className="card-item" key={i}>
                <Link to={`/crypto/${item.id}`}>
                  <Box
                    h={{
                      base: 400,
                      sm: 300,
                      xl: 400,
                    }}
                    className="bg"
                    bgImage={`url('${item.img}')`}
                  />
                  <Box p={4} bg="white" color="#000">
                    <HStack>
                      <Image
                        src={item.avatar}
                        height="20px"
                        width="20px"
                        rounded="full"
                      />
                      <Text fontSize="0.8rem" fontWeight="600">
                        {item.author}
                      </Text>
                      <Image src="assets/tick.svg" />
                    </HStack>
                    <Flex py={3} justifyContent="space-between">
                      <Heading size="sm">{item.name}</Heading>
                      <Tooltip label={item.type[1]} placement="top" hasArrow>
                        <Image src={`assets/${item.type[0]}.svg`} />
                      </Tooltip>
                    </Flex>
                    <Text fontSize="0.8rem">{item.status}</Text>
                    <HStack justifyContent="space-between" py={3}>
                      <HStack
                        w="70%"
                        bg="gray.100"
                        p={2}
                        rounded="md"
                        justifyContent="space-between"
                      >
                        <span>from</span>
                        <Text fontWeight="bold">${item.price}</Text>
                      </HStack>
                      <Box
                        w="20%"
                        py={2}
                        rounded="md"
                        textAlign="center"
                        color="blue.300"
                        bg="blue.50"
                        fontWeight="bold"
                      >
                        Buy
                      </Box>
                    </HStack>
                  </Box>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Flex>
    </Box>
  );
}
export default Dashboard;
