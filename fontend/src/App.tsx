import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductListPage from './pages/admin/products/list'
import ProductEditPage from './pages/admin/products/edit';

function App() {
  return (
      <>
          <Routes>
              <Route path="products">
                  <Route index element={<ProductListPage />} />
                  <Route path=":id/edit" element={<ProductEditPage />} />
              </Route>
          </Routes>
      </>
  );
}

export default App
