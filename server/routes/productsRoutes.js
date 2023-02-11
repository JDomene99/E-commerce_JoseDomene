import { Router } from "express";
import { getAllProduct, insertProduct, deleteProduct, getProduct, updateProduct, getProductSorter,getProductFilter, getProductBySize, } from "../controllers/productController.js";

  
const router = Router();

router.post("/product", insertProduct);


router.get("/products/all", getAllProduct);

router.get("/product/:id", getProduct);

router.get("/products/sort/:order", getProductSorter);

router.get("/products/category/:type", getProductFilter);

router.get("/products/:size", getProductBySize);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

export default router;
  