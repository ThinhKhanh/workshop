import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const ProductDetailPage = () => {
  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Chi tiết sản phẩm
          </h1>
        </div>
      </section>
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://picsum.photos/400/400?random=31"
                alt="Cà phê Arabica"
                className="rounded-lg shadow-lg w-full max-w-md object-cover"
              />
            </div>
            <div className="md:w-1/2 flex flex-col">
              <h2 className="text-3xl font-bold mb-4">Cà phê Arabica</h2>
              <div className="text-primary text-2xl font-semibold mb-4">
                180.000đ/kg
              </div>
              <p className="text-gray-700 mb-6">
                Hương vị thanh tao, chua nhẹ, hậu ngọt, phù hợp cho người yêu
                thích sự tinh tế. Hạt cà phê được chọn lọc kỹ lưỡng từ các vùng
                cao nguyên Việt Nam.
              </p>
              <div className="flex items-center mb-6">
                <label className="mr-2 font-medium">Số lượng:</label>
                <input
                  id="quantity"
                  type="number"
                  value="1"
                  min="1"
                  className="w-20 border rounded text-center"
                />
              </div>
              <button className="bg-blue-300 hover:bg-blue- text-white px-8 py-3 rounded-full font-semibold">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Mô tả chi tiết</h3>
            <p className="text-gray-700 mb-6">
              Arabica là loại cà phê được ưa chuộng trên toàn thế giới nhờ hương
              vị thanh khiết, độ chua nhẹ và hậu vị ngọt. Cafeio cam kết mang
              đến những hạt Arabica chất lượng nhất, rang xay thủ công, giữ trọn
              hương vị tự nhiên.
            </p>
            <h3 className="text-2xl font-bold mb-4">Đánh giá sản phẩm</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 mr-2">★★★★★</span>
              <span className="text-gray-600">(120 đánh giá)</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow mb-2">
              <div className="flex items-center mb-2">
                <img
                  src="https://picsum.photos/40/40?random=32"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold">Nguyễn Văn A</div>
                  <div className="text-gray-500 text-sm">Hà Nội</div>
                </div>
              </div>
              <div className="text-gray-700">
                Sản phẩm rất thơm ngon, đúng chuẩn Arabica, giao hàng nhanh.
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <img
                  src="https://picsum.photos/40/40?random=33"
                  alt="User"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold">Trần Thị B</div>
                  <div className="text-gray-500 text-sm">TP. Hồ Chí Minh</div>
                </div>
              </div>
              <div className="text-gray-700">
                Rất hài lòng với chất lượng và dịch vụ của Cafeio.
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
