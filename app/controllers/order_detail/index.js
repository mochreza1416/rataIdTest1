const db = require("../../models");
const order_detail = db.order_detail;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const create = {
    invoice_number: req.body.invoice_number,
    kode_barang: req.body.kode_barang,
    jumlah: req.body.jumlah,
  };

  order_detail.create(create)
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
  order_detail.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while find order detail",
      });
    });
};

exports.findOne = (req, res) => {
  const invoice_number =  req.params.id;
  let condition = invoice_number ? { invoice_number: { [Op.eq]: `${invoice_number}` } } : null;

  order_detail.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrive order detail with invoice_number = " + invoice_number,
      });
    });
};

exports.update = (req, res) => {
  const invoice_number = req.params.id;
  order_detail.update(req.body, {
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Order detail was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update order detail with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating order detail with invoice_number=" + invoice_number,
      });
    });
};

exports.delete = (req, res) => {
  const invoice_number = req.params.id;

  order_detail.destroy({
    where: { invoice_number: invoice_number },
  })
    .then((result) => {
      if (result == 1) {
        res.send({
          message: "Order detail was deleted successfully",
        });
      } else {
        res.send({
          message: `Cannot delete order detail with invoice_number=${invoice_number}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete order detail with invoice_number=" + invoice_number,
      });
    });
};