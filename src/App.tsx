import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import ContactPage from "./pages/ContactPage";

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
        <Route path="/" element={<ContactPage />} />
        {/* <Route path="/" element={<IntroPage />} />
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
        </Route>
        button */}
      </Routes>
    </main>
  );
};

export default App;
