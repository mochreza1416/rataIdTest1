module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define("produksi", {
      invoice_number: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      catatan: {
        type: Sequelize.STRING,
      },
      tanggal_masuk: {
        type: Sequelize.DATE
      },
      tanggal_produksi: {
        type: Sequelize.DATE
      },
      tanggal_selesai: {
        type: Sequelize.DATE
      },
    });
    return product;
  };
  