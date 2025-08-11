import { useEffect, useState } from "react";
import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

type Product = {
  _id: string;
  name: string;
  description?: string;
  price?: number;
  image?: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Lỗi khi lấy sản phẩm:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Sản phẩm Cafeio
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Khám phá các loại cà phê rang xay thủ công, nguyên chất, đa dạng
            hương vị tại Cafeio.
          </p>
        </div>
      </section>

      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          {loading ? (
            <p className="text-center">Đang tải sản phẩm...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <img
                    src={product.image || "https://picsum.photos/300/300"}
                    alt={product.name}
                    className="h-40 mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-center">
                    {product.description || "Chưa có mô tả"}
                  </p>
                  <span className="text-primary font-bold text-lg mb-2">
                    {product.price?.toLocaleString()}đ
                  </span>
                  <a
                    href={`/product/${product._id}`}
                    className="mt-auto bg-blue-300 text-white px-6 py-2 rounded-full hover:bg-blue-400"
                  >
                    Mua ngay
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
