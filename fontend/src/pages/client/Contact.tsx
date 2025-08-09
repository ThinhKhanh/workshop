import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-blue-200 py-12 md:py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Liên hệ Cafeio
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Hãy liên hệ với chúng tôi để được tư vấn, đặt hàng hoặc hợp tác
              kinh doanh!
            </p>
          </div>
        </section>
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://picsum.photos/600/400?random=15"
                  alt="Liên hệ Cafeio"
                  className="w-full rounded-lg shadow-lg mb-6 object-cover"
                />
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2">Thông tin liên hệ</h2>
                  <p className="text-gray-600 mb-2">
                    Địa chỉ: 123 Đường Cà Phê, Quận 1, TP. Hồ Chí Minh
                  </p>
                  <p className="text-gray-600 mb-2">Điện thoại: 0123 456 789</p>
                  <p className="text-gray-600 mb-2">Email: info@cafeio.vn</p>
                  <div className="mt-4">
                    <iframe
                      src="https://www.google.com/maps?q=10.7769,106.7009&z=15&output=embed"
                      width="100%"
                      height="200"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Gửi liên hệ</h2>
                  <form>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        placeholder="Nội dung"
                        className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-white px-6 py-2 rounded-full font-semibold"
                    >
                      Gửi
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
