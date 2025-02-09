import { Link, useLocation } from "react-router";

export const Sidebar = () => {
  const location = useLocation();
  const links = [
    {
      name: "Inicio",
      path: "home",
    },
    {
      name: "Ordenes",
      path: "orders",
    },
    {
      name: "Productos",
      path: "products",
    },
  ];
  return (
    <aside className="bg-slate-50 h-full flex flex-col p-8 gap-6 border-r-1 border-slate-200">
      <h3 className="font-bold 2xl:text-2xl text-lg text-slate-950">
        Shopyflow Dashboard
      </h3>
      {links.map((link) => (
        <Link
          key={link.path}
          to={`${link.path}`}
          className="flex flex-row items-center gap-2"
        >
          <span
            className={`text-slate-950 text-sm 2xl:text-lg hover:bg-slate-200 transition-all ${
              location.pathname.includes(link.path)
                ? "bg-slate-200"
                : "text-slate-400"
            } rounded-lg w-full px-4 py-2`}
          >
            {link.name}
          </span>
        </Link>
      ))}
    </aside>
  );
};
