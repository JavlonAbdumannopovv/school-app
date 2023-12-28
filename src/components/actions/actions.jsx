import { Button, HStack, Icon, useColorMode } from "@chakra-ui/react";
import React from "react";
import { PiWarningOctagonLight } from "react-icons/pi";
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Actions = ({
  warning = true,
  del = true,
  edit = true,
  delAction,
  editAction,
}) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <HStack>
      {warning && (
        <Button
          colorScheme="yellow"
          w={7}
          h={10}
          borderRadius={"full"}
          zIndex={1001}
        >
          <Icon
            as={PiWarningOctagonLight}
            fill={colorMode === "dark" ? "yellow.700" : "white"}
            fontWeight={"bold"}
            fontSize={18}
          />
        </Button>
      )}
      {del && (
        <Button
          colorScheme="red"
          w={7}
          h={10}
          borderRadius={"full"}
          onClick={delAction}
          zIndex={1000}
        >
          <Icon
            as={MdOutlineDelete}
            fill={colorMode === "dark" ? "red.700" : "white"}
            fontWeight={"bold"}
            fontSize={18}
          />
        </Button>
      )}
      {edit && (
        <Button
          colorScheme="blue"
          w={7}
          h={10}
          borderRadius={"full"}
          zIndex={1000}
          onClick={() => navigate(editAction)}
        >
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
