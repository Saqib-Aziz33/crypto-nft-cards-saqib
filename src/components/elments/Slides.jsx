import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import data from "../../data/top_collections.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slides() {
  return (
    <div className="slides">
      <Carousel responsive={responsive} infinite={true}>
        {data.map((item, i) => (
          <Box className="slide-item" key={i}>
            <div
              className="bg"
              style={{ backgroundImage: `url('${item.img}')` }}
            />
            <HStack className="info" p={4}>
              <Image h={30} w={30} src={item.aimg} rounded="full" />
              <Box maxW="100px" textOverflow="ellipsis">
                <Text>{item.title}</Text>
              </Box>
              <Image src="assets/tick.svg" />
            </HStack>
          </Box>
        ))}
      </Carousel>
    </div>
  );
}
export default Slides;
