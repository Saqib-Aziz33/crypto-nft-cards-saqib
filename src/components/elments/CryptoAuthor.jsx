import { HStack, Flex, Image, Text, Box } from "@chakra-ui/react";

function CryptoAuthor({ img, author, authorName }) {
  return (
    <HStack gap={2} alignItems="center">
      <Flex position="relative" justifyContent="center" alignItems="center">
        <Image src={img} height="45px" width="45px" rounded="full" />
        <Image
          src="/assets/tick.svg"
          position="absolute"
          bottom={0}
          right={-2}
        />
      </Flex>
      <Box>
        <Text color="#3d3d3d" fontSize="0.9rem">
          {author}
        </Text>
        <Text>{authorName}</Text>
      </Box>
    </HStack>
  );
}
export default CryptoAuthor;
