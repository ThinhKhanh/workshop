import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const Products = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="https://picsum.photos/300/300?random=12"
                alt="Cà phê Arabica"
                className="h-40 mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Cà phê Arabica</h3>
              <p className="text-gray-600 mb-4 text-center">
                Hương vị thanh tao, chua nhẹ, hậu ngọt, phù hợp cho người yêu
                thích sự tinh tế.
              </p>
              <span className="text-primary font-bold text-lg mb-2">
                180.000đ/kg
              </span>
              <a
                href="product-detail.html"
                className="mt-auto bg-blue-300 text-white px-6 py-2 rounded-full hover:bg-blue-400"
              >
                Mua ngay
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="https://picsum.photos/300/300?random=13"
                alt="Cà phê Robusta"
                className="h-40 mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Cà phê Robusta</h3>
              <p className="text-gray-600 mb-4 text-center">
                Đậm đà, mạnh mẽ, hàm lượng caffeine cao, phù hợp cho người thích
                vị truyền thống.
              </p>
              <span className="text-primary font-bold text-lg mb-2">
                150.000đ/kg
              </span>
              <a
                href="product-detail.html"
                className="mt-auto bg-blue-300 text-white px-6 py-2 rounded-full hover:bg-blue-400"
              >
                Mua ngay
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="https://picsum.photos/300/300?random=14"
                alt="Cà phê Blend"
                className="h-40 mb-4 rounded-lg object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Cà phê Blend</h3>
              <p className="text-gray-600 mb-4 text-center">
                Sự kết hợp hoàn hảo giữa Arabica và Robusta, cân bằng vị chua,
                đắng và hậu ngọt.
              </p>
              <span className="text-primary font-bold text-lg mb-2">
                170.000đ/kg
              </span>
              <a
                href="product-detail.html"
                className="mt-auto bg-blue-300 text-white px-6 py-2 rounded-full hover:bg-blue-400"
              >
                Mua ngay
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;
