import {
  Avatar,
  HStack,
  Td,
  Text,
  Tr,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import Actions from "../actions/actions";
import { colors } from "../../config/colors";
import ClassDetailedModal from "../modal/class-detailed.modal";
import useClass from "../../store/classes.store";
import { useNavigate } from "react-router-dom";

const TableFieldClasses = ({ ind, clas }) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeClass, teachers } = useClass();
  const toast = useToast();
  const navigate = useNavigate();
  const teacher = teachers.find((c) => `${c.id}` === clas.sinf_rahbar);

  const deleteStudent = () => {
    removeClass(clas.id);
    onClose();
    toast({
      title: `${clas.sinf} serverdan muvaffaqqiyatli o'chirildi!`,
      status: "info",
      duration: 9000,
      isClosable: true,
      position: "top-right",
    });
  };

  console.log(teacher);
  return (
    <>
      <Tr
        w={"full"}
        h={"50px"}
        cursor={"pointer"}
        _hover={{ background: base }}
        transition={"all .3s ease"}
        onClick={() => navigate(`/sinflar/sinf-malumotlari:${clas.sinf}`)}
      >
        <Td>{ind}</Td>
        <Td>{clas.sinf}-sinf</Td>
        <Td>{clas.oquvchi_soni}</Td>
        <Td>{clas.guruh}</Td>
        <Td>
          <HStack>
            <Avatar src={teacher && teacher.img} w={10} h={10} />
            <Text>{teacher && `${teacher.ism} ${teacher.familiya}`}</Text>
          </HStack>
        </Td>
        <Td>
          <Actions warning={true} del={true} edit={true} delAction={onOpen} />
        </Td>
      </Tr>
      <ClassDetailedModal
        title={`${clas.sinf} serverdan o'chirilishiga rozimisiz?`}
        isOpen={isOpen}
        onClose={onClose}
        btnAction={deleteStudent}
      />
    </>
  );
};

export default TableFieldClasses;
