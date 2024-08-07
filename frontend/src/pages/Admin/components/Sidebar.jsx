const Sidebar = () => {
  return (
    <aside className="flex flex-col w-48 h-screen bg-gray-950 bg-opacity-95 text-white p-4 gap-10">
      <div className="flex items-center justify-center">
        <img className="p-2" src="../src/assets/LogoOscuro.svg" alt="logo" />
      </div>
      <div className="flex flex-col gap-6">
        <button className="hover:bg-gray-800 p-2 transition-all rounded-lg focus:bg-gray-800">
          Inventario
        </button>
        <button className="hover:bg-gray-800 p-2 transition-all rounded-lg focus:bg-gray-800">
          Ordenes
        </button>
        <button className="hover:bg-gray-800 p-2 transition-all rounded-lg focus:bg-gray-800">
          Clientes
        </button>
      </div>
      <div className="grow flex items-end">
        <button className="bg-red-600 text-white text-lg rounded-md p-3 font-semibold w-full shadow-lg focus:ring-2 focus:ring-red-500 focus:outline-0 hover:bg-red-700 transition-all duration-200">
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
