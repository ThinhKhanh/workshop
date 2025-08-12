import { Outlet } from "react-router-dom";
import Header from "../../../layout/admin/Header";
import Sidebar from "../../../layout/admin/sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="flex-1 flex flex-col flex-1 ml-[260px]">
        <Header />
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
          <p className="text-gray-500">
            Chào mừng bạn trở lại! Dưới đây là tổng quan về bảng điều khiển quản
            trị của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-500">
                Tổng doanh thu
              </h3>
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                <i className="fas fa-dollar-sign"></i>
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-1">$45,231.89</div>
              <p className="text-xs text-gray-500 flex items-center">
                <i className="fas fa-arrow-up text-green-500"></i>
                <span className="mx-1 text-green-500 font-medium">
                  +20.1%
                </span>{" "}
                so với tháng trước
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-500">
                Người dùng mới
              </h3>
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                <i className="fas fa-users"></i>
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-1">2,350</div>
              <p className="text-xs text-gray-500 flex items-center">
                <i className="fas fa-arrow-up text-green-500"></i>
                <span className="mx-1 text-green-500 font-medium">
                  +180.1%
                </span>{" "}
                so với tháng trước
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-500">
                Đơn hàng được mua
              </h3>
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-1">1,203</div>
              <p className="text-xs text-gray-500 flex items-center">
                <i className="fas fa-arrow-up text-green-500"></i>
                <span className="mx-1 text-green-500 font-medium">+19%</span> so
                với tháng trước
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-500">Hoàn tiền</h3>
              <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                <i className="fas fa-chart-bar"></i>
              </div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-1">$2,400</div>
              <p className="text-xs text-gray-500 flex items-center">
                <i className="fas fa-arrow-down text-red-500"></i>
                <span className="mx-1 text-red-500 font-medium">-4.5%</span> so
                với tháng trước
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-4">
          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">
                Tổng quan về doanh thu
              </h3>
              <p className="text-sm text-gray-500">
                Doanh thu hàng tháng cho năm hiện tại.
              </p>
            </div>
            <div className="h-[300px] bg-gray-50 rounded-md flex items-center justify-center text-gray-400">
              Trình dữ liệu biểu đồ doanh thu
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1">
                Đơn hàng đặt gần đây
              </h3>
              <p className="text-sm text-gray-500">
                Đơn hàng mới nhất của khách hàng
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <i className="fas fa-users"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Đơn hàng #1001</p>
                  <p className="text-xs text-gray-500">Người dùng 1</p>
                </div>
                <div className="text-sm font-medium">$89.99</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <i className="fas fa-users"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Đơn hàng #1002</p>
                  <p className="text-xs text-gray-500">Người dùng 2</p>
                </div>
                <div className="text-sm font-medium">$45.50</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <i className="fas fa-users"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Đơn hàng #1003</p>
                  <p className="text-xs text-gray-500">Người dùng 3</p>
                </div>
                <div className="text-sm font-medium">$124.00</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <i className="fas fa-users"></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">Đơn hàng #1004</p>
                  <p className="text-xs text-gray-500">Người dùng 4</p>
                </div>
                <div className="text-sm font-medium">$67.25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
