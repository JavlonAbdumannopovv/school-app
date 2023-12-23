import {
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { colors } from "../../config/colors";
import { FiLogOut } from "react-icons/fi";
import { adminNavigation } from "../../config/constants";
import { useTranslation } from "react-i18next";

const AdminSidebar = () => {
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.dark
  );
  const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
  const [pathname, setPathname] = useState("/sinflar");
  const { t } = useTranslation();

  useEffect(() => {
    const pathname = window.location.pathname;
    setPathname(pathname);
  }, []);

  return (
    <Stack
      pos={"fixed"}
      top={0}
      left={0}
      h={"100vh"}
      w={"280px"}
      py={5}
      spacing={5}
      backgroundColor={primary}
      color={"white"}
    >
      <HStack px={5}>
        <Avatar />
        <HStack w={"full"} justifyContent={"space-between"}>
          <Box>
            <Text fontSize={20}>Ahad Kadirov</Text>
            <Text color={"blue.500"}>{t("oqituvchi")}</Text>
          </Box>
          <Box>
            <Icon fontSize={20} color={"blue.500"} as={FiLogOut} />
          </Box>
        </HStack>
      </HStack>
      <Divider />
      <Stack mt={5} spacing={5} alignItems={"start"}>
        {adminNavigation.map((item) => {
          const active = pathname.split("/")[1] === item.slug;
          return (
            <Link href={`/${item.slug}`} key={item.id}>
              <Button
                key={item.id}
                w={"200px"}
                justifyContent={"flex-start"}
                variant={active ? "solid" : "ghost"}
                colorScheme={colorScheme}
                pl={5}
                borderEndRadius={"3xl"}
                borderStartRadius={0}
                leftIcon={<item.icon />}
              >
                {t(item.slug)}
              </Button>
            </Link>
          );
        })}
      </Stack>
      <Stack w={"full"} position={"absolute"} bottom={0} left={0} py={5}>
        <Divider />
        <Link href="/">
          <HStack
            w={"fit-content"}
            transition={"all .3s"}
            gap={2}
            ml={5}
            mt={5}
            _hover={{ color: "blue.500" }}
          >
            <Icon as={FiLogOut} />
            <Text>Chiqish</Text>
          </HStack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default AdminSidebar;
