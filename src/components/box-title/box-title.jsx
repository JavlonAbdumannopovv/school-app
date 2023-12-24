import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../config/colors";

const BoxTitle = ({ title, subtitle }) => {
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.light
  );
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={15} color={`${colorScheme}.500`}>
        {title}
      </Text>
      <Text fontSize={13}>{subtitle}</Text>
    </Box>
  );
};

export default BoxTitle;
