import Joi from "joi";

export const createUserSchema = Joi.object({
  userName: Joi.string().min(3).max(100).required().messages({
    "string.base": "Tên người dùng phải là chuỗi",
    "string.min": "Tên người dùng phải ít nhất {#limit} ký tự",
    "string.max": "Tên người dùng không được vượt quá {#limit} ký tự",
    "any.required": "Tên người dùng là bắt buộc",
  }),

  email: Joi.string().email().required().messages({
    "string.base": "Email phải là chuỗi",
    "string.email": "Email không đúng định dạng",
    "any.required": "Email là bắt buộc",
  }),

  password: Joi.string().min(6).max(100).required().messages({
    "string.base": "Mật khẩu phải là chuỗi",
    "string.min": "Mật khẩu phải ít nhất {#limit} ký tự",
    "string.max": "Mật khẩu không được vượt quá {#limit} ký tự",
    "any.required": "Mật khẩu là bắt buộc",
  }),

  numberPhone: Joi.string()
    .pattern(/^(0|\+84)\d{9}$/)
    .required()
    .messages({
      "string.base": "Số điện thoại phải là chuỗi",
      "string.pattern.base": "Số điện thoại không đúng định dạng",
      "any.required": "Số điện thoại là bắt buộc",
    }),

  address: Joi.array().items(Joi.string()).messages({
    "array.base": "Địa chỉ phải là mảng chuỗi",
  }),

  gender: Joi.string().valid("nam", "nữ").messages({
    "any.only": "Giới tính chỉ được là 'nam' hoặc 'nữ'",
  }),

  role: Joi.string().valid("user", "admin").messages({
    "any.only": "Quyền chỉ được là 'user' hoặc 'admin'",
  }),
});

export const updateUserSchema = createUserSchema.fork(
  [
    "userName",
    "email",
    "password",
    "numberPhone",
    "address",
    "gender",
    "role",
  ],
  (schema) => schema.optional()
);
