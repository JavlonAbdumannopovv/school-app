import { Box } from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "./admin-sidebar";

const AdminLayout = ({ children }) => {
  return (
    <Box pos={"relative"}>
      <AdminSidebar />
      <Box pl={"280px"} py={5}>
        <Box px={5} w={"full"}>
          {children}
        </Box>
      </Box>
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
