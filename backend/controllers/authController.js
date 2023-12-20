
export default class authController{
	static async loginUser(req, res) {
		try { 
			if (req?.body?.username && req?.body?.password) {
				
				if (Object.keys(req.body).length > 2) {
					throw new Error("request parameter mismatched");
				}
				const loginUserResp = await userModel.loginUser(req.body);
				// appConfig.SecretKey;
				if (loginUserResp) {
					const token = jsonwebtoken.sign({ id: loginUserResp._id }, appConfig.SecretKey, { expiresIn: '1h' });
					res.status(200).send({ success: true, message: "User Logged in",data: loginUserResp,token:token,expiresIn:'1h'});
				} else {
					res.status(400).send({ success: false, message: "invalid username and password" });
				}

			} else {
				res.status(400).send({ success: false, message: "username and password missing" });
			}
		} catch (e) {
			res.status(400).send({ success: false, message: e.message });
		}
	}
}