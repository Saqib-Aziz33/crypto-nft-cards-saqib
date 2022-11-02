import {
  Box,
  Container,
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
import { AiFillCaretDown } from "react-icons/ai";

function Header() {
  return (
    <header className="header">
      <Box p={4}>
        <HStack
          gap={4}
          justifyContent="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex gap={4}>
            <img src="assets/logo.svg" alt="" />
            <Input
              type="search"
              rounded="3xl"
              placeholder="Search"
              className="search-bar"
            />
          </Flex>
          <HStack gap={4}>
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
            <Button colorScheme="telegram">Create</Button>
          </HStack>
        </HStack>
      </Box>
    </header>
  );
}
export default Header;
