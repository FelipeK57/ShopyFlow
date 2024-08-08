import Table from "./Table";
import Filterbar from "./Filterbar";

const Inventory = () => {
  const colTable = [
    "Producto",
    "Categoria",
    "Cantidad",
    "Precio",
    "Acciónes",
    "Estado",
  ];

  const data = [
    {
      id: 1,
      img: "https://mac-center.com/cdn/shop/files/MacBook_Pro_13_in_Space_Gray_PDP_Image_Position-1_MXLA_5395ce92-3d36-4483-a995-b6bb011179c0.jpg?v=1700304877&width=823",
      name: "MacBook Pro M3",
      category: "Tecnologia",
      quantity: 10,
      price: 2999,
      state: true,
    },
    {
      id: 2,
      img: "https://mac-center.com/cdn/shop/files/MacBook_Pro_13_in_Space_Gray_PDP_Image_Position-1_MXLA_5395ce92-3d36-4483-a995-b6bb011179c0.jpg?v=1700304877&width=823",
      name: "MacBook Air M1",
      category: "Tecnologia",
      quantity: 20,
      price: 879,
      state: false,
    },
  ];

  return (
    <main>
      <header className="text-3xl font-semibold pt-4 pl-4">Inventario</header>
      <section className="p-4">
        <Filterbar />
      </section>
      <hr className="w-full border-slate-300 border-dashed" />
      <section className="p-4">
        <Table data={data} colTable={colTable} />
      </section>
    </main>
  );
};

export default Inventory;
