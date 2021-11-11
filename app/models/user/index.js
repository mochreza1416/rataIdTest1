module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
      username: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      nama: {
        type: Sequelize.STRING,
      },
      HP: {
        type: Sequelize.STRING,
      },
      alamat: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
    });
    return user;
  };
  