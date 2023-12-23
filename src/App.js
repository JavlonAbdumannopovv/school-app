import { adminLayout } from "./layouts/admin/admin-layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./pages/classes";
import Teachers from "./pages/teachers";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { colors } from "./config/colors";

function App() {
  return (
    <Box
      bg={useColorModeValue(colors.base.light, colors.base.dark)}
      pos={"absolute"}
      w={"100%"}
      h={"100vh"}
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/sinflar" element={<Classes />} />
          <Route path="/oqituvchilar" element={<Teachers />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default adminLayout(App);
