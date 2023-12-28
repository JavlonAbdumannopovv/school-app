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
import { useTranslation } from "react-i18next";

const TableFieldClasses = ({ ind, clas }) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { removeClass, teachers } = useClass();
  const toast = useToast();
  const navigate = useNavigate();
  const teacher = teachers.find((c) => `${c.id}` === clas.sinf_rahbar);

  const { t } = useTranslation();

  const deleteStudent = () => {
    removeClass(clas.id);
    onClose();
    toast({
      title: `${clas.sinf} ${t("modal_class_toast")}`,
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
        <Td onClick={() => navigate(`/sinflar/sinf-malumotlari/:${clas.id}`)}>
          {ind}
        </Td>
        <Td onClick={() => navigate(`/sinflar/sinf-malumotlari/:${clas.id}`)}>
          {clas.sinf}-{t("sinf")}
        </Td>
        <Td onClick={() => navigate(`/sinflar/sinf-malumotlari/:${clas.id}`)}>
          {clas.oquvchilar.length}
        </Td>
        <Td onClick={() => navigate(`/sinflar/sinf-malumotlari/:${clas.id}`)}>
          {clas.guruh}
        </Td>
        <Td onClick={() => navigate(`/sinflar/sinf-malumotlari/:${clas.id}`)}>
          <HStack>
            <Avatar src={teacher && teacher.img} w={10} h={10} />
            <Text>{teacher && `${teacher.ism} ${teacher.familiya}`}</Text>
          </HStack>
        </Td>
        <Td>
          <Actions
            warning={true}
            del={true}
            edit={true}
            delAction={onOpen}
            editAction={`/sinflar/tahrirlash:${clas.id}`}
          />
        </Td>
      </Tr>
      <ClassDetailedModal
        title={`${clas.sinf} ${t("modal_class_title")}`}
        isOpen={isOpen}
        onClose={onClose}
        btnAction={deleteStudent}
      />
    </>
  );
};

export default TableFieldClasses;
