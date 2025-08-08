import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/client/Home";
import InfoPage from "./pages/client/Info";
import Products from "./pages/client/Products";
import Contact from "./pages/client/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/infoPage" element={<InfoPage />} />
        <Route path="/productPages" element={<Products />} />
        <Route path="/contactPage" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
