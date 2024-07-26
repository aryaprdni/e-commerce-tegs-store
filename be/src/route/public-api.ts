import express from "express";
import { UserController } from "../controller/user-controller";
import { ProductController } from "../controller/product-controller";
import { AuthController } from "../controller/authController";

export const publicRouter = express.Router();

// GOOGLE Login
publicRouter.get("/auth/google", AuthController.googleAuth);
// GOOGLE Callback
publicRouter.get("/auth/google/callback", AuthController.googleCallback);

// Request Verification
publicRouter.post("/api/request-verification", AuthController.requestVerification);
// Verify Code Mail
publicRouter.post("/api/verify-email", AuthController.verifyEmail);

publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);


// Product API
publicRouter.get("/api/products/:productId(\\d+)", ProductController.get);
publicRouter.get("/api/products", ProductController.getAll);
publicRouter.get("/api/search-products", ProductController.search);
publicRouter.get("/api/products/:productId(\\d+)/similar", ProductController.getSimilarProducts)
