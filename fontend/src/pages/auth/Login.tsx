/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../layout/client/Footer";
import Header from "../../layout/client/Header";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Đăng nhập thất bại");
        return;
      }

      // Lưu token và user vào localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/"); 
    } catch (error: any) {
      setError("Lỗi kết nối đến server:" + error.message);
    }
  };

  return (
    <>
      <Header />
      <section className="relative bg-blue-200 py-12 md:py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Đăng nhập tài khoản
          </h1>
        </div>
      </section>
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto"
          >
            {error && (
              <div className="mb-4 text-red-500 text-sm">{error}</div>
            )}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
                required
                autoComplete="current-password"
                className="w-full border-b border-gray-300 py-2 px-2 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-300 hover:bg-blue-400 text-white px-8 py-3 rounded-full font-semibold w-full"
            >
              Đăng nhập
            </button>
            <div className="mt-4 text-center">
              <Link to="/registerPage" className="text-primary hover:underline">
                Chưa có tài khoản? Đăng ký
              </Link>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
