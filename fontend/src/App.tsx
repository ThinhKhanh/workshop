import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/client/Home";
import InfoPage from "./pages/client/Info";
import Products from "./pages/client/Products";
import Contact from "./pages/client/Contact";
import LoginPage from "./pages/client/Login";
import RegisterPage from "./pages/client/Register";
import ProductDetailPage from "./pages/client/ProductDetail";
import CartPage from "./pages/client/Cart";
import CheckoutPage from "./pages/client/checkout";
import HistoryOrder from "./pages/client/historeOrder";
import Dashboard from "./pages/admin/dashboard/dashboard";
import ProductListPage from "./pages/admin/products/List";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/infoPage" element={<InfoPage />} />
          <Route path="/productPages" element={<Products />} />
          <Route path="/contactPage" element={<Contact />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/productDetailPage" element={<ProductDetailPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
          <Route path="/historyOrderPage" element={<HistoryOrder />} />
        </Route>
        <Route path="/admin/*" element={<Dashboard />}>
          <Route path="listProductPage" element={<ProductListPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
