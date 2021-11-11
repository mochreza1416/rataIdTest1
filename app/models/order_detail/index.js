module.exports = (sequelize, Sequelize) => {
    const order_detail = sequelize.define("order_detail", {
      invoice_number: {
        type: Sequelize.STRING,
      },
      kode_barang: {
        type: Sequelize.STRING,
      },
      jumlah: {
        type: Sequelize.INTEGER,
      }
    });
    return order_detail;
  };