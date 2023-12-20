import express from "express";
import userController from "../controllers/userController.js";
import orderController from "../controllers/orderController.js";

const authRoute = express.Router();
const userRoute = express.Router();
const orderRoute = express.Router();

//open route
authRoute.post("/login", authController.loginUser);
authRoute.post("/forgot_pass", authController.forgotPassword);
userRoute.post("/add_user", userController.addUser);

// protected route
userRoute.patch("/:id",[auth],userController.updateUser);
userRoute.get("/:id",[auth], userController.getUser);

orderRoute.post("/",[auth],orderController.addOrder);
orderRoute.get("/:id",[auth], orderController.getOrder);

function auth(req,res,next) {
	let isAuthenticated = true;
	if (isAuthenticated) {
		next();
	} else {
		res.status(401).json({ message: "Unauthorized" });
	}
}
