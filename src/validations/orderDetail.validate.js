import Joi from "joi";

export const OrderDetailSchema = Joi.object({
  order_id: Joi.string().required().messages({
    "string.base": "ID đơn hàng phải là chuỗi",
    "any.required": "ID đơn hàng là bắt buộc",
  }),
  product_id: Joi.string().required().messages({
    "string.base": "ID sản phẩm phải là chuỗi",
    "any.required": "ID sản phẩm là bắt buộc",
  }),
});


