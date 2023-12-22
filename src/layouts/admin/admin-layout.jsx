import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "./admin-sidebar";

const AdminLayout = ({ children }) => {
  return (
    <Box pos={"relative"}>
      <AdminSidebar />
      {children}
    </Box>
  );
};

export const adminLayout = (Component) => {
  return function withAdminLayout(props) {
    return (
      <AdminLayout>
        <Component {...props} />
      </AdminLayout>
    );
  };
};

export default AdminLayout;
