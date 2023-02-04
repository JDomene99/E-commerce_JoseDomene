import { Router } from "express";
import { getAllProduct, insertProduct, deleteProduct, getProduct } from "../controllers/productController.js";

  
const router = Router();

router.post("/product", insertProduct);

router.get("/products", getAllProduct);

router.get("/product/:id", getProduct);

router.delete("/product/:id", deleteProduct);


export default router;
  