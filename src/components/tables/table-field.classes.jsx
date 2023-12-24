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
// import { unstable_HistoryRouter } from "react-router-dom";

const TableFieldClasses = ({ ind, clas }) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeClass } = useClass();
  const toast = useToast();
  // const history = unstable_HistoryRouter();

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
  return (
    <>
      <Tr
        w={"full"}
        h={"50px"}
        cursor={"pointer"}
        _hover={{ background: base }}
        transition={"all .3s ease"}
        // onClick={() => history.push(`/sinflar/sinf-malumotlari:id=${clas.id}`)}
      >
        <Td>{ind}</Td>
        <Td>{clas.sinf}-sinf</Td>
        <Td>{clas.oquvchi_soni}</Td>
        <Td>{clas.guruh}</Td>
        <Td>{clas.sinf_rahbar}</Td>
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
