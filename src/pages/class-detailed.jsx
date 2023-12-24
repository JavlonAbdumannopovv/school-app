import React, { useState } from "react";
import { adminLayout } from "../layouts/admin/admin-layout";
import {
  Avatar,
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  Button,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Icon,
  Tbody,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Header from "../layouts/header/header";
import { TbNumber } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { talabalar } from "../config/data";
import { colors } from "../config/colors";
import useClass from "../store/classes.store";
import {
  TableFieldStudents,
  ClassDetailedModal,
  StudentInfo,
} from "../components";

const ClassesDetailed = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { students, removeClass } = useClass();
  const toast = useToast();
  const tableHead = useColorModeValue(
    colors.tableHead.light,
    colors.tableHead.dark
  );
  const border = useColorModeValue(colors.border.light, colors.border.dark);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );

  const deleteClass = () => {
    onClose();
    toast({
      title: '8"A"-sinf muvaffaqqiyatli o`chirildi!',
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Stack spacing={5}>
      <Header title="sinf_malumotlari" />
      <Stack gap={5}>
        <HStack alignItems={"flex-start"} justifyContent={"space-between"}>
          <Stack gap={10} pl={10}>
            <Heading>8"A"-sinf</Heading>
            <HStack alignItems={"flex-start"}>
              <Avatar w={"100px"} h={"100px"} />
              <Box mt={2}>
                <Text fontWeight={"bold"}>Muhammadrasul Olimov</Text>
                <Text color={"gray"}>Kurator</Text>
              </Box>
            </HStack>
          </Stack>
          <Stack>
            <Button colorScheme="telegram" borderRadius={"full"} px={10}>
              Tahrirlash
            </Button>
            <Button
              colorScheme="red"
              variant="solid"
              borderRadius={"full"}
              px={10}
              onClick={onOpen}
            >
              O`chirish
            </Button>
          </Stack>
        </HStack>
        <Divider />
        <Stack pl={10}>
          <HStack>
            <Text fontWeight={"bold"}>Tashkil qilindi: </Text>
            <Text>15.09.2022</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>Jami o`quvchi: </Text>
            <Text>20</Text>
          </HStack>
        </Stack>
      </Stack>
      <TableContainer boxShadow={"lg"} bg={secondary} borderRadius="xl">
        <Table size={"md"} border={"1px"} borderColor={border}>
          <Thead bg={tableHead} h={16}>
            <Tr fontSize={"30px"}>
              <Th>
                <Icon as={TbNumber} fontSize={20} />
              </Th>
              <Th>F.I.SH</Th>
              <Th>Telefon Nomer</Th>
              <Th>Hisob holati</Th>
              <Th>O`quvchi grantlari</Th>
              <Th>
                <Icon as={HiDotsHorizontal} fontSize={20} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, i) => (
              <TableFieldStudents ind={i + 1} student={student} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ClassDetailedModal
        title={"Sinf o`chirilishiga rozimisiz?"}
        isOpen={isOpen}
        onClose={onClose}
        btnAction={deleteClass}
      />

      <StudentInfo item={talabalar[0]} />
    </Stack>
  );
};

export default adminLayout(ClassesDetailed);
