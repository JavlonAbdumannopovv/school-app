import {
  Avatar,
  Divider,
  Grid,
  HStack,
  Heading,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { colors } from "../../config/colors";
import BoxTitle from "../box-title/box-title";
import useClass from "../../store/classes.store";

const StudentInfo = () => {
  const { studentInfo, studentInfoOpenToggler, studentInfoOpen } = useClass();
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.dark
  );
  const gray = useColorModeValue(colors.border.dark, colors.border.light);
  return (
    <Stack
      position={"fixed"}
      top={0}
      right={studentInfoOpen ? 0 : "-440px"}
      pt={20}
      px={10}
      pb={10}
      spacing={5}
      alignItems={"center"}
      w={"430px"}
      bg={secondary}
      boxShadow={"outline"}
      borderRadius={"3xl"}
      borderEndRadius={"0"}
      minH={"100vh"}
      zIndex={1001}
      transition={"all .5s ease"}
    >
      <IconButton
        icon={<MdClose fontSize={30} color={gray} />}
        colorScheme={colorScheme}
        variant={"ghost"}
        position={"absolute"}
        top={5}
        right={5}
        onClick={() => studentInfoOpenToggler(false)}
      />
      <Avatar src={studentInfo.img} w={"132px"} h={"132px"} />
      <Heading color={`${colorScheme}.500`}>
        {studentInfo.ism} {studentInfo.familiya}
      </Heading>
      <Text color={"gray"}>ID: {studentInfo.id}</Text>
      <HStack w={"full"} justifyContent={"space-between"}>
        <HStack overflowX={"hidden"} w={"50%"}>
          <IconButton
            icon={<FiPhone fontSize={15} />}
            borderRadius={"full"}
            colorScheme={colorScheme}
            variant={"outline"}
          />
          <Text color={gray} fontSize={15}>
            {studentInfo.telefon}
          </Text>
        </HStack>
        <HStack overflowX={"hidden"}>
          <IconButton
            icon={<MdOutlineEmail fontSize={15} />}
            borderRadius={"full"}
            colorScheme={colorScheme}
            variant={"outline"}
          />
          <Text color={gray} fontSize={15}>
            {studentInfo.email}
          </Text>
        </HStack>
      </HStack>
      <Divider />
      <BoxTitle title={"About"} subtitle={studentInfo.about} />
      <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={2} rowGap={5}>
        <BoxTitle
          title={"Tug`ilgan sana"}
          subtitle={studentInfo.tugilgan_sana}
        />
        <BoxTitle title={"Username"} subtitle={studentInfo.username} />
        <BoxTitle title={"Jinsi"} subtitle={studentInfo.gender} />
        <BoxTitle title={"Parol"} subtitle={studentInfo.parol} />
        <BoxTitle title={"Manzil"} subtitle={studentInfo.manzil} />
        <BoxTitle
          title={"O`qish summasi"}
          subtitle={`UZS ${studentInfo.hisob_holati}`}
        />
      </Grid>
    </Stack>
  );
};

export default StudentInfo;
