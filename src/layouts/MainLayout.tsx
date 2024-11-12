import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EngineerRequestCardModal from "../components/EngineerRequestCardModal";
import { EngineerRequestProvider } from "../context/EngineerRequestContext";
import { ConfirmDeleteProvider } from "../context/ConfirmDeleteContext";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

const MainLayout = () => {
  return (
    <ConfirmDeleteProvider>
      <EngineerRequestProvider>
        <NavBar />
        <EngineerRequestCardModal />
        <ConfirmDeleteModal />
        <div className="mt-20 py-2">
          <Outlet />
        </div>
        <Footer />
      </EngineerRequestProvider>
    </ConfirmDeleteProvider>
  );
};

export default MainLayout;
