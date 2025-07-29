import Joi from "joi";

export const ProductSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "Tên sản phẩm phải là chuỗi",
    "any.required": "Tên sản phẩm là bắt buộc",
  }),
  slug: Joi.string().required().messages({
    "string.base": "Slug phải là chuỗi",
    "any.required": "Slug là bắt buộc",
  }),
  price: Joi.number().required().messages({
    "number.base": "Giá phải là số",
    "any.required": "Giá là bắt buộc",
  }),
  stock: Joi.number().required().messages({
    "number.base": "Tồn kho phải là số",
    "any.required": "Tồn kho là bắt buộc",
  }),
});

export const updateProductSchema = ProductSchema.fork(
  ["name", "slug", "price", "stock"],
  (schema) => schema.optional()
);
