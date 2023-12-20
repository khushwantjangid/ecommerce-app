import { sequelize } from "../../config/db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  // Add more fields as needed
}, {
  timestamps: true,
  createdAt: "createTime",
  updatedAt: "updateTime",
});

export default Product;
