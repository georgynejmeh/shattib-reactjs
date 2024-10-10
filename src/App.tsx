import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <main dir="rtl">
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
