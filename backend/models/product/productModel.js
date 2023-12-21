import Product from "./productSchema.js";

export default class ProductModel{
	static async getAllProducts() {
		let {count,rows} = await Product.findAndCountAll({
			// offset: 0,
  		limit: 10
		});
		// console.log("products: ", products);
		// console.log(count);
		// console.log(rows);
		return {results:rows,total:count};
	}
	static getProductByPk(id) {
		let product = Product.findByPk(id);
		return product;
	}
}