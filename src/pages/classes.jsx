import React from "react";
import { adminLayout } from "../layouts/admin/admin-layout";
import {
  Button,
  HStack,
  Stack,
  Table,
  Icon,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Tbody,
  TableContainer,
} from "@chakra-ui/react";
import Header from "../layouts/header/header";
import { colors } from "../config/colors";
import { BiPlus } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { TbNumber } from "react-icons/tb";
import { HiDotsHorizontal } from "react-icons/hi";
import { sinflar } from "../config/data";
import TableField from "../components/tables/table-field";
import { Link } from "react-router-dom";

const Classes = () => {
  const { t } = useTranslation();
  const tableHead = useColorModeValue(
    colors.tableHead.light,
    colors.tableHead.dark
  );
  const border = useColorModeValue(colors.border.light, colors.border.dark);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  return (
    <Stack spacing={5}>
      <Header title="sinflar" backIcon={false} />
      <HStack justifyContent={"flex-end"}>
        <Button
          colorScheme={colors.colorScheme.dark}
          leftIcon={<BiPlus />}
          borderRadius={"full"}
        >
          {t("sinf_qoshish")}
        </Button>
      </HStack>
      <TableContainer boxShadow={"lg"} bg={secondary}>
        <Table size={"sm"} border={"1px"} borderColor={border}>
          <Thead bg={tableHead} h={16}>
            <Tr>
              <Th>
                <Icon as={TbNumber} fontSize={20} />
              </Th>
              <Th>{t("sinf_nomlari")}</Th>
              <Th>{t("oquvchi_soni")}</Th>
              <Th>{t("guruh")}</Th>
              <Th>{t("sinf_rahbar")}</Th>
              <Th>
                <Icon as={HiDotsHorizontal} fontSize={20} />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {sinflar.map((item, i) => (
              <TableField
                td1={i + 1}
                td2={item.sinf}
                td3={item.oquvchi_soni}
                td4={item.guruh}
                td5={item.sinf_rahbar}
                warning={false}
                del={false}
                edit={true}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default adminLayout(Classes);
