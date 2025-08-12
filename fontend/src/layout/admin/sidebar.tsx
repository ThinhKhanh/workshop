import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="w-[260px] bg-white border-r border-gray-200 flex flex-col fixed h-screen z-50 transition-all duration-300 ease-in-out">
        <div className="px-4 py-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <i className="fas fa-chart-bar text-xl text-indigo-600"></i>
            <span className="text-lg font-semibold">Admin Panel</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav>
            <div className="mb-6">
              <h3 className="text-xs uppercase text-gray-500 px-4 mb-2">
                DANH MỤC
              </h3>
              <ul className="list-none">
                <li className="mb-1">
                  <Link
                    to=""
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fas fa-home w-6 text-sm"></i>
                    <span className="ml-3">Dashboard</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to=""
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fas fa-chart-line w-6 text-sm"></i>
                    <span className="ml-3">Thống kê</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to=""
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fas fa-users w-6 text-sm"></i>
                    <span className="ml-3">Người dùng</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to=""
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fa-regular fa-rectangle-list w-6 text-sm"></i>
                    <span className="ml-3">Danh mục</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="listProductPage"
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fas fa-shopping-cart w-6 text-sm"></i>
                    <span className="ml-3">Sản phẩm</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to=""
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fas fa-file-alt w-6 text-sm"></i>
                    <span className="ml-3">Đơn hàng</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xs uppercase text-gray-500 px-4 mb-2">
                HỆ THỐNG
              </h3>
              <ul className="list-none">
                <li className="mb-1">
                  <Link
                    to=""
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fas fa-cog w-6 text-sm"></i>
                    <span className="ml-3">Cài đặt</span>
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to=""
                    className="flex items-center px-4 py-3 rounded-md text-gray-500 hover:bg-gray-100 hover:text-indigo-600 transition"
                  >
                    <i className="fas fa-question-circle w-6 text-sm"></i>
                    <span className="ml-3">Hỗ trợ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="px-4 py-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="block font-medium text-sm truncate">
                John Doe
              </span>
              <span className="block text-xs text-gray-500">Admin</span>
            </div>
            <i className="fas fa-sign-out-alt text-gray-500 hover:text-indigo-600 cursor-pointer"></i>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
