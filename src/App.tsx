import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./layouts/MainLayout";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPageContainer";
import WishListPage from "./pages/WishListPage";
import ConditionDocsPage from "./pages/ConditionDocsPage";
import NewConditionPage from "./pages/NewConditionPage";
import ConfirmNewConditionPage from "./pages/ConfirmNewConditionPage";
import PriceRequestPage from "./pages/PriceRequestPage";
import MainCategoryPage from "./pages/MainCategoryPage";
import PriceRequestSecondPage from "./pages/PriceRequestSecondPage";
import DocPage from "./pages/DocPage";
import AdminLayout from "./layouts/AdminLayout";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminHomePage from "./pages/admin/AdminHomePage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import AdminCategoryPage from "./pages/admin/AdminCategoryPage";
import AdminNewProductContainer from "./pages/admin/AdminNewProductContainer";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import AdminConsultationsPage from "./pages/admin/AdminConsultationsPage";
import StatisticsPage from "./pages/admin/StatisticsPage";
import AdminCriteriasPage from "./pages/admin/AdminCriteriasPage";
import AdminCriteriaPage from "./pages/admin/AdminCriteriaPage";
import ContactPage from "./pages/ContactPage";
import SearchPage from "./pages/SearchPage";
import OrderPage from "./pages/OrderPage";
import OrdersPage from "./pages/OrdersPage";
import AdminSamplesPage from "./pages/admin/AdminSamplesPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import ConsultationsPage from "./pages/ConsultationsPage";

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
        <Route path="/admin" element={<RegisterPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:id/:subId" element={<MainCategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishListPage />} />

          <Route path="/conditions" element={<ConditionDocsPage />} />
          <Route path="/conditions/doc/:id" element={<DocPage />} />
          <Route path="/conditions/new" element={<NewConditionPage />} />
          <Route
            path="/conditions/new/confirm"
            element={<ConfirmNewConditionPage />}
          />
          <Route path="/price-request" element={<PriceRequestPage />} />
          <Route path="/price-request-2" element={<PriceRequestSecondPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/order/:id" element={<OrderPage />} />
          <Route path="/consultations" element={<ConsultationsPage />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin/home" element={<AdminHomePage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/categories" element={<AdminCategoriesPage />} />
          <Route path="/admin/category/1" element={<AdminCategoryPage />} />
          <Route
            path="/admin/product/new"
            element={<AdminNewProductContainer />}
          />
          <Route
            path="/admin/product/new/2"
            element={<AdminNewProductContainer />}
          />
          <Route path="/admin/order/:id" element={<AdminOrderPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/consultations"
            element={<AdminConsultationsPage />}
          />
          <Route path="/admin/statistics" element={<StatisticsPage />} />
          <Route path="/admin/criterias" element={<AdminCriteriasPage />} />
          <Route path="/admin/criterias/:id" element={<AdminCriteriaPage />} />
          <Route path="/admin/search" element={<SearchPage />} />
          <Route path="/admin/samples" element={<AdminSamplesPage />} />
          <Route
            path="/admin/product/edit/:id"
            element={<AdminEditProductPage />}
          />
        </Route>
        button
      </Routes>
    </main>
  );
};

export default App;
