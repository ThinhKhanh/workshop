import express from "express";
import dotenv from "dotenv";
import productRouter from "./routers/products.router.js";
import categoriesRouter from "./routers/categories.router.js";
import cartRouter from "./routers/cart.router.js";
import { connectDB } from "./config/database.js";
import userRouter from "./routers/user.router.js";
import authRouter from "./routers/auth.router.js";
import cors from "cors";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use("/uploads", express.static("uploads"));

app.use('/api/products', productRouter);
app.use('/api/category', categoriesRouter);
app.use('/api/cart', cartRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);


app.listen(process.env.PORT, () => {
  console.log(`Kết nối thành công tới server:${process.env.PORT}`);
});
