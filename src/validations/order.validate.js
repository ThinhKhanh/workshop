import Joi from "joi";

export const createOrderSchema = Joi.object({
  customer_id: Joi.string().required().messages({
    "string.base": "ID khách hàng phải là chuỗi",
    "any.required": "ID khách hàng là bắt buộc",
  }),
});

export const updateOrderSchema = Joi.object({
  status: Joi.string()
    .valid("Chờ xử lý", "Đang xác nhận", "Đang giao hàng", "Thành công", "Huỷ")
    .messages({
      "string.base": "Trạng thái phải là chuỗi",
      "any.only": "Trạng thái không hợp lệ",
    }),
});
