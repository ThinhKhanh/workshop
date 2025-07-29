import express from "express"
import { cartCreate, cartDelete, cartUpdate, getAllCart, getCartById } from "../controllers/cart.controller.js";
import { validateRequest } from "../middleware/validate.js";
import { CartSchema, updateCartSchema } from "../validations/cart.validate.js";


const cartRouter = express.Router()

cartRouter.get("/", getAllCart);
cartRouter.get("/:id", getCartById);
cartRouter.post("/",validateRequest(CartSchema), cartCreate);
cartRouter.put("/:id",validateRequest(updateCartSchema), cartUpdate);
cartRouter.delete("/:id", cartDelete);

export default cartRouter;  