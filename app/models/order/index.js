module.exports = (sequelize, Sequelize) => {
    const order = sequelize.define("order", {
      invoice_number: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      tanggal_pesan: {
        type: Sequelize.DATE,
      },
      total: {
        type: Sequelize.DECIMAL,
      }
    });
    return order;
  };
  