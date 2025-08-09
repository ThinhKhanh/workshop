import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const HistoryOrder = () => {
  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Lịch sử đơn hàng
          </h1>
        </div>
      </section>
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-blue-200">
                  <th className="py-3 px-4 text-left">Mã đơn</th>
                  <th className="py-3 px-4 text-left">Ngày đặt</th>
                  <th className="py-3 px-4 text-center">Sản phẩm</th>
                  <th className="py-3 px-4 text-center">Tổng tiền</th>
                  <th className="py-3 px-4 text-center">Trạng thái</th>
                  <th className="py-3 px-4 text-center">Chi tiết</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4">#1001</td>
                  <td className="py-3 px-4">01/06/2024</td>
                  <td className="py-3 px-4 text-center">
                    <img
                      src="https://picsum.photos/40/40?random=51"
                      alt="Arabica"
                      className="h-10 w-10 rounded object-cover inline-block mr-1"
                    />
                    <img
                      src="https://picsum.photos/40/40?random=52"
                      alt="Robusta"
                      className="h-10 w-10 rounded object-cover inline-block"
                    />
                  </td>
                  <td className="py-3 px-4 text-center">480.000đ</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-green-600 font-semibold">
                      Đã giao
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="#" className="text-primary hover:underline">
                      Xem
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">#1002</td>
                  <td className="py-3 px-4">15/05/2024</td>
                  <td className="py-3 px-4 text-center">
                    <img
                      src="https://picsum.photos/40/40?random=53"
                      alt="Blend"
                      className="h-10 w-10 rounded object-cover inline-block"
                    />
                  </td>
                  <td className="py-3 px-4 text-center">170.000đ</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-yellow-600 font-semibold">
                      Đang giao
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <a href="#" className="text-primary hover:underline">
                      Xem
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HistoryOrder;
