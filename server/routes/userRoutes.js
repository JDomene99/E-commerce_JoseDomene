import { Router } from "express";
import { login,register } from "../controllers/authController.js";
import { getAllUsers, deleteUser } from "../controllers/userController.js";
import { verifyToken } from "../middleware/index.js";
  
const router = Router();

router.post("/auth/login", login);

router.post("/auth/register", register);

router.get("/users", getAllUsers);

// router.get("/user", getAllUsers);

router.delete("/user/:id", deleteUser);


export default router;
  