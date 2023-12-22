import {
  Avatar,
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config/colors";
import { FiLogOut } from "react-icons/fi";

const AdminSidebar = () => {
  return (
    <Stack
      pos={"fixed"}
      top={0}
      left={0}
      h={"100vh"}
      w={"280px"}
      p={5}
      spacing={5}
      backgroundColor={useColorModeValue(
        colors.primary.light,
        colors.primary.dark
      )}
    >
      <HStack>
        <Avatar />
        <HStack>
          <Stack>
            <Text fontSize={20}>Ahad Kadirov</Text>
            <Text color={"blue.500"}>O`qituvchi</Text>
          </Stack>
          <Icon as={FiLogOut} />
        </HStack>
      </HStack>
    </Stack>
  );
};

export default AdminSidebar;
