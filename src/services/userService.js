const { sequelize } = require("../config/database");
const User = require("../models/user");
const { Op } = require("sequelize");

class UserService {
  static async updateBalance(userId, amount) {
    try {
      const [updatedRows, [updatedUser]] = await User.update(
        { balance: sequelize.literal(`balance + ${amount}`) },
        {
          where: {
            id: userId,
            balance: { [Op.gte]: -amount },
          },
          returning: true,
        }
      );

      if (!updatedRows) {
        throw new Error("Insufficient funds or user not found");
      }

      return updatedUser;
    } catch (error) {
      console.error("Update balance error:", error);
      throw new Error("Failed to update balance");
    }
  }
}

module.exports = UserService;
