import {
  Td,
  Tr,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Actions from "../actions/actions";
import { colors } from "../../config/colors";
import ClassDetailedModal from "../modal/class-detailed.modal";
import useClass from "../../store/classes.store";

const TableFieldStudents = ({ ind, student }) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeStudent } = useClass();
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
  return (
    <>
      <Tr
        w={"full"}
        h={"50px"}
        cursor={"pointer"}
        _hover={{ background: base }}
        transition={"all .3s ease"}
      >
        <Td>{ind}</Td>
        <Td>
          {student.ism}
          {student.familiya}
        </Td>
        <Td>{student.telefon}</Td>
        <Td>{student.hisob_holati}</Td>
        <Td>{student.grantlar}</Td>
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
