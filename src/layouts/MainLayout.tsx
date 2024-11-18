import { Outlet } from "react-router-dom";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import EngineerRequestCardModal from "../components/EngineerRequestCardModal";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import NavBar from "../components/NavBar";
import RkhamCustomMeasurePopup from "../components/RkhamCustomMeasurePopup";
import { ConfirmDeleteProvider } from "../context/ConfirmDeleteContext";
import { EngineerRequestProvider } from "../context/EngineerRequestContext";
import { LoginModalProvider } from "../context/LoginModalContext";
import { RkahmCustomMeasureProvider } from "../context/RkhamCustomMeasure";

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
