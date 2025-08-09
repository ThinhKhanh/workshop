import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/client/Home";
import InfoPage from "./pages/client/Info";
import Products from "./pages/client/Products";
import Contact from "./pages/client/Contact";
import LoginPage from "./pages/client/Login";
import RegisterPage from "./pages/client/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/infoPage" element={<InfoPage />} />
        <Route path="/productPages" element={<Products />} />
        <Route path="/contactPage" element={<Contact />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/registerPage" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
