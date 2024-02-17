import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { colors } from "../../config/colors";
import { IoSearch } from "react-icons/io5";
import { language } from "../../config/constants";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import UzbIcons from "../../assets/icons/uzb";
import { useTranslation } from "react-i18next";
import EngIcons from "../../assets/icons/eng";
import RusIcon from "../../assets/icons/rus";
import { useNavigate } from "react-router-dom";

const Header = ({ title, backIcon = true }) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const { toggleColorMode, colorMode } = useColorMode();
  const navigate = useNavigate();

  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {}, []);
  return (
    <HStack
      w={"full"}
      borderRadius={"full"}
      backgroundColor={secondary}
      p={3}
      px={5}
      justifyContent={"space-between"}
      boxShadow={"lg"}
    >
      <HStack
        cursor={"pointer"}
        onClick={
          backIcon
            ? () => navigate(-1)
            : () => {
                "";
              }
        }
      >
        {backIcon && <Icon as={IoChevronBackSharp} />}
        <Text>{t(title)}</Text>
      </HStack>
      <HStack>
        <HStack borderRadius={"3xl"} bg={base} px={4}>
          <Icon as={IoSearch} fontSize={20} fill={"gray"} />
          <Box w={"1px"} h={6} bg={"gray"}></Box>
          <Input
            fontSize={15}
            type="search"
            placeholder={t("qidirish")}
            bg={"transparent"}
            border={"none"}
            focusBorderColor="transparent"
            p={0}
          />
        </HStack>
        <IconButton
          aria-label="color-mode"
          icon={colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
          colorScheme={"gray"}
          variant={"solid"}
          borderRadius={"full"}
          onClick={toggleColorMode}
        />
        <Menu placement="bottom">
          <MenuButton
            as={Button}
            textTransform={"capitalize"}
            colorScheme={"gray"}
            variant={"ghost"}
            display={{ base: "none", md: "block" }}
          >
            {i18n.resolvedLanguage === "uz" && (
              <Icon as={UzbIcons} w={10} h={10} mb={2} />
            )}
            {i18n.resolvedLanguage === "ru" && (
              <Icon as={RusIcon} w={10} h={10} mb={2} />
            )}
            {i18n.resolvedLanguage === "en" && (
              <Icon as={EngIcons} w={10} h={10} mb={2} />
            )}
            <Icon as={BiChevronDown} w={7} h={7} pos={"relative"} top={1} />
          </MenuButton>
          <MenuList p={0}>
            {language.map((item) => (
              <MenuItem
                key={item.lng}
                icon={<item.icon />}
                backgroundColor={
                  item.lng === i18n.resolvedLanguage ? "facebook.500" : ""
                }
                color={item.lng === i18n.resolvedLanguage ? "white" : ""}
                onClick={() => changeLanguage(item.lng)}
              >
                {item.nativeLng}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </HStack>
  );
};

export default Header;
