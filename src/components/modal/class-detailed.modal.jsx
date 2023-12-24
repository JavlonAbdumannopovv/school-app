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

const ClassDetailedModal = ({ title, isOpen, onClose, btnAction }) => {
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
            Yo`q
          </Button>
          <Button colorScheme="blue" px={5} onClick={btnAction}>
            Ha
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ClassDetailedModal;
