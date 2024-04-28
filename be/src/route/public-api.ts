import express from "express";
import { UserController } from "../controller/user-controller";
import { ProductController } from "../controller/product-controller";

export const publicRouter = express.Router();

publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);

// Product API
publicRouter.get("/api/products/:productId(\\d+)", ProductController.get);
publicRouter.get("/api/products", ProductController.getAll);
publicRouter.get("/api/search-products", ProductController.search);
publicRouter.get("/api/products/:productId(\\d+)/similar", ProductController.getSimilarProducts)