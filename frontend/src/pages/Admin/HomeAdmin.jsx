import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";

function HomeAdmin() {
  return (
    <main className="flex bg-[#212529]">
      <Sidebar />
      <div className="text-black bg-slate-300 w-screen ml-0 m-2 rounded p-4">
        <Outlet />
      </div>
    </main>
  );
}

export default HomeAdmin;
