import Joi from "joi";

export const RatingSchema = Joi.object({
  customer_id: Joi.string().required().messages({
    "string.base": "ID khách hàng phải là chuỗi",
    "any.required": "ID khách hàng là bắt buộc",
  }),
  product_id: Joi.string().required().messages({
    "string.base": "ID sản phẩm phải là chuỗi",
    "any.required": "ID sản phẩm là bắt buộc",
  }),
});

export const updateRatingSchema = RatingSchema.fork(
  ["customer_id", "product_id"],
  (schema) => schema.optional()
);
