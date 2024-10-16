import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import WishListPage from "./pages/WishListPage";
import ConditionDocsPage from "./pages/ConditionDocsPage";
import NewConditionPage from "./pages/NewConditionPage";
import ConfirmNewConditionPage from "./pages/ConfirmNewConditionPage";
import PriceRequestPage from "./pages/PriceRequestPage";
import MainCategoryPage from "./pages/MainCategoryPage";
import PriceRequestSecondPage from "./pages/PriceRequestSecondPage";

const App = () => {
  // return to the top of the page on navigation
  // FIX for: keep the same scroll distance on navigation
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main dir="rtl">
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/category" element={<MainCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/conditions" element={<ConditionDocsPage />} />
          <Route path="/conditions/new" element={<NewConditionPage />} />
          <Route
            path="/conditions/new/confirm"
            element={<ConfirmNewConditionPage />}
          />
          <Route path="/price-request" element={<PriceRequestPage />} />
          <Route path="/price-request-2" element={<PriceRequestSecondPage />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
