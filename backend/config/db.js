import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('ecommerceapp','root','',{
    host:"localhost",
    dialect:"mysql"
});