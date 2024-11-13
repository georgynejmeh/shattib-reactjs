import { Outlet } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidePanel from "../components/AdminSidePanel";
import { ConfirmDeleteProvider } from "../context/ConfirmDeleteContext";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import { LoginModalProvider } from "../context/LoginModalContext";
import LoginModal from "../components/LoginModal";

const AdminLayout = () => {
  return (
    <LoginModalProvider>
      <ConfirmDeleteProvider>
        <ConfirmDeleteModal />
        <AdminNavBar />
        <LoginModal />
        <div className="flex">
          <AdminSidePanel />
          <div className="w-full ps-sidepanel pt-16">
            <Outlet />
          </div>
        </div>
      </ConfirmDeleteProvider>
    </LoginModalProvider>
  );
};

export default AdminLayout;
