import { Router } from "express";
import { getAllProduct, insertProduct, deleteProduct, getProduct, updateProduct, getProductSorter,getProductFilter, getProductBySize,getProductAllFilter,getbyName } from "../controllers/productController.js";

  
const router = Router();

router.post("/product", insertProduct);


router.get("/products/all", getAllProduct);

router.get("/product/:id", getProduct);

router.get("/products/sort/:order", getProductSorter);

router.get("/products/category/:type", getProductFilter);

router.get("/products/:size", getProductBySize);

router.get("/products/type/:type/name/:name/size/:size", getProductAllFilter);

router.get("/products/name/:name", getbyName);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

export default router;
  