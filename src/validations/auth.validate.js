import Joi from "joi";

export const signupSchema = Joi.object({
  userName: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Tên không được bỏ trống",
    "string.min": "Tên phải từ {#limit} ký tự",
    "string.max": "Tên không được vượt quá {#limit} ký tự"
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email không được bỏ trống",
    "string.email": "Email không đúng định dạng"
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Mật khẩu không được bỏ trống",
    "string.min": "Mật khẩu phải ít nhất {#limit} ký tự"
  }),
  address: Joi.array().items(Joi.string()),
  numberPhone: Joi.string().required().messages({
    "string.empty": "Số điện thoại không được bỏ trống"
  }),
  gender: Joi.string().valid("nam", "nữ").messages({
    "any.only": "Giới tính chỉ được là 'nam' hoặc 'nữ'"
  })
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email không được bỏ trống",
    "string.email": "Email không đúng định dạng"
  }),
  password: Joi.string().required().messages({
    "string.empty": "Mật khẩu không được bỏ trống"
  })
});
