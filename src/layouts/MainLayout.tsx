import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EngineerRequestCardModal from "../components/EngineerRequestCardModal";
import { EngineerRequestProvider } from "../context/EngineerRequestContext";
import { ConfirmDeleteProvider } from "../context/ConfirmDeleteContext";
import { LoginModalProvider } from "../context/LoginModalContext";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import LoginModal from "../components/LoginModal";
import { RkahmCustomMeasureProvider } from "../context/RkhamCustomMeasureContext";
import RkhamCustomMeasurePopup from "../components/RkhamCustomMeasurePopup";

const MainLayout = () => {
  return (
    <RkahmCustomMeasureProvider>
      <LoginModalProvider>
        <ConfirmDeleteProvider>
          <EngineerRequestProvider>
            <NavBar />
            <EngineerRequestCardModal />
            <ConfirmDeleteModal />
            <RkhamCustomMeasurePopup />
            <LoginModal />
            <div className="mt-20 py-2 max-lg:mt-0">
              <Outlet />
            </div>
            <Footer />
          </EngineerRequestProvider>
        </ConfirmDeleteProvider>
      </LoginModalProvider>
    </RkahmCustomMeasureProvider>
  );
};

export default MainLayout;
