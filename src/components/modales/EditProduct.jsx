import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { PencilIcon } from "../productsManagement/Categories";
import { useState } from "react";

export const EditProduct = ({ productData }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [product, setProduct] = useState({
    name: productData.name,
    description: productData.description,
    price: productData.price,
    quantity: productData.stock,
    category_id: productData.category,
  });
  return (
    <>
      <Button
        isIconOnly
        className="rounded-full text-sky-900"
        variant="light"
        onPress={onOpen}
      >
        <PencilIcon />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Editar Producto
              </ModalHeader>
              <ModalBody>Datos del producto</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
