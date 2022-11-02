import {
  Heading,
  Input,
  Box,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
} from "@chakra-ui/react";

function Sidebar() {
  return (
    <div className="sidebar-content">
      <Box className="item">
        <Heading size="md">Filter</Heading>
      </Box>
      <Accordion defaultIndex={[0, 2]} allowMultiple my={4}>
        <AccordionItem>
          <h2>
            <AccordionButton className="item">
              <Box flex="1" textAlign="left">
                Listing Type
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="item">
              <Checkbox>Buy Now</Checkbox>
            </div>
            <div className="item">
              <Checkbox>Auction</Checkbox>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className="item">
              <Box flex="1" textAlign="left">
                Curation
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="item">
              <Checkbox>Buy Now</Checkbox>
            </div>
            <div className="item">
              <Checkbox>Auction</Checkbox>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="item">
              <Box flex="1" textAlign="left">
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <HStack>
              <Text>$</Text>
              <Input bg="white" placeholder="Minimum" />
              <Text>-</Text>
              <Input bg="white" placeholder="Maximum" />
            </HStack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="item">
              <Box flex="1" textAlign="left">
                Collections
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="item">
              <Checkbox>Buy Now</Checkbox>
            </div>
            <div className="item">
              <Checkbox>Auction</Checkbox>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className="item">
              <Box flex="1" textAlign="left">
                Chains
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="item">
              <Checkbox>Buy Now</Checkbox>
            </div>
            <div className="item">
              <Checkbox>Auction</Checkbox>
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton className="item">
              <Box flex="1" textAlign="left">
                Configure
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="item">
              <Checkbox>Buy Now</Checkbox>
            </div>
            <div className="item">
              <Checkbox>Auction</Checkbox>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
export default Sidebar;
