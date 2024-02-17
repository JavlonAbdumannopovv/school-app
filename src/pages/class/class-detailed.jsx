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
import Header from "../../layouts/header/header";
import { TbNumber } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { colors } from "../../config/colors";
import useClass from "../../store/classes.store";
import {
  TableFieldStudents,
  ClassDetailedModal,
  StudentInfo,
} from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { adminLayout } from "../../layouts/admin/admin-layout";
import { useTranslation } from "react-i18next";

const ClassesDetailed = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { students, removeClass, classes, teachers } = useClass();
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

  const { id } = useParams();
  const currentClass = classes.find((c) => `:${c.id}` === id);
  const currentStudents = students.filter((c) =>
    currentClass.oquvchilar.includes(c.id)
  );
  const navigate = useNavigate();
  const teacher = teachers.find((c) => c.id === currentClass.sinf_rahbar);

  const deleteClass = () => {
    removeClass(currentClass.id);
    navigate("/sinflar/");
    onClose();
    toast({
      title: `${currentClass.sinf} ${t("ochirish_title")}`,
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  return (
    <Stack spacing={5}>
      <Header title={t("sinf_malumotlari")} />
      <Stack gap={5}>
        <HStack alignItems={"flex-start"} justifyContent={"space-between"}>
          <Stack gap={10} pl={10}>
            <Heading>
              {currentClass.sinf}-{t("sinf")}
            </Heading>
            <HStack alignItems={"flex-start"}>
              <Avatar src={teacher && teacher.img} w={"100px"} h={"100px"} />
              <Box mt={2}>
                <Text fontWeight={"bold"}>{`${teacher.ism} ${teacher.familiya}`}</Text>
                <Text color={"gray"}>{t("kurator")}</Text>
              </Box>
            </HStack>
          </Stack>
          <Stack>
            <Button
              colorScheme="telegram"
              borderRadius={"full"}
              px={10}
              onClick={() => navigate(`/sinflar/tahrirlash:${currentClass.id}`)}
            >
              {t("tahrirlash")}
            </Button>
            <Button
              colorScheme="red"
              variant="solid"
              borderRadius={"full"}
              px={10}
              onClick={onOpen}
            >
              {t("ochirish")}
            </Button>
          </Stack>
        </HStack>
        <Divider />
        <Stack pl={10}>
          <HStack>
            <Text fontWeight={"bold"}>{t("tashkil_qilindi")}: </Text>
            <Text>{currentClass.tashkil_qilindi}</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>{t("jami_oquvchi")}: </Text>
            <Text>{currentClass.oquvchi_soni}</Text>
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
              <Th>{t("fish")}</Th>
              <Th>{t("telefon_nomer")}</Th>
              <Th>{t("hisob_holati")}</Th>
              <Th>{t("oquvchi_grantlari")}</Th>
              <Th>
                <Icon as={HiDotsHorizontal} fontSize={20} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentStudents.map((student, i) => (
              <TableFieldStudents key={i} ind={i + 1} student={student} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <ClassDetailedModal
        title={t("class_del")}
        isOpen={isOpen}
        onClose={onClose}
        btnAction={deleteClass}
      />

      <StudentInfo />
    </Stack>
  );
};

export default adminLayout(ClassesDetailed);
