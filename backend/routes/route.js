import express from "express";
import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";
import orderController from "../controllers/orderController.js";
import authController from "../controllers/authController.js";
import ProductController from "../controllers/productController.js";

const productRoute = express.Router();
const authRoute = express.Router();
const userRoute = express.Router();
const orderRoute = express.Router();

//open route
productRoute.get("/",ProductController.getAllProducts);
authRoute.post("/login", authController.loginUser);
authRoute.post("/add_user", authController.addUser);
// authRoute.post("/forgot_pass", authController.forgotPassword);

// protected route
// userRoute.post("/add_user",[auth], userController.addUser);
// userRoute.patch("/:id",[auth],userController.updateUser);
// userRoute.get("/:id",[auth], userController.getUser);

orderRoute.post("/",[auth],orderController.createOrder);
// orderRoute.get("/:id",[auth], orderController.getOrder);

function auth(req, res, next) {
	try {
		if (req.headers.authorization) {
			let authToken = req.headers.authorization;
			var decoded = jwt.verify(authToken, 'ecommerceapp');
			let isAuthenticated = true;
			console.log("decoded: ", decoded);
			if (decoded) {
				next();
			} else {
				res.status(401).json({ message: "Unauthorized" });
			}
		} else {
			res.status(401).json({ message: "auth token not found" });
		}
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
	
}

export { authRoute, userRoute, orderRoute,productRoute };
