import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  Form,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useState } from "react";
import axios from "axios";

export const NewProduct = ({ reload, setReload, categories }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > 5) {
      alert("Solo puedes subir hasta 5 imágenes");
      return;
    }

    setImages((prevImages) => [...prevImages, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  const createProduct = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    const formData = new FormData();

    images.forEach((image) => {
      formData.append("image", image);
    });

    formData.append("name", data.Nombre);
    formData.append("description", data.Descripción);
    formData.append("price", data.Precio);
    formData.append("category_id", data.Categoría);
    formData.append("quantity", data.Cantidad);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_DEV}/api/products/`,
        formData, // Enviar solo formData
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onOpenChange();
      setReload(!reload);
      console.log("Producto creado:", response.data);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Añadir producto
      </Button>
      <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold">Nuevo Producto</h1>
              </ModalHeader>
              <ModalBody className="flex flex-col gap-4">
                <Form
                  onSubmit={createProduct}
                  className="grid grid-cols-2 gap-4"
                >
                  <Input
                    isRequired
                    name="Nombre"
                    label="Nombre"
                    placeholder="Nombre del producto"
                    labelPlacement="outside"
                  />
                  <Select
                    isRequired
                    name="Categoría"
                    label="Categoría"
                    placeholder="Selecciona una categoría"
                    labelPlacement="outside"
                  >
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    isRequired
                    name="Precio"
                    label="Precio"
                    type="number"
                    placeholder="Precio"
                    labelPlacement="outside"
                  />
                  <Input
                    isRequired
                    name="Cantidad"
                    label="Cantidad"
                    type="number"
                    placeholder="Cantidad"
                    labelPlacement="outside"
                  />
                  <Textarea
                    isRequired
                    name="Descripción"
                    label="Descripción"
                    placeholder="Descripción"
                    labelPlacement="outside"
                  />

                  <Input
                    isRequired
                    name="Images"
                    label="Imagenes"
                    labelPlacement="outside"
                    type="file"
                    multiple
                    onChange={handleImageChange}
                  />

                  {imagePreviews.length > 0 && (
                    <div className="col-span-2 flex flex-col gap-2">
                      <h3 className="text-sm">Vista previa de Imágenes</h3>
                      <div className="grid grid-cols-5 gap-2 w-full">
                        {imagePreviews.map((preview, index) => (
                          <div
                            key={index}
                            className="relative group border-1 border-slate-200 rounded-lg"
                          >
                            <img
                              className="size-24 object-cover rounded-lg"
                              src={preview}
                              alt={`Imagen ${index}`}
                            />
                            <Button
                              onPress={() => removeImage(index)}
                              isIconOnly
                              className="absolute z-10 bg-red-600 my-auto rounded-full mx-auto text-white inset-0 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity"
                            >
                              ✖
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="col-span-2 mb-2 flex items-center justify-end w-full gap-4">
                    <Button
                      color="danger"
                      variant="light"
                      onPress={() => {
                        onClose();
                        setImages([]);
                        setImagePreviews([]);
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button color="primary" type="submit">
                      Crear
                    </Button>
                  </div>
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
