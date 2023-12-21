import { sequelize } from "../../config/db.js";
import { DataTypes } from "sequelize";
const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  },
  {
    timestamps: true,
    createdAt: "createTime",
		updatedAt: "updateTime",
		hooks: {
			afterCreate: async(order,options) => {
				console.log("order: ", order.id);
				const dbId = order.id;
				if (dbId > 9999) {
					order.orderNumber = `ORD-${dbId}`;
				} else {
					const paddedOrderId = String(dbId).padStart(4, '0');
					order.orderNumber = `ORD-${paddedOrderId}`;
				}
				await order.save();

			}
		}
  }
);


export default Order;
