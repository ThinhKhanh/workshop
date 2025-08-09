import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Giỏ hàng của bạn
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Kiểm tra lại các sản phẩm trước khi thanh toán
          </p>
        </div>
      </section>
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-secondary">
                  <th className="py-3 px-4 text-center">
                    <input type="checkbox" />
                  </th>
                  <th className="py-3 px-4 text-left">Sản phẩm</th>
                  <th className="py-3 px-4 text-left">Tên</th>
                  <th className="py-3 px-4 text-center">Giá</th>
                  <th className="py-3 px-4 text-center">Số lượng</th>
                  <th className="py-3 px-4 text-center">Thành tiền</th>
                  <th className="py-3 px-4 text-center">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src="https://picsum.photos/80/80?random=21"
                      alt="Arabica"
                      className="h-16 w-16 rounded object-cover"
                    />
                  </td>
                  <td className="py-3 px-4">Cà phê Arabica</td>
                  <td className="py-3 px-4 text-center">180.000đ</td>
                  <td className="py-3 px-4 text-center">
                    <input
                      type="number"
                      value="1"
                      min="1"
                      className="w-16 border rounded text-center"
                    />
                  </td>
                  <td className="py-3 px-4 text-center">180.000đ</td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-red-500 hover:underline">
                      Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-4">
                    <img
                      src="https://picsum.photos/80/80?random=22"
                      alt="Robusta"
                      className="h-16 w-16 rounded object-cover"
                    />
                  </td>
                  <td className="py-3 px-4">Cà phê Robusta</td>
                  <td className="py-3 px-4 text-center">150.000đ</td>
                  <td className="py-3 px-4 text-center">
                    <input
                      type="number"
                      value="2"
                      min="1"
                      className="w-16 border rounded text-center"
                    />
                  </td>
                  <td className="py-3 px-4 text-center">300.000đ</td>
                  <td className="py-3 px-4 text-center">
                    <button className="text-red-500 hover:underline">
                      Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <div className="mb-4 md:mb-0 bg-blue-300 hover:bg-blue-400 p-2 rounded">
              <Link to="/home">Tiếp tục mua sắm</Link>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold mb-2">
                Tổng cộng: <span className="text-primary">480.000đ</span>
              </div>
              <Link
                to="/checkoutPage"
                className="bg-blue-300 hover:bg-blue-400 text-white px-8 p-2 rounded-full font-semibold"
              >
                Thanh toán
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CartPage;
