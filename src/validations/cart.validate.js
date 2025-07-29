import Joi from "joi";

export const CartSchema = Joi.object({
  product_id: Joi.string().required().messages({
    "string.base": "ID sản phẩm phải là chuỗi",
    "any.required": "ID sản phẩm là bắt buộc",
  }),
  customer_id: Joi.string().required().messages({
    "string.base": "ID khách hàng phải là chuỗi",
    "any.required": "ID khách hàng là bắt buộc",
  }),
  quantity: Joi.number().required().messages({
    "number.base": "Số lượng phải là số",
    "any.required": "Số lượng là bắt buộc",
  }),
  total_price: Joi.number().required().messages({
    "number.base": "Tổng tiền phải là số",
    "any.required": "Tổng tiền là bắt buộc",
  }),
});

export const updateCartSchema = CartSchema.fork(
  ["product_id", "customer_id", "quantity", "total_price"],
  (schema) => schema.optional()
);
