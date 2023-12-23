import { Button, HStack, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import { PiWarningOctagonLight } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";

const Actions = ({ warning = true, del = true, edit = true }) => {
  const { colorMode } = useColorMode();
  return (
    <HStack>
      {warning && (
        <Button colorScheme="yellow" w={7} h={10} borderRadius={"full"}>
          <Icon
            as={PiWarningOctagonLight}
            fill={colorMode === "dark" ? "yellow.700" : "white"}
            fontWeight={"bold"}
            fontSize={18}
          />
        </Button>
      )}
      {del && (
        <Button colorScheme="red" w={7} h={10} borderRadius={"full"}>
          <Icon
            as={MdOutlineDelete}
            fill={colorMode === "dark" ? "red.700" : "white"}
            fontWeight={"bold"}
            fontSize={18}
          />
        </Button>
      )}
      {edit && (
        <Button colorScheme="blue" w={7} h={10} borderRadius={"full"}>
          <Icon
            as={MdOutlineEdit}
            fill={colorMode === "dark" ? "blue.700" : "white"}
            fontWeight={"bold"}
            fontSize={18}
          />
        </Button>
      )}
    </HStack>
  );
};

export default Actions;
