import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/client/Home";
import InfoPage from "./pages/client/Info";
import Products from "./pages/client/Products";
import Contact from "./pages/client/Contact";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ProductDetailPage from "./pages/client/ProductDetail";
import CartPage from "./pages/client/Cart";
import CheckoutPage from "./pages/client/checkout";
import HistoryOrder from "./pages/client/historeOrder";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Auth routes */}
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />

        {/* Client routes (yêu cầu đăng nhập) */}
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/infoPage"
          element={
            <PrivateRoute>
              <InfoPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/productPages"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/contactPage"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/productDetailPage"
          element={
            <PrivateRoute>
              <ProductDetailPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cartPage"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkoutPage"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/historyOrderPage"
          element={
            <PrivateRoute>
              <HistoryOrder />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
