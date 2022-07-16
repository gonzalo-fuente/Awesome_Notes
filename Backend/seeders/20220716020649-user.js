"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "user@user.com",
        password:
          "$2b$10$dILi9b4h3vPNVXdmZ1N5K.WT3Z4I3dEeJrWZO9x6Z2AcRqVpOzis6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
