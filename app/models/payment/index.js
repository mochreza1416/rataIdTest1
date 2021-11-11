module.exports = (sequelize, Sequelize) => {
    const payment = sequelize.define("payment", {
      invoice_number: {
        type: Sequelize.STRING,
      },
      metode_bayar: {
        type: Sequelize.STRING,
      },
      bukti_bayar: {
        type: Sequelize.STRING,
      },
      tanggal_bayar: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
    });
    return payment;
  };
  