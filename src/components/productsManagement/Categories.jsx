import {
  VisibilityIcon,
  NotVisibilityIcon,
  PlusIcon,
} from "../../pages/admin/ProductsManagement";
import { Button, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import axios from "axios";

export const Categories = ({ setAllCategories }) => {
  // Dynamic state for new category, show categorys and edit category
  const [newCategory, setNewCategory] = useState(false);
  const [showCategorys, setShowCategorys] = useState(true);
  const [showEditCategory, setEditCategory] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState({
    id: null,
    name: null,
  });

  // States for save the data of the API
  const [categories, setCategories] = useState([]);

  // Rest API to get the categories
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_DEV}/api/categories/allCategories/`
        );
        setCategories(response.data);
        setAllCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCategories();
  }, [reload]);

  // Function of create a new category
  const createNewCategory = async () => {
    try {
      const name = document.getElementById("category-name").value;
      const response = await axios.post(
        `${import.meta.env.VITE_API_DEV}/api/categories/createCategory/`,
        {
          name: name,
        }
      );
      setReload(!reload);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function of delete a category
  const deleteCategory = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_DEV}/api/categories/deleteCategory/${id}`
      );
      setReload(!reload);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function of edit a category
  const editCategory = async () => {
    if (!categoryToEdit.id || !categoryToEdit.name) {
      console.error("Falta información para actualizar la categoría");
      return;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_DEV}/api/categories/updateCategory/${
          categoryToEdit.id
        }`,
        { name: categoryToEdit.name }
      );

      setReload(!reload);
      setCategoryToEdit({ id: null, name: "" });
      setEditCategory(false);
    } catch (error) {
      console.error("Error al actualizar la categoría:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <h2 className="font-semibold">Categorías</h2>
        <Button
          className="text-slate-500 rounded-full"
          size="sm"
          isIconOnly
          onPress={() => {
            setShowCategorys(!showCategorys);
            setNewCategory(false);
            setEditCategory(false);
          }}
          variant="light"
        >
          {showCategorys ? <VisibilityIcon /> : <NotVisibilityIcon />}
        </Button>
      </div>
      <>
        {showCategorys && (
          <Button
            onPress={() => {
              setNewCategory(true);
              if (showEditCategory) {
                setEditCategory(false);
              }
            }}
            startContent={<PlusIcon />}
            variant="bordered"
            color="primary"
            className="w-full p-4 rounded-lg"
          >
            Nueva Categoría
          </Button>
        )}
        {newCategory && (
          <div className="flex gap-4">
            <Input id="category-name" placeholder="Nombre de la categoría" />
            <Button onPress={createNewCategory} color="primary">
              Crear
            </Button>
            <Button
              onPress={() => setNewCategory(false)}
              variant="light"
              color="danger"
            >
              Cancelar
            </Button>
          </div>
        )}
        {showEditCategory && (
          <div className="flex gap-4">
            <Input
              value={categoryToEdit.name}
              onChange={(e) =>
                setCategoryToEdit((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Nuevo nombre de la categoría"
            />
            <Button onPress={editCategory} color="primary">
              Editar
            </Button>
            <Button
              onPress={() => setEditCategory(false)}
              variant="light"
              color="danger"
            >
              Cancelar
            </Button>
          </div>
        )}
      </>
      {showCategorys && (
        <>
          {categories.length > 0 ? (
            <Table aria-label="Categorias">
              <TableHeader>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Acciones</TableColumn>
              </TableHeader>
              <TableBody>
                {categories.map((category) => (
                  <>
                    <TableRow key={category.name}>
                      <TableCell>{category.name}</TableCell>
                      <TableCell className="flex gap-2">
                        <Button
                          onPress={() => deleteCategory(category.id)}
                          isIconOnly
                          className="rounded-full"
                          variant="light"
                          color="danger"
                        >
                          <TrashIcon />
                        </Button>
                        <Button
                          onPress={() => {
                            setEditCategory(true);
                            setCategoryToEdit({
                              id: category.id,
                              name: category.name,
                            });
                            if (newCategory) {
                              setNewCategory(false);
                            }
                          }}
                          isIconOnly
                          className="rounded-full text-sky-900"
                          variant="light"
                        >
                          <PencilIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="w-full text-center text-sm font-light text-slate-600">
              No hay categorías
            </p>
          )}
        </>
      )}
    </div>
  );
};

export const TrashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
};

export const PencilIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
      />
    </svg>
  );
};
