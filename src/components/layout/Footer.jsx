import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord, BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <Box as="footer" className="footer" px={4} py={8}>
      <Container maxW="1400px">
        <Flex
          gap={3}
          alignItems={{ base: "start", md: "flex-end" }}
          justifyContent="space-between"
          direction={{ base: "column", md: "row" }}
        >
          <Box>
            <HStack gap={4} className="icons">
              <AiOutlineInstagram />
              <AiOutlineTwitter />
              <BsDiscord />
              <BsTelegram />
            </HStack>
            <Text fontSize="sm" mt={4}>
              Copyright © 2022 Crypto.com. All rights reserved
            </Text>
          </Box>
          <HStack fontSize="sm" color="gray.400" gap={4}>
            <a href="#">Help Center</a>
            <a href="#">Blog</a>
            <a href="#">T&C</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Cookies</a>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
export default Footer;
