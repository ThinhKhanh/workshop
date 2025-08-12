/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    numberPhone: "",
    address: "",
    gender: "male",
    role: "user",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Xử lý thay đổi input
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gửi form đăng ký
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
          numberPhone: formData.numberPhone,
          address: [formData.address],
          gender: formData.gender,
          role: formData.role,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Đăng ký thất bại");
      } else {
        alert("Đăng ký thành công!");
        navigate("/loginPage");
      }
    } catch (error: any) {
      setError("Không thể kết nối tới server:" + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Đăng ký tài khoản
          </h1>
        </div>
      </section>
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto"
          >
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <input
                type="text"
                name="userName"
                placeholder="Họ và tên"
                value={formData.userName}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="numberPhone"
                placeholder="Số điện thoại"
                value={formData.numberPhone}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary"
              />
            </div>
            <div className="mb-6">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 py-2 px-2"
              >
                <option value="nam">Nam</option>
                <option value="nữ">Nữ</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-300 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold w-full"
            >
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
            <div className="mt-4 text-center">
              <Link to="/loginPage" className="text-primary hover:underline">
                Đã có tài khoản? Đăng nhập
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
