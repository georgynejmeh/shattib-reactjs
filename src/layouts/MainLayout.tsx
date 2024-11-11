import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EngineerRequestCardModal from "../components/EngineerRequestCardModal";
import { EngineerRequestProvider } from "../context/EngineerRequestContext";

const MainLayout = () => {
  return (
    <EngineerRequestProvider>
      <NavBar />
      <EngineerRequestCardModal />
      <div className="mt-20 py-2">
        <Outlet />
      </div>
      <Footer />
    </EngineerRequestProvider>
  );
};

export default MainLayout;
