const db = require("../../models");
const produksi = db.produksi;
const Op = db.Sequelize.Op;

exports.getListProduksi = async (req,res) => {
  try {
    const query = `SELECT orders.invoice_number, 
                          products.kode_barang, 
                          products.nama_barang, 
                          products.harga_barang, 
                          order_details.jumlah, 
                          orders.total, 
                          orders.tanggal_pesan, 
                          users.nama, 
                          users.alamat, 
                          produksis.status as status_produksi, 
                          produksis.catatan, 
                          produksis.tanggal_masuk, 
                          produksis.tanggal_produksi, 
                          produksis.tanggal_selesai, 
                          payments.metode_bayar, 
                          payments.bukti_bayar, 
                          payments.status as status_bayar, 
                          payments.tanggal_bayar 
                    FROM users 
                    LEFT JOIN orders ON orders.user_id = users.id 
                    LEFT JOIN order_details ON order_details.invoice_number = orders.invoice_number 
                    LEFT JOIN products ON products.kode_barang = order_details.kode_barang 
                    LEFT JOIN payments ON payments.invoice_number = orders.invoice_number 
                    LEFT JOIN produksis ON produksis.invoice_number = orders.invoice_number 
                    WHERE orders.invoice_number = '${req.query.invoice_number}'`;
    const data = await db.sequelize.query(query, {
      type: db.sequelize.QueryTypes.SELECT,
    });
    return res.send(data);
  }catch(err){
    return res.status(500).send(err.message || "Some error occured while find order")
  }
};

exports.create = (req, res) => {
  if (!req.body.invoice_number) {
    res.status(400).send({
      message: "invoice_number tidak boleh kosong",
    });
    return;
  } else if (!req.body.status) {
    res.status(400).send({
      message: "status tidak boleh kosong",
    });
    return;
  } else if (!req.body.catatan) {
    res.status(400).send({
      message: "catatan tidak boleh kosong",
    });
    return;
  } else if (!req.body.tanggal_masuk) {
    res.status(400).send({
      message: "tanggal_masuk tidak boleh kosong",
    });
    return;
  } else if (!req.body.tanggal_produksi) {
    res.status(400).send({
      message: "tanggal_produksi tidak boleh kosong",
    });
    return;
  } else if (!req.body.tanggal_selesai) {
    res.status(400).send({
      message: "tanggal_selesai tidak boleh kosong",
    });
    return;
  }

  const create = {
    invoice_number: req.body.invoice_number,
    status: req.body.status,
    catatan: req.body.catatan,
    tanggal_masuk: req.body.tanggal_masuk,
    tanggal_produksi: req.body.tanggal_produksi,
    tanggal_selesai: req.body.tanggal_selesai,
  };

  produksi.create(create)
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
  produksi.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while find produksi",
      });
    });
};

exports.findOne = (req, res) => {
  const invoice_number = req.params.id;
  let condition = invoice_number ? { invoice_number: { [Op.eq]: `${invoice_number}` } } : null;
  produksi.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrive produksi with invoice_number = " + invoice_number,
      });
    });
};

exports.update = (req, res) => {
  const invoice_number = req.params.id;
  produksi.update(req.body, {
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "produksi was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update produksi with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating produksi with invoice_number=" + invoice_number,
      });
    });
};

exports.delete = (req, res) => {
  const invoice_number = req.params.id;
  produksi.destroy({
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "produksi was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete produksi with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete produksi with invoice_number=" + invoice_number,
      });
    });
};