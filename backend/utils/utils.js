import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export default class Utils{
	
	static hashedPassword = async function(val) {
		return bcrypt.hash(val, 10);	
	}
	static passwordCompare = async function (password,DbPassword) {
		return bcrypt.compare(password,DbPassword);
	}
}