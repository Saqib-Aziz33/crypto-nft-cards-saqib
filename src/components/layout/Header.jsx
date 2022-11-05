import {
  Box,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiOutlineBars } from "react-icons/ai";

function Header() {
  return (
    <header className="header">
      <Box p={4}>
        <HStack
          gap={4}
          justifyContent="space-between"
          // flexDir={{ base: "column", md: "row" }}
        >
          <Flex gap={4}>
            <img src="/assets/logo.svg" alt="" />
            <Input
              w="300px"
              type="search"
              rounded="3xl"
              placeholder="Search"
              className="search-bar"
              display={{ base: "none", md: "block" }}
            />
          </Flex>
          <HStack gap={4} display={{ base: "none", md: "flex" }}>
            <Link to="/marketplace" className="active">
              Marketplace
            </Link>
            <Link to="/">Drops</Link>
            <Box>
              <Menu>
                <MenuButton as="button">
                  Actions
                  <span style={{ display: "inline", verticalAlign: "sub" }}>
                    <AiFillCaretDown style={{ display: "inline" }} />
                  </span>
                </MenuButton>
                <MenuList color="black">
                  <MenuItem>Download</MenuItem>
                  <MenuItem>Create a Copy</MenuItem>
                  <MenuItem>Mark as Draft</MenuItem>
                  <MenuItem>Delete</MenuItem>
                  <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Button colorScheme="cyan" color="white">
              Create
            </Button>
          </HStack>
          <Button colorScheme="cyan" display={{ base: "block", md: "none" }}>
            <AiOutlineBars size={25} style={{ color: "#fff" }} />
          </Button>
        </HStack>
      </Box>
    </header>
  );
}
export default Header;
