import Joi from "joi";

export const CategorySchema = Joi.object({
  name: Joi.string().required().max(100).messages({
    "string.base": "Tên danh mục phải là chuỗi",
    "string.empty": "Tên danh mục không được để trống",
    "string.max": "Tên danh mục không được vượt quá {#limit} ký tự",
    "any.required": "Tên danh mục là bắt buộc",
  }),
});

export const updateCategorySchema = CategorySchema.fork(
  ["name"],
  (schema) => schema.optional()
);

