import Filterbar from "./Filterbar.jsx";
import TableOrders from "./TableOrders.jsx";
const Orders = () => {
  const colTable = [
    "Pedido",
    "Cliente",
    "Estado",
    "Productos",
    "Total",
    "Fecha",
  ];

  const data = [
    {
      order: "Orden #1",
      client: "Adolfo Gonzalez",
      state: "Pagado",
      products: "Airpods, Cargador 33W",
      total: 300,
      date: "01/01/2022",
    },
    {
      order: "Orden #2",
      client: "James Martinez",
      state: "En camino",
      products: "Smartwatch",
      total: 100,
      date: "02/02/2022",
    },
    {
      order: "Order #3",
      client: "Carlos Molina",
      state: "Pendiente",
      products: "Camisa Negra Talla XL, Gorra Roja",
      total: 60,
      date: "03/03/2022",
    },
  ];

  return (
    <main>
      <header className="text-3xl font-semibold pt-4 pl-4">Pedidos</header>
      <section className="p-4">
        <Filterbar />
      </section>
      <hr className="w-full border-slate-300 border-dashed" />
      <section className="p-4">
        <TableOrders data={data} colTable={colTable} />
      </section>
    </main>
  );
};

export default Orders;
