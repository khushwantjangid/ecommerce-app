import express  from "express";

import { sequelize } from "./config/db.js";
import User from "./models/user/userSchema.js";
import Product from "./models/product/productSchema.js";

const app = express();

app.listen(8080,function(){
    console.log("server listening on 8080");
})


await sequelize.sync();
console.log("All models were synchronized successfully.");
