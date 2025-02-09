import { Button, Input } from "@heroui/react";
import { NewProduct } from "../../components/modales/NewProduct";
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
import {
  Categories,
  PencilIcon,
  TrashIcon,
} from "../../components/productsManagement/Categories";
import { EditProduct } from "../../components/modales/EditProduct";

export const ProductsManagement = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_DEV}/api/products/allProducts/`
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [reload]);

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_DEV}/api/products/deleteProduct/${id}`
      );
      setReload(!reload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg">Gestión de Productos</h1>
        <NewProduct
          reload={reload}
          setReload={setReload}
          categories={allCategories}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Categories setAllCategories={setAllCategories} />
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold">Productos</h2>
          {products.length > 0 ? (
            <Table aria-label="Productos">
              <TableHeader>
                <TableColumn>Nombre</TableColumn>
                <TableColumn>Categoría</TableColumn>
                <TableColumn>Precio</TableColumn>
                <TableColumn>Cantidad</TableColumn>
                <TableColumn>Acciones</TableColumn>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.category_id}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>
                      <Button
                        onPress={() => deleteProduct(product.id)}
                        isIconOnly
                        className="rounded-full"
                        variant="light"
                        color="danger"
                      >
                        <TrashIcon />
                      </Button>
                      <EditProduct productData={product} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="w-full text-center text-sm font-light text-slate-600">
              No hay productos
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export const PlusIcon = () => {
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
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};

export const VisibilityIcon = () => {
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
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
};

export const NotVisibilityIcon = () => {
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
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );
};
