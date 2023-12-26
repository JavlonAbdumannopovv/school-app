import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Divider,
  Grid,
  HStack,
  Icon,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { adminLayout } from "../layouts/admin/admin-layout";
import Header from "../layouts/header/header";
import { colors } from "../config/colors";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { fanlar, oqituvchilar } from "../config/data";
import useClass from "../store/classes.store";
import { PiPlus } from "react-icons/pi";
import ListClassAdd from "../components/list/list.class-add";
import { useNavigate } from "react-router-dom";

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Note: Months are zero-based, so we add 1
const year = currentDate.getFullYear();

const formattedDate = `${day}.${month}.${year}`;

const initialState = {
  id: `${Math.floor(Math.random() * 900000) + 100}`,
  tashkil_qilindi: formattedDate,
  sinf: "",
  oquvchi_soni: 0,
  guruh: "N1",
  sinf_rahbar: "",
  fanlar: [],
  oquvchilar: [],
  xona: "",
};

const ClassAdd = () => {
  const { students, addClass } = useClass();
  const [addedClass, setAddedClass] = useState(initialState);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.dark
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [fan, setFan] = useState({
    fanId: "",
    oqituvchiId: "",
  });
  console.log(addedClass);
  const toast = useToast();
  const navigate = useNavigate();

  return (
    <Stack spacing={5}>
      <Header title={"Sinf qo`shish"} />
      <Card bg={secondary} borderRadius={"xl"} boxShadow={"2xl"} pb={120}>
        <CardBody>
          <Grid
            gridTemplateColumns={{
              md: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            alignItems={"flex-end"}
            gap={20}
            rowGap={10}
            p={10}
          >
            <Stack>
              <Text color={`${colorScheme}.500`}>Sinf</Text>
              <Input
                type="text"
                placeholder='Sinf nomi - 1"A"'
                borderColor={"gray"}
                borderRadius={"lg"}
                h={14}
                value={addedClass.sinf}
                onChange={(e) => {
                  setAddedClass((prev) => {
                    return { ...prev, sinf: e.target.value };
                  });
                }}
              />
            </Stack>
            <Stack>
              <Text color={`${colorScheme}.500`}>Kurator</Text>
              <MenuComponent
                item={oqituvchilar}
                type={"teacher"}
                setAddedClass={setAddedClass}
                addedClass={addedClass}
              />
            </Stack>
            <Stack>
              <Text color={`${colorScheme}.500`}>Fanlar</Text>
              <Button
                colorScheme="gray"
                borderRadius={"lg"}
                rightIcon={<PiPlus />}
                variant={"outline"}
                h={14}
                onClick={onOpen}
              >
                Fan qo`shish
              </Button>
            </Stack>
            <Stack>
              <Text color={`${colorScheme}.500`}>O`quvchilar</Text>
              <MenuComponent
                item={students}
                type={"student"}
                setAddedClass={setAddedClass}
                addedClass={addedClass}
              />
            </Stack>
            <Stack>
              <Text color={`${colorScheme}.500`}>Xona raqami</Text>
              <Input
                type="number"
                placeholder="Xona raqamini kiriting"
                borderColor={"gray"}
                borderRadius={"lg"}
                value={addedClass.xona}
                h={14}
                onChange={(e) => {
                  setAddedClass({ ...addedClass, xona: `${e.target.value}` });
                }}
              />
            </Stack>
            <HStack justifyContent={"space-between"} gap={10}>
              <Button
                w={"full"}
                h={14}
                colorScheme={colorScheme}
                variant={"outline"}
                borderRadius={"lg"}
              >
                Bekor qilish
              </Button>
              <Button
                w={"full"}
                h={14}
                colorScheme={colorScheme}
                borderRadius={"lg"}
                isDisabled={
                  !(
                    addedClass.sinf !== "" &&
                    addedClass.sinf_rahbar !== "" &&
                    addedClass.fanlar.length !== 0 &&
                    addedClass.oquvchilar.length !== 0 &&
                    addedClass.xona !== ""
                  )
                }
                onClick={() => {
                  addClass(addedClass);
                  navigate("/sinflar/");
                  toast({
                    title: `${addedClass.sinf}-sinf muvaffaqqiyatli qo'shildi`,
                    status: "info",
                    duration: 9000,
                    isClosable: true,
                    position: "top-right",
                  });
                }}
              >
                Saqlash
              </Button>
            </HStack>
          </Grid>
          <Divider />
          <HStack mt={10} gap={10} alignItems={"flex-start"}>
            <ListClassAdd
              isStudent={true}
              addedClass={addedClass}
              setAddedClass={setAddedClass}
            />
            <ListClassAdd
              isStudent={false}
              addedClass={addedClass}
              setAddedClass={setAddedClass}
            />
          </HStack>
        </CardBody>
      </Card>
      <Modal
        isOpen={isOpen}
        borderRadius={"3xl"}
        bg={secondary}
        isCentered
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fan qo`shish</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody px={20} py={10}>
            <Stack>
              <Stack>
                <Text color={`${colorScheme}.500`}>Fan nomi</Text>
                <MenuComponent
                  item={fanlar}
                  type={"fan"}
                  addedClass={addedClass}
                  setAddedClass={setAddedClass}
                  setFan={setFan}
                />
              </Stack>
              <Stack>
                <Text color={`${colorScheme}.500`}>Fan o`qituvchisi</Text>
                <MenuComponent
                  item={oqituvchilar}
                  type={"fan-teacher"}
                  addedClass={addedClass}
                  setAddedClass={setAddedClass}
                  setFan={setFan}
                />
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter px={20} pb={10}>
            <HStack gap={4} w={"full"}>
              <Button
                w={"full"}
                h={14}
                colorScheme={colorScheme}
                variant={"outline"}
                onClick={onClose}
              >
                Yopish
              </Button>
              <Button
                w={"full"}
                h={14}
                colorScheme={colorScheme}
                isDisabled={fan.fanId === "" || fan.oqituvchiId === ""}
                onClick={() => {
                  setAddedClass((prev) => {
                    return {
                      ...prev,
                      fanlar:
                        prev.fanlar.length > 0 &&
                        prev.fanlar.find((c) => c.fanId === fan.fanId)
                          ? [...prev.fanlar]
                          : prev.fanlar.length > 0 &&
                            !prev.fanlar.find((c) => c.fanId === fan.fanId)
                          ? [...prev.fanlar, fan]
                          : prev.fanlar.length === 0 && [...prev.fanlar, fan],
                    };
                  });
                  setFan({ fanId: "", oqituvchiId: "" });
                }}
              >
                Saqlash
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export const MenuComponent = ({
  item,
  type,
  setAddedClass,
  addedClass,
  setFan,
}) => {
  const base = useColorModeValue(colors.base.light, colors.base.dark);
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([...item]);
  const { students, fanlar, teachers } = useClass();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredTeachers = teachers.filter((teacher) =>
      `${teacher.ism.toLowerCase()} ${teacher.familiya.toLowerCase()}`.includes(
        value
      )
    );

    const filteredFanlar = fanlar.filter((fan) =>
      fan.nomi.toLowerCase().includes(value)
    );

    const filteredStudents = students.filter((student) =>
      `${student.ism.toLowerCase()} ${student.familiya.toLowerCase()}`.includes(
        value
      )
    );

    setSearchResults(
      type === "teacher" || type === "fan-teacher"
        ? filteredTeachers
        : type === "student"
        ? filteredStudents
        : type === "fan" && filteredFanlar
    );
  };
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.dark
  );

  return (
    <Menu>
      <MenuButton
        h={14}
        as={Button}
        rightIcon={<FaAngleDown />}
        variant={"outline"}
        colorScheme={"gray"}
      >
        {type === "teacher" && "O`qituvchini tanlang"}
        {type === "student" && "O`quvchilarni tanlang"}
        {type === "fan" && "Fan nomini tanlang"}
        {type === "fan-teacher" && "Fan oqituvchisini tanlang"}
      </MenuButton>
      <MenuList
        bg={secondary}
        boxShadow={"lg"}
        px={2}
        w={"360px"}
        h={"260px"}
        overflowY={"scroll"}
      >
        <HStack borderRadius={"lg"} bg={base} px={3} w={"full"} mb={2}>
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
        {type === "teacher" &&
          searchResults.map((item) => (
            <MenuItem
              key={item.id}
              gap={2}
              p={2}
              cursor={"pointer"}
              bg={"transparent"}
              _hover={{ background: base }}
              transition={"all .3s ease"}
              onClick={() => {
                setAddedClass((prev) => {
                  return {
                    ...prev,
                    sinf_rahbar: `${item.id}`,
                  };
                });
              }}
            >
              <HStack w={"full"} justifyContent={"space-between"}>
                <HStack>
                  <Avatar src={item.img} w={"25px"} h={"25px"} />
                  <Text fontSize={13}>
                    {item.ism} {item.familiya}
                  </Text>
                </HStack>
                <Text fontSize={12} color={`${colorScheme}.500`}>
                  {item.fan}
                </Text>
              </HStack>
            </MenuItem>
          ))}
        {type === "student" &&
          searchResults.map((item) => (
            <HStack
              key={item.id}
              gap={2}
              p={2}
              cursor={"pointer"}
              bg={"transparent"}
              _hover={{ background: base }}
              transition={"all .3s ease"}
              onClick={() => {
                setAddedClass((prev) => {
                  return {
                    ...prev,
                    oquvchilar:
                      prev.oquvchilar.length === 0
                        ? [...prev.oquvchilar, item.id]
                        : prev.oquvchilar.length > 0 &&
                          prev.oquvchilar.find((c) => c === item.id)
                        ? prev.oquvchilar.filter((c) => c !== item.id)
                        : prev.oquvchilar.length > 0 &&
                          !prev.oquvchilar.find((c) => c === item.id) && [
                            ...prev.oquvchilar,
                            item.id,
                          ],
                    oquvchi_soni:
                      prev.oquvchilar.length === 0
                        ? prev.oquvchi_soni + 1
                        : prev.oquvchilar.length > 0 &&
                          prev.oquvchilar.find((c) => c === item.id)
                        ? prev.oquvchi_soni - 1
                        : prev.oquvchilar.length > 0 &&
                          !prev.oquvchilar.find((c) => c === item.id) &&
                          prev.oquvchi_soni + 1,
                  };
                });
              }}
            >
              <Checkbox
                isChecked={addedClass.oquvchilar.find(
                  (c) => c === `${item.id}`
                )}
                w={5}
                h={5}
                colorScheme={colorScheme}
                borderColor={`${colorScheme}.500`}
              ></Checkbox>
              <HStack w={"full"} justifyContent={"space-between"}>
                <HStack>
                  <Avatar src={item.img} w={"25px"} h={"25px"} />
                  <Text fontSize={13}>
                    {item.ism} {item.familiya}
                  </Text>
                </HStack>
              </HStack>
            </HStack>
          ))}
        {type === "fan" &&
          searchResults.map((item) => (
            <MenuItem
              key={item.id}
              gap={2}
              p={2}
              cursor={"pointer"}
              px={4}
              bg={"transparent"}
              _hover={{ background: base }}
              transition={"all .3s ease"}
              onClick={() =>
                setFan((prev) => {
                  return { ...prev, fanId: item.id };
                })
              }
            >
              <HStack w={"full"} justifyContent={"space-between"}>
                <HStack>
                  <Text fontSize={13}>{item.nomi}</Text>
                </HStack>
                <Text fontSize={12} color={`${colorScheme}.500`}>
                  {item.turi}
                </Text>
              </HStack>
            </MenuItem>
          ))}
        {type === "fan-teacher" &&
          searchResults.map((item) => (
            <MenuItem
              key={item.id}
              gap={2}
              p={2}
              cursor={"pointer"}
              bg={"transparent"}
              _hover={{ background: base }}
              transition={"all .3s ease"}
              onClick={() =>
                setFan((prev) => {
                  return { ...prev, oqituvchiId: item.id };
                })
              }
            >
              <HStack w={"full"} justifyContent={"space-between"}>
                <HStack>
                  <Avatar src={item.img} w={"25px"} h={"25px"} />
                  <Text fontSize={13}>
                    {item.ism} {item.familiya}
                  </Text>
                </HStack>
                <Text fontSize={12} color={`${colorScheme}.500`}>
                  {item.fan}
                </Text>
              </HStack>
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default adminLayout(ClassAdd);
