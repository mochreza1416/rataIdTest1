module.exports = (sequelize, Sequelize) => {
  const product = sequelize.define("product", {
    kode_barang: {
      type: Sequelize.STRING,
    },
    nama_barang: {
      type: Sequelize.STRING,
    },
    harga_barang: {
      type: Sequelize.DECIMAL,
    },
    stok: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.STRING,
    },
    deskripsi: {
      type: Sequelize.STRING,
    },
  });
  return product;
};
