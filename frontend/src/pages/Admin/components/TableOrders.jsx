import PropTypes from "prop-types";
const TableOrders = ({ colTable, data }) => {
  return (
    <div className="relative overflow-y-auto rounded-md p-2 shadow-md bg-white">
      <table className="w-full text-sm text-left text-black">
        <thead className="text-black uppercase border-b-2">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input name="checkbox" type="checkbox" className="w-4 h-4" />
              </div>
            </th>
            {colTable.map((item) => (
              <th scope="col" className="px-6 py-3" key={item}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input name="checkbox" type="checkbox" className="w-4 h-4" />
                </div>
              </td>
              <td className="px-6 py-4 flex items-center gap-2">
                <div className="flex flex-col">
                  <p className="font-semibold">{item.order}</p>
                </div>
              </td>
              <td className="px-6 py-4">{item.client}</td>
              {item.state === "En camino" ? (
                <td className="px-6 py-4">
                  <span className="bg-yellow-300 px-2 py-1 rounded-md">
                    {item.state}
                  </span>
                </td>
              ) : item.state === "Pagado" ? (
                <td className="px-6 py-4">
                  <span className="bg-green-300 px-2 py-1 rounded-md">
                    {item.state}
                  </span>
                </td>
              ) : (
                <td className="px-6 py-4">
                  <span className="bg-red-300 px-2 py-1 rounded-md">
                    {item.state}
                  </span>
                </td>
              )}
              <td className="px-6 py-4">{item.products}</td>
              <td className="px-6 py-4">${item.total}</td>
              <td className="px-6 py-4">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableOrders.propTypes = {
  colTable: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default TableOrders;
