import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from "@chakra-ui/react";

import dayjs from "dayjs";
import "dayjs/locale/es";

export function LaunchItem(launch) {
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2xl">
          Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
        </Text>
        <Spacer />
        <Tag p={4} colorScheme={launch.launch_succes ? "green" : "red"}>
          {launch.launch_succes ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex>
        <Icon as={HiCalendar} color="gray.500" />
        <Text fontSize="sm" ml={1} color="gray.500">
          {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
        </Text>
      </Flex>

      <Button mt={2} colorScheme="purple">
        {" "}
        More Details
      </Button>
    </Box>
  );
}
