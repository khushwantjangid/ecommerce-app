import express  from "express";

import { sequelize } from "./config/db.js";
import User from "./models/user/userSchema.js";
import Product from "./models/product/productSchema.js";
import Order from "./models/order/orderSchema.js";

const app = express();

app.post("/api", function () {
    console.log("api running"); 
});

app.listen(8080,function(){
    console.log("server listening on 8080");
})

// console.log("All models were synchronized successfully.");

// const order = await Order.create({ customerName: "vdfdbgnfh", totalAmount: 1000 });
// await sequelize.sync({force:true});
// await sequelize.sync({alter:true});
// console.log("order: ", order);
