import OrderModel from "../models/order/orderModel.js";

export default class orderController{
	static async createOrder(req,res){
		try {
			if (req?.body?.userId && req?.body?.totalAmount) {
				let orderPayload = {};
				orderPayload['userId'] = req?.body?.userId ? req?.body?.userId : null;
				orderPayload['totalAmount'] = req?.body?.totalAmount ? req?.body?.totalAmount : null;
				orderPayload['customerName'] = req?.body?.customerName ? req?.body?.customerName : null;
				let orderData = await OrderModel.createOrder(orderPayload);
				res.status(201).send({ success: true,message: "Order placed successfully"});
			} else {
				res.status(400).send({ success: false, message: "required parameter missing" });
			}
		} catch (error) {
			res.status(400).send({ success: false, message: error.message });
		}
		
	}
}