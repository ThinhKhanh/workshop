import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const Register = () => {
  return (
    <>
      <Header />
      <main>
        <section className="relative bg-blue-200 py-12 md:py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Đăng ký tài khoản
            </h1>
          </div>
        </section>
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-4">
            <form className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
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
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-300 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold w-full"
              >
                Đăng ký
              </button>
              <div className="mt-4 text-center">
                <a href="signin.html" className="text-primary hover:underline">
                  Đã có tài khoản? Đăng nhập
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Register;
