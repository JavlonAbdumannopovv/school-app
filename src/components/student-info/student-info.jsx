import {
  Divider,
  Grid,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { colors } from "../../config/colors";
import BoxTitle from "../box-title/box-title";

const StudentInfo = ({ item }) => {
  const secondary = useColorModeValue(
    colors.secondary.light,
    colors.secondary.dark
  );
  const colorScheme = useColorModeValue(
    colors.colorScheme.light,
    colors.colorScheme.dark
  );
  const gray = useColorModeValue(colors.border.dark, colors.border.light);
  const closeHandler = () => {};
  return (
    <Stack
      position={"fixed"}
      top={0}
      right={"-440px"}
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
    >
      <IconButton
        icon={<MdClose fontSize={30} color={gray} />}
        colorScheme={colorScheme}
        variant={"ghost"}
        position={"absolute"}
        top={5}
        right={5}
        onClick={closeHandler}
      />
      <Image
        src={
          "https://thumbs.img-sprzedajemy.pl/1000x901c/33/16/4a/portret-karykatura-portret-slubny-malowanie-mazowieckie-warszawa-490227530.jpg"
        }
        w={"132px"}
        h={"132px"}
        borderRadius={"full"}
      />
      <Heading color={`${colorScheme}.500`}>
        {item.ism} {item.familiya}
      </Heading>
      <Text color={"gray"}>ID: {item.id}</Text>
      <HStack w={"full"} justifyContent={"space-between"}>
        <HStack overflowX={"hidden"} w={"45%"}>
          <IconButton
            icon={<FiPhone fontSize={15} />}
            borderRadius={"full"}
            colorScheme={colorScheme}
            variant={"outline"}
          />
          <Text color={gray} fontSize={15}>
            {item.telefon}
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
            {item.email}
          </Text>
        </HStack>
      </HStack>
      <Divider />
      <BoxTitle title={"About"} subtitle={item.about} />
      <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={2} rowGap={5}>
        <BoxTitle title={"Tug`ilgan sana"} subtitle={item.tugilgan_sana} />
        <BoxTitle title={"Username"} subtitle={item.username} />
        <BoxTitle title={"Jinsi"} subtitle={item.gender} />
        <BoxTitle title={"Parol"} subtitle={item.parol} />
        <BoxTitle title={"Manzil"} subtitle={item.manzil} />
        <BoxTitle
          title={"O`qish summasi"}
          subtitle={`UZS ${item.hisob_holati}`}
        />
      </Grid>
    </Stack>
  );
};

export default StudentInfo;
