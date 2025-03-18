const { sequelize } = require("../config/database");
const User = require("../models/user");
const { Op } = require("sequelize");
const AppError = require("../utils/AppError");

class UserService {
  static async updateBalance(userId, amount) {
    try {
      const whereCondition = { id: userId };
      if (amount < 0) {
        whereCondition.balance = { [Op.gte]: -amount };
      }
      const [updatedRows, [updatedUser]] = await User.update(
        { balance: sequelize.literal(`balance + ${amount}`) },
        {
          where: whereCondition,
          returning: true,
        },
      );

      if (!updatedRows) {
        if (amount < 0) {
          throw AppError.badRequest("Insufficient funds");
        } else {
          throw AppError.notFound("User not found");
        }
      }

      return updatedUser;
    } catch (error) {
      console.error("Update balance error:", error);
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Failed to update balance", 500);
    }
  }
}

module.exports = UserService;
