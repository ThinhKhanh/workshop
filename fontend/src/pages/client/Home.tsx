import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <img
              src="https://picsum.photos/120/120?random=2"
              alt="Cafeio Logo"
              className="h-16"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-primary">
            Cafeio - Thế giới Cà Phê
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
            Khám phá hương vị cà phê nguyên chất, rang xay thủ công và trải
            nghiệm không gian cà phê hiện đại, ấm cúng tại Cafeio.
          </p>
          <a
            href="product-detail.html"
            className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-full btn-hover"
          >
            mua ngay
          </a>
        </div>
      </section>

      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những loại cà phê được yêu thích nhất tại Cafeio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="https://picsum.photos/300/300?random=3"
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
                className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-full btn-hover"
              >
                Xem chi tiết
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="https://picsum.photos/300/300?random=4"
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
                className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-full btn-hover"
              >
                Xem chi tiết
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
              <img
                src="https://picsum.photos/300/300?random=5"
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
                className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-full btn-hover"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://picsum.photos/600/400?random=6"
                alt="Về Cafeio"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Về Cafeio</h2>
              <p className="text-gray-600 mb-6">
                Cafeio là thương hiệu cà phê Việt Nam với sứ mệnh mang đến những
                trải nghiệm cà phê nguyên bản, chất lượng cao và không gian
                thưởng thức hiện đại, gần gũi. Chúng tôi tự hào với quy trình
                rang xay thủ công, lựa chọn hạt cà phê tốt nhất từ các vùng
                trồng nổi tiếng.
              </p>
              <a
                href="about.html"
                className="bg-primary text-white px-6 py-2 rounded-full btn-hover"
              >
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
