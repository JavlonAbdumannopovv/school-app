import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const ClassDetailedModal = ({ title, isOpen, onClose, btnAction }) => {
  const { t } = useTranslation();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      borderRadius={"xl"}
      boxShadow="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent textAlign={"center"} py={5}>
        <ModalBody my={5}>
          <Text fontSize={25} fontWeight={"bold"}>
            {title}
          </Text>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Button colorScheme="blue" mr={3} variant="outline" onClick={onClose}>
            {t("yoq")}
          </Button>
          <Button colorScheme="blue" px={5} onClick={btnAction}>
            {t("ha")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ClassDetailedModal;
