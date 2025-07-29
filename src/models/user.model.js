import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Tên người dùng là bắt buộc"],
      maxlength: 100,
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "Email đã tồn tại!"],
      required: [true, "Email là bắt buộc"],
      match: [/.+\@.+\..+/, "Email không đúng định dạng"],
    },
    password: {
      type: String,
      required: [true, "Mật khẩu là bắt buộc"],
    },
    address: {
      type: [String], // có thể để trống
    },
    numberPhone: {
      type: String,
      unique: true,
      required: [true, "Số điện thoại là bắt buộc"],
      match: [/^(0|\+84)\d{9}$/, "Số điện thoại không hợp lệ"],
    },
    gender: {
      type: String,
      enum: ["nam", "nữ"],
      default: "nam",
    },
    roles: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isDeleted: {
      type: Boolean,
      default: false, 
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

export default User;
