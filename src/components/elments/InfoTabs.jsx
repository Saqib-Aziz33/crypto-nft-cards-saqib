import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import CryptoAuthor from "./CryptoAuthor";
import { AiOutlineCopy } from "react-icons/ai";

function InfoTabs() {
  return (
    <Tabs colorScheme="cyan">
      <TabList>
        <Tab fontWeight="bold">OwnerShip</Tab>
        <Tab fontWeight="bold">History</Tab>
        <Tab fontWeight="bold">Offers</Tab>
      </TabList>

      <TabPanels mt={4}>
        <TabPanel>
          <HStack justifyContent="space-between">
            <CryptoAuthor
              img="/favicon.webp"
              author="Owner"
              authorName="bigmac88420"
            />
            <Text color="#0000008a">
              cro1m9sd54gn64... <AiOutlineCopy style={{ display: "inline" }} />
            </Text>
          </HStack>
        </TabPanel>
        <TabPanel>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            maiores, similique laudantium suscipit nobis architecto inventore in
            sed alias excepturi. Sapiente distinctio dolores deserunt ipsam
            aliquam amet perferendis eos numquam?
          </Text>
        </TabPanel>
        <TabPanel>
          <Text textAlign="center" color="gray.400">
            No history available
          </Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
export default InfoTabs;
