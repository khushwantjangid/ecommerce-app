import User from "./userSchema.js";

export default class userModel{

	static loginUser =  async function (data) {
		const userData = await User.findOne({email:data.email});
		let isLogin = false;
		let loginUserData = null;
		if (userData) {
			isLogin = helper.passwordCompare(data.password, userData.password);
			if (isLogin) {
				loginUserData = userData;
			}
		} else {
			throw new Error("Invalid User");
		}

		return loginUserData;
	}
	static addUser = async ({ name, age, password }) => {
		// Create a new user
		const { userData, error } = await UserSchema.validate({
			name: name,
			age: age,
			password: password,
		});
		if (error) {
			throw new Error(error);
		} else {
			const jane = await User.create(userData);
		}
	};
	static getAllUser = async () => {
		const { count, rows } = await User.findAndCountAll({
			// where: {
			// 	title: {
			// 		[Op.like]: 'foo%'
			// 	}
			// },
			offset: 0,
			limit: 10,
		});
		let results = { total: count, data: rows };
		return results;
	}
}