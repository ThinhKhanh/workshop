import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { userName, email, password, numberPhone, address, gender, role, adminCode} = req.body;

    // Kiểm tra email đã tồn tại
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email đã tồn tại" });
    }

    // Nếu role là admin => kiểm tra adminCode
    let finalRole = "user";
    if (role === "admin") {
      if (adminCode !== process.env.ADMIN_KEY) {
        return res.status(403).json({ message: "Sai mã admin" });
      }
      finalRole = "admin";
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Tạo user
    const newUser = await User.create({
     userName,
      email,
      password: hashedPassword,
      numberPhone,
      address,
      gender,
      role: finalRole
    });
    res.status(201).json({
      message: "Đăng ký thành công",
      user: { id: newUser._id, name: newUser.userName, email: newUser.email, role: newUser.role }
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Kiểm tra đầu vào
    if (!email || !password) {
      return res.status(400).json({ message: "Vui lòng nhập email và mật khẩu" });
    }

    // 2. Tìm user theo email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Tài khoản không tồn tại" });
    }

    // 3. So sánh mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Sai mật khẩu" });
    }

    // 4. Kiểm tra biến môi trường JWT_SECRET
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      console.error("Thiếu JWT_SECRET trong biến môi trường");
      return res.status(500).json({ message: "Lỗi cấu hình máy chủ: thiếu JWT_SECRET" });
    }

    // 5. Tạo JWT token (đồng bộ key => userId)
    const token = jwt.sign(
      { userId: user._id, email: user.email, role: user.role },
      jwtSecret,
      { expiresIn: "1h" }
    );

    // 6. Loại bỏ mật khẩu khỏi phản hồi
    const userData = user.toObject();
    delete userData.password;

    // 7. Trả về response thành công
    return res.status(200).json({
      message: "Đăng nhập thành công",
      token,
      user:  { id: user._id, name: user.name, email: user.email, role: user.role }
    });

  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
      error: error.message || error
    });
  }
};
