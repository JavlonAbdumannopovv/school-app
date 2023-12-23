import React from "react";
import { adminLayout } from "../layouts/admin/admin-layout";
import { Heading, Stack } from "@chakra-ui/react";
import Header from "../layouts/header/header";

const Classes = () => {
  return (
    <Stack>
      <Header title="sinflar" backIcon={false} />
      <Heading>Classes</Heading>
    </Stack>
  );
};

export default adminLayout(Classes);
