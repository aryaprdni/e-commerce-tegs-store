import express from "express";
import { authMiddleware } from "../middleware/auth-middleware";
import { UserController } from "../controller/user-controller";
import uploadFile from "../middleware/upload-file";

export const apiRouter = express.Router();
apiRouter.use(authMiddleware)

// User API
apiRouter.get("/api/users/current", UserController.get)
apiRouter.patch("/api/users/current", uploadFile().singleUploadMiddleware, UserController.update)
apiRouter.delete("/api/users/current", UserController.logout)