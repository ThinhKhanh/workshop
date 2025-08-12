import { useList } from "../../../hooks/useList";
import Header from "../../../layout/admin/Header";
import Sidebar from "../../../layout/admin/sidebar";

const ProductListPage = () => {
  const { data, isLoading, error } = useList("products");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Sidebar />
      <main className="flex-1 ml-[260px] p-6 bg-gray-50 min-h-screen">
        <Header />
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Danh sách sản phẩm</h1>
          <p className="text-gray-500">Quản lý, thêm, sửa và xóa sản phẩm.</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex gap-2">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              <i className="fas fa-plus mr-2"></i> Thêm sản phẩm
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition">
              <i className="fas fa-file-export mr-2"></i> Xuất file
            </button>
          </div>

          <div className="relative">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="pl-9 pr-3 py-2 border border-gray-300 rounded-md w-64 text-sm outline-none focus:border-indigo-600 transition"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Tên sản phẩm</th>
                <th className="py-3 px-4 text-left">Danh mục</th>
                <th className="py-3 px-4 text-left">Giá</th>
                <th className="py-3 px-4 text-left">Trạng thái</th>
                <th className="py-3 px-4 text-left">Ngày tạo</th>
                <th className="py-3 px-4 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4 font-medium">Sản phẩm A</td>
                <td className="py-3 px-4">Danh mục 1</td>
                <td className="py-3 px-4 text-green-600 font-semibold">
                  500.000₫
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                    Còn hàng
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">12/08/2025</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-indigo-600 hover:underline mr-2">
                    Sửa
                  </button>
                  <button className="text-red-600 hover:underline">Xóa</button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4 font-medium">Sản phẩm B</td>
                <td className="py-3 px-4">Danh mục 2</td>
                <td className="py-3 px-4 text-green-600 font-semibold">
                  1.200.000₫
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600">
                    Hết hàng
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">10/08/2025</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-indigo-600 hover:underline mr-2">
                    Sửa
                  </button>
                  <button className="text-red-600 hover:underline">Xóa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-6 text-sm">
          <p className="text-gray-500">Hiển thị 1–10 trong 50 sản phẩm</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100">
              &laquo;
            </button>
            <button className="px-3 py-1 border border-gray-300 bg-indigo-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">
              3
            </button>
            <button className="px-3 py-1 border border-gray-300 hover:bg-gray-100">
              &raquo;
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductListPage;
