const Footer = () => {
  return (
    <footer className="bg-white pt-12 md:pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Cafeio.</h3>
            <p className="text-gray-600 mb-4">
              123 Đường Cà Phê, Quận 1<br />
              TP. Hồ Chí Minh, Việt Nam
            </p>
          </div>
          <div>
            <h4 className="text-gray-500 mb-4">Liên kết</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="index.html"
                  className="hover:text-primary transition-colors"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="about.html"
                  className="hover:text-primary transition-colors"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="shop.html"
                  className="hover:text-primary transition-colors"
                >
                  Sản phẩm
                </a>
              </li>
              <li>
                <a
                  href="contact.html"
                  className="hover:text-primary transition-colors"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 mb-4">Hỗ trợ</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách giao hàng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 mb-4">Đăng ký nhận tin</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors flex-grow"
              />
              <button className="border-b border-gray-900 py-2 px-4 font-medium hover:text-primary hover:border-primary transition-colors">
                ĐĂNG KÝ
              </button>
            </div>
          </div>
        </div>
        <div className="border-t pt-8">
          <p className="text-gray-500 text-center">
            2024 Cafeio. Tất cả các quyền được bảo lưu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
