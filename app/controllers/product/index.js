const db = require("../../models");
const product = db.product;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.kode_barang) {
    res.status(400).send({
      message: "kode_barang tidak boleh kosong",
    });
    return;
  } else if (!req.body.nama_barang) {
    res.status(400).send({
      message: "nama_barang tidak boleh kosong",
    });
    return;
  } else if (!req.body.harga_barang) {
    res.status(400).send({
      message: "harga_barang tidak boleh kosong",
    });
    return;
  } else if (!req.body.stok) {
    res.status(400).send({
      message: "stok tidak boleh kosong",
    });
    return;
  } else if (!req.body.status) {
    res.status(400).send({
      message: "status tidak boleh kosong",
    });
    return;
  } else if (!req.body.deskripsi) {
    res.status(400).send({
      message: "deskripsi tidak boleh kosong",
    });
    return;
  }

  const create = {
    kode_barang: req.body.kode_barang,
    nama_barang: req.body.nama_barang,
    harga_barang: req.body.harga_barang,
    stok: req.body.stok,
    status: req.body.status,
    deskripsi: req.body.deskripsi,
  };

  product.create(create)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create data",
      });
    });
};

exports.findAll = (req, res) => {
  product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while find product",
      });
    });
};

exports.findOne = (req, res) => {
  const kode_barang = req.params.id;
  let condition = kode_barang ? { kode_barang: { [Op.eq]: `${kode_barang}` } } : null;
  product.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrive product with kode_barang = " + kode_barang,
      });
    });
};

exports.update = (req, res) => {
  const kode_barang = req.params.id;
  product.update(req.body, {
    where: { kode_barang: kode_barang },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Product was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update product with kode_barang=${kode_barang}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating product with kode_barang=" + kode_barang,
      });
    });
};

exports.delete = (req, res) => {
  const kode_barang = req.params.id;
  product.destroy({
    where: { kode_barang: kode_barang },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Product was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete product with kode_barang=${kode_barang}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete product with kode_barang=" + kode_barang,
      });
    });
};