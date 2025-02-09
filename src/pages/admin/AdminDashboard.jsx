import { Outlet } from "react-router";
import { Sidebar } from "../../components/global/Sidebar";

export const AdminDashboard = () => {
  return (
    <section className="h-screen-dynamic md:grid md:grid-cols-5">
      <div className="bg-slate-200 hidden md:block">
        <Sidebar />
      </div>
      <div className="col-span-4 p-8 min-h-screen overflow-y-auto">
        <Outlet />
      </div>
    </section>
  );
};
