import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { adminLayout } from "../layouts/admin/admin-layout";
import Header from "../layouts/header/header";
import { colors } from "../config/colors";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { oqituvchilar } from "../config/data";

const ClassAdd = () => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([...oqituvchilar]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredTeachers = oqituvchilar.filter((teacher) =>
      `${teacher.ism.toLowerCase()} ${teacher.familiya.toLowerCase()}`.includes(
        value
      )
    );

    setSearchResults(filteredTeachers);
  };

  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.dark
  );
  return (
    <Stack spacing={5}>
      <Header title={"Sinf qo`shish"} />
      <Card bg={secondary} borderRadius={"xl"} boxShadow={"2xl"} pb={120}>
        <CardBody>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaAngleDown />}
              variant={"outline"}
              colorScheme={colorScheme}
            >
              O`qituvchini kiriting
            </MenuButton>
            <MenuList
              bg={secondary}
              boxShadow={"lg"}
              px={2}
              w={"360px"}
              h={"260px"}
              overflowY={"scroll"}
            >
              <HStack borderRadius={"lg"} bg={base} px={3} w={"full"}>
                <Input
                  fontSize={15}
                  type="search"
                  placeholder={t("qidirish")}
                  bg={"transparent"}
                  border={"none"}
                  focusBorderColor="transparent"
                  p={0}
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Box w={"1px"} h={6} bg={"gray"}></Box>
                <Icon
                  as={IoSearch}
                  fontSize={20}
                  fill={"gray"}
                  cursor={"pointer"}
                />
              </HStack>
              {searchResults.map((item) => (
                <HStack key={item.id} gap={2} mt={2}>
                  <Checkbox
                    w={5}
                    h={5}
                    colorScheme={colorScheme}
                    borderColor={`${colorScheme}.500`}
                  ></Checkbox>
                  <HStack w={"full"} justifyContent={"space-between"}>
                    <HStack>
                      <Avatar src={item.img} w={"25px"} h={"25px"} />
                      <Text fontSize={13}>
                        {item.ism} {item.familiya}
                      </Text>
                    </HStack>
                    <Text fontSize={12} color={`${colorScheme}.500`}>
                      {item.fan}
                    </Text>
                  </HStack>
                </HStack>
              ))}
            </MenuList>
          </Menu>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default adminLayout(ClassAdd);
