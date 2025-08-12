import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  image?: string;
};

export default function AdminProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Tên</th>
            <th className="border p-2">Giá</th>
            <th className="border p-2">Tồn kho</th>
            <th className="border p-2">Ảnh</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.price}</td>
              <td className="border p-2">{p.stock}</td>
              <td className="border p-2">
                {p.image && (
                  <img
                    src={`http://localhost:8000/${p.image}`}
                    alt={p.name}
                    className="w-16 h-16 object-cover"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
