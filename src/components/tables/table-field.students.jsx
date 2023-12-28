import {
  Td,
  Tr,
  useColorModeValue,
  useDisclosure,
  useToast,
  Avatar,
  Text,
  HStack,
} from "@chakra-ui/react";
import Actions from "../actions/actions";
import { colors } from "../../config/colors";
import ClassDetailedModal from "../modal/class-detailed.modal";
import useClass from "../../store/classes.store";

const TableFieldStudents = ({ ind, student }) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeStudent, students, setStudentInfo, studentInfoOpenToggler } =
    useClass();
  const toast = useToast();

  const deleteStudent = () => {
    removeStudent(student.id);
    onClose();
    toast({
      title: `${student.ism} ${student.familiya}, ${student.sinf} dan muvaffaqqiyatli o'chirildi!`,
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  const avatar = students.find((c) => c.id === student.id);

  return (
    <>
      <Tr
        w={"full"}
        h={"50px"}
        cursor={"pointer"}
        _hover={{ background: base }}
        transition={"all .3s ease"}
        zIndex={999}
      >
        <Td
          onClick={() => {
            setStudentInfo(student.id);
            studentInfoOpenToggler(true);
          }}
        >
          {ind}
        </Td>
        <Td
          onClick={() => {
            setStudentInfo(student.id);
            studentInfoOpenToggler(true);
          }}
        >
          <HStack>
            <Avatar w={10} h={10} src={avatar && avatar.img} />
            <Text>{student.ism}</Text>
            <Text>{student.familiya}</Text>
          </HStack>
        </Td>
        <Td
          onClick={() => {
            setStudentInfo(student.id);
            studentInfoOpenToggler(true);
          }}
        >
          {student.telefon}
        </Td>
        <Td
          onClick={() => {
            setStudentInfo(student.id);
            studentInfoOpenToggler(true);
          }}
        >
          {student.hisob_holati}
        </Td>
        <Td
          onClick={() => {
            setStudentInfo(student.id);
            studentInfoOpenToggler(true);
          }}
        >
          {student.grantlar}
        </Td>
        <Td>
          <Actions warning={true} del={true} edit={true} delAction={onOpen} />
        </Td>
      </Tr>
      <ClassDetailedModal
        title={`${student.ism} ${student.familiya}, ${student.sinf} dan o'chirilishiga rozimisiz?`}
        isOpen={isOpen}
        onClose={onClose}
        btnAction={deleteStudent}
      />
    </>
  );
};

export default TableFieldStudents;
