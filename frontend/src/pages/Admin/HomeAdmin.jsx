import { Link, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Cookies from "js-cookie";

function HomeAdmin() {
  if (!Cookies.get("sessionId"))
    return (
      <div className="text-black bg-slate-50 w-screen h-screen flex flex-col gap-2 justify-center items-center text-3xl font-bold">
        No estas autenticado
        <Link className="text-sm bg-blue-500 text-white p-2 rounded-xl" to={"/login-user/administrator"}>Volver al inicio de sesión</Link>
      </div>
    );

  return (
    <main className="flex bg-gray-950">
      <Sidebar />
      <div className="text-black bg-slate-50 w-screen ml-0 m-1 rounded">
        <Outlet />
      </div>
    </main>
  );
}

export default HomeAdmin;
