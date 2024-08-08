import Dropdown from "../../../components/Dropdown";
import Search from "../../../components/Search";

const Filterbar = () => {
  const dataCategories = [
    {
      id: 1,
      name: "Tecnologia",
    },
    {
      id: 2,
      name: "Moda",
    },
    {
      id: 3,
      name: "Deportes",
    },
    {
      id: 4,
      name: "Hogar",
    },
  ];

  const dataStates = [
    {
      id: 1,
      name: "Activo",
    },
    {
      id: 2,
      name: "Inactivo",
    },
  ];

  return (
    <div className="bg-white flex items-end shadow-md rounded-md p-2 gap-10">
      <div className="flex">
        <Dropdown
          data={dataCategories}
          defaultOption="Todas las categorias"
          name="Categorias"
        />
        <Dropdown
          data={dataStates}
          defaultOption="Todos los estados"
          name="Estado"
        />
      </div>
      <Search />
    </div>
  );
};

export default Filterbar;
