import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">Thanh toán</h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Điền thông tin để hoàn tất đơn hàng của bạn
          </p>
        </div>
      </section>
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <form
            action="/historyOrderPage"
            className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Thông tin giao hàng</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Số điện thoại"
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Địa chỉ nhận hàng"
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Ghi chú (nếu có)"
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
              ></textarea>
            </div>
            <h2 className="text-left text-2x font-bold mb-6">
              Phương thức thanh toán
            </h2>
            <div className="mb-4 flex items-center">
              <input
                type="radio"
                id="cod"
                name="payment"
                defaultChecked
                className="mr-2"
              />
              <label htmlFor="cod" className="mr-6">
                Thanh toán khi nhận hàng (COD)
              </label>

              <input type="radio" id="bank" name="payment" className="mr-2" />
              <label htmlFor="bank">Chuyển khoản ngân hàng</label>
            </div>
            <div className="text-center mt-8">
              <button
                type="submit"
                className="bg-blue-300 hover:bg-blue-400 text-white px-8 py-3 rounded-full cursor-pointer font-semibold"
              >
                Xác nhận đặt hàng
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CheckoutPage;
