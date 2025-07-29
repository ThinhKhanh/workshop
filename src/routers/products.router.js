import expree from "express"
import { getAllProducts, getProductById, productCreate, productDelete, productUpdate } from "../controllers/products.controller.js";
import { validateRequest } from "../middleware/validate.js";
import { ProductSchema, updateProductSchema } from "../validations/product.validate.js";


const productRouter = expree.Router();
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/",validateRequest(ProductSchema), productCreate);
productRouter.put("/:id",validateRequest(updateProductSchema), productUpdate);
productRouter.delete("/:id", productDelete);

export default productRouter;