import Order from "./orderSchema.js";

export default class OrderModel{
	static async createOrder(data){
		let order = await Order.create(data);
		return order;
	}
}