import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { colors } from "../../config/colors";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";
import useClass from "../../store/classes.store";

const ListClassAdd = ({ isStudent, addedClass, setAddedClass }) => {
  const [deletedStudents, setDeletedStudents] = useState([]);
  const [deletedFanlar, setDeletedFanlar] = useState([]);
  const { students, fanlar } = useClass();

  const currentStudents = addedClass.oquvchilar.map((item) => {
    return students.find((c) => c.id === item);
  });

  const currentFanlar = addedClass.fanlar.map((item) => {
    return fanlar.find((c) => c.id === item.fanId);
  });

  const currentItem = isStudent
    ? addedClass.oquvchilar.map((item) => {
        return students.find((c) => c.id === item);
      })
    : addedClass.fanlar.map((item) => {
        return fanlar.find((c) => c.id === item.fanId);
      });

  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(
    isStudent
      ? addedClass.oquvchilar.map((item) => {
          return students.find((c) => c.id === item);
        })
      : [...currentFanlar]
  );

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredFanlar = currentFanlar.filter((c) =>
      c.nomi.toLowerCase().includes(value)
    );
    const filteredStudents = currentStudents.filter((student) =>
      `${student.ism.toLowerCase()} ${student.familiya.toLowerCase()}`.includes(
        value
      )
    );

    setSearchResults(isStudent ? filteredStudents : filteredFanlar);
  };

  // colors
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.dark
  );

  return (
    <Stack bg={base} borderRadius={"xl"} boxShadow={"lg"} w={"355px"}>
      <Box p={5} pb={2}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={15}>
            {isStudent &&
              `${addedClass.oquvchilar.length} nafar o'quvchilar ro'yxati`}
            {!isStudent && "Fanlar ro'yxati"}
          </Text>
          {isStudent ? (
            <IconButton
              icon={<RiDeleteBin6Line />}
              colorScheme={"red"}
              cursor={"pointer"}
              fontSize={25}
              isDisabled={deletedStudents.length > 0 ? false : true}
              onClick={() => {
                setAddedClass((prev) => {
                  return {
                    ...prev,
                    oquvchilar: prev.oquvchilar.filter(
                      (student) => !deletedStudents.includes(student)
                    ),
                  };
                });
                setDeletedStudents([]);
              }}
            />
          ) : (
            <IconButton
              icon={<RiDeleteBin6Line />}
              colorScheme={"red"}
              cursor={"pointer"}
              fontSize={25}
              isDisabled={deletedFanlar.length > 0 ? false : true}
              onClick={() => {
                setAddedClass((prev) => {
                  return {
                    ...prev,
                    fanlar: prev.fanlar.filter(
                      (fan) => !deletedFanlar.includes(fan.fanId)
                    ),
                  };
                });
                setDeletedFanlar([]);
              }}
            />
          )}
        </HStack>
      </Box>
      <Divider />
      <Stack px={5} pt={2} pb={5}>
        <HStack
          borderRadius={"lg"}
          bg={secondary}
          px={3}
          w={"full"}
          mb={2}
          display={"none"}
        >
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
          <Icon as={IoSearch} fontSize={20} fill={"gray"} cursor={"pointer"} />
        </HStack>
        {currentItem.map((item) => (
          <HStack
            key={item.id}
            gap={2}
            p={2}
            cursor={"pointer"}
            bg={"transparent"}
            _hover={{ background: secondary }}
            transition={"all .3s ease"}
            onClick={
              isStudent
                ? () => {
                    setDeletedStudents((prev) => {
                      return prev.length === 0
                        ? [...prev, item.id]
                        : prev.length > 0 && prev.find((c) => c === item.id)
                        ? prev.filter((c) => c !== item.id)
                        : prev.length > 0 &&
                          !prev.find((c) => c === item.id) && [
                            ...prev,
                            item.id,
                          ];
                    });
                  }
                : () => {
                    setDeletedFanlar((prev) => {
                      return prev.length > 0 && prev.find((c) => c === item.id)
                        ? prev.filter((c) => c !== item.id)
                        : prev.length > 0 && !prev.find((c) => c === item.id)
                        ? [...prev, item.id]
                        : prev.length === 0 && [...prev, item.id];
                    });
                  }
            }
          >
            <Checkbox
              isChecked={
                isStudent
                  ? deletedStudents.find((c) => c === `${item.id}`)
                  : deletedFanlar.find((c) => c === `${item.id}`)
              }
              w={5}
              h={5}
              colorScheme={colorScheme}
              borderColor={`${colorScheme}.500`}
            ></Checkbox>
            <HStack w={"full"} justifyContent={"space-between"}>
              <HStack>
                {isStudent && <Avatar src={item.img} w={"25px"} h={"25px"} />}
                <Text fontSize={14}>
                  {isStudent ? `${item.ism} ${item.familiya}` : item.nomi}
                </Text>
              </HStack>
              <Text fontSize={14} color={`${colorScheme}.500`}>
                {isStudent ? item.gender : item.turi}
              </Text>
            </HStack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ListClassAdd;
