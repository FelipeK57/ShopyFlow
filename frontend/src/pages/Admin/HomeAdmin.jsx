import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";

function HomeAdmin() {
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
  