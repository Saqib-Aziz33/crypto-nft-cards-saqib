import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Grid,
  GridItem,
  Image,
  Spinner,
  Link as CLink,
  Box,
  Text,
  HStack,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import CryptoAuthor from "../components/elments/CryptoAuthor";
import data from "../data/crypto_data.json";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { GrShare } from "react-icons/gr";
import { AiOutlineHeart, AiFillEye, AiOutlineShareAlt } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import InfoTabs from "../components/elments/InfoTabs";

function CryptoInfo() {
  const { id } = useParams();
  const [cryptocard, setCrypto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCrypto(data.find((item) => item.id === id));
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="crypto">
      <Container maxW={1050} py={16}>
        <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={8}>
          <GridItem>
            <Image
              src={cryptocard.img}
              height="400px"
              width="100%"
              maxWidth="400px"
              mx="auto"
              objectFit="cover"
              rounded="xl"
            />
            <Box border="1px solid #0000002c" rounded="sm" mt={4} p={4}>
              <HStack as="a" href="/" justifyContent="space-between">
                <Text fontWeight="bold">View Crypoto.org</Text>
                <GrShare />
              </HStack>
            </Box>
          </GridItem>
          <GridItem p={2}>
            <CLink display="flex" alignItems="center" gap={2} color="blue.300">
              <HiArrowLeftCircle />
              <Link to="/">Back</Link>
            </CLink>
            <HStack my={4} justifyContent="space-between">
              <HStack>
                <AiOutlineHeart size={25} />
                <Text pr={4}>3406</Text>
                <AiFillEye size={25} />
                <Text pr={4}>554312</Text>
                <AiOutlineShareAlt size={25} />
                <Text>Share</Text>
              </HStack>
              <BsThreeDots size={25} />
            </HStack>
            <Text my={5}>
              Chain: <b>{cryptocard.type[1]}</b>{" "}
              <Image
                src={`/assets/${cryptocard.type[0]}.svg`}
                display="inline"
                verticalAlign="middle"
              />
            </Text>
            <HStack gap={16}>
              <CryptoAuthor
                img="/favicon.webp"
                author="creator"
                authorName="Crypto.com"
              />
              <CryptoAuthor
                img={cryptocard.avatar}
                author="collection"
                authorName={cryptocard.author}
              />
            </HStack>
            <Box mt={6}>
              <Text fontWeight="bold">8589 Editions Minted</Text>
              <HStack>
                <Heading as="h2" my={2}>
                  {cryptocard.name}
                </Heading>
                <Text
                  fontSize="0.8rem"
                  border="1px solid #0000002c"
                  p={2}
                  rounded="3xl"
                >
                  Marketplace
                </Text>
              </HStack>
              <Heading size="lg">${cryptocard.price}</Heading>
              <Text my={4}>
                Blasters charged and good boi treats fully loaded. Agent SHIB is
                ready to head out! A 10,000-edition NFT available only in the
                Rewards Store.
              </Text>
              <HStack gap={2}>
                <Button
                  border="1px solid"
                  borderColor="blue.300"
                  color="blue.300"
                  bg="transparent"
                >
                  Art
                </Button>
                <Button
                  border="1px solid"
                  borderColor="blue.300"
                  color="blue.300"
                  bg="transparent"
                >
                  Crypto
                </Button>
              </HStack>
            </Box>

            <Box mt={6}>
              <InfoTabs />
            </Box>
          </GridItem>

          <GridItem
            colSpan={{ base: "unset", md: "2" }}
            bg="white"
            position="sticky"
            bottom={4}
            p={4}
            rounded="sm"
            shadow="xl"
            border="1px solid #0000001a"
          >
            <HStack justifyContent={{ base: "center", md: "space-between" }}>
              <HStack display={{ base: "none", md: "flex" }}>
                <Image height="80px" src={cryptocard.img} />
                <Stack>
                  <Text fontSize="sm">Edition 1873 of 10000</Text>
                  <Heading size="md">{cryptocard.name}</Heading>
                </Stack>
              </HStack>

              <Box>
                <Button
                  colorScheme="cyan"
                  color="#fff"
                  size={{ base: "md", sm: "lg" }}
                >
                  Buy for ${cryptocard.price}
                </Button>
                <Button
                  variant="outline"
                  colorScheme="cyan"
                  size={{ base: "md", sm: "lg" }}
                  ml={4}
                >
                  Make an offer
                </Button>
                <Text color="#0000008a" fontSize="sm" mt={2}>
                  A 2% royalty goes to the creator for future resale
                </Text>
              </Box>
            </HStack>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}
export default CryptoInfo;
