import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const InfoPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-blue-200 py-12 md:py-16 text-center">
          <div className="container mx-auto px-4">
            <img
              src="https://picsum.photos/600/240?random=7"
              alt="Không gian Cafeio"
              className="mx-auto h-60 rounded-lg shadow-lg mb-6 object-cover"
            />
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Giới Thiệu Cafeio
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Cafeio là thương hiệu cà phê Việt Nam với sứ mệnh mang đến trải
              nghiệm cà phê nguyên bản, chất lượng cao và không gian thưởng thức
              hiện đại, gần gũi. Chúng tôi tự hào với quy trình rang xay thủ
              công, lựa chọn hạt cà phê tốt nhất từ các vùng trồng nổi tiếng.
            </p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://picsum.photos/600/400?random=8"
                  alt="Sứ mệnh Cafeio"
                  className="w-full rounded-lg shadow-lg mb-6 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Sứ mệnh & Tầm nhìn</h2>
                <p className="text-gray-600 mb-4">
                  Cafeio cam kết mang đến những sản phẩm cà phê chất lượng, bảo
                  vệ môi trường và phát triển cộng đồng nông dân trồng cà phê
                  Việt Nam.
                </p>
                <ul className="list-disc list-inside text-left text-gray-700">
                  <li>Chọn lọc hạt cà phê tốt nhất</li>
                  <li>Rang xay thủ công, giữ trọn hương vị</li>
                  <li>Không gian thưởng thức hiện đại, ấm cúng</li>
                  <li>Hỗ trợ phát triển cộng đồng nông dân</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-blue-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Đội ngũ Cafeio</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Những con người đam mê cà phê, sáng tạo và tận tâm phục vụ khách
                hàng
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src="https://picsum.photos/128/128?random=9"
                  alt="Nguyễn Văn Cafe"
                  className="h-32 w-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">Nguyễn Văn Cafe</h3>
                <p className="text-gray-600 mb-2">Nhà sáng lập</p>
                <p className="text-gray-500 text-sm text-center">
                  Đam mê cà phê và mong muốn lan tỏa giá trị cà phê Việt ra thế
                  giới.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src="https://picsum.photos/128/128?random=10"
                  alt="Trần Thị Hạt"
                  className="h-32 w-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">Trần Thị Hạt</h3>
                <p className="text-gray-600 mb-2">Chuyên gia rang xay</p>
                <p className="text-gray-500 text-sm text-center">
                  Kinh nghiệm hơn 10 năm trong lĩnh vực rang xay cà phê thủ
                  công.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src="https://picsum.photos/128/128?random=11"
                  alt="Lê Văn Barista"
                  className="h-32 w-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">Lê Văn Barista</h3>
                <p className="text-gray-600 mb-2">Barista trưởng</p>
                <p className="text-gray-500 text-sm text-center">
                  Sáng tạo ra nhiều công thức cà phê đặc biệt, phục vụ khách
                  hàng tận tâm.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default InfoPage;
