const UserService = require("../services/userService");

class UserController {
  static async updateBalance(req, res, next) {
    try {
      const { userId, amount } = req.body;
      const user = await UserService.updateBalance(userId, amount);

      return res.json({
        success: true,
        data: { userId: user.id, newBalance: user.balance },
      });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = UserController;
