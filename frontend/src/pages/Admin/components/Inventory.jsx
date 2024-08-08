import Table from "./Table";
import Filterbar from "./Filterbar";

const Inventory = () => {
  return (
    <main>
      <header className="text-3xl font-semibold pt-4 pl-4">Inventario</header>
      <section className="p-4">
        <Filterbar />
      </section>
      <hr className="w-full border-slate-300 border-dashed" />
      <section className="p-4">
        <Table />
      </section>
    </main>
  );
};

export default Inventory;
