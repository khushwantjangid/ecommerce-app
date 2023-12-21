import Utils from "../../utils/utils.js";
import User from "./userSchema.js";

export default class userModel{

	static async loginUser(data) {
		const userData = await User.findOne({email:data.email});
		let isLogin = false;
		let loginUserData = null;
		if (userData) {
			isLogin = Utils.passwordCompare(data.password, userData.password);
			if (isLogin) {
				loginUserData = {};
				loginUserData['id'] = userData.id?userData.id:null;
				loginUserData['firstName'] = userData.firstName?userData.firstName:null;
				loginUserData['lastName'] = userData.lastName?userData.lastName:null;
				loginUserData['email'] = userData.email?userData.email:null;
				loginUserData['phoneNumber'] = userData.phoneNumber?userData.phoneNumber:null;
				loginUserData['createTime'] = userData.createTime?userData.createTime:null;
				loginUserData['updateTime'] = userData.updateTime ? userData.updateTime : null;
			}
		} else {
			throw new Error("Invalid User");
		}

		return loginUserData;
	}
	static async addUser(data){
		// Create a new user
		let userData = null;
		const user = await User.create(data);
		if (userResp) {
			userData = {};
			userData['id'] = user.id?user.id:null;
			userData['firstName'] = user.firstName?user.firstName:null;
			userData['lastName'] = user.lastName?user.lastName:null;
			userData['email'] = user.email?user.email:null;
			userData['phoneNumber'] = user.phoneNumber?user.phoneNumber:null;
			userData['createTime'] = user.createTime?user.createTime:null;
			userData['updateTime'] = user.updateTime?user.updateTime:null;
		}
		return userData;
	};

	static async getAllUser(){
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