const UserService = require("../services/userService");
const { getStatusCode } = require("../utils/helpers");

class UserController {
  static async updateBalance({ body: { userId, amount } }, res) {
    try {
      const user = await UserService.updateBalance(userId, amount);
      return res.json({
        success: true,
        data: { userId: user.id, newBalance: user.balance },
      });
    } catch (error) {
      console.error("Update Balance Error:", error.message);

      return res.status(getStatusCode(error.message)).json({
        success: false,
        error: error.message,
      });
    }
  }
}

module.exports = UserController;
