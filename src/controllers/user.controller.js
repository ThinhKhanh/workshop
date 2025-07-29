import User from "../models/user.model.js";

export const userList = async (req, res) => {
  try {
    const users = await User.find();
    if (!users.length) {
      return res.status(200).json({ message: "Không có người dùng nào" });
    }
    return res.status(200).json({ message: "Danh sách người dùng", data: users });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "Người dùng không tồn tại" });

    return res.status(200).json({ data: user });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Xóa người dùng thành công" });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { userName, email, password, address, numberPhone, gender, roles } = req.body;

    const exist = await User.findOne({ email });
    if (exist) return res.status(400).json({ message: "Email đã tồn tại" });

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      userName,
      email,
      password: hashed,
      address,
      numberPhone,
      gender,
      roles,
    });

    res.status(201).json({ message: "Tạo người dùng thành công", data: user });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Không tìm thấy người dùng" });

    res.status(200).json({ message: "Cập nhật thành công", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error: error.message });
  }
};