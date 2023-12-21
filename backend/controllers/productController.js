import ProductModel from "../models/product/productModel.js";

export default class ProductController{

	static async getAllProducts(req,res) {
		try {
			let products = await ProductModel.getAllProducts();
			console.log("products: ", products);

			res.status(200).send({ success: true, ...products});
		} catch (error) {
			res.status(400).send({ message: error.message });
		}
	}
}