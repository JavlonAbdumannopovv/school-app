import { Link, Td, Tr, useColorModeValue } from "@chakra-ui/react";
import Actions from "../actions/actions";
import { colors } from "../../config/colors";

const TableField = ({ td1, td2, td3, td4, td5, warning, del, edit }) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  return (
    <Tr
      w={"full"}
      h={"50px"}
      cursor={"pointer"}
      _hover={{ background: base }}
      transition={"all .3s ease"}
    >
      <Td>{td1}</Td>
      <Td>{td2}</Td>
      <Td>{td3}</Td>
      <Td>{td4}</Td>
      <Td>{td5}</Td>
      <Td>
        <Actions warning={warning} del={del} edit={edit} />
      </Td>
    </Tr>
  );
};

export default TableField;
