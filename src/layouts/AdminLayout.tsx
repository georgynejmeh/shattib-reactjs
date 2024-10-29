import { Outlet } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidePanel from "../components/AdminSidePanel";

const AdminLayout = () => {
  return (
    <>
      <AdminNavBar />
      <div className="flex">
        <AdminSidePanel />
        <div className="w-full ps-sidepanel pt-16">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
