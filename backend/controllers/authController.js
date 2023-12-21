import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/user/userModel.js";
import Utils from "../utils/utils.js";

export default class authController{
	static async loginUser(req, res) {
		try { 
			if (req?.body?.email && req?.body?.password) {
				
				if (Object.keys(req.body).length > 2) {
					throw new Error("request parameter mismatched");
				}
				let loginUserResp = await userModel.loginUser(req.body);
				// appConfig.SecretKey;
				if (loginUserResp) {
					console.log("loginUserResp: ", loginUserResp);
					const token = jsonwebtoken.sign({ id: loginUserResp.id }, "ecommerceapp", { expiresIn: '1h' });
					delete loginUserResp.id;
					res.status(200).send({ success: true, message: "User Logged in",data: loginUserResp,token:token,expiresIn:'1h'});
				} else {
					res.status(400).send({ success: false, message: "invalid username and password" });
				}

			} else {
				res.status(400).send({ success: false, message: "email and password missing" });
			}
		} catch (e) {
			res.status(400).send({ success: false, message: e.message });
		}
	}
	static async addUser(req, res) { 
		try { 
			if (req?.body?.email && req?.body?.password && req?.body?.firstName && req?.body?.lastName && req?.body?.phoneNumber) { 
				let userPayload = {
					firstName:req?.body?.firstName,
					lastName:req?.body?.lastName,
					email: req?.body?.email,
					phoneNumber: req?.body?.phoneNumber,
					password:await Utils.hashedPassword(req?.body?.password)
				}
				const addedUser = await userModel.addUser(userPayload);
				console.log("addedUser: ", addedUser);
				res.status(201).send({ success: true, data:addedUser,message: "User added successfully"});
			} else {
				res.status(400).send({ success: false, message: "required parameter missing" });
			}
		} catch (e) {
			res.status(400).send({ success: false, message: e.message });
		}
	}
}