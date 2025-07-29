import express from "express";
import { createUser, deleteUser, getUserById, updateUser, userList } from "../controllers/user.controller.js";
import { isAdmin, isAuth } from "../middleware/auth.middleware.js";
import { createUserSchema, updateUserSchema } from "../validations/user.validate.js";
import { validateRequest } from "../middleware/validate.js";


const router = express.Router();

// Lấy danh sách người dùng - chỉ admin
router.get("/", isAuth, isAdmin, userList);

// Lấy thông tin người dùng theo ID - chỉ admin
router.get("/:id",isAuth, isAdmin, getUserById);

// Xoá người dùng - chỉ admin
router.delete("/:id", isAuth, isAdmin, deleteUser);

// Tạo mới người dùng - chỉ admin
router.post("/",isAuth,isAdmin,validateRequest(createUserSchema),createUser);

// Cập nhật người dùng - chỉ admin
router.put("/:id",isAuth,isAdmin,validateRequest(updateUserSchema),updateUser);

export default router;
