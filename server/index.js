import express from "express";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors";
import multer from "multer";
import UserRoutes from "./routes/userRoutes.js";
import ProductRoutes from "./routes/productsRoutes.js";
import dbShop from "./db/db.js";
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
//para que express este preparado para recibir desde un POST
app.use(express.json());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//rutas
app.use(UserRoutes)
app.use(ProductRoutes)

app.listen(process.env.PORT);
dbShop();

console.log("server listening on port " + process.env.PORT);
