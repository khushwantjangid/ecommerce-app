import express  from "express";

import { sequelize } from "./config/db.js";
import User from "./models/user/userSchema.js";
import Product from "./models/product/productSchema.js";
import Order from "./models/order/orderSchema.js";

import { authRoute,orderRoute,userRoute,productRoute } from "./routes/route.js";
const app = express();

app.use(express.json());
app.use('/api/product',productRoute);
app.use('/api/auth',authRoute);
app.use('/api/order',orderRoute);
app.use('/api/user',userRoute);

app.listen(8080,function(){
    console.log("server listening on 8080");
})

// console.log("All models were synchronized successfully.");

// const order = await Order.create({ customerName: "vdfdbgnfh", totalAmount: 1000 });
// await sequelize.sync();
// await sequelize.sync({alter:true});
// console.log("order: ", order);
